<script>

	import { itemStore, currentID } from '$lib/stores/stores.js';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    // import { ItemAdd } from '$lib/components/ItemAdd.svelte'
	// import { onMount } from 'svelte';

export let data;
console.log("PAGE.svelte >> ", data)

	// onMount(async () => {
	// 	console.log("DATA", data)
	// });

	//get some element from the collection to set as our default selection
	let selectedItems = data.collections[0];
	// let currentSelId;
	// console.log("SELECTED", selectedItems)
	let  { id } = selectedItems
	// $: console.log("currentSELId --", $currentID)
	$: id = selectedItems.id

</script>

		<div class="flex h-full text-center flex-col">
			<h1 class="p-4">List Box</h1>

			<ListBox class="text-left" active="bg-primary-500">
				{#each data.collections as item}
					<ListBoxItem bind:group={selectedItems} name="items" value={item}>
						{item.name}
					</ListBoxItem>
				{/each}
			</ListBox>


		</div>