import type { SongDto } from './SongDto';

export interface PlaylistVersionDto {
	versionDate: string;
	versionNumber: number;
	songs: SongDto[];
}
