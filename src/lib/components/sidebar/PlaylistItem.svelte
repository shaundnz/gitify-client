<script lang="ts">
	import type { Playlist } from '$lib/types';
	import ResponsiveTooltip from '../common/ResponsiveTooltip.svelte';

	export let playlist: Playlist;
	$: ({ id, title, imageUrl } = playlist);
</script>

<a href={`/playlists/${id}`}>
	<ResponsiveTooltip tooltip="Playlist Title">
		<div class="flex flex-row h-16 p-2 hover:bg-primary-focus rounded-lg">
			<img src={imageUrl} alt={title} />
			<div class="hidden lg:block ml-3">
				<div class="text-white">{title}</div>
				<div class="text-sm">Playlist &bull; Spotify</div>
			</div>
		</div>
	</ResponsiveTooltip>
</a>
