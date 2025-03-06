import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.log(params);

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
			id: findArticle.id,
			blogPost: findArticle.text
		};
	}

	throw error(404, 'Article not found');
};
