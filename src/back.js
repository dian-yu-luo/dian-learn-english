const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'));



app.get('/get', function (req, res) {
    res.send('get method right');
    console.log("get method backend passed");

});

app.post("/post", function (req, res) {
    console.log("post method backend passed");
    res.send('post method right');
    console.log(req.body.firstName);
})

app.listen(3000, function (params) {
    console.log("http://127.0.0.1:3000/");
});
