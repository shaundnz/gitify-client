<script lang="ts">
	import type { Breakpoints } from '$lib/constants';

	export let breakpoint: Breakpoints;
	export let tooltip: string;
</script>

<!-- Show tooltip -->
<div class={`tooltip tooltip-right ${breakpoint}:hidden`} data-tip={tooltip}>
	<slot />
</div>
<!-- Hide tooltip -->
<div class={`hidden ${breakpoint}:block`}>
	<slot />
</div>
