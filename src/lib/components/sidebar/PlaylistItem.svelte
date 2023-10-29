<script lang="ts">
	import type { PlaylistDto } from '$lib/contracts';

	export let playlist: PlaylistDto;
</script>

<a href={`/playlists/${playlist.id}`}>
	<div class="tooltip tooltip-right" data-tip={playlist.name}>
		<div class="flex flex-row h-16 p-2 hover:bg-primary-focus rounded-lg">
			<img
				src={playlist.images[0].url}
				alt={playlist.name}
				class="w-12 aspect-square object-cover rounded-md"
			/>
		</div>
	</div>
</a>
