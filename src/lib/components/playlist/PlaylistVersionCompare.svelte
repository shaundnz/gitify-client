<script lang="ts">
	import PlaylistSongs from './PlaylistSongs.svelte';
</script>

<div>
	<div class="p-6">Playlist controls here</div>
	<div class="px-6 flex w-full">
		<div class="flex-1">
			<PlaylistSongs />
		</div>
		<div class="divider divider-horizontal m-1" />
		<div class="flex-1">
			<PlaylistSongs />
		</div>
	</div>
</div>
