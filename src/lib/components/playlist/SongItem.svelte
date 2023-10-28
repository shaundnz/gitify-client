<script lang="ts">
	import { SongVersionStatus, type Song, type SongVersionCompare } from '$lib/types';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let song: SongVersionCompare;
	$: ({ title, artist, dateAdded, imageUrl, status } = song);

	const getBackgroundColor = (songStatus: SongVersionStatus) => {
		switch (songStatus) {
			case SongVersionStatus.Added:
				return 'bg-green-950';
			case SongVersionStatus.Removed:
				return 'bg-red-950';
			case SongVersionStatus.NoChange:
				return '';
		}
	};

	$: backgroundColor = getBackgroundColor(status);
</script>

<div class={`flex space-x-4 items-center h-14 px-4 rounded ${backgroundColor}`}>
	<img src={imageUrl} alt="Album Art" class="w-10 h-10" />
	<div class="flex flex-1 justify-between">
		<div>
			<div class="text-white">{title}</div>
			<div class="text-sm">{artist}</div>
		</div>
		<div class="text-sm">{dayjs(dateAdded).fromNow()}</div>
	</div>
</div>
