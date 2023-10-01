import { MDBBtn } from "mdb-react-ui-kit";
import { QuizContext } from "../store/QuizContexProvider";
import QuizCard, { answersArray } from "./QuizCard";
import { FormEventHandler, useContext } from "react";

import styles from "./QuizCardList.module.scss";

// const QuizCardList: React.FC<QuizDataType[]> = (params: QuizDataType[]) => {
const QuizCardList = () => {
  const ctx = useContext(QuizContext);

  const sendAnswers = () => {
    console.log(answersArray);
    fetch("http://10.250.166.149:8080/api/bestUni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answersArray)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Wysłano dane: " + res);
        console.log(res);
      });
  };

  return (
    <>
      {ctx
        ? ctx.QuizData.map((q) => (
            <QuizCard
              key={q.id}
              id={q.id}
              question={q.question}
              answers={q.answers}
            />
          ))
        : null}
      <div className={styles.button_div} onClick={() => sendAnswers()}>
        <MDBBtn color="dark">Submit</MDBBtn>
      </div>
    </>
  );
};

export default QuizCardList;
