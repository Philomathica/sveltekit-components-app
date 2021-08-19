export function clickOutside(node: HTMLElement): SvelteActionReturnType {
  function handleClick(event: Event & { target: EventTarget & HTMLElement }) {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('clickoutside'));
    }
  }
  document.addEventListener('click', handleClick, true);

  return {
    destroy: () => document.removeEventListener('click', handleClick, true),
  };
}
