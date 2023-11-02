<script lang="ts">
	import PlaylistCard from '$lib/components/main/PlaylistCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="p-6">
	<div>
		<h1 class="text-white text-4xl font-bold mb-5">Tracked Playlists</h1>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each data.playlists as playlist}
			<PlaylistCard {playlist} />
		{/each}
	</div>
</main>
