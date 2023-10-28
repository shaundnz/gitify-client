<script lang="ts">
	import PlaylistCard from '$lib/components/main/PlaylistCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="p-2">
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each data.playlists as playlist}
			<PlaylistCard {playlist} />
		{/each}
	</div>
</main>
