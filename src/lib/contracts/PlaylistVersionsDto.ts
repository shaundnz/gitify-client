import type { PlaylistDto } from './PlaylistDto';
import type { PlaylistVersionDto } from './PlaylistVersionDto';

export interface PlaylistVersionsDto {
	playlist: PlaylistDto;
	playlistVersions: PlaylistVersionDto[];
}
