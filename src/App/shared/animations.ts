import gsap from 'gsap';

export const fadeInAndSlideUp = (element: any): void => {
  // gsap.to(element, {
  //   duration: 1,
  //   y: -100,
  //   ease: 'power2.out',
  //   stagger: {
  //     amount: 0.3,
  //   },
  // });
  gsap.fromTo(
    element,
    { y: 100 },
    {
      duration: 1,
      y: 0,
      ease: 'power2.out',
      stagger: {
        amount: 0.3,
      },
    }
  );
};
