import { MetadataRoute } from 'next';

export default async function GET(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://thenerveclub.com';

	const staticPages = ['', 'about', 'terms', 'privacy'];

	return staticPages.map((path) => ({
		url: `${baseUrl}/${path}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'monthly',
		priority: path === '' ? 1.0 : 0.8,
	}));
}
