import rss from '@astrojs/rss';
import { getAllArticles, getArticleUrl, getCategoryLabel } from '../utils/content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getAllArticles();

  return rss({
    title: 'Faktum AI',
    description:
      'Suomenkielistä tekoälyuutisointia, analyysia ja käytännön AI-rakentamista.',
    site: context.site ?? 'https://www.faktum-ai.com',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: getArticleUrl(article),
      categories: [getCategoryLabel(article), ...article.data.tags],
    })),
    customData: '<language>fi-fi</language>',
  });
}
