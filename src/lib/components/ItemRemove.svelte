<script>
	import { currentID } from '$lib/stores/stores.js';

	let item ='';

	const handleSubmit = async () => {
    	const response = await fetch('/api/collections', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id: $currentID, item })
		});
		const data = await response.json();
		console.log(data);
    }
  
</script>

<div class="flex justify-center my-4">
	<div class="card p-2 flex flex-row ">
		<!-- <span class="p-2 bg-primary-700 rounded-sm p-3">+</span> -->
		<form method="POST" on:submit|preventDefault={handleSubmit} action="">
			<input bind:value={item} class="input border-secondary-500" type="text" placeholder="Add something new" />
			<button class="button" type="submit">Submit</button>
		</form>
		<!-- db.boxes.updateOne({_id:ObjectId("63e87307293f2b4a7b6b7d4d")}, {$push: {"list": "Build new Interface"}}) -->
	</div>
</div>
