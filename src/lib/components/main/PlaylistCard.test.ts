import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import PlaylistCard from './PlaylistCard.svelte';

describe('PlaylistCard.svelte', () => {
	it('should render', () => {
		const { getByText } = render(PlaylistCard, {
			title: 'My playlist',
			description: 'Playlist description'
		});
		expect(getByText('My playlist')).toBeInTheDocument();
		expect(getByText('Playlist description')).toBeInTheDocument();
	});
});
