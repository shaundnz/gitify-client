<script lang="ts">
	import type { PlaylistDto } from '$lib/contracts';

	export let playlist: PlaylistDto;
</script>

<a href={`/playlists/${playlist.id}`}>
	<div class=" p-4 rounded-md bg-primary hover:bg-primary-focus">
		<div class="mb-4">
			<img
				src={playlist.images[0].url}
				alt={playlist.name}
				class="w-full aspect-square object-cover rounded-md"
			/>
		</div>
		<div class="h-16">
			<div class="pb-1 text-white font-bold line-clamp-1">{playlist.name}</div>
			<div class="text-sm line-clamp-2">
				{playlist.description}
			</div>
		</div>
	</div>
</a>
