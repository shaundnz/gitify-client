<script lang="ts">
	import { Breakpoints } from '$lib/constants';

	import ResponsiveTooltip from '../common/ResponsiveTooltip.svelte';
</script>

<a href={`/playlists/0`}>
	<ResponsiveTooltip tooltip="Playlist Title" breakpoint={Breakpoints.Large}>
		<div class="flex flex-row h-16 p-2 hover:bg-primary-focus rounded-lg">
			<img src="https://i.scdn.co/image/ab67706f00000003f11d2a4483ba53adf4ee6c55" alt="playlist" />
			<div class="hidden lg:block ml-3">
				<div class="text-white">Playlist Title</div>
				<div class="text-sm">Playlist &bull; Spotify</div>
			</div>
		</div>
	</ResponsiveTooltip>
</a>
