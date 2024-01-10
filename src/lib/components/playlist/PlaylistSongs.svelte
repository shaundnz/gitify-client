<script lang="ts">
	import SongItem from './SongItem.svelte';
	import type { PlaylistedTrackWithStatus } from '$lib/types';

	export let songs: PlaylistedTrackWithStatus[];
</script>

<div>
	<div class="flex justify-between px-4 text-sm">
		<div>Title</div>
		<div>Date Added</div>
	</div>
	<div class="divider m-0" />
	<div>
		{#each songs as song}
			<SongItem {song} />
		{/each}
	</div>
</div>
