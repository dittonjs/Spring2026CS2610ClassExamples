INSERT INTO bulletins (title, content)
VALUES
('First Bulletin', 'This is the content of the first bulletin.')
;


UPDATE bulletins
SET
title = 'Updated First Bulletin',
content = 'This is the updated content of the first bulletin.'
WHERE id = 1
;
