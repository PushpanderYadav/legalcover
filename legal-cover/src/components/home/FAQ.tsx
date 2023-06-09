import PropTypes from 'prop-types'
import React from 'react';

interface AccordionItemProps {
    question: string;
    content: string;
  }

export default function FAQ() {
    return (
      <div className="container mt-4">
        <h1 className="mb-3 text-center">Frequently asked questions</h1>
        <div className="accordion" id="accordionExample">
          <AccordionItem
            question="Can I change my plan later?"
            content="Content for accordion item #1."
          />
          <AccordionItem
            question="What is your cancellation policy?"
            content="Content for accordion item #2."
          />
          <AccordionItem
            question="Can other info be added to an invoice?"
            content="Content for accordion item #3."
          />
          <AccordionItem
            question="How does billing work?"
            content="Content for accordion item #4."
          />
          <AccordionItem
            question="How to contact with you?"
            content="Content for accordion item #5."
          />
        </div>
      </div>
    );
  };
  
  const AccordionItem: React.FC<AccordionItemProps> = ({ question, content }) => {
    const itemId = question.replace(/\s+/g, '').toLowerCase();
  
    return (
      <div className="accordion-item">
        <h2 className="mb-0">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${itemId}`}
            aria-expanded="false"
            aria-controls={itemId}
          >
            {question}
          </button>
        </h2>
        <div
          id={itemId}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${itemId}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{content}</div>
        </div>
      </div>
    );
  };


  AccordionItem.propTypes = {
    question: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };