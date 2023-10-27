import type { SongDto } from '$lib/contracts';
import type { Song } from '$lib/types';

export class SongMapper {
	static DtoToObject(songDto: SongDto): Song {
		return {
			id: songDto.id,
			title: songDto.title,
			artist: 'Artist',
			dateAdded: new Date(2023, 9, 15),
			imageUrl: 'https://i.scdn.co/image/ab67706f00000003f11d2a4483ba53adf4ee6c55'
		};
	}
}
