<script lang="ts">
	import * as rive from '@rive-app/canvas';
	import { onMount } from 'svelte';
	import type { RawCanvasProps } from './index.js';

	let props: RawCanvasProps = $props();

	let canvasEl: HTMLCanvasElement;

	let { onLoad: _, class: _c, ...rive_props } = props;

	let width: number = $state(0);
	let height: number = $state(0);

	onMount(() => {
		const r = new rive.Rive({
			...rive_props,

			canvas: canvasEl,
			onLoad: (e) => {
				props.onLoad && props.onLoad(e, r);
				console.log(r.bounds);

				let bounds = r.bounds;
				width = bounds.maxX - bounds.minX;
				height = bounds.maxY - bounds.minY;

				r.resizeDrawingSurfaceToCanvas();
			}
		});
	});
</script>

<canvas bind:this={canvasEl} class={props.class} {width} {height}></canvas>
