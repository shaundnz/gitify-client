const playlistIds = [
	// Hot Country
	'37i9dQZF1DX1lVhptIYRda',
	// Wild Country
	'37i9dQZF1DX5mB2C8gBeUM',
	// *hits different*
	'37i9dQZF1DX6wk8dYln4y0',
	// Front Left
	'37i9dQZF1DX5WTH49Vcnqp',
	// dear diary
	'37i9dQZF1DX1vEe0OWx8Fn',
	// The Locker
	'37i9dQZF1DWYmDNATMglFU',
	// Vibe Check
	'37i9dQZF1DX9TriA5Rm2k8',
	// hyperpop
	'37i9dQZF1DX7HOk71GPfSw',
	// Pop Punk's Not Dead
	'37i9dQZF1DX1ewVhAJ17m4',
	// Top 50 - New Zealand
	'37i9dQZEVXbM8SIrkERIYl',
	// Top 50 - Global
	'37i9dQZEVXbMDoHDwVN2tF'
];

const res = await fetch(`${process.env.VITE_API_BASE_URL}/playlists`, {
	method: 'POST',
	body: JSON.stringify(playlistIds),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
		'X-API-Key': process.env.SECRET_API_KEY
	}
});

const jsonRes = await res.json();
console.log(jsonRes);

if (!res.ok) {
	throw Error('Something went wrong updating the playlist');
}
