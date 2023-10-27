import type { PlaylistFullDto, PlaylistPartialDto } from '$lib/contracts';
import { PlaylistMapper } from '$lib/mappers';
import type { Playlist, PlaylistFull } from '$lib/types';
import { get, post } from './fetchWrapper';

export class PlaylistsApi {
	static async getAllPlaylists(): Promise<Playlist[]> {
		const allPlaylistsRes = await get<PlaylistPartialDto[]>('/playlists');
		return allPlaylistsRes.map((playlist) => PlaylistMapper.PartialDtoToObject(playlist));
	}

	static async getPlaylist(id: string): Promise<PlaylistFull> {
		const fullPlaylistRes = await get<PlaylistFullDto>(`/playlists/${id}`);
		return PlaylistMapper.FullDtoToObject(fullPlaylistRes);
	}

	static async updatePlaylist(ids: string[]) {
		const res = await post<string[], string>('playlists', ids);
		return res;
	}
}
