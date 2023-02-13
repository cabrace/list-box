<script lang="ts">
	//Essential
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { itemStore } from '$lib/stores/stores.js';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';

	export let data;

		console.log("data collections", data.collections)
	
	//After Document Load
	onMount(async () => {
	});

	// let items = [
	// 	{ name: 'Home', id: '0', list: ['Water Plants', 'Do Cooking'] },
	// 	{ name: 'Work/School', id: '1', list: ['Complete Documentation', 'Complete Documentation BuildAabobberbob'] },
	// 	{ name: 'Personal', id: '2', list: ['Drink Water', 'Meditate', 'Exercise'] }
	// ];

	// let selectedItems = items[1];

	// $: console.log($itemStore[0]);
	let selectedItems = data.collections[0];

	$: itemStore.set(selectedItems.list);
	$: console.log($itemStore);
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
		<div class="flex justify-center my-4">
			<div class="card p-2 flex flex-row ">
				<!-- <span class="p-2 bg-primary-700 rounded-sm p-3">+</span> -->
				<input class="input border-secondary-500" type="text" placeholder="Add something new" />

				<!-- UPDATE new record liek so: -->
				<!-- db.boxes.updateOne({_id:ObjectId("63e87307293f2b4a7b6b7d4d")}, {$push: {"list": "Build new Interface"}}) -->
			</div>
		</div>
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
