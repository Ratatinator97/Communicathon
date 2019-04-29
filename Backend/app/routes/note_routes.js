module.exports = function(app, db) {
    app.get('/choix1', (req, res) => {
        res.send('Hello')
    });
};
