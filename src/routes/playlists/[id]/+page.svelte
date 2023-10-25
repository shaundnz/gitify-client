<script lang="ts">
	import PlaylistHeader from '$lib/components/playlist/PlaylistHeader.svelte';
	import PlaylistSongs from '$lib/components/playlist/PlaylistSongs.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<PlaylistHeader />
	<PlaylistSongs />
</div>
