import type { Track } from '@spotify/web-api-ts-sdk';
import type { PlaylistDto } from './PlaylistDto';
import type { PlaylistVersionDto } from './PlaylistVersionDto';

export interface PlaylistVersionsDto {
	playlist: PlaylistDto;
	playlistSongsMap: {
		[id: string]: Track;
	};
	playlistVersions: PlaylistVersionDto[];
}
