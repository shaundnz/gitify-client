<script lang="ts">
	export let tooltip: string;
</script>

<!-- Show tooltip -->
<div class="tooltip tooltip-right lg:hidden" data-tip={tooltip}>
	<slot />
</div>
<!-- Hide tooltip -->
<div class="hidden lg:block">
	<slot />
</div>
