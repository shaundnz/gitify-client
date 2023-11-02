<script lang="ts">
	import GitIcon from '~icons/mdi/git';
	import HomeIcon from '~icons/material-symbols/home-outline';
	import PlaylistItem from './PlaylistItem.svelte';
	import type { PlaylistDto } from '$lib/contracts';

	export let playlists: PlaylistDto[];
</script>

<div class="p-2 min-h-full w-20 flex-shrink-0">
	<div class="h-16">
		<GitIcon class="w-16 h-16 text-[#1DB954]" />
	</div>
	<a href="/">
		<div class="tooltip tooltip-right" data-tip="Home">
			<div class="flex h-16 p-2 hover:bg-primary-focus rounded-lg">
				<HomeIcon class="w-12 h-12 p-1" />
			</div>
		</div>
	</a>
	<div class="divider my-0" />
	{#each playlists as playlist (playlist.id)}
		<PlaylistItem {playlist} />
	{/each}
</div>
