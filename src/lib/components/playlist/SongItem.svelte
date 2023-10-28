<script lang="ts">
	import { PlaylistSongStatus } from '$lib/constants';
	import type { PlaylistedTrackWithStatus } from '$lib/types';
	import type { Track } from '@spotify/web-api-ts-sdk';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let song: PlaylistedTrackWithStatus;
	$: track = song.track as Track;

	const getBackgroundColor = (songStatus?: PlaylistSongStatus) => {
		if (!songStatus) {
			return '';
		}
		switch (songStatus) {
			case PlaylistSongStatus.Added:
				return 'bg-green-950';
			case PlaylistSongStatus.Removed:
				return 'bg-red-950';
		}
	};

	$: backgroundColor = getBackgroundColor(song.status);
</script>

<div class={`flex space-x-4 items-center h-14 px-4 rounded ${backgroundColor}`}>
	<img src={track.album.images[0].url} alt={track.album.name} class="w-10 h-10" />
	<div class="flex flex-1 justify-between">
		<div>
			<div class="text-white">{track.name}</div>
			<div class="text-sm">{track.artists[0].name}</div>
		</div>
		<div class="text-sm">{dayjs(song.added_at).fromNow()}</div>
	</div>
</div>
