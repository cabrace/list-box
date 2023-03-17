<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
	import { currentID, selectedList_store } from '$lib/stores/stores.ts';

  // Complete collection of objects from layout.js
  export let data;

  $: id = $page.params.id

  console.log("/box/+page.svelte DATA", data)

      console.log("/box/+page.svelte >> LOAD")
  onMount(async () => {
      /* console.log("/box/+page.svelte >> LOAD") */
  });

  $: console.log("SelectedList update")
</script>

<h1>
  Page {id}
</h1>
<h2> List </h2>

