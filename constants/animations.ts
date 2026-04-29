export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.8, 0.25, 1]
    }
  }
};

export const orbitConfigs = [
  { radius: 190, duration: 60, direction: 1, color: "#b8836a" },
  { radius: 155, duration: 50, direction: -1, color: "#948b82" },
  { radius: 120, duration: 40, direction: 1, color: "#b8836a" },
  { radius: 85, duration: 30, direction: -1, color: "#948b82" },
  { radius: 55, duration: 25, direction: 1, color: "#b8836a" },
];
