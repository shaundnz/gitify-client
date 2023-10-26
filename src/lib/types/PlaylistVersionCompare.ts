import type { Playlist } from './Playlist';
import type { SongVersionCompare } from './SongVersionCompare';

export interface PlaylistVersionCompare {
	playlist: Playlist;
	songsVersionOne: SongVersionCompare[];
	songsVersionTwo: SongVersionCompare[];
}
