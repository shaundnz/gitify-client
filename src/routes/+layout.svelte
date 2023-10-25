<script lang="ts">
	import '../app.css';
	import ResponsiveSidebar from '$lib/components/sidebar/ResponsiveSidebar.svelte';
</script>

<div class="flex">
	<ResponsiveSidebar />
	<slot />
</div>
