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
<div class="grid grid-cols ml-10">
	{#each $itemStore as item, i}
		<div class="flex flex-row">
			<div class="card pl-2 mb-2 flex flex-row gap-y-4 items-center hover:cursor-pointer" >

				<!-- Number and input  -->
				<span class=" bg-primary-700 rounded-sm p-2 w-16">{i + 9}</span>
				<input class="input border-primary-300 border-6 p-2" type="text" placeholder="input text" value={item} />

				<!-- Checkbox wrap-->
				<div class="p-2 px-4 py-4 border-dashed border-white" on:click={handleOnClick}>
					<input class="checkbox rounded-full" type="checkbox" on:click{handleOnClick}>
				</div>
			</div>
		</div>
	{/each}
</div>
