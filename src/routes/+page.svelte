<script lang="ts">
	import PlaylistCard from '$lib/components/main/PlaylistCard.svelte';
</script>

<main>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each Array(10) as _, index}
			<PlaylistCard
				id={index}
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium libero eget laoreet suscipit. "
			/>
		{/each}
	</div>
</main>
