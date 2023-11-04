<script lang="ts">
	import '../app.css';
	import WebsiteIcon from '~icons/mdi/web';
	import GithubIcon from '~icons/mdi/github';
	import LinkedInIcon from '~icons/mdi/linkedin';
	import ResponsiveSidebar from '$lib/components/sidebar/ResponsiveSidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</head>

<div class="flex">
	<ResponsiveSidebar playlists={data.playlists} />
	<slot />
</div>

<footer class="footer flex justify-between items-center py-2 px-6 bg-primary text-primary-content">
	<div class="pl-2">
		<p>Created by Shaun Price</p>
	</div>

	<nav>
		<ul class="menu menu-horizontal p-0 [&>li>*]:px-2 [&>li>*]:rounded-md">
			<li>
				<a href="https://shaundnz.com" target="_blank" class="tooltip" data-tip="Personal Website">
					<WebsiteIcon class="text-xl" />
				</a>
			</li>
			<li>
				<a href="https://github.com/shaundnz" target="_blank" class="tooltip" data-tip="Github">
					<GithubIcon class="text-xl" />
				</a>
			</li>
			<li>
				<a
					href="https://linkedin.com/in/shaun-price-71a1461b5"
					target="_blank"
					class="tooltip"
					data-tip="LinkedIn"
				>
					<LinkedInIcon class="text-xl" />
				</a>
			</li>
		</ul>
	</nav>
</footer>
