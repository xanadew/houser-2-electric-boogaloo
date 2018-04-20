DELETE FROM houses
WHERE houseid = $1
RETURNING *;