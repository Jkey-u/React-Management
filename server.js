const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'http://placeimg.com/64/64/1',
            'name': '류재경',
            'birthday': '940426',
            'gender': '여자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'http://placeimg.com/64/64/2',
            'name': '김성규',
            'birthday': '951119',
            'gender': '남자',
            'job': '회시원'
        },
        {
            'id': 3,
            'image': 'http://placeimg.com/64/64/3',
            'name': '제이키',
            'birthday': '940426',
            'gender': '여자',
            'job': '회시원'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));