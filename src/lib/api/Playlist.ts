import type { PlaylistDto, PlaylistVersionsDto } from '$lib/contracts';
import { get, post } from './fetchWrapper';

export class PlaylistsApi {
	static async getAllPlaylists(): Promise<PlaylistDto[]> {
		const allPlaylistsRes = await get<PlaylistDto[]>('/playlists');
		return allPlaylistsRes;
	}

	static async getPlaylist(id: string): Promise<PlaylistVersionsDto> {
		const fullPlaylistRes = await get<PlaylistVersionsDto>(`/playlists/${id}`);
		return fullPlaylistRes;
	}

	static async updatePlaylist(ids: string[]) {
		const res = await post<string[], string>('playlists', ids);
		return res;
	}
}
