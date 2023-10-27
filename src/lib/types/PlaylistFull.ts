import type { Playlist } from './Playlist';
import type { PlaylistVersion } from './PlaylistVersion';

export interface PlaylistFull extends Playlist {
	playlistVersions: PlaylistVersion[];
}
