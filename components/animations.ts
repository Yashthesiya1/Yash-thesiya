export const heroText = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.23, 0.74, 0.25, 0.99] as const } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, delay: i * 0.15, ease: [0.25, 0.8, 0.25, 1] as const },
  }),
};

