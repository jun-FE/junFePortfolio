import type { SkillCategory, SkillSubCategory } from '@/type/type';
import { StarOutlined } from '@ant-design/icons';

const SkillsBox = ({ skill }: { skill: SkillCategory }) => {
  const SubCategoryMap = skill.subCategories.map((subCategory) => (
    <SubCategory key={subCategory.id} subCategory={subCategory} />
  ));
  return (
    <div className="w-full bg-black p-4 rounded-[10px] rounded-tl-none">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-[10px]">
        {SubCategoryMap}
      </div>
    </div>
  );
};

export default SkillsBox;
const SubCategory = ({ subCategory }: { subCategory: SkillSubCategory }) => {
  return (
    <div>
      <div className="text-xl font-bold pb-2">{subCategory.title}</div>
      <div className="flex flex-wrap gap-2">
        {subCategory.skills.map((skill) => (
          <div
            className="inline-flex items-center gap-2 bg-black p-2 rounded-[10px]"
            key={skill.id}
          >
            <div className="text-white font-bold">{skill.name}</div>
            <div className="bg-white text-black px-2 rounded-[10px]">
              {Array.from({ length: skill.level }).map((_, index) => (
                <StarOutlined className="w-4 h-4" key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
