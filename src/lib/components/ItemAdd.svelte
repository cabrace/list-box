<script>
	import { currentID } from '$lib/stores/stores.js';

	let item = '';

	const handleSubmit = async () => {
		const response = await fetch('/api/collections', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: $currentID, item })
		});
		const data = await response.json();
		console.log(data);
	};

	const addItem = async () => {
		try {
			const response = await fetch('/api/collections', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: $currentID, item })
			});
			item = '';
		} catch (err) {
			console.log("There was an error")
		}
	};
</script>

<div class="flex justify-center my-4">
	<div class="card p-2 flex flex-row">
		<form class="rounded-sm" method="POST" on:submit|preventDefault={handleSubmit} action="">
			<div class="rounded-full input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<input required bind:value={item} class="input border-secondary-500 rounded" type="text" placeholder="Add something new"/>
				<button class="bg-primary-500 text-white" type="submit">Submit</button>
			</div>
		</form>
	</div>
</div>
