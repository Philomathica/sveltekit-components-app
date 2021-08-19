<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  import { toast } from '../stores/toast';

  import ToastMessage from './ToastMessage.svelte';
  import Portal from './Portal.svelte';
</script>

<Portal>
  <div class="toast-wrapper">
    {#each $toast as message (message.id)}
      <div
        on:click={() => toast.remove(message.id)}
        animate:flip
        in:fly={{ opacity: 0, x: 100 }}
        out:fade
        class={`toast ${message.type.toLowerCase()}`}
      >
        <ToastMessage {message} />
      </div>
    {/each}
  </div>
</Portal>

<style>
  .toast-wrapper {
    position: fixed;
    bottom: 0;
    right: 20px;
  }

  .toast {
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
    color: white;
    background: var(--toast-background, #625df5);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .toast.error {
    background: var(--toast-error-background, #e54b4b);
    color: black;
  }
</style>
