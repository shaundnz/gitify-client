<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { SongVersionStatus, type PlaylistFull } from '$lib/types';
	import type { PlaylistVersion } from '$lib/types/PlaylistVersion';
	import { playlistVersionDiff } from '$lib/utils';
	import PlaylistSongs from './PlaylistSongs.svelte';
	export let playlist: PlaylistFull;

	interface PlaylistVersionMap {
		[date: string]: PlaylistVersion;
	}

	let playlistVersionsMap: PlaylistVersionMap = {};

	$: playlist.playlistVersions.forEach((playlistVersion) => {
		playlistVersionsMap[playlistVersion.versionDate.toISOString()] = playlistVersion;
	});

	let selectedPlaylistBefore: PlaylistVersion | null = null;
	let selectedPlaylistAfter: PlaylistVersion | null = null;

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
				<PlaylistSongs
					songs={selectedPlaylistBefore.songs.map((s) => ({
						...s,
						status: SongVersionStatus.NoChange
					}))}
				/>
			{:else}
				<PlaylistSongs
					songs={playlistVersionDiff([selectedPlaylistBefore, selectedPlaylistAfter])[0]}
				/>
			{/if}
		</div>
		<div class="divider divider-horizontal m-1" />
		<div class="flex-1">
			{#if !selectedPlaylistAfter}
				<div>No after playlist version selected</div>
			{:else if !selectedPlaylistBefore}
				<PlaylistSongs
					songs={selectedPlaylistAfter.songs.map((s) => ({
						...s,
						status: SongVersionStatus.NoChange
					}))}
				/>
			{:else}
				<PlaylistSongs
					songs={playlistVersionDiff([selectedPlaylistBefore, selectedPlaylistAfter])[1]}
				/>
			{/if}
		</div>
	</div>
</div>
