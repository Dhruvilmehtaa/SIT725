app.get('/calculator/add', function (req, res) {
    response = {
      result: req.query.param1 + req.query.param2,
   };
   res.end(JSON.stringify(response));
})