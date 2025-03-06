import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const bodyRequest = await request.json();

	console.log(bodyRequest);

	// Business logic -> send an email to the costumer
	//      and send them the bought ebook

	return json({ message: 'Email sent to the costumer, all good.' });
}
