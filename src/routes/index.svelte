<script>
  import Accordion from '$lib/components/Accordion.svelte';
  import BetterAccordion from '$lib/components/BetterAccordion.svelte';
  import Field from '$lib/components/Field.svelte';
  import Markdown from '$lib/components/Markdown.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import SearchFilter from '$lib/components/SearchFilter.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import { toast } from '$lib/stores/toast';

  let isModalOpen = false;
  let modalBackground = false;
  let text = '# Hello';
  let isToggled = false;
  let search = '';
  let fieldValue = '';
  let items = ['Samson', 'scott', 'wes', 'landon', 'courtney', 'lucie', 'brooklyn'];
</script>

<h1>Components</h1>

<h2>Toast</h2>
<Toast duration={3000} />
<button on:click={() => toast.send('NEW MESSAGE!' + Math.random())}>New Toast</button>

<h2>Modal with Portal (using action)</h2>
<Toggle bind:isToggled={modalBackground} label="Modal Background" />
<Modal bind:isModalOpen background={modalBackground}>
  <div style="background: white; box-shadow: 1px 1px 3px black; padding: 20px;">
    <Field bind:value={search} label="Search" instructions="Type to search" placeholder="Joe" />
    <Field value={0} label="Number" type="number" />
  </div>
</Modal>
<button on:click={() => (isModalOpen = true)}>Open Modal Form</button>

<h2>Markdown</h2>
<Markdown bind:text />

<h2>Field {fieldValue}</h2>
<Field bind:value={fieldValue} label="Search" instructions="Type to search" placeholder="Joe" />
<Field value={0} label="Number" type="number" />

<h2>SearchFilter component {search}</h2>
<SearchFilter {items} bind:search />

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
