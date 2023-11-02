<script lang="ts">
	import dayjs from 'dayjs';
	import ClearIcon from '~icons/material-symbols/close';
	import { afterNavigate } from '$app/navigation';
	import type { PlaylistVersionsDto, PlaylistVersionDto } from '$lib/contracts';
	import PlaylistCompareList from './PlaylistCompareList.svelte';
	export let playlist: PlaylistVersionsDto;

	interface PlaylistVersionMap {
		[date: string]: PlaylistVersionDto;
	}

	let playlistVersionsMap: PlaylistVersionMap = {};
	$: playlist.playlistVersions.forEach((playlistVersion) => {
		playlistVersionsMap[playlistVersion.versionDate.toISOString()] = playlistVersion;
	});

	// Sort list most recent first
	$: playlist.playlistVersions.sort((a, b) =>
		b.versionDate.toISOString().localeCompare(a.versionDate.toISOString())
	);

	let selectedPlaylistBefore: PlaylistVersionDto | null = null;
	let selectedPlaylistAfter: PlaylistVersionDto | null = null;

	// If after version selected, only show versions before after version date
	$: getBeforePlaylistDropdownOptions = () => {
		playlist;
		if (!selectedPlaylistAfter) {
			return playlist.playlistVersions;
		}
		return playlist.playlistVersions.filter(
			// Force selectedPlaylistAfter to be defined, typechecking doesn't
			// recognize null check in line above
			(version) => version.versionDate < selectedPlaylistAfter!.versionDate
		);
	};

	// If before version is selected, only show version after version date
	$: getAfterPlaylistDropdownOptions = () => {
		if (!selectedPlaylistBefore) {
			return playlist.playlistVersions;
		}
		return playlist.playlistVersions.filter(
			// Same force defined as above
			(version) => version.versionDate > selectedPlaylistBefore!.versionDate
		);
	};

	const clearSelectedPlaylists = () => {
		selectedPlaylistBefore = null;
		selectedPlaylistAfter = null;
	};

	afterNavigate(() => {
		selectedPlaylistBefore = null;
		selectedPlaylistAfter = null;
	});
</script>

<div>
	<div class="p-6 space-y-2">
		<div class="flex items-end">
			<div class="flex flex-col md:flex-row">
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
						{#each getBeforePlaylistDropdownOptions() as playlistVersion}
							<option value={playlistVersion}>
								{dayjs(playlistVersion.versionDate).format('MMM D, YYYY')}
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
						{#each getAfterPlaylistDropdownOptions() as playlistVersion}
							<option value={playlistVersion}>
								{dayjs(playlistVersion.versionDate).format('MMM D, YYYY')}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="ml-4">
				<button
					class="btn normal-case"
					disabled={!selectedPlaylistBefore && !selectedPlaylistAfter}
					on:click={clearSelectedPlaylists}
				>
					Clear <ClearIcon />
				</button>
			</div>
		</div>
	</div>
	<PlaylistCompareList {selectedPlaylistBefore} {selectedPlaylistAfter} />
</div>
