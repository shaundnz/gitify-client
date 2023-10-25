<script lang="ts">
	import HomeIcon from '~icons/material-symbols/home-outline';
	import GitBranchIcon from '~icons/mdi/source-branch';
	import PlaylistItem from './PlaylistItem.svelte';
	import ResponsiveTooltip from '../common/ResponsiveTooltip.svelte';
	import { Breakpoints } from '$lib/constants';
</script>

<div class="p-2 min-h-full w-20 lg:w-80 flex-shrink-0">
	<a href="/">
		<ResponsiveTooltip tooltip="Home" breakpoint={Breakpoints.Large}>
			<div
				class="flex flex-row h-16 space-x-3 p-2 hover:bg-primary-focus rounded-lg items-center text-xl"
			>
				<HomeIcon class=" w-12 h-12 p-1" />
				<h2 class="font-semibold hidden lg:block">Home</h2>
			</div>
		</ResponsiveTooltip>
	</a>
	<div class="divider my-0" />
	<div class="flex flex-row h-16 p-2 space-x-3 rounded-lg items-center text-xl">
		<GitBranchIcon class=" w-12 h-12 p-1" />
		<h2 class="font-semibold hidden lg:block">Tracked Playlists</h2>
	</div>
	<PlaylistItem />
	<PlaylistItem />
	<PlaylistItem />
	<PlaylistItem />
	<PlaylistItem />
	<PlaylistItem />
	<PlaylistItem />
</div>
