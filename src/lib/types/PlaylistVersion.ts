import type { Song } from './Song';

export interface PlaylistVersion {
	versionDate: Date;
	versionNumber: number;
	songs: Song[];
}
