<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);
</script>

<div class="flex space-x-4 items-center h-14 px-4 rounded">
	<img
		src="https://i.scdn.co/image/ab67616d0000b2731775b27e9695b4f535eefd5c"
		alt="Album Art"
		class="w-10 h-10"
	/>
	<div class="flex flex-1 justify-between">
		<div>
			<div class="text-white">Title</div>
			<div class="text-sm">Artist</div>
		</div>
		<div class="text-sm">{dayjs('2023-10-23').fromNow()}</div>
	</div>
</div>
