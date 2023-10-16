CREATE TABLE sections (
    id serial PRIMARY KEY,
    title text NOT NULL
);

CREATE TABLE cards (
    id serial PRIMARY KEY,
    title text NOT NULL,
    description text,
    section_id serial, 
    image1 text, 
    image2 text, 
    image3 text
);