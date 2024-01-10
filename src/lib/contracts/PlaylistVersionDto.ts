export interface PlaylistVersionDto {
	versionDate: Date;
	tracks: PlaylistTrack[];
}

export interface PlaylistTrack {
	id: string;
	added_at: string;
}
