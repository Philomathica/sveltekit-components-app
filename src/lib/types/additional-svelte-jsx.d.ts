/* eslint-disable @typescript-eslint/no-unused-vars */

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onanimationdone?: (event: CustomEvent) => void;
    onclickoutside?: (event: CustomEvent) => void;
  }
}
