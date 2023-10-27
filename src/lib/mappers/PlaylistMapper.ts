import type { PlaylistFullDto, PlaylistPartialDto } from '$lib/contracts';
import type { Playlist, PlaylistFull } from '$lib/types';
import { PlaylistVersionMapper } from './PlaylistVersionMapper';

export class PlaylistMapper {
	static PartialDtoToObject(playlistPartialDto: PlaylistPartialDto): Playlist {
		return {
			id: playlistPartialDto.id,
			title: playlistPartialDto.title,
			description: playlistPartialDto.description,
			imageUrl: playlistPartialDto.imageUrl
		};
	}

	static FullDtoToObject(playlistFullDto: PlaylistFullDto): PlaylistFull {
		return {
			id: playlistFullDto.id,
			title: playlistFullDto.title,
			description: playlistFullDto.description,
			imageUrl: playlistFullDto.imageUrl,
			playlistVersions: playlistFullDto.playlistVersions.map((version) =>
				PlaylistVersionMapper.DtoToObject(version)
			)
		};
	}
}
