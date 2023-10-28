<script lang="ts">
	import '../app.css';
	import ResponsiveSidebar from '$lib/components/sidebar/ResponsiveSidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex">
	<ResponsiveSidebar playlists={data.playlists} />
	<slot />
</div>
