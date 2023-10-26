import type { Song } from './Song';

export enum SongVersionStatus {
	NoChange = 0,
	Added = 1,
	Removed = 2
}

export interface SongVersionCompare extends Song {
	status: SongVersionStatus;
}
