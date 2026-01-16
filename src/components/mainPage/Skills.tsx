import SkillsBox from '@/components/Skills/SkillsBox';
import { skillList } from '@/data/list';
import { useDeviceStore } from '@/stores/deviceStore';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useState } from 'react';
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const { activeDevice } = useDeviceStore();

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
    <div
      className={clsx(
        'h-screen w-full bg-white px-[5px]',
        activeDevice === 'mobile' ? ' pt-[30px]' : 'pt-[80px]'
      )}
      id="skills"
    >
      <div
        className={clsx(
          'max-w-[1024px] w-full h-screen mx-auto flex flex-col gap-4 items-center justify-start',
          activeDevice === 'mobile'
            ? 'mt-[0px] flex items-center justify-center'
            : 'mt-[60px]'
        )}
      >
        <div className="w-full">
          <div className="flex justify-between items-end">
            <div className="text-2xl font-bold bg-black text-white p-4 rounded-t-[10px] inline-block">
              {skillList[activeSkill].title}
            </div>
            <div
              className={clsx(
                'flex items-center gap-10 pb-[10px]',
                activeDevice === 'mobile' ? 'gap-5 px-[10px] ' : 'gap-10'
              )}
            >
              <button
                className="p-[8px] rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => handleActiveSkill(activeSkill - 1)}
              >
                <LeftOutlined
                  className={clsx(
                    activeDevice === 'mobile' ? 'text-[25px]' : 'text-[35px]'
                  )}
                />
              </button>
              <button
                className="p-[8px] rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => handleActiveSkill(activeSkill + 1)}
              >
                <RightOutlined
                  className={clsx(
                    activeDevice === 'mobile' ? 'text-[25px]' : 'text-[35px]'
                  )}
                />
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
