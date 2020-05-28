import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export const useSlideInAnimation = (
  threshold: number,
  element: string,
  triggerOnce: boolean
): any => {
  const [ref, inView] = useInView({ threshold, triggerOnce });
  if (inView) {
    gsap.to(element, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      stagger: {
        amount: 0.3,
      },
    });
  }

  return ref;
};

export const useFadeInAnimation = (
  threshold: number,
  element: string,
  hasAnimated: boolean
): any => {
  const [ref, inView] = useInView({ threshold });
  let delay = 0.75;

  if (hasAnimated) delay = 0;

  if (inView) {
    gsap.to(element, {
      delay,
      duration: 0.75,
      opacity: 1,
      ease: 'power2.out',
      stagger: {
        amount: 0.6,
      },
    });
  }

  return ref;
};
