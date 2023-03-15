<script>
	import { currentID, itemStore } from '$lib/stores/stores.ts';
	import { enhance } from '$app/forms';

  let addItemText = '';
	let items = '';
  let res = '';

	// const handleSubmit = async () => {
	// 	const response = await fetch('/api/collections', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ id: $currentID, item })
	// 	});
	// 	const data = await response.json();
	// 	console.log("ItemAdd handleSubmit() ", data);
	// };

	const addItem = async () => {
		try {
			const response = await fetch('/api/collections', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: $currentID, item: addItemText })
			});

		res = await response.json()

    items = res.body.items.value.list
		console.log("RESPONSE ", items)
		} catch (err) {
			console.log("There was an error")
		}
	};
	/* addItemText = '' */

  $: itemStore.set(items)
</script>

<div class="flex justify-center my-4">
	<div class="card p-2 flex flex-row">
		<form class="rounded-sm" method="POST" action="?/create" on:submit|preventDefault={addItem} use:enhance>
			<div class="rounded-full input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<input required bind:value={addItemText} class="input border-secondary-500 rounded" type="text" placeholder="Add something new"/>
				<button class="bg-primary-500 text-white" type="submit">Submit</button>
			</div>
		</form>
	</div>
</div>
