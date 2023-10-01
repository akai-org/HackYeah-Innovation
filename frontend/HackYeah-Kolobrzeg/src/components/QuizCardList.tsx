import { MDBBtn } from "mdb-react-ui-kit";
import { QuizContext } from "../store/QuizContexProvider";
import QuizCard from "./QuizCard";
import { useContext } from "react";

import styles from "./QuizCardList.module.scss";

// const QuizCardList: React.FC<QuizDataType[]> = (params: QuizDataType[]) => {
const QuizCardList = () => {
  const ctx = useContext(QuizContext);

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
      <div className={styles.button_div}>
        <MDBBtn color="dark">Submit</MDBBtn>
      </div>
    </>
  );
};

export default QuizCardList;
