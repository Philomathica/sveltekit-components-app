import { writable } from 'svelte/store';

function createToast() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    send: (message: string, { duration = 2000, type = 'INFO' } = {}) => {
      const id = Math.floor(Math.random() * 1000);
      const newMessage = { id, duration, type, message };

      return update(store => [...store, newMessage]);
    },
    remove: (id: string) =>
      update(store => {
        const newStore = store.filter(item => item.id !== id);

        return [...newStore];
      }),
  };
}

export const toast = createToast();
