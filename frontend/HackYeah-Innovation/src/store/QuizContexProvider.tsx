import { useState, createContext, useEffect } from "react";

export type QuizDataType = {
  id: number;
  question: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
  };
};

interface PropsWithChildren {
  children: React.ReactNode;
}

type QuizContextProviderType = {
  QuizData: QuizDataType[];
  setQuizData: (data: QuizDataType[]) => void;
};

const data: QuizDataType[] = [
  {
    id: 1,
    question:
      "Jakie rodzaje przedmiotów szkolnych lub aktywności pozaszkolnych najbardziej Cię interesują?",
    answers: {
      answer_a: "Nauki przyrodnicze i matematyka",
      answer_b: "Sztuka i humanistyka",
      answer_c: "Technologia i informatyka",
      answer_d: "Biznes i zarządzanie"
    }
  },
  {
    id: 2,
    question: "Jaka forma studiowania bardziej Ci odpowiada?",
    answers: {
      answer_a: "Tradycyjne zajęcia na uczelni",
      answer_b: "Studia online",
      answer_c: "Studia wieczorowe",
      answer_d: "Kursy weekendowe"
    }
  },
  {
    id: 3,
    question:
      "Czy bardziej zależy Ci na teorii czy praktyce w trakcie studiów?",
    answers: {
      answer_a: "Teoria",
      answer_b: "Praktyka",
      answer_c: "Równowaga między teorią a praktyką",
      answer_d: "Obojętne"
    }
  },
  {
    id: 4,
    question: "Czy masz określony obszar, który Cię szczególnie interesuje?",
    answers: {
      answer_a: "Medycyna i zdrowie",
      answer_b: "Sztuka i kultura",
      answer_c: "Technologia i innowacje",
      answer_d: "Finanse i biznes"
    }
  },
  {
    id: 5,
    question: "Czy preferujesz studiowanie na małym czy dużym kampusie?",
    answers: {
      answer_a: "Mały kampus",
      answer_b: "Duży kampus",
      answer_c: "Obojętne",
      answer_d: "Nie wiem"
    }
  },
  {
    id: 6,
    question: "Czy planujesz studiować za granicą?",
    answers: {
      answer_a: "Tak, na pewno",
      answer_b: "Może, ale nie jestem pewien",
      answer_c: "Nie, raczej nie",
      answer_d: "Nie mam zdania"
    }
  },
  {
    id: 7,
    question:
      "Czy masz jakieś specjalne zdolności lub talenty, które chciałbyś wykorzystać podczas studiów?",
    answers: {
      answer_a: "Tak, mam specjalne zdolności",
      answer_b: "Nie mam specjalnych zdolności",
      answer_c: "Chciałbym rozwijać swoje zdolności",
      answer_d: "Nie jestem pewien "
    }
  },
  {
    id: 8,
    question: "Jakie jest Twoje poziom zaawansowania w matematyce?",
    answers: {
      answer_a: "Bardzo zaawansowany",
      answer_b: "Średni",
      answer_c: "Początkujący",
      answer_d: "Nie lubię matematyki"
    }
  },
  {
    id: 9,
    question:
      "Czy interesują Cię nauki społeczne, takie jak psychologia czy socjologia?",
    answers: {
      answer_a: "Tak, bardzo",
      answer_b: "Trochę",
      answer_c: "Niezbyt",
      answer_d: "W ogóle nie"
    }
  },
  {
    id: 10,
    question: "Czy preferujesz pracować samodzielnie czy w zespole?",
    answers: {
      answer_a: "Samodzielnie",
      answer_b: "W zespole",
      answer_c: "Zarówno samodzielnie, jak i w zespole",
      answer_d: "Nie wiem"
    }
  },
  {
    id: 11,
    question: "Czy jesteś otwarty na zmiany i adaptację w trakcie studiów?",
    answers: {
      answer_a: "Tak, bardzo",
      answer_b: "Trochę",
      answer_c: "Raczej nie",
      answer_d: "Nie lubię zmian"
    }
  },
  {
    id: 12,
    question:
      "Czy istnieją jakieś konkretne miejsca geograficzne, które Cię szczególnie fascynują?",
    answers: {
      answer_a: "Europa",
      answer_b: "Azja",
      answer_c: "Ameryka Północna",
      answer_d: "Afryka"
    }
  },
  {
    id: 13,
    question: "Czy planujesz pracować w branży związaną z ochroną środowiska?",
    answers: {
      answer_a: "Tak, na pewno",
      answer_b: "Może, ale nie jestem pewien",
      answer_c: "Nie, raczej nie",
      answer_d: "Nie mam zdania"
    }
  },
  {
    id: 14,
    question:
      "Czy masz jakieś hobby lub pasje, które mogą wpłynąć na wybór kierunku studiów?",
    answers: {
      answer_a: "Tak, mam pasje, które chciałbym rozwijać",
      answer_b: "Nie mam pasji, które by mnie interesują",
      answer_c: "Chciałbym odkryć nowe pasje",
      answer_d: "Nie jestem pewien"
    }
  },
  {
    id: 15,
    question:
      "Czy preferujesz kierunki studiów, które prowadzą do pracy w instytucjach publicznych czy firmach prywatnych?",
    answers: {
      answer_a: "Instytucje publiczne",
      answer_b: "Firmy prywatne",
      answer_c: "Obojętne",
      answer_d: "Nie wiem"
    }
  }
];

async function pobierzDane(url: string) {
  try {
    const response = await fetch(url, {});

    if (!response.ok) {
      throw new Error(`Wystąpił błąd: ${response.status}`);
    }

    const dane = await response.json();
    return dane;
  } catch (error) {
    console.error("Wystąpił błąd:", error);
    return null;
  }
}

export const QuizContext = createContext<QuizContextProviderType>({
  QuizData: [],
  setQuizData: () => {}
});

const QuizContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [QuizState, setQuizState] = useState<QuizDataType[]>([]);

  useEffect(() => {
    // pobierzDane("http://10.250.166.149:8080/api/questions").then((data) => {
    //   setQuizState(data);
    // });
    setQuizData(data);
  });

  function setQuizData(data: QuizDataType[]) {
    setQuizState(data);
  }

  const defaultQuizState: QuizContextProviderType = {
    QuizData: QuizState,
    setQuizData
  };

  return (
    <QuizContext.Provider value={defaultQuizState}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
