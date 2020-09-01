const Koa = require("koa"); // faz importação do código koa
const server = new Koa(); //instanciando um novo objeto koa

server.use(async(ctx) => {
    console.log("Hey! Esta é a aula 21!");
});

server.listen(8081, () => {
    console.log("O servidor está rodando!");
});