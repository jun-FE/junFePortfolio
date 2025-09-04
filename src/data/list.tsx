import type { CareerItemWrapperType, CompanyItemType } from '@/type/type';
import type { SkillCategory } from '@/type/type';
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
          { id: 3, name: 'JavaScript (ES6+)', level: 5 },
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
          { id: 8, name: 'CSS/SCSS', level: 4 },
        ],
      },
      {
        id: 4,
        title: '빌드 & 환경',
        skills: [
          { id: 9, name: 'Vite', level: 5 },
          { id: 10, name: 'Next.js (Prototype Experience)', level: 3 },
        ],
      },
      {
        id: 5,
        title: '기타',
        skills: [
          { id: 11, name: 'Framer Motion (Animation)', level: 3 },
          { id: 12, name: 'Canvas & LaTeX (문제 풀이 UI)', level: 4 },
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
          { id: 15, name: 'Jira', level: 4 },
          { id: 16, name: 'Slack', level: 5 },
          { id: 17, name: 'Figma', level: 4 },
        ],
      },
      {
        id: 7,
        title: '배포 & 운영',
        skills: [
          { id: 18, name: 'Vercel', level: 4 },
          { id: 19, name: 'Netlify', level: 4 },
        ],
      },
      {
        id: 8,
        title: '데이터 연동',
        skills: [
          { id: 20, name: 'RESTful API', level: 5 },
          { id: 21, name: 'react-query', level: 4 },
        ],
      },
      {
        id: 9,
        title: '국제화',
        skills: [{ id: 22, name: 'i18n', level: 4 }],
      },
    ],
  },
  {
    id: 3,
    title: 'Domain Experience',
    subCategories: [
      {
        id: 10,
        title: 'AI/에이전트',
        skills: [
          {
            id: 23,
            name: 'AI 에이전트 UX — 대화형 인터페이스 설계 및 구현',
            level: 4,
          },
        ],
      },
      {
        id: 11,
        title: '에듀테크',
        skills: [
          { id: 24, name: '수학 챗봇', level: 4 },
          { id: 25, name: 'LaTeX·Canvas 기반 문제풀이 페이지', level: 4 },
        ],
      },
      {
        id: 12,
        title: '금융/보험',
        skills: [
          { id: 26, name: 'PG 관리자 사이트', level: 4 },
          { id: 27, name: '보험 가입 프로세스', level: 4 },
        ],
      },
      {
        id: 13,
        title: '외주/플랫폼 제작',
        skills: [
          { id: 28, name: '다국어 지원 사이트', level: 4 },
          { id: 29, name: '플랫폼·기업 웹사이트 제작', level: 5 },
        ],
      },
    ],
  },
];
