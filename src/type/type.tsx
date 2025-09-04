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

export type Skill = {
  id: number;
  name: string;
  level: number;
};

export type SkillSubCategory = {
  id: number;
  title: string;
  skills: Skill[];
};

export type SkillCategory = {
  id: number;
  title: string;
  subCategories: SkillSubCategory[];
};
