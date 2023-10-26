<script lang="ts">
	import PlaylistCard from '$lib/components/main/PlaylistCard.svelte';
</script>

<main class="p-2">
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each Array(10) as _, index}
			<PlaylistCard
				playlist={{
					id: index.toString(),
					title: 'Playlist Title',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium libero eget laoreet suscipit.',
					imageUrl: 'https://i.scdn.co/image/ab67706f00000003f11d2a4483ba53adf4ee6c55'
				}}
			/>
		{/each}
	</div>
</main>
