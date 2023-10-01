CREATE TABLE IF NOT EXISTS university_type (
  university_type_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(127) NOT NULL
);

CREATE TABLE IF NOT EXISTS university (
  university_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type_pk INT,
  FOREIGN KEY (type_pk) REFERENCES university_type(university_type_id)
);

CREATE TABLE IF NOT EXISTS major (
  major_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS university_major (
  university_pk INT,
  major_pk INT,
  PRIMARY KEY (university_pk, major_pk),
  FOREIGN KEY (university_pk) REFERENCES university(university_id),
  FOREIGN KEY (major_pk) REFERENCES major(major_id)
);

INSERT INTO university_type (university_type_id, name) VALUES
(
  1,
  "Uczelnia techniczna"
),
(
  2,
  "Universytet"
),
(
  3,
  "Uczelnia ekonomiczna"
),
(
  4,
  "Uczelnia pedagogiczna"
),
(
  5,
  "Uczelnia rolnicza/przyrodnicza"
),
(
  6,
  "Uczelnia wychowania fizycznego"
);

INSERT INTO university (name, type_pk) VALUES
(
  "Uniwersytet Warszawski",
  2
),
(
  "Uniwersytet w Białymstoku",
  2
),
(
  "Uniwersytet Gdański",
  2
),
(
  "Uniwersytet im. Adama Mickiewicza w Poznaniu",
  2
),
(
  "Uniwersytet Jagielloński w Krakowie",
  2
),
(
  "Uniwersytet Marii Curie-Skłodowskiej w Lublinie",
  2
),
(
  "Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie",
  2
),
(
  "Uniwersytet Kazimierza Wielkiego w Bydgoszczy",
  2
),
(
  "Politechnika Poznańska",
  1
),
(
  "Zachodniopomorski Uniwersytet Technologiczny w Szczecinie",
  1
),
(
  "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
  1
),
(
  "Politechnika Częstochowska",
  1
),
(
  "Uniwersytet Ekonomiczny w Katowicach",
  3
),
(
  "Uniwersytet Ekonomiczny w Krakowie",
  3
),
(
  "Uniwersytet Ekonomiczny w Poznaniu",
  3
),
(
  "Akademia Pedagogiki Specjalnej im. Marii Grzegorzewskiej (Warszawa)",
  4
),
(
  "Uniwersytet Pedagogiczny im. Komisji Edukacji Narodowej w Krakowie",
  4
),
(
  "Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach",
  4
),
(
  "Uniwersytet Rolniczy im. Hugona Kołłątaja w Krakowie",
  5
),
(
  "Szkoła Główna Gospodarstwa Wiejskiego w Warszawie",
  5
),
(
  "Uniwersytet Przyrodniczy w Poznaniu",
  5
),
(
  "Akademia Wychowania Fizycznego i Sportu im. Jędrzeja Śniadeckiego w Gdańsku",
  6
),
(
  "Akademia Wychowania Fizycznego im. Polskich Olimpijczyków we Wrocławiu",
  6
),
(
  "Akademia Wychowania Fizycznego im. Eugeniusza Piaseckiego w Poznaniu",
  6
);

INSERT INTO major (name) VALUES
("Elektronika"),
("Dyplomacja"),
("Filozofia"),
("Sport"),
("Telekomunikacja"),
("Informatyka"),
("Automatyka i robotyka"),
("Budownictwo"),
("Bazy Danych");


INSERT INTO university_major (university_pk, major_pk) VALUES
(1, 2), (1, 3), (1, 5),
(2, 3), (2, 5), (2, 9),
(3, 4), (3, 3), (3, 7),
(4, 1), (4, 8), (4, 3),
(5, 2), (5, 3), (5, 6);