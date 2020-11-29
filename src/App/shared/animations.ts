import gsap from 'gsap';

export const slideUp = (element: string, staggerAmount: number): void => {
  gsap.to(element, {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
    stagger: {
      amount: staggerAmount,
    },
  });
};

export const fadeIn = (element: string, delay: number, stagger = 0.6): void => {
  gsap.to(element, {
    delay,
    duration: 0.75,
    opacity: 1,
    ease: 'power2.out',
    stagger: {
      amount: stagger,
    },
  });
};
