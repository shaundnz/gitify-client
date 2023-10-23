<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class=" p-4 rounded-lg bg-primary hover:bg-primary-focus">
	<div class="mb-4">
		<img src="https://i.scdn.co/image/ab67706f00000003f11d2a4483ba53adf4ee6c55" alt="playlist" />
	</div>
	<div class="h-16">
		<div class="pb-1 text-white font-bold">{title}</div>
		<div class="text-sm line-clamp-2">
			{description}
		</div>
	</div>
</div>
