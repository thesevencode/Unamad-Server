const asistenciaRouter = require('./asistencia');


module.exports = async app => {

    app.use('/', await asistenciaRouter());
}