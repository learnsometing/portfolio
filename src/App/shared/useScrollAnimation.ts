import { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const useScrollAnimation = (threshold: number): any => {
  const ref = useRef(null);
  const intersection = useIntersection(ref, { threshold: threshold });
  if (intersection && intersection.intersectionRatio > threshold) {
    gsap.to(ref.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
  }

  return ref;
};

export default useScrollAnimation;
