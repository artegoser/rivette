<script lang="ts">
	import * as rive from '@rive-app/canvas';
	import type { RivetteProps } from './index.js';
	import { onMount } from 'svelte';

	let props: RivetteProps = $props();

	let { src, onLoad, class: c, id, ...raw_props } = props;

	let canvasEl: HTMLCanvasElement;

	onMount(() => {
		const r = new rive.Rive({
			src,
			canvas: canvasEl,

			onLoad: (e) => {
				let bounds = r.bounds;
				canvasEl.width = bounds.maxX - bounds.minX;
				canvasEl.height = bounds.maxY - bounds.minY;

				r.resizeDrawingSurfaceToCanvas();

				onLoad && onLoad(e, r);
			},
			...raw_props
		});

		window.onresize = () => r.resizeDrawingSurfaceToCanvas();

		window
			.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
			.addEventListener('change', () => r.resizeDrawingSurfaceToCanvas());
	});
</script>

<canvas bind:this={canvasEl} class={props.class} width="0" height="0" {id}></canvas>
