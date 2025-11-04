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

async function getCourseNavItems(featuredOnly: boolean = false): Promise<NavSubPage[]> {
  let courses = await getCollection('courses');

  if (featuredOnly) {
    courses = courses.filter(course => course.data.featured);
  }

  courses.sort((a, b) => a.data.title.localeCompare(b.data.title));

  const navItems = courses.map(course => ({
    title: course.data.title,
    href: `/courses/${course.slug}`
  }));

  // Add "View all courses" link if showing featured only
  if (featuredOnly && navItems.length > 0) {
    navItems.push({
      title: '...',
      href: '/courses'
    });
  }

  return navItems;
}

export async function getNavItems(featuredCoursesOnly: boolean = false): Promise<NavItem[]> {
  const courseSubPages = await getCourseNavItems(featuredCoursesOnly);

  return [
    {
      title: 'Disc Golf',
      href: '/disc-golf',
      subPages: [
        { title: 'Try it', href: '/disc-golf/try' },
        { title: 'Get hooked', href: '/disc-golf/get-hooked' },
        { title: 'More info', href: '/disc-golf/more' }
      ]
    },
    {
      title: 'Club',
      href: '/club',
      subPages: [
        { title: 'Membership', href: '/club/membership' },
        { title: 'Pro Shop', href: '/club/shop' },
        { title: 'Board', href: '/club/board' }
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
    }
  ];
}