<script lang="ts">
	import PlaylistCard from '$lib/components/main/PlaylistCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const featuredPlaylistIds = [
		'37i9dQZEVXbMDoHDwVN2tF',
		'37i9dQZEVXbM8SIrkERIYl',
		'37i9dQZF1DX6wk8dYln4y0',
		'37i9dQZF1DXcBWIGoYBM5M'
	];

	$: featuredPlaylists = data.playlists.filter((playlist) =>
		featuredPlaylistIds.includes(playlist.id)
	);
	$: restPlaylists = data.playlists.filter(
		(playlist) => !featuredPlaylistIds.includes(playlist.id)
	);
</script>

<head>
	<title>Gitify</title>
</head>

<main class="p-6">
	<div>
		<h1 class="text-white text-5xl font-bold">Tracked Playlists</h1>
	</div>
	<h2 class="text-white text-3xl font-bold my-5">Featured</h2>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each featuredPlaylists as playlist}
			<PlaylistCard {playlist} />
		{/each}
	</div>
	<h2 class="text-white text-3xl font-bold my-5">All Playlists</h2>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
		{#each restPlaylists as playlist}
			<PlaylistCard {playlist} />
		{/each}
	</div>
</main>
