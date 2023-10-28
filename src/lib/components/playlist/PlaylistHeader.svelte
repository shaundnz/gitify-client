<script lang="ts">
	import type { PlaylistDto } from '$lib/contracts';

	export let playlist: PlaylistDto;
</script>

<div class="flex items-end space-x-6 h-80">
	<img
		src={playlist.images[0].url}
		alt={playlist.name}
		class="h-60 w-60 aspect-square object-cover"
	/>
	<div>
		<div class="text-sm text-white">Playlist</div>
		<div>
			<h1 class="text-8xl font-black text-white leading-tight mt-2 mb-3">{playlist.name}</h1>
		</div>
		<div class="text-sm">
			{playlist.description}
		</div>
	</div>
</div>
