import { Minus, Plus } from 'lucide-react';

import { m } from '@/paraglide/messages.js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const items = [
    {
      key: 'harness',
      question: m['landing.faq.harness.question'](),
      answer: m['landing.faq.harness.answer'](),
    },
    {
      key: 'desktop',
      question: m['landing.faq.desktop.question'](),
      answer: m['landing.faq.desktop.answer'](),
    },
    {
      key: 'install',
      question: m['landing.faq.install.question'](),
      answer: m['landing.faq.install.answer'](),
    },
    {
      key: 'model',
      question: m['landing.faq.model.question'](),
      answer: m['landing.faq.model.answer'](),
    },
    {
      key: 'compare',
      question: m['landing.faq.compare.question'](),
      answer: m['landing.faq.compare.answer'](),
    },
    {
      key: 'free',
      question: m['landing.faq.free.question'](),
      answer: m['landing.faq.free.answer'](),
    },
    {
      key: 'contribute',
      question: m['landing.faq.contribute.question'](),
      answer: m['landing.faq.contribute.answer'](),
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-base leading-6 font-bold">
          {m['landing.faq.title']()}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-8">
          {m['landing.faq.description']()}
        </p>

        <Accordion className="mt-8 gap-6">
          {items.map((item) => (
            <AccordionItem key={item.key} value={item.key} className="border-0">
              <AccordionTrigger className="cursor-pointer justify-start gap-4 rounded-none border-0 py-0 text-left text-[15px] leading-6 font-medium hover:no-underline focus-visible:ring-1 [&>[data-slot=accordion-trigger-icon]]:hidden">
                <span className="relative size-6 shrink-0" aria-hidden="true">
                  <Plus className="text-muted-foreground absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 group-aria-expanded/accordion-trigger:hidden" />
                  <Minus className="text-muted-foreground absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 group-aria-expanded/accordion-trigger:block" />
                </span>
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-3 pr-3 pb-8 pl-10 text-[15px] leading-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
