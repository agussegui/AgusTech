import React, { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  animationType?: 'fade-in' | 'slide-in-right' | 'slide-in-left'; 
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, animationType = 'fade-in' }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={animationType}>
      {children}
    </div>
  );
};

export default FadeInSection;
