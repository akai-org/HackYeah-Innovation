// QuizCard.tsx

import React, { useState } from "react";
import styles from "./QuizCard.module.scss";

import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
interface QuizCardProps {
  question: string;
  options: string[];
  isRadio: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, options, isRadio }) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOption((prev) => {
      const previos = prev ?? [];
      if (isRadio) {
        return [option];
      } else {
        if (previos.includes(option)) {
          return previos.filter((el: string) => el !== option);
        } else {
          return [...previos, option];
        }
      }
    });
  };

  return (
    <MDBCard
      className="bg-white text-dark my-5 mx-auto"
      style={{ borderRadius: "1rem", maxWidth: "800px" }}
    >
      <MDBCardBody className="p-5 d-flex flex-column  mx-auto w-100">
        <h2 className={styles.question}>{question}</h2>
        <div className={styles.options}>
          {options.map((option) => (
            <div key={option} className={styles.option}>
              {isRadio ? (
                <input
                  key={option}
                  type="radio"
                  id={option}
                  name="quizOption"
                  value={option}
                  checked={selectedOption?.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
              ) : (
                <input
                  key={option}
                  type="checkbox"
                  id={option}
                  name="quizOption"
                  value={option}
                  checked={selectedOption?.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
              )}
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
        <MDBBtn color="dark">Submit</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default QuizCard;
