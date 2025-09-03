import { ArrowDownOutlined } from '@ant-design/icons';

const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="h-screen w-full bg-white pt-[80px]" id="intro">
      <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col gap-4 items-center justify-center">
        <h1 className="text-[50px] font-bold">
          안녕하세요 프론트 개발자 이영준입니다.
        </h1>
        <div className="py-[20px]">
          <p className="text-[10px] font-bold">
            Frontend Developer Frontend Developer Frontend Developer Frontend
            Developer Frontend Developer
          </p>
        </div>
        <p className="text-2xl flex items-center gap-2">
          <span className="font-bold text-[30px]">리액트</span> 개발자로 경력을
          쌓으며 <span className="font-bold text-[30px]">웹 서비스</span>를
          개발하고 있습니다.
        </p>
        <div className="text-2xl">
          반응형 웹, 데이터 관리, 챗봇과 AI 서비스 개발등 다양한 분야를
          경험했습니다.
        </div>
        <div className="py-[20px]">
          <div className="w-[400px] h-[5px] bg-black" />
        </div>
        <div className="pb-[50px]">
          아래에서 저의 경력과 프로젝트를 확인해보세요
        </div>
        <div className="h-[50px]">
          <button
            onClick={() => scrollToSection('career')}
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
