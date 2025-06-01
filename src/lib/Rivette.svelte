<script lang="ts">
	import type { RivetteProps } from './index.js';
	import RawCanvas from './RawCanvas.svelte';

	let props: RivetteProps = $props();

	let width = $state(0);
	let height = $state(0);
</script>

<RawCanvas
	onLoad={(_, r) => {
		let bounds = r.bounds;
		width = bounds.maxX - bounds.minX;
		height = bounds.maxY - bounds.minY;

		r.resizeDrawingSurfaceToCanvas();
	}}
/>
