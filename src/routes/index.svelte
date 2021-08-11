<script>
  import Accordion from '$lib/Accordion.svelte';
  import Toggle from '$lib/Toggle.svelte';

  let isToggled = false;
</script>

<h1>Components</h1>

<h2>Toggle</h2>
<Toggle bind:isToggled label="Toggle" />
{#if isToggled}
  <h3>I'm toggled</h3>
{/if}

<h2>Accordion (mounting/unmounting)</h2>
<Accordion isOpen={true} buttonText="Toggle Accordion?">
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat molestias eum autem iure nam est odio, unde quia
      magni quam delectus voluptate beatae et neque tenetur. Laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi
      nesciunt placeat molestias eum autem iure nam est odio, unde quia magni quam delectus voluptate beatae et neque tenetur. Laudantium! Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat molestias eum autem iure nam est odio, unde quia magni quam
      delectus voluptate beatae et neque tenetur. Laudantium!
    </p>
  </div>
</Accordion>
