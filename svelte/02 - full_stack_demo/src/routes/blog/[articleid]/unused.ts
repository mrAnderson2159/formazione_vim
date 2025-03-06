import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const fetchedArticles = [
		{
			id: '0',
			text: "This is the first article's text"
		},
		{
			id: '1',
			text: "This is the second article's text"
		}
	];

	const findArticle = fetchedArticles.find((article) => article.id === params.articleid);

	if (findArticle) {
		return {
			blogPost: findArticle.text
		};
	}

	throw error(404, 'Article not found');
};
