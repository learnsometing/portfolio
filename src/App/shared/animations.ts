import gsap from 'gsap';

export const slideUp = (element: string): void => {
  gsap.to(element, {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
    stagger: {
      amount: 0.6,
    },
  });
};

export const fadeIn = (element: string, delay: number): void => {
  gsap.to(element, {
    delay,
    duration: 0.75,
    opacity: 1,
    ease: 'power2.out',
    stagger: {
      amount: 0.6,
    },
  });
};
