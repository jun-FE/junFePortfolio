import { ArrowDownOutlined } from '@ant-design/icons';
import { useDeviceStore } from '@/stores/deviceStore';
import clsx from 'clsx';
import { useScrollToSection } from '@/hooks/useScrollToSection';

const Intro = () => {
  const { activeDevice } = useDeviceStore();
  const scrollToSection = useScrollToSection();
  return (
    <div className="h-screen w-full pt-[80px]" id="intro">
      <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col gap-4 items-center justify-center">
        <h1
          className={clsx(
            'font-bold text-center',
            activeDevice === 'mobile' ? 'text-[40px]' : 'text-[50px]'
          )}
        >
          안녕하세요 {activeDevice === 'mobile' && <br />}프론트 개발자{' '}
          {activeDevice === 'mobile' && <br />}이영준입니다
        </h1>
        <div className="py-[20px]">
          <p className="text-[10px] font-bold">
            Frontend Developer Frontend Developer Frontend Developer
            {activeDevice !== 'mobile' &&
              'Frontend Developer Frontend Developer'}
          </p>
        </div>
        <p className="text-2xl flex items-center gap-2">
          <span className="font-bold text-[30px]">리액트</span> 개발자로 경력을
          쌓으며
          {activeDevice !== 'mobile' && (
            <>
              <span className="font-bold text-[30px]">웹 서비스</span>
              <span>를 개발하고 있습니다.</span>
            </>
          )}
        </p>
        {activeDevice === 'mobile' && (
          <p className="text-2xl flex items-center gap-2">
            <span className="font-bold text-[30px]">웹 서비스</span>를 개발하고
            있습니다.
          </p>
        )}
        <div
          className={clsx(
            activeDevice === 'mobile' ? 'text-[20px] pt-[10px]' : 'text-2xl',
            'text-center'
          )}
        >
          반응형 웹, 데이터 관리, 챗봇과 {activeDevice === 'mobile' && <br />}AI
          서비스 개발등
          {activeDevice === 'mobile' && <br />}
          다양한 분야를 경험했습니다.
        </div>
        <div className="py-[20px]">
          <div className="w-[375px] max-w-full h-[5px] bg-black" />
        </div>
        <div className="pb-[50px]">
          아래에서 저의 경력과 프로젝트를 확인해보세요
        </div>
        <div className="h-[50px]">
          <button
            onClick={() => scrollToSection('skills')}
            className="flex flex-col items-center hover:bg-black hover:text-white hover:mt-[10px] transition-all duration-500 p-[8px] rounded-full"
          >
            <ArrowDownOutlined className="text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
