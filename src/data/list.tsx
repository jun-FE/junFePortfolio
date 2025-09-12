import type {
  CareerItemWrapperType,
  CompanyItemType,
  GalleryItemType,
} from '@/type/type';
import type { SkillCategory } from '@/type/type';

// Import all images
import mathMore1 from '@/assets/images/mathMore1.png';
import mathMore2 from '@/assets/images/mathMore2.png';
import mathMore3 from '@/assets/images/mathMore3.png';
import mathMore4 from '@/assets/images/mathMore4.png';
import mathMore5 from '@/assets/images/mathMore5.png';
import mathMore6 from '@/assets/images/mathMore6.png';
import mathMore7 from '@/assets/images/mathMore7.png';
import mathMore8 from '@/assets/images/mathMore8.png';
import creator1 from '@/assets/images/creator1.png';
import creator2 from '@/assets/images/creator2.png';
import creator3 from '@/assets/images/creator3.png';
import creator4 from '@/assets/images/creator4.png';
import creator5 from '@/assets/images/creator5.png';
import creator6 from '@/assets/images/creator6.png';
import intro1 from '@/assets/images/intro1.png';
import intro2 from '@/assets/images/intro2.png';
import intro3 from '@/assets/images/intro3.png';
import intro4 from '@/assets/images/intro4.png';
import intro5 from '@/assets/images/intro5.png';
import intro6 from '@/assets/images/intro6.png';
import intro7 from '@/assets/images/intro7.png';
import intro8 from '@/assets/images/intro8.png';
import azit1 from '@/assets/images/azit1.png';
import azit2 from '@/assets/images/azit2.png';
import azit3 from '@/assets/images/azit3.png';
import azit4 from '@/assets/images/azit4.png';
import wms1 from '@/assets/images/wms1.png';
import wms2 from '@/assets/images/wms2.png';
import wms3 from '@/assets/images/wms3.png';
export const careerList: CareerItemWrapperType[] = [
  {
    careerList: [
      {
        id: 1,
        title: '유네스코 교육 박람회 신청 사이트 제작',
        description: ['i18n을 사용하여 다국어 지원 사이트 제작', '반응형 작업'],
        stack: [
          'React',
          'MUI',
          'Recoil',
          'TypeScript',
          'Git',
          'i18n',
          'Restful API',
        ],
      },
      {
        id: 2,
        title: '플랫폼 사이트 제작',
        description: [
          '쉐어하우스 매칭 플랫폼, 연수구 사회적기업 연결 플랫폼 개발',
          '백엔드 API 설계와 연동을 염두에 두고, CRUD 중심의 기능 구조를 바탕으로 웹 페이지를 구현',
          '디자이너 및 백엔드 개발자와의 협업을 통해 퍼블리싱과 API 연동을 모두 수행',
          '반응형 작업',
        ],
        stack: ['React', 'MUI', 'Recoil', 'TypeScript', 'Git', 'Restful API'],
      },
      {
        id: 3,
        title: '회사 웹사이트 외주제작',
        description: [
          '외식, 교육, 조경 등 다양한 업종의 클라이언트 사이트를 빠르게 제작',
          '관리자 페이지 제작',
          '디자이너 및 백엔드 개발자와의 협업을 통해 퍼블리싱과 API 연동을 모두 수행',
          '반응형 작업',
        ],
        stack: ['React', 'MUI', 'Recoil', 'TypeScript', 'Git', 'Restful API'],
      },
    ],
  },

  {
    careerList: [
      {
        id: 4,
        title: 'PG결제 데이터 관리자 사이트',
        description: [
          '관리자 사이트 인수인계 받아 개발 마무리 작업',
          '유지보수 작업',
          '신입 개발자 멘토링',
          '기능위주 개발 진행',
        ],
        stack: [
          'React',
          'MUI',
          'Recoil',
          'TypeScript',
          'GitLab',
          'Restful API',
        ],
      },
      {
        id: 5,
        title: '라이더 일보험 사이트 제작',
        description: [
          '협력업체와 협업하여 보험사 api 활용 일보험 가입 사이트 제작',
          '프론트 1인 개발',
          '반응형 작업',
        ],
        stack: [
          'React',
          'MUI',
          'Recoil',
          'TypeScript',
          'GitLab',
          'Restful API',
        ],
      },
    ],
  },

  {
    careerList: [
      {
        id: 6,
        title: '여행에이전트 트립텝 프로젝트 (진행중)',
        description: [
          '채팅기반 여행지 추천 및 일정생성 프로젝트',
          '에이전트 대화형 UX 제작',
          '반응형 작업',
        ],
        stack: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'zustand',
          'Vite',
          'Slack',
          'Jira',
          'react-query',
        ],
      },
      {
        id: 7,
        title: '하루 수학 한 문제 메쓰모어 프로젝트',
        description: [
          '기획, 디자인, 백엔드와 협업하여 프론트 프로젝트 진행',
          '수학교사 챗봇 개발',
          '반응형 작업',
          'Latex, Canvas 활용하여 문제풀이 페이지 제작',
        ],
        stack: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'zustand',
          'Vite',
          'Slack',
          'Jira',
          'react-query',
          'Latex',
        ],
      },
      {
        id: 8,
        title: '동아, ybm ai튜터 외주개발 프로젝트',
        description: [
          '제작 중이던 페이지 인수인계 받아 마무리 작업',
          '수학 교사용 페이지 컴포넌트 제작',
          'AI 중심의 대화형 UX 설계 ',
        ],
        stack: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'zustand',
          'Vite',
          'Slack',
          'Jira',
          'react-query',
          'Latex',
        ],
      },
    ],
  },
  {
    careerList: [
      {
        id: 9,
        title: '물류 관리 시스템 퍼블리싱작업',
        description: ['리액트 기반 페이지 제작'],
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recoil', 'GitLab'],
      },
      {
        id: 10,
        title: '게임 스트리머 통계 사이트 사용자 페이지',
        description: [
          '스트리머별 게임 진행시간, 방송횟수 등 차트 활용 통계사이트',
          '구매 토큰사용, 유로 콘텐츠 접근 권한 제어 기능',
          'i18n 활용 다국어 지원',
        ],
        stack: [
          'React',
          'TypeScript',
          'MUI',
          'Recoil',
          'Git',
          'i18n',
          'Restful API',
        ],
      },
      {
        id: 11,
        title: '웹사이트 리뉴얼',
        description: ['프론트 리뉴얼 작업'],
        stack: ['html', 'CSS', 'jQuery'],
      },
    ],
  },
];

export const companyList: CompanyItemType[] = [
  {
    id: 1,
    name: '(주)5웨이크업',
    date: '2019.11 - 2022.02',
    position: 'Frontend Developer',
    team: '개발팀',
    work: '플랫폼 제작, 외주 제작',
  },
  {
    id: 2,
    name: '주식회사 고고에프앤디',
    date: '2023.03 - 2023.09',
    position: 'Frontend Developer',
    team: '개발팀',
    work: 'PG관리자 페이지 제작, 일보험 가입 사이트 제작',
  },
  {
    id: 3,
    name: '라이브데이터',
    date: '2023.09 - 재직중',
    position: 'Frontend Developer',
    team: '개발팀',
    work: '플랫폼 제작, 외주 제작',
  },
  {
    id: 4,
    name: '외주업무',
    date: ' - ',
    position: 'Frontend Developer',
    team: '개발팀',
    work: '플랫폼 제작, 사이트 리뉴열, 다국어 지원',
  },
];

export const skillList: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend Development',
    subCategories: [
      {
        id: 1,
        title: '언어 & 프레임워크',
        skills: [
          { id: 1, name: 'React', level: 5 },
          { id: 2, name: 'TypeScript', level: 5 },
          { id: 3, name: 'JavaScript', level: 5 },
        ],
      },
      {
        id: 2,
        title: '상태관리',
        skills: [
          { id: 4, name: 'Recoil', level: 4 },
          { id: 5, name: 'Zustand', level: 4 },
        ],
      },
      {
        id: 3,
        title: 'Styling',
        skills: [
          { id: 6, name: 'Tailwind CSS', level: 5 },
          { id: 7, name: 'MUI', level: 4 },
          { id: 30, name: 'ANT Design', level: 5 },
          { id: 8, name: 'CSS/SCSS', level: 5 },
        ],
      },
      {
        id: 4,
        title: '빌드 & 환경',
        skills: [
          { id: 9, name: 'Vite', level: 5 },
          { id: 10, name: 'Next.js', level: 3 },
        ],
      },
      {
        id: 5,
        title: '기타',
        skills: [
          { id: 11, name: 'Canvas', level: 3 },
          { id: 12, name: 'LaTeX', level: 4 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Collaboration & Tools',
    subCategories: [
      {
        id: 6,
        title: '협업 & 형상관리',
        skills: [
          { id: 13, name: 'GitHub', level: 5 },
          { id: 14, name: 'GitLab', level: 5 },
          { id: 15, name: 'Jira', level: 5 },
          { id: 16, name: 'Slack', level: 5 },
          { id: 17, name: 'Figma', level: 5 },
        ],
      },
      {
        id: 7,
        title: '배포 & 운영',
        skills: [{ id: 18, name: 'Vercel', level: 2 }],
      },
      {
        id: 8,
        title: '데이터 연동',
        skills: [
          { id: 20, name: 'RESTful API', level: 5 },
          { id: 21, name: 'react-query', level: 3 },
        ],
      },
      {
        id: 9,
        title: '국제화',
        skills: [{ id: 22, name: 'i18n', level: 4 }],
      },
    ],
  },
];

export const galleryList: GalleryItemType[] = [
  {
    id: 1,
    title: '메쓰모어 - AI 수학 학습 서비스',
    images: [
      mathMore1,
      mathMore2,
      mathMore3,
      mathMore4,
      mathMore5,
      mathMore6,
      mathMore7,
      mathMore8,
    ],
    description: [
      '챗봇 활용 AI 수학 학습 서비스',
      '에이전트와 대화하며 힌트 제공 및 문제 풀이 지도',
      '실시간 채팅 UI/UX 구현',
    ],
    link: 'https://mathmore.ai/',
    githubLink: '',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'zustand',
      'React Query',
      'Vite',
      'LaTeX',
      'Canvas',
    ],
  },
  {
    id: 5,
    title: '물류관리 시스템',
    images: [wms1, wms2, wms3],
    description: ['물류 관리 시스템', '퍼블리싱 작업', '데이터 관리'],
    link: '',
    githubLink: '',
    stack: ['React', 'Tailwind CSS', 'MUI'],
  },
  {
    id: 4,
    title: '쉐어 하우스 플랫폼',
    images: [azit1, azit2, azit3, azit4],
    description: [
      '쉐어 하우스 매칭 플랫폼',
      '입주자와 운영자 연결',
      '에어비엔비 지향 디자인 적용',
      '반응형 작업',
    ],
    link: '',
    githubLink: '',
    stack: ['React', 'MUI', 'Recoil', 'TypeScript', 'Restful API'],
  },
  {
    id: 2,
    title: '스트리머 통계 분석 플랫폼',
    images: [creator1, creator2, creator3, creator4, creator5, creator6],
    description: [
      '토큰 기반 유료 콘텐츠 접근 제어',
      '다국어 지원',
      '다양한 차트 활용',
    ],
    link: '',
    githubLink: '',
    stack: ['React', 'TypeScript', 'MUI', 'i18n', 'Restful API', 'Recoil'],
  },
  {
    id: 3,
    title: '회사 소개 서비스',
    images: [intro1, intro2, intro3, intro4, intro5, intro6, intro7, intro8],
    description: ['반응형 지원', '웹 접근성 준수'],
    link: '',
    githubLink: '',
    stack: ['React', 'TypeScript', 'MUI', 'Recoil', '웹접근성'],
  },
  // {
];
