const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const courses = require('./data/courses.json');


app.get('/', (req, res) => {
  res.send('Lets Learn API running!');
});

app.get('/course-category', (req, res) => {
    res.send(categories);
});



app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const item = courses.find(course => course.id === id)
    res.send(item);
});


app.get('/category/:id', (req, res) => {
    const catId = req.params.id;

    if(catId === "04"){
        res.send(courses);
    }
/*     if(catId === '*'){
        res.status(404).send("Sorry Not Found")
    } */
    else{
        const catItem = courses.filter(category => category.categoryId === catId);
        res.send(catItem);
    }
});



app.listen(port, () => {
  console.log('Lets Learn Server running on port', port)
})
