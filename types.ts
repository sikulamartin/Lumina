export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}