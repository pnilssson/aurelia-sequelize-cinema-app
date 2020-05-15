# Information
Databasen ligger i denna mapp som 'database.sqlite'. Den är redan fylld med den data som applikation behöver.


# SQL-schema
Nedan finns SQL-queryn som generar schemat i databasen

CREATE TABLE IF NOT EXISTS `Cinemas` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `title` TEXT,
    `description` TEXT
);
PRAGMA INDEX_LIST(`Cinemas`); /* SQLite specific */

CREATE TABLE IF NOT EXISTS `Movies` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `title` TEXT,
    `description` TEXT,
    `cinemaId` INTEGER NOT NULL REFERENCES `Cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
PRAGMA INDEX_LIST(`Movies`); /* SQLite specific */