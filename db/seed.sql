CREATE TABLE IF NOT EXISTS users (
    userid SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS houses (
    houseid SERIAL PRIMARY KEY,
    housename VARCHAR(100),
    housedesc VARCHAR(100),
    address VARCHAR(40),
    city VARCHAR(20),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    loan NUMERIC,
    mort NUMERIC,
    desiredRent NUMERIC,
    userid INTEGER REFERENCES users(userid)
);