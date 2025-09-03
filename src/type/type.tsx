export type StoryItemType = {
  id: number;
  title: string;
  description: string[];
  stack: string[];
};

export type CareerItemWrapperType = {
  careerList: CareerItemType[];
};
export type CareerItemType = {
  id: number;
  title: string;
  description: string[];
  stack: string[];
};

export type CompanyItemType = {
  id: number;
  name: string;
  date: string;
  position: string;
  team: string;
  work: string;
};
