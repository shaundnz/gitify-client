<script lang="ts">
	import { ActiveResponsivePlaylistTab } from '$lib/constants';
	import type { PlaylistVersionDto } from '$lib/contracts';
	import { playlistVersionDiff } from '$lib/utils';
	import PlaylistSongs from './PlaylistSongs.svelte';

	export let selectedPlaylistBefore: PlaylistVersionDto | null = null;
	export let selectedPlaylistAfter: PlaylistVersionDto | null = null;

	let activeResponsivePlaylistTab: ActiveResponsivePlaylistTab = ActiveResponsivePlaylistTab.Before;
</script>

<!-- TODO: Clean up duplicated code -->

<div class="block lg:hidden">
	<div class="tabs tabs-boxed bg-transparent pb-2">
		<button
			class={`tab ${
				activeResponsivePlaylistTab === ActiveResponsivePlaylistTab.Before ? 'tab-active' : ''
			}`}
			on:click={() => {
				activeResponsivePlaylistTab = ActiveResponsivePlaylistTab.Before;
			}}
		>
			Before
		</button>
		<button
			class={`tab ${
				activeResponsivePlaylistTab === ActiveResponsivePlaylistTab.After ? 'tab-active' : ''
			}`}
			on:click={() => {
				activeResponsivePlaylistTab = ActiveResponsivePlaylistTab.After;
			}}
		>
			After
		</button>
	</div>
	{#if activeResponsivePlaylistTab === ActiveResponsivePlaylistTab.Before}
		<div class="flex-1">
			{#if !selectedPlaylistBefore}
				<div>No before playlist version selected</div>
			{:else if !selectedPlaylistAfter}
				<PlaylistSongs songs={selectedPlaylistBefore.tracks} />
			{:else}
				<PlaylistSongs
					songs={playlistVersionDiff(selectedPlaylistBefore, selectedPlaylistAfter)[0]}
				/>
			{/if}
		</div>
	{:else}
		<div class="flex-1">
			{#if !selectedPlaylistAfter}
				<div>No after playlist version selected</div>
			{:else if !selectedPlaylistBefore}
				<PlaylistSongs songs={selectedPlaylistAfter.tracks} />
			{:else}
				<PlaylistSongs
					songs={playlistVersionDiff(selectedPlaylistBefore, selectedPlaylistAfter)[1]}
				/>
			{/if}
		</div>
	{/if}
</div>

<div class="px-6 w-full hidden lg:flex">
	<div class="flex-1">
		{#if !selectedPlaylistBefore}
			<div>No before playlist version selected</div>
		{:else if !selectedPlaylistAfter}
			<PlaylistSongs songs={selectedPlaylistBefore.tracks} />
		{:else}
			<PlaylistSongs
				songs={playlistVersionDiff(selectedPlaylistBefore, selectedPlaylistAfter)[0]}
			/>
		{/if}
	</div>
	<div class="divider divider-horizontal m-1" />
	<div class="flex-1">
		{#if !selectedPlaylistAfter}
			<div>No after playlist version selected</div>
		{:else if !selectedPlaylistBefore}
			<PlaylistSongs songs={selectedPlaylistAfter.tracks} />
		{:else}
			<PlaylistSongs
				songs={playlistVersionDiff(selectedPlaylistBefore, selectedPlaylistAfter)[1]}
			/>
		{/if}
	</div>
</div>
