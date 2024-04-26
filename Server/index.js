import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/Users.js';
const app = express();

app.use(bodyParser.json())
app.use('/',userRoutes);

const courses = [
    {id: 1, courseName: 'jsx'},
    {id: 2, courseName: 'node'},
    {id: 3, courseName: 'jx'}
]
app.get('/', (req,res) =>{
    res.send('hello dear');
})

app.get('/api/courses', (req,res) =>{
    res.send(courses);
})


app.get('/api/courses/:courseId', (req,res) =>{
    let result = courses.find( c => c.id === parseInt(req.params.courseId))
    if(!result) res.status(404).send('the course with given id is not Found');
    res.send(result);
})


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})

app.post('/api/courses', (req, res) => {

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
     courses.push(course);
     res.send(course)
})