INSERT INTO students
    (firstname, phone, street, cpr)
    VALUES
    ('Jonas', '112', 'Ellekildevej', '010203-0507')

SELECT firstname, street, phone
    FROM students
    WHERE cpr='010203-0507';

UPDATE students SET
    street='Ellekildevej 33'
    WHERE cpr='010203-0507';

DELETE FROM students WHERE firstname='Jonas';