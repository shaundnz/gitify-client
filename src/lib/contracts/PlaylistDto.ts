import type { Playlist } from '@spotify/web-api-ts-sdk';

export type PlaylistDto = Omit<Playlist, 'tracks'>;
