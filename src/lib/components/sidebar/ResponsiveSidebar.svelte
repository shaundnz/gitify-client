<script lang="ts">
	import HomeIcon from '~icons/material-symbols/home-outline';
	import PlaylistItem from './PlaylistItem.svelte';
	import type { PlaylistDto } from '$lib/contracts';

	export let playlists: PlaylistDto[];
</script>

<div class="p-2 min-h-full w-20 flex-shrink-0">
	<a href="/">
		<div class="tooltip tooltip-right" data-tip="Home">
			<div
				class="flex flex-row h-16 space-x-3 p-2 hover:bg-primary-focus rounded-lg items-center text-xl"
			>
				<HomeIcon class=" w-12 h-12 p-1" />
			</div>
		</div>
	</a>
	<div class="divider my-0" />
	{#each playlists as playlist (playlist.id)}
		<PlaylistItem {playlist} />
	{/each}
</div>
