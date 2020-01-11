const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.render('index');
});
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
    res.status(err.status || 500);
    res.send('error');//this or res.status(err.status || 500).send('error')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));