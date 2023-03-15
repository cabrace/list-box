<script lang="ts">
	//Essential
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';


  import { afterNavigate} from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { itemStore, currentID } from '$lib/stores/stores.ts';
  import { currentPageSource, storeCurrentUrl } from '$lib/stores/stores.ts';


	import ItemAdd from '$lib/components/ItemAdd.svelte'
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';


	export let data;

    let selected = null;


    $: console.log("$PAGE", $page.data.id)
    $: console.log("Page PATHNAME:", $page.url.pathname)

      
    // $: ActiveClass = (href: string) => (href === $page.url.pathname ? 'bg-primary-500 text-white-500' : '');
    // $: console.log("Active-Class", ActiveClass)

		console.log("+layout.svelte >> ", data.collections)
		console.log("$page.data ", $page.data)
	
	//After Document Load

	onMount(() => {
		const interval = setInterval(() => {
			invalidate('/');
		}, 1000);


   // afterNavigate(() => {
        // Store current page route URL
        // storeCurrentUrl.set($page.url.pathname);
        // Scroll to top
        // const elemPage = document.querySelector('#page');
        // if (elemPage !== null) {
            // elemPage.scrollTop = 0;
        // }
    // });

		return () => {
			clearInterval(interval);
		};
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

  const handleClick = (item) => {
    selected = item;
  };


  $: classActive = (href: string) => ( (href === $page.url.pathname) ? '!bg-primary-500' : '');
  $: console.log(classActive)
</script>

   <!-- 1. If I wrap the ListBox > LinkBoxItem > a > item.name in the a tag, the surroundig empty space of the label is not linkable,  -->
   <!-- unless i speciically click the text -->

<AppShell>
	<svelte:fragment slot="header" />
	<svelte:fragment slot="sidebarLeft">
		<!-- Left Sidebar -->
		<div class="flex h-full text-center flex-col">
			<h1 class="p-4">List</h1>

      <nav class="list-nav">
        <!-- <ul class=" list text-left flex-column"> -->
        <h2>Box</h2>
        <ul>
          {#each data.collections as item}

          {@const href = `/box/${item.id}`}
          <li class:navSelected={$page.url.pathname === href} >
            <!-- <a id="{item.id}" on:click={handleClick(item.id)} class:selected={selected === $page.url.pathname.split('/')[2]} href="/box/{item.id}"> -->
            <a {href} class:navSelected={$page.url.pathname === href} >
              <span class="flex-auto text-left" >{item.name}</span>
            </a>
          </li>
          {/each}
        </ul>
      </nav>

			<ListBox class="text-left" active="bg-primary-500" hover="primary-soft">
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

<style>

.navSelected{
  background:red;
}



  a { 
    text-decoration:none !important; 
    color:white; 
  } 
</style>
