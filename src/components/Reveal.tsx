import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0, className = '', ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [isCompactScreen, setIsCompactScreen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 720px)');
    const update = () => setIsCompactScreen(query.matches);

    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  if (reduceMotion || isCompactScreen) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, delay: Math.min(delay, 0.18), ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
