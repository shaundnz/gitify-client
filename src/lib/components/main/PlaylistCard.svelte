<script lang="ts">
	import type { Playlist } from '$lib/types';

	export let playlist: Playlist;
	$: ({ id, title, description, imageUrl } = playlist);
</script>

<a href={`/playlists/${id}`}>
	<div class=" p-4 rounded-md bg-primary hover:bg-primary-focus">
		<div class="mb-4">
			<img src={imageUrl} alt="playlist" />
		</div>
		<div class="h-16">
			<div class="pb-1 text-white font-bold line-clamp-1">{title}</div>
			<div class="text-sm line-clamp-2">
				{description}
			</div>
		</div>
	</div>
</a>
