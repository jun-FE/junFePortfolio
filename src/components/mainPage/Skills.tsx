import SkillsBox from '@/components/Skills/SkillsBox';
import { skillList } from '@/data/list';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const handleActiveSkill = (index: number) => {
    if (index < 0) {
      setActiveSkill(skillList.length - 1);
    } else if (index >= skillList.length) {
      setActiveSkill(0);
    } else {
      setActiveSkill(index);
    }
  };
  return (
    <div className="h-screen w-full bg-white pt-[80px]" id="skills">
      <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col gap-4 items-center justify-start mt-[60px]">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-black text-white p-4 rounded-t-[10px] inline-block">
              {skillList[activeSkill].title}
            </div>
            <div className="flex items-center gap-10 pb-[10px]">
              <button
                className="p-[8px] rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => handleActiveSkill(activeSkill - 1)}
              >
                <LeftOutlined className="text-[35px]" />
              </button>
              <button
                className="p-[8px] rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => handleActiveSkill(activeSkill + 1)}
              >
                <RightOutlined className="text-[35px]" />
              </button>
            </div>
          </div>
          <SkillsBox
            key={skillList[activeSkill].id}
            skill={skillList[activeSkill]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
