import { getCollection } from 'astro:content';

export async function getNextSocialDay() {
  const seasons = await getCollection('metrixSeasons');
  const now = new Date();

  const events = seasons.flatMap((season) => season.data.events);

  const futureEvents = events
    .map((e) => ({
      id: e.id,
      name: e.name,
      date: new Date(e.date),
    }))
    .filter((e) => e.date >= now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return futureEvents[0] || null;
}
