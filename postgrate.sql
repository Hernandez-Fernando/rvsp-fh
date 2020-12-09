CREATE TABLE guests
(
    guestId SERIAL PRIMARY KEY,
    guestName VARCHAR(20) NOT NULL,
    guestLastname VARCHAR(20),
    guestCode VARCHAR(6) NOT NULL,
    guestNumber INT NOT NULL,
    guestAttending VARCHAR(3) DEFAULT 'No'
);

CREATE TABLE users
(
    userId SERIAL PRIMARY KEY,
    displayName VARCHAR(20) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO guests VALUES (DEFAULT, 'Fernando', 'Hernandez', 'FEHE01', 2, 'No');
INSERT INTO guests VALUES (DEFAULT, 'Guadalupe', 'Parra', 'GUPA02', 2, 'No');
INSERT INTO guests VALUES (DEFAULT, 'Miguel', 'Vazquez', 'MIVA03', 3, 'No');