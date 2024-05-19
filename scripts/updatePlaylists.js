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
	'37i9dQZEVXbMDoHDwVN2tF',
	// Todays Top Hits
	'37i9dQZF1DXcBWIGoYBM5M'
];

const res = await fetch(`${process.env.VITE_API_BASE_URL}/playlists`, {
	method: 'POST',
	body: JSON.stringify(playlistIds),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
		'X-API-Key': process.env.SECRET_API_KEY
	}
});

if (!res.ok) {
	throw new Error('Something went wrong invoking the update playlist job');
}

const jsonRes = await res.json();
const jobId = jsonRes.jobId;

console.log(`Update playlist job triggered with id: ${jobId}`);

const getJobStatus = async () => {
	const jobStatusResponse = await fetch(`${process.env.VITE_API_BASE_URL}/jobstatus/${jobId}`, {
		headers: {
			'X-API-Key': process.env.SECRET_API_KEY
		}
	});

	const data = await jobStatusResponse.json();

	if (!jobStatusResponse.ok) {
		throw new Error(
			`Error getting job status. Status Code: ${jobStatusResponse.status}, Response: ${data}`
		);
	}

	console.log(`Polling jobId: ${data.jobId}, Status: ${data.status}`);

	return data.status;
};

const pollJobStatus = (interval, timeout) => {
	var endTime = Number(new Date()) + (timeout || 2000);
	interval = interval || 100;

	const checkJobCompleted = async () => {
		const status = await getJobStatus(jobId);

		if (status === 'SUCCESS') {
			console.log('Successfully updated playlists');
			return;
		}

		if (status === 'ERROR') {
			throw new Error(`Error occurred while updating playlists, jobId: ${jobId}`);
		}

		if (Number(new Date()) < endTime) {
			setTimeout(checkJobCompleted, interval);
		} else {
			throw new Error(`Failed to update playlist within the timeout: ${timeout} ms`);
		}
	};

	return checkJobCompleted();
};

await pollJobStatus(5000, 60000);
