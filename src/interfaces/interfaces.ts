export interface TestQ {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  id: number;
  value: Value;
  label: string;
}

export enum Value {
  A = 'A',
  B = 'B',
}

export interface Result {
  id: number;
  label: string;
  description: string;
}

export interface Scoring {
  id: number;
  value: Value;
  points: number;
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
