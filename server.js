//npm init -y -> Nos crea el package.json
// "start": "node server.js" -> en package.json
//npm install express -> Instalación de Express
// npm install -g nodemon (solo se hace una única vez)
// "start": "node server.js" -> cambiar en package.json
// npm start

const express = require('express');
const app = express();

/* Nos ayudan a interpretar y decodificar el JSON */
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) =>{
    res.json({message: "Hola mundo!"});
});

const estudiantes = [
    {nombre: 'Elena', apellido: 'De Troya'},
    {nombre: 'Juana', apellido: 'De Arco'},
    {nombre: 'Pedro', apellido: 'Páramo'},
]

app.get('/api/estudiantes', (req, res) =>{
    res.json(estudiantes);
});

app.get('/api/estudiantes/:id', (req, res) =>{
    let id = req.params.id;
    res.json(estudiantes[id]);
});

app.post('/api/estudiantes', (req, res) =>{
    estudiantes.push(req.body);
    res.json(estudiantes);
});

app.put('/api/estudiantes/:id', (req, res) =>{
    let id = req.params.id;
    estudiantes[id] = req.body;
    res.json(estudiantes);
});

app.delete('/api/estudiantes/:id', (req, res) =>{
    let id = req.params.id;
    estudiantes.splice(id,1);
    res.json(estudiantes);
});

app.listen(8000, () => {
    console.log("Servidor está corrriendo");
});
