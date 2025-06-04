import * as rive from '@rive-app/canvas';
import type { RiveParameters } from '@rive-app/canvas';

export { default as Rivette } from './Rivette.svelte';
export { default as RawCanvas } from './RawCanvas.svelte';

export type EventCallback = (event: rive.Event, rive_instance: rive.Rive) => void;

export type RawCanvasProps = Omit<RiveParameters, 'canvas' | 'onload' | 'onLoad'> &
	Partial<{
		onLoad: EventCallback;
		class: string;
		width: number;
		height: number;
		id: string;
	}>;

export type RivetteProps = Omit<RiveParameters, 'canvas' | 'onload' | 'onLoad' | 'src'> & {
	src: string;
	class?: string;
	onLoad?: EventCallback;
	id?: string;
};
