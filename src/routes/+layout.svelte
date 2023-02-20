<script lang="ts">
	//Essential
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { itemStore, currentID } from '$lib/stores/stores.js';
	import ItemAdd from '$lib/components/ItemAdd.svelte'

	import { AppShell } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';

	export let data;

		// console.log("data collections", data.collections)
	
	//After Document Load
	onMount(async () => {
	});

	// let items = [
	// 	{ id: 0, name: 'Home', list: ['Water Plants', 'Do Cooking'] },
	// 	{ id: 1, name: 'Work/School', list: ['Complete Documentation', 'Complete Documentation BuildAabobberbob'] },
	// 	{ id:2, name: 'Personal', list: ['Drink Water', 'Meditate', 'Exercise'] }
	// ];

	// let selectedItems = items[1];

	// $: console.log($itemStore[0]);
	
	// let currentId = data.collections[1].shift()

	//get some element from the collection to set as our default selection
	let selectedItems = data.collections[0];
	// let currentSelId;
	// console.log("SELECTED", selectedItems)
	let  { id } = selectedItems
	// $: console.log("currentSELId --", $currentID)
	$: id = selectedItems.id



	$: itemStore.set(selectedItems.list);
	$: currentID.set(id);
	$: console.log($itemStore);
	// $: console.log($currentID);
</script>

<AppShell>
	<svelte:fragment slot="header" />
	<svelte:fragment slot="sidebarLeft">
		<!-- Left Sidebar -->
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
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<div class="text-center border border-white-400 h-full">Sidebar Right</div>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<ItemAdd></ItemAdd>
		<!-- <div class="text-center border border-white-400">Page Header</div> -->
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="text-center border border-white-400">Page Footer</div>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="text-center border border-white-400">Footer</div>
	</svelte:fragment>
</AppShell>
