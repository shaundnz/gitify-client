<script lang="ts">
	import type { PlaylistDto } from '$lib/contracts';
	import ResponsiveTooltip from '../common/ResponsiveTooltip.svelte';

	export let playlist: PlaylistDto;
</script>

<a href={`/playlists/${playlist.id}`}>
	<ResponsiveTooltip tooltip="Playlist Title">
		<div class="flex flex-row h-16 p-2 hover:bg-primary-focus rounded-lg">
			<img
				src={playlist.images[0].url}
				alt={playlist.name}
				class="w-12 aspect-square object-cover"
			/>
			<div class="hidden lg:block ml-3">
				<div class="text-white">{playlist.name}</div>
				<div class="text-sm">Playlist &bull; Spotify</div>
			</div>
		</div>
	</ResponsiveTooltip>
</a>
