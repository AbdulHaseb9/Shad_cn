import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navigatetohome from "@/components/ui/navigatetohome";

export default function Accordian() {
  const faq = [
    {
      question: "Is it free?",
      answer: "Yes its free",
    },
    {
      question: "Is it easy to use?",
      answer: "Yes its easy to use",
    },
    {
      question: "can i use it",
      answer: "Yes you can use it",
    },
  ];
  return (
    <div className="h-screen w-full">
      {/* Component Name */}
      <h1 className="text-xl text-center py-4">Shadcn Accordian</h1>
      {/* Component */}
      <div className="w-full px-12">
        {faq.map(({ question, answer }) => (
          <Accordion key={question} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{question}?</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <Navigatetohome />
    </div>
  );
}
