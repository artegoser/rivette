import * as rive from '@rive-app/canvas';
import type { RiveParameters } from '@rive-app/canvas';

export type EventCallback = (event: rive.Event, rive_instance: rive.Rive) => void;

export type RawCanvasProps = Omit<RiveParameters, 'canvas' | 'onload' | 'onLoad'> &
	Partial<{
		onLoad: EventCallback;
		class: string;
		width: number;
		height: number;
		id: string;
	}>;

export interface RivetteProps {
	src: string;
	onLoad: EventCallback;
}
