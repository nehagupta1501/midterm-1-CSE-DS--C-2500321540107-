const express = require('express');
const app = express();

app.use(express.json());

let courses = [];

app.get('/', (req, res) => {
    res.send("Course Management System");
});

app.post('/courses', (req, res) => {
    const course = {
        id: req.body.id,
        courseName: req.body.courseName,
        courseCode: req.body.courseCode,
        department: req.body.department
    };

    courses.push(course);
    res.send("Course Added Successfully");
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);

    if (course) {
        res.json(course);
    } else {
        res.send("Course Not Found");
    }
});

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);

    if (course) {
        course.courseName = req.body.courseName;
        course.courseCode = req.body.courseCode;
        course.department = req.body.department;

        res.send("Course Updated Successfully");
    } else {
        res.send("Course Not Found");
    }
});

app.delete('/courses/:id', (req, res) => {
    const index = courses.findIndex(c => c.id == req.params.id);

    if (index !== -1) {
        courses.splice(index, 1);
        res.send("Course Deleted Successfully");
    } else {
        res.send("Course Not Found");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});




