<script lang="ts">
  function portal(node: HTMLElement, target = 'body') {
    let targetElement: HTMLElement;

    function update() {
      targetElement = document.querySelector(target);
      targetElement.appendChild(node);
      node.hidden = false;
    }

    function destroy() {
      if (node.parentNode) {
        // Child tells parent to remove itself
        node.parentNode.removeChild(node);
      }
    }

    update();

    return { update, destroy };
  }
</script>

<div use:portal hidden>
  <slot />
</div>
