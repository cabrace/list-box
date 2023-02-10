<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { itemStore } from '$lib/stores/stores.js';

	let valueSingle: string = 'books';
</script>

<!-- content wrapper -->
<!-- <div class="grid grid-cols-9">
	<ol class="list">
		{#each $itemStore as item,i}
		<li>
			<span>{i + 1}</span>
			<span class="flex-auto">{item}</span>
		</li>
		{/each}
	</ol>
</div> -->

	<!-- <div class="flex flex-row justify-center my-8"> -->
		<!-- <div class="card p-2 flex flex-row w-1/4">
			<span class="p-2 bg-primary-700 rounded-sm p-3">+</span>
			<input class="input" type="text" placeholder="Add something new" />
		</div> -->
	<!-- </div> -->
<div class="grid grid-cols ml-10">
	{#each $itemStore as item, i}
		<div class="flex flex-row">
			<div class="card p-4 flex flex-row">
				<span class="p-2 bg-primary-700 rounded-sm p-3">{i + 1}</span>
				<input class="input border-primary-300 border-6" type="text" placeholder="input text" value={item} />
			</div>
		</div>
	{/each}
</div>
