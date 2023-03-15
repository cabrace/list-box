<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  $: id = $page.params.id

// onMount(async () => {
  // const res = await fetch(`/tutorial/api/album`);
  // photos = await res.json();
// });
</script>

<h1>
  Page {id}
</h1>
