<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	let {log} = console;
	import { itemStore } from '$lib/stores/stores.js';

	let valueSingle: string = 'books';

	function handleOnClick(e){
		let targetType = e.target.type

		if (typeof targetType == 'undefined') {
			let checkbox = e.target.querySelector('.checkbox')
			checkbox.checked = !checkbox.checked
		}
	}


</script>

<!-- content wrapper -->
<div class=" ml-10">
	{#each $itemStore as item, i}
		<div class="flex flex-row">
			<!-- Card -->
			<div class="card flex flex-row mb-4 items-stretch items-center align-middle hover:cursor-pointer" >
				<!-- Number and input  -->
				<span class=" bg-primary-600 rounded-sm text-xs w-11 flex items-center justify-center">{i + 1}</span>
				<input class="input truncate pl-2 mborder-primary-300 p-1" type="text" placeholder="input text" value={item} />
				
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- Checkbox wrap-->
				<!-- used to keep clickable elemnt to all of right side -->
				<!-- Check the padding here combined with the number section above -->
				<div class="p-2 border-dashed border-white flex items-center p-2 align-middle h-full" on:click={handleOnClick}>
					<input class="checkbox rounded-full w-8 border-3 border-white"  type="checkbox" on:click{handleOnClick}>
				</div>
			</div>
		</div>
	{/each}
</div>
