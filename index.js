const Koa = require("koa"); // faz importação do código koa
const server = new Koa(); //instanciando um novo objeto koa

const caraOuCoroa = () => Math.floor(Math.random() * 100) <= 50 ? "cara" : "coroa";

let numero = 50;
const raizQuadrada = (numero) => Math.pow(numero, numero);


server.use(async(ctx) => {
    ctx.body = "Hey! Esta é a aula 21!";

    //questão 3.A.
    if (ctx.originalUrl === "/cara_ou_coroa") {
        ctx.body = caraOuCoroa();
    }

    // questão 4.B.
    if (ctx.originalUrl === "/raiz_quadrada/") {
        ctx.body = "Você precisa passar um número na requisição!";
    } else if (ctx.originalUrl === `/raiz_quadrada/${numero}`) {
        ctx.body = `A raiz quadrada de ${numero} é ${raizQuadrada(numero)}`;
    }

});

server.listen(8081, () => {
    console.log("O servidor está rodando!");
});