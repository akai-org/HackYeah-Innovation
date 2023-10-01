import { useState } from "react";

import QuizCardList from "./components/QuizCardList";
import LoginComponent from "./components/LoginComponent";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const onLoginHandle = () => {
    setIsLogged(true);
  };

  if (isLogged) {
    return <QuizCardList />;
  } else {
    return <LoginComponent onLogin={onLoginHandle} />;
  }
}

export default App;
