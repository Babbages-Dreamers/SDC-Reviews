
CREATE TABLE IF NOT EXISTS product_ids (
  product_id SERIAL NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  rating SMALLINT NOT NULL,
  review_date BIGINT NOT NULL,
  summary VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  recommended BOOLEAN DEFAULT(FALSE),
  reported BOOLEAN,
  reviewer_name VARCHAR(255) NOT NULL,
  reviewer_email VARCHAR(255) NOT NULL,
  response TEXT,
  helpfulness INT NOT NULL DEFAULT(0),
  review_updated timestamp DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS images (
  image_id SERIAL NOT NULL PRIMARY KEY,
  review_id INT NOT NULL,
  image_url TEXT NOT NULL,
  CONSTRAINT fk_review_id
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);

CREATE TYPE char_names AS ENUM ('Fit', 'Length', 'Quality', 'Size', 'Width', 'Comfort');
CREATE TABLE IF NOT EXISTS characteristics (
  characteristic_id SERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  characteristic_name char_names NOT NULL,
  amount INT NOT NULL DEFAULT(0),
  average INT NOT NULL DEFAULT(0)
);

CREATE TABLE IF NOT EXISTS characteristics_ratings (
  characteristic_ratings_id SERIAL NOT NULL PRIMARY KEY,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  rating SMALLINT NOT NULL,
  CONSTRAINT fk_characteristic_id
  FOREIGN KEY (characteristic_id)
    REFERENCES characteristics (characteristic_id),
  CONSTRAINT fk_review_id
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);