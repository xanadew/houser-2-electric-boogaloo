INSERT INTO houses (
housename, 
housedesc,
address,
city,
state,
zip,
img,
loan,
mort,
desiredRent,
userid )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING userid;