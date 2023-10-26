<script lang="ts">
	import type { Playlist } from '$lib/types';

	export let playlist: Playlist;
	const { title, description, imageUrl } = playlist;
</script>

<div class="flex items-end space-x-6 h-80">
	<img src={imageUrl} alt={title} class="h-60 w-60" />
	<div>
		<div class="text-sm text-white">Playlist</div>
		<div>
			<h1 class="text-8xl font-black text-white leading-tight mt-2 mb-3">{title}</h1>
		</div>
		<div class="text-sm">
			{description}
		</div>
	</div>
</div>
