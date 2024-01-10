import { PlaylistSongStatus } from '$lib/constants';
import type { PlaylistTrack, PlaylistVersionDto } from '$lib/contracts';
import type { PlaylistedTrackWithStatus } from '$lib/types';
import type { Track } from '@spotify/web-api-ts-sdk';

interface PlaylistVersionSongMap {
	[id: string]: PlaylistTrack;
}

export const playlistVersionDiff = (
	versionBefore: PlaylistVersionDto,
	versionAfter: PlaylistVersionDto,
	playlistSongsMap: { [id: string]: Track }
): [PlaylistedTrackWithStatus[], PlaylistedTrackWithStatus[]] => {
	const versionBeforeMap: PlaylistVersionSongMap = {};

	versionBefore.tracks.forEach((track) => {
		versionBeforeMap[track.id] = track;
	});

	const versionAfterMap: PlaylistVersionSongMap = {};
	versionAfter.tracks.forEach((track) => {
		versionAfterMap[track.id] = track;
	});

	const versionBeforeCompared: PlaylistedTrackWithStatus[] = Object.keys(versionBeforeMap).map(
		(id) => {
			// Song exists in both before and after version
			if (id in versionAfterMap) {
				return { track: playlistSongsMap[id], id: id, added_at: versionBeforeMap[id].added_at };
			}
			// Song was in before version, but not in after version, was removed
			return {
				track: playlistSongsMap[id],
				id: id,
				added_at: versionBeforeMap[id].added_at,
				status: PlaylistSongStatus.Removed
			};
		}
	);

	const versionAfterCompared: PlaylistedTrackWithStatus[] = Object.keys(versionAfterMap).map(
		(id) => {
			// Song exists in both before and after version
			if (id in versionBeforeMap) {
				return { track: playlistSongsMap[id], id: id, added_at: versionAfterMap[id].added_at };
			}
			// Song is in after version, but not in before version, was added
			return {
				track: playlistSongsMap[id],
				id: id,
				added_at: versionAfterMap[id].added_at,
				status: PlaylistSongStatus.Added
			};
		}
	);

	return [versionBeforeCompared, versionAfterCompared];
};
