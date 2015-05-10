# Cards Against Humanity Venezolano

Sí, es un API con las cartas traducidas al venezolano.

Es un server Express, no mucho más.

*Nota:* está hecho con features de ES6 (tendría más si la gente de Node.js moviera el culo para implementar módulos), así que hay que ejecutarlo con el tag `--harmony`. La versión original de [@vdel26](https://github.com/vdel26) sí que usaba Babel para transpilar a ES5, pero quería hacer esto más ligero todavía.

## API

- GET _question_: devuelve una carta negra.

- GET _questions_: devuelve todas las cartas negras

- GET _answer_: devuelve una carta blanca.

- GET _answers_: devuelve todas las cartas blancas.

## Instalación

Lo de siempre.

```
npm install
npm start
```

Y listo. Ya el API estará escuchando en `http://localhost:3000` or en la variable `PORT`.
