<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
	import { currentID, selectedList } from '$lib/stores/stores.ts';

  // Complete collection of objects from layout.js
  export let data;

  $: id = $page.params.id

  console.log("/box/+page.svelte DATA", data)

  onMount(async () => {
  });

  $: console.log("SelectedList update")
</script>

<h1>
  Page {id}
</h1>
<h2> List </h2>
