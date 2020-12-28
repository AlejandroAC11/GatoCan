import express from 'express';

// Inicializacion
const app = express();

// Configuracion
app.set('port', 3000);

// Starting server
app.listen(app.get('port'), () => 
    console.log(`Servidor en puerto ${app.get('port')}`)); 