const express = require('express');
const listEndpoints = require('express-list-endpoints')
 
const app = express();
const port = 8080;
 
app.use(express.json());
 
app.get("/", (req, res) => {
    res.json("Primeira api com node")
})
 
app.post("/rotaPost", (req, res) => {
    res.json("Rota Post")
})
 
app.patch("/rotaPatch", (req, res) => {
    res.json("Rota Patch")
})
 
app.put("/rotaPut", (req, res) => {
    res.json("Rota Put")
})
 
app.options("/rotaOptions", (req, res) => {
    res.json("Rota Options")
})
 
app.delete("/rotaDelete", (req, res) => {
    res.json("Rota Delete")
})
 
app.head("/rotaHead", (req, res) => {
    res.json("Rota Head")
})
 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    const endpoints = listEndpoints(app);
    console.log('Rotas disponíveis:');
    endpoints.forEach(endpoint => {
        console.log(`${endpoint.methods.join(', ')} ${endpoint.path}`);
    });
}
)
 



