import { getCollection } from 'astro:content';

export interface NavSubPage {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  subPages?: NavSubPage[];
}

async function getCourseNavItems(): Promise<NavSubPage[]> {
  const courses = await getCollection('courses');
  courses.sort((a, b) => a.data.title.localeCompare(b.data.title));

  return courses.map(course => ({
    title: course.data.title,
    href: `/courses/${course.slug}`
  }));
}

export async function getNavItems(): Promise<NavItem[]> {
  const courseSubPages = await getCourseNavItems();

  return [
    {
      title: 'Disc Golf',
      href: '/disc-golf'
    },
    {
      title: 'Club',
      href: '/club',
      subPages: [
        { title: 'Membership', href: '/club/membership' },
        { title: 'Contact Us', href: '/club/contact' },
        { title: 'MDGC Board', href: '/club/board' }
      ]
    },
    {
      title: 'Courses',
      href: '/courses',
      subPages: courseSubPages
    },
    {
      title: 'Events',
      href: '/events',
      subPages: [
        { title: 'Social Days', href: '/events/social' },
        { title: 'Tournaments', href: '/events/tournaments' }
      ]
    },
    {
      title: 'Shop',
      href: '/shop'
    }
  ];
}