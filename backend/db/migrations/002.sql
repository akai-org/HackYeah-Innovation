CREATE TABLE IF NOT EXISTS question (
  question_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255) NOT NULL,
  answer_a VARCHAR(255) NOT NULL,
  answer_b VARCHAR(255) NOT NULL,
  answer_c VARCHAR(255) NOT NULL,
  answer_d VARCHAR(255) NOT NULL
);


INSERT INTO question (content, answer_a, answer_b, answer_c, answer_d) VALUES
(
  "Jakie rodzaje przedmiotów szkolnych lub aktywności pozaszkolnych najbardziej Cię interesują?",
  "Nauki przyrodnicze i matematyka",
  "Sztuka i humanistyka",
  "Technologia i informatyka",
  "Biznes i zarządzanie"
),
(
  "Jaka forma studiowania bardziej Ci odpowiada?",
  "Tradycyjne zajęcia na uczelni",
  "Studia online",
  "Studia wieczorowe",
  "Kursy weekendowe"
),
(
  "Czy bardziej zależy Ci na teorii czy praktyce w trakcie studiów?",
  "Teoria",
  "Praktyka",
  "Równowaga między teorią a praktyką",
  "Obojętne"
),
(
  "Czy masz określony obszar, który Cię szczególnie interesuje?",
  "Medycyna i zdrowie",
  "Sztuka i kultura",
  "Technologia i innowacje",
  "Finanse i biznes"
),
(
  "Czy preferujesz studiowanie na małym czy dużym kampusie?",
  "Mały kampus",
  "Duży kampus",
  "Obojętne",
  "Nie wiem"
),
(
  "Czy planujesz studiować za granicą?",
  "Tak, na pewno",
  "Może, ale nie jestem pewien",
  "Nie, raczej nie",
  "Nie mam zdania"
),
(
"Czy masz jakieś specjalne zdolności lub talenty, które chciałbyś wykorzystać podczas studiów?",
"Tak, mam specjalne zdolności",
"Nie mam specjalnych zdolności",
"Chciałbym rozwijać swoje zdolności",
"Nie jestem pewien "
),
(
"Jakie jest Twoje poziom zaawansowania w matematyce?",
"Bardzo zaawansowany",
"Średni",
"Początkujący",
"Nie lubię matematyki"
),
(
"Czy interesują Cię nauki społeczne, takie jak psychologia czy socjologia?",
"Tak, bardzo",
"Trochę",
"Niezbyt",
"W ogóle nie"
),
(
"Czy preferujesz pracować samodzielnie czy w zespole?",
"Samodzielnie",
"W zespole",
"Zarówno samodzielnie, jak i w zespole",
"Nie wiem"
),
(
"Czy jesteś otwarty na zmiany i adaptację w trakcie studiów?",
"Tak, bardzo",
"Trochę",
"Raczej nie",
"Nie lubię zmian"
),
(
"Czy istnieją jakieś konkretne miejsca geograficzne, które Cię szczególnie fascynują?",
"Europa",
"Azja",
"Ameryka Północna",
"Afryka"
),
(
"Czy planujesz pracować w branży związaną z ochroną środowiska?",
"Tak, na pewno",
"Może, ale nie jestem pewien",
"Nie, raczej nie",
"Nie mam zdania"
),
(
"Czy masz jakieś hobby lub pasje, które mogą wpłynąć na wybór kierunku studiów?",
"Tak, mam pasje, które chciałbym rozwijać",
"Nie mam pasji, które by mnie interesują",
"Chciałbym odkryć nowe pasje",
"Nie jestem pewien"
),
(
"Czy preferujesz kierunki studiów, które prowadzą do pracy w instytucjach publicznych czy firmach prywatnych?",
"Instytucje publiczne",
"Firmy prywatne",
"Obojętne",
"Nie wiem"
)
