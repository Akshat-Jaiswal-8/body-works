import { AnimatePresence, motion } from 'framer-motion';
import { JSX } from 'react';

const Transition = ({ Component }: { Component: JSX.Element }) => {
  return (
    <div>
      <AnimatePresence mode='popLayout'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'backIn' }}>
          {Component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
