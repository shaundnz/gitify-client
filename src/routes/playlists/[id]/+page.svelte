<script lang="ts">
	import PlaylistHeader from '$lib/components/playlist/PlaylistHeader.svelte';
	import PlaylistVersionCompare from '$lib/components/playlist/PlaylistVersionCompare.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="p-2">
	<PlaylistHeader
		playlist={{
			id: data.id,
			title: 'Playlist Title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium libero eget laoreet suscipit.',
			imageUrl: 'https://i.scdn.co/image/ab67706f00000003f11d2a4483ba53adf4ee6c55'
		}}
	/>
	<PlaylistVersionCompare />
</div>
