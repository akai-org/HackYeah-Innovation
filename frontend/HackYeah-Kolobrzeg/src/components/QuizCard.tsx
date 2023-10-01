// QuizCard.tsx

import React, { useState } from "react";
import styles from "./QuizCard.module.scss";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { QuizDataType } from "../store/QuizContexProvider";

const answersArray: { id: number; answer: any }[] = [];

const QuizCard: React.FC<QuizDataType> = ({ id, question, answers }) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const questionsArray = [
    answers.answer_a,
    answers.answer_b,
    answers.answer_c,
    answers.answer_d
  ];

  const letter = (option: string) => {
    if (questionsArray.indexOf(option) === 0) {
      return "a";
    }

    if (questionsArray.indexOf(option) === 1) {
      return "b";
    }

    if (questionsArray.indexOf(option) === 2) {
      return "c";
    }

    if (questionsArray.indexOf(option) === 3) {
      return "d";
    }
  };

  const handleOptionChange = (option: string, id: number) => {
    answersArray.push({ id: id, answer: letter(option) });
    setSelectedOption((prev) => {
      const previos = prev ?? [];
      if (previos.includes(option)) {
        return previos.filter((el: string) => el !== option);
      } else {
        return [...previos, option];
      }
    });

    console.log(answersArray);
  };

  return (
    <MDBCard
      className="bg-white text-dark my-5 mx-auto"
      style={{ borderRadius: "1rem", maxWidth: "800px" }}
    >
      <MDBCardBody className="p-5 d-flex flex-column  mx-auto w-100">
        <h2 className={styles.question}>{question}</h2>
        <div className={styles.options}>
          {questionsArray.map((option) => (
            <div key={option} className={styles.option}>
              {
                <input
                  key={id}
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  checked={selectedOption?.includes(option)}
                  onChange={() => handleOptionChange(option, id)}
                />
              }
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default QuizCard;
