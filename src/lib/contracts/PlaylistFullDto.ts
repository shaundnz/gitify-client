import type { PlaylistPartialDto } from './PlaylistPartialDto';
import type { PlaylistVersionDto } from './PlaylistVersionDto';

export interface PlaylistFullDto extends PlaylistPartialDto {
	playlistVersions: PlaylistVersionDto[];
}
