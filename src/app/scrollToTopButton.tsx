'use client' 
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <> 
      <button 
        className={`fixed right-4 bottom-4 p-3 bg-violet-800 rounded-full shadow-lg ${isVisible ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-center">
          <FaArrowUp className="text-white" />
        </div>
        <span className="text-white">Topo</span>
      </button>
    </>
    
  );
};

export default ScrollToTopButton;
