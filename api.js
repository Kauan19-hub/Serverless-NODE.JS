import express from 'express';

const app = express();
//LOCALHOST:300 port
const PORT = process.env.PORT || 3000;
const arrayResponse = [
    {name: 'Batman', company: 'DC Movies'},
    {name: 'Kauan', company: 'Robert Bosch ADM' },
    {name: 'Gabriel', company: 'IBM Trainee' }

];

//GET
app.get('/', (request, response) => {
    response.json(arrayResponse);

})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));

app.get('/users/:name', (request, response) => {
    const user = arrayResponse.find(u => u.name.toLowerCase() === request.params.name.toLowerCase());

    if (user) {
        response.json(user);

    } else {
        response.status(404).json({ error: 'Usuário não encontrado.'});

    }
});