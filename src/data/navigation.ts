import { getCollection } from 'astro:content';

export interface NavSubPage {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  image?: string;
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
      description: 'about the game',
      icon: 'basket',
      subPages: [
        { title: 'Try it', href: '/disc-golf/try', description: 'how to get started', icon: 'heroicons:rocket-launch' },
        { title: 'Get into it', href: '/disc-golf/grow', description: 'take it further', icon: 'heroicons:arrow-trending-up' }
      ]
    },
    {
      title: 'Club',
      href: '/club',
      description: 'about us',
      icon: 'heroicons:users',
      subPages: [
        { title: 'News', href: '/club/news', description: 'latest updates', icon: 'heroicons:newspaper' },
        { title: 'Shop', href: '/club/shop', description: 'buy discs, and more!', icon: 'heroicons:shopping-cart' },
        { title: 'Membership', href: '/club/membership', description: 'join us!', icon: 'heroicons:users' },
        { title: 'Board', href: '/club/board', description: 'meet the team', icon: 'heroicons:user-group' }
      ]
    },
    {
      title: 'Courses',
      href: '/courses',
      description: 'where to play',
      icon: 'heroicons:map-pin',
      subPages: courseSubPages
    },
    {
      title: 'Events',
      href: '/events',
      description: 'what is happening',
      icon: 'heroicons:calendar',
      subPages: [
        { title: 'Social Days', href: '/events/social', description: 'our regular meetups', icon: 'heroicons:heart' },
        { title: 'Tournaments', href: '/events/tournaments', description: 'compete!', icon: 'heroicons:trophy' }
      ]
    }
  ];
}