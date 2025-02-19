import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface Accordion {
  content: ReactNode;
  title: string;
}

type Props =
  | {
      accordions: Accordion[];
      className?: string;
      defaultValue?: string;
      type: 'single';
    }
  | {
      accordions: Accordion[];
      className?: string;
      defaultValue?: string[];
      type: 'multiple';
    };

const FaqAccordions = ({ accordions, ...props }: Props) => {
  return (
    <AccordionPrimitive.Root {...props}>
      {accordions.map((accordion, i) => (
        <AccordionPrimitive.Item key={i} value={accordion.title}>
          <AccordionPrimitive.Header className="flex pb-5">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-[9.5px] bg-[#e6e6e6] p-4 rounded-lg transition-all [&[data-state=open]>svg]:rotate-180">
              {accordion.title}
              <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="faq-accordian-content data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mb-4 overflow-hidden transition-all ">
           { accordion.content && <div className='p-5' dangerouslySetInnerHTML={{__html: accordion.content }} /> }
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { FaqAccordions };
