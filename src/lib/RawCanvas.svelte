<script lang="ts">
	import * as rive from '@rive-app/canvas';
	import { onMount } from 'svelte';
	import type { RawCanvasProps } from './index.js';

	let props: RawCanvasProps = $props();

	let canvasEl: HTMLCanvasElement;

	let { onLoad, class: c, width, height, id, ...rive_props } = props;

	onMount(() => {
		const r = new rive.Rive({
			...rive_props,

			canvas: canvasEl,
			onLoad: (e) => {
				onLoad && onLoad(e, r);
			}
		});
	});
</script>

<canvas bind:this={canvasEl} class={props.class} {width} {height} {id}></canvas>
