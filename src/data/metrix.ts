import fs from 'node:fs';
import path from 'node:path';

export interface MetrixEventInfo {
  id: string;
  name: string;
  date: string;
  time: string;
  courseName: string;
  courseId: string;
}

interface SeasonData {
  id: string;
  name: string;
  dateStart: string;
  dateEnd: string;
  eventCount: number;
  events: MetrixEventInfo[];
}

const DATA_DIR = path.resolve(process.cwd(), 'src/data/metrix/seasons');

export function getAllSeasonEvents(): MetrixEventInfo[] {
  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`No Metrix data found. Run: just fetch-metrix-season`);
  }

  const seasonFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
  const allEvents: MetrixEventInfo[] = [];

  for (const file of seasonFiles) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    const seasonData: SeasonData = JSON.parse(content);
    allEvents.push(...seasonData.events);
  }

  return allEvents;
}

export function getNextSocialDay() {
  const now = new Date();
  const futureEvents = getAllSeasonEvents()
    .map(e => ({
      id: e.id,
      name: e.name,
      date: new Date(e.date),
    }))
    .filter((e) => e.date >= now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return futureEvents.length > 0 ? futureEvents[0] : null;
}
