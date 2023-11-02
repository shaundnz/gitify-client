<script lang="ts">
	import PlaylistHeader from '$lib/components/playlist/PlaylistHeader.svelte';
	import PlaylistVersionCompare from '$lib/components/playlist/PlaylistVersionCompare.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ playlist } = data);
</script>

<div class="p-6 w-full">
	<PlaylistHeader playlist={playlist.playlist} />
	<PlaylistVersionCompare {playlist} />
</div>
