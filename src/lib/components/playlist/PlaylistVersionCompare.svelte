<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import type { PlaylistVersionsDto, PlaylistVersionDto } from '$lib/contracts';
	// import { playlistVersionDiff } from '$lib/utils';
	import PlaylistSongs from './PlaylistSongs.svelte';
	export let playlist: PlaylistVersionsDto;

	interface PlaylistVersionMap {
		[date: string]: PlaylistVersionDto;
	}

	let playlistVersionsMap: PlaylistVersionMap = {};
	$: playlist.playlistVersions.forEach((playlistVersion) => {
		playlistVersionsMap[playlistVersion.versionDate.toISOString()] = playlistVersion;
	});

	let selectedPlaylistBefore: PlaylistVersionDto | null = null;
	let selectedPlaylistAfter: PlaylistVersionDto | null = null;

	afterNavigate(() => {
		selectedPlaylistBefore = null;
		selectedPlaylistAfter = null;
	});
</script>

<div>
	<div class="p-6 flex">
		<div>
			<label class="label" for="select-playlist-version-before">
				<span class="label-text">Before:</span>
			</label>
			<select
				class="select select-ghost select-sm w-full max-w-xs"
				id="select-playlist-version-before"
				bind:value={selectedPlaylistBefore}
			>
				<option disabled selected value={null}>Select a playlist version</option>
				{#each playlist.playlistVersions as playlistVersion}
					<option value={playlistVersion}>
						{playlistVersion.versionDate.toISOString()}
					</option>
				{/each}
			</select>
		</div>
		<div>
			<label class="label" for="select-playlist-version-after">
				<span class="label-text">After:</span>
			</label>
			<select
				class="select select-ghost select-sm w-full max-w-xs"
				id="select-playlist-version-after"
				bind:value={selectedPlaylistAfter}
			>
				<option disabled selected value={null}>Select a playlist version</option>
				{#each playlist.playlistVersions as playlistVersion}
					<option value={playlistVersion}>
						{playlistVersion.versionDate.toISOString()}
					</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="px-6 flex w-full">
		<div class="flex-1">
			{#if !selectedPlaylistBefore}
				<div>No before playlist version selected</div>
			{:else if !selectedPlaylistAfter}
				<PlaylistSongs songs={selectedPlaylistBefore.tracks} />
			{:else}
				<PlaylistSongs songs={selectedPlaylistBefore.tracks} />
			{/if}
		</div>
		<div class="divider divider-horizontal m-1" />
		<div class="flex-1">
			{#if !selectedPlaylistAfter}
				<div>No after playlist version selected</div>
			{:else if !selectedPlaylistBefore}
				<PlaylistSongs songs={selectedPlaylistAfter.tracks} />
			{:else}
				<PlaylistSongs songs={selectedPlaylistAfter.tracks} />
			{/if}
		</div>
	</div>
</div>
