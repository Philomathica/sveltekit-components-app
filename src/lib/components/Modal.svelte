<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  import Portal from './Portal.svelte';
  import { clickOutside } from '../actions/click-outside';

  export let isModalOpen = false;
  export let background = true;

  function closeModal() {
    isModalOpen = false;
  }
</script>

{#if isModalOpen}
  <Portal>
    <div use:clickOutside on:clickoutside={closeModal} class="modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
      <button class="close-btn" on:click={closeModal} aria-label="Close Modal Box">Close</button>
      <slot />
    </div>
    {#if background}
      <div on:click={closeModal} transition:fade class="background" />
    {/if}
  </Portal>
{/if}

<style>
  .modal-wrapper {
    position: fixed;
    inset: 100px 0;
    min-width: 320px;
    max-width: 530px;
    margin: 0 auto;
    width: 100%;
    z-index: 1001;
  }

  .background {
    background: black;
    cursor: pointer;
    inset: 0;
    opacity: 0.9;
    position: fixed;
    z-index: 1000;
  }

  .close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
  }
</style>
