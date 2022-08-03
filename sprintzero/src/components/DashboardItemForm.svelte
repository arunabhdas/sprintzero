<script>
    let dashboarditem = '';
    const handleSubmit = () => {
        console.log("submitting")
    };
</script>

<main class="flex-1">
	<div class="py-6">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
		</div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<!-- Replace with your content -->
			<form class="my-6" on:submit|preventDefault="{handleSubmit}">
				<div class="flex flex-col text-sm mb-2">
					<label class="font-bold mb-2 text-gray-800"
                    for="dashboarditem">Projects</label>
					<input
						type="text"
                        bind:value="{dashboarditem}"
						name="dashboarditem"
						placeholder="Add a new project to the dashboard"
						class="appearance-none shadow-sm border border-gray-200 p-2 
                        focus:outline-none focus:border-gray-500 rounded-lg"
					/>
				</div>
				<button
					type="submit"
					class="w-full shadow-sm rounded bg-sky-500 hover:bg-sky-600 
                    text-white py-2 px-4"
				>
					Add
				</button>
			</form>
			<div class="py-4">
				<div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
			</div>
			<!-- /End replace -->
		</div>
	</div>
</main>
