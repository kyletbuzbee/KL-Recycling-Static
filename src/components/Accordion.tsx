import { useState, FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  children: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="mt-4 text-gray-600"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question}>
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
