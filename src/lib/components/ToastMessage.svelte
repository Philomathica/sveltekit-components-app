<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';

  import { toast } from '$lib/stores/toast';

  export let message: { id: string; duration: number; type: 'INFO' | 'ERROR'; message: string };

  let progress = tweened(100, { duration: message.duration });

  onMount(async () => {
    await progress.set(0);
    toast.remove(message.id);
  });
</script>

<div class="progress" style={`width: ${$progress}%;`} />
<p>{message.message}</p>

<style>
  .progress {
    height: 8px;
    background: white;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  p {
    margin: 0;
  }
</style>
