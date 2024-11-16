const slideRouter = require('../routes/slide.route');

module.exports = async (app:any) => {
  app.use(slideRouter);

  return app;
}