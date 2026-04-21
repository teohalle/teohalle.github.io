import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function SectionWrapper({ children, id, className }) {
  return (
    <motion.section
      id={id}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx("min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 relative", className)}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
}