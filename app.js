const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("to get data go to /api/questions");
});

app.get('/api/questions', (req, res) => {

    const questions = [
        
        {
            id: 1,
            que: "In how many seasons this character has appeared?",
            options: [ 2, 4, 5, 1],
        },

        {
            id: 2,
            que: "What is the status of character?",
            options: ["Deceased", "Alive", "Presumed dead"],
        }
    ];

    res.json(questions);

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("running on port", PORT);
})