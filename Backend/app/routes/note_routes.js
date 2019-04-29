module.exports = function(app, db) {
    app.get('/choix1', (req, res) => {
          // You'll create your note here.
        res.send('Hello')
    });
};
