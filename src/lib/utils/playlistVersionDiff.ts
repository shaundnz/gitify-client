import {
	SongVersionStatus,
	type Song,
	type SongVersionCompare,
	type PlaylistVersion
} from '$lib/types';

interface PlaylistVersionMap {
	[id: string]: Song;
}

export const playlistVersionDiff = ([versionBefore, versionAfter]: [
	PlaylistVersion,
	PlaylistVersion
]): [SongVersionCompare[], SongVersionCompare[]] => {
	const versionBeforeMap: PlaylistVersionMap = {};
	versionBefore.songs.forEach((song) => {
		versionBeforeMap[song.id] = song;
	});

	const versionAfterMap: PlaylistVersionMap = {};
	versionAfter.songs.forEach((song) => {
		versionAfterMap[song.id] = song;
	});

	const versionBeforeCompared: SongVersionCompare[] = Object.keys(versionBeforeMap).map((id) => {
		// Song exists in both before and after version
		if (id in versionAfterMap) {
			return { ...versionBeforeMap[id], status: SongVersionStatus.NoChange };
		}
		// Song was in before version, but not in after version, was removed
		return { ...versionBeforeMap[id], status: SongVersionStatus.Removed };
	});

	const versionAfterCompared: SongVersionCompare[] = Object.keys(versionAfterMap).map((id) => {
		// Song exists in both before and after version
		if (id in versionBeforeMap) {
			return { ...versionAfterMap[id], status: SongVersionStatus.NoChange };
		}
		// Song is in after version, but not in before version, was added
		return { ...versionAfterMap[id], status: SongVersionStatus.Added };
	});

	return [versionBeforeCompared, versionAfterCompared];
};
