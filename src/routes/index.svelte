<script>
  import Accordion from '$lib/Accordion.svelte';
  import BetterAccordion from '$lib/BetterAccordion.svelte';
  import Toggle from '$lib/Toggle.svelte';

  let isToggled = false;
</script>

<h1>Components</h1>

<h2>Accordion (mounting/unmounting with animating height auto using svelte slide transition)</h2>
<Accordion isOpen={false} buttonText="Toggle Accordion?">
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

<h2>Accordion (svelte action with animating height auto and web animations api)</h2>
<BetterAccordion isOpen={false} buttonText="Toggle Accordion?">
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat molestias eum autem iure nam est odio, unde quia
      magni quam delectus voluptate beatae et neque tenetur. Laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi
      nesciunt placeat molestias eum autem iure nam est odio, unde quia magni quam delectus voluptate beatae et neque tenetur. Laudantium! Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Consectetur quasi nesciunt placeat molestias eum autem iure nam est odio, unde quia magni quam
      delectus voluptate beatae et neque tenetur. Laudantium!
    </p>
  </div>
</BetterAccordion>

<h2>Toggle</h2>
<Toggle bind:isToggled label="Toggle" />
<Toggle bind:isToggled label="Toggle" style="--toggleBackgroundColor: red" />
{#if isToggled}
  <h3>I'm toggled</h3>
{/if}
