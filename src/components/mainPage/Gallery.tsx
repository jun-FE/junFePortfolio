import { galleryList } from '@/data/list';
import type { GalleryItemType } from '@/type/type';
import { useState, useEffect } from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen w-full bg-white py-16" id="gallery">
      <div className="max-w-[1024px] w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Portfolio Gallery</h1>
          <p className="text-xl text-gray-600">
            제가 개발한 웹 서비스들의 스크린샷과 상세 정보입니다
          </p>
        </div>

        <div className="space-y-16">
          {galleryList.map((project: GalleryItemType) => (
            <GalleryItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({ project }: { project: GalleryItemType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 border-b border-gray-200 pb-16">
      {/* 이미지 섹션 */}
      <div className="lg:w-1/2">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          {/* 메인 이미지 */}
          <div
            className="aspect-video bg-gray-300 cursor-pointer"
            style={{
              backgroundImage: `url(${project.images[currentImageIndex]})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label={`${project.title} - 이미지 ${currentImageIndex + 1}`}
            onClick={openModal}
          />

          {/* 이미지 네비게이션 (이미지가 여러 개인 경우) */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                →
              </button>

              {/* 도트 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* 정보 섹션 */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        <div>
          {/* 제목 */}
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

          {/* 설명 */}
          <div className="space-y-2 mb-6">
            {project.description.map((desc, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                • {desc}
              </p>
            ))}
          </div>

          {/* 기술 스택 */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">기술 스택:</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 링크 버튼들 */}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black px-6 py-2 rounded-lg hover:text-black hover:bg-white transition-colors font-semibold"
            >
              사이트 보기 →
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>

            {/* 확대된 이미지 */}
            <div
              className="w-full h-full bg-gray-800"
              style={{
                backgroundImage: `url(${project.images[currentImageIndex]})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* 모달 내 이미지 네비게이션 */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all text-xl"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all text-xl"
                >
                  →
                </button>

                {/* 모달 도트 인디케이터 */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
