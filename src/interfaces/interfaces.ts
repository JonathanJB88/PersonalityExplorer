export interface TestQ {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  id: number;
  points: number;
  label: string;
}

export interface Result {
  id: number;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Social {
  id?: number;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Features {
  id: number;
  title: string;
  description: string;
}

export interface Testimonals {
  id: number;
  name: string;
  picture: string;
  quote: string;
}
