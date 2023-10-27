import type { PlaylistVersionDto } from '$lib/contracts';
import type { PlaylistVersion } from '$lib/types/PlaylistVersion';
import { SongMapper } from './SongMapper';

export class PlaylistVersionMapper {
	static DtoToObject(playlistVersionDto: PlaylistVersionDto): PlaylistVersion {
		return {
			versionDate: new Date(playlistVersionDto.versionDate),
			versionNumber: playlistVersionDto.versionNumber,
			songs: playlistVersionDto.songs.map((song) => SongMapper.DtoToObject(song))
		};
	}
}
