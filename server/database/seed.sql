\copy reviews(review_id, product_id, rating, review_date, summary, body, recommended, reported, reviewer_name, reviewer_email, response, helpfulness) FROM '/home/april/HackReactor/mainCourse/SDC/SDC-Reviews/server/database/db-sample-data/reviews.csv' DELIMITER ',' CSV HEADER;
SELECT setval('reviews_review_id_seq', (SELECT MAX(review_id) from "reviews"));

\copy images(image_id, review_id, image_url) FROM '/home/april/HackReactor/mainCourse/SDC/SDC-Reviews/server/database/db-sample-data/reviews_photos.csv' DELIMITER ',' CSV HEADER;
SELECT setval('images_image_id_seq', (SELECT MAX(image_id) from "images"));

\copy characteristics(characteristic_id, product_id, characteristic_name) FROM '/home/april/HackReactor/mainCourse/SDC/SDC-Reviews/server/database/db-sample-data/characteristics.csv' DELIMITER ',' CSV HEADER;
SELECT setval('characteristics_characteristic_id_seq', (SELECT MAX(characteristic_id) from "characteristics"));

\copy characteristics_ratings(characteristic_ratings_id, characteristic_id, review_id, rating) FROM '/home/april/HackReactor/mainCourse/SDC/SDC-Reviews/server/database/db-sample-data/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;
SELECT setval('characteristics_ratings_characteristic_ratings_id_seq', (SELECT MAX(characteristic_ratings_id) from "characteristics_ratings"));
