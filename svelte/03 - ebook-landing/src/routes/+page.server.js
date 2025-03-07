import fs from 'fs/promises';
import path from 'path';

export const load = async () => {
	try {
		const filePath = path.resolve('src/lib/data/data.json');
		const fileContents = await fs.readFile(filePath, 'utf-8');
		const data = JSON.parse(fileContents);

		return data;
	} catch (error) {
		return {
			status: 404,
			error: error
		};
	}
};
