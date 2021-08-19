import { writable } from 'svelte/store';

function createToast() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    send: (message: string) => update(state => [...state, message]),
    remove: () => update(([, ...rest]) => [...rest]),
  };
}

export const toast = createToast();
