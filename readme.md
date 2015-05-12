# Caracas Against Humanity
[![Build Status](https://travis-ci.org/cris7ian/caracas-against-humanity.svg?branch=master)](https://travis-ci.org/cris7ian/caracas-against-humanity)

Sí, es un API con las cartas de Cards Against Humanity traducidas al venezolano.

Es un server Express, no mucho más.

_Nota:_ está hecho con features de ES6 (tendría más si la gente de Node.js moviera el culo para implementar módulos), así que hay que ejecutarlo con el tag `--harmony`. La versión original de [@vdel26](https://github.com/vdel26) sí que usaba Babel para transpilar a ES5, pero quería hacer esto más ligero todavía.

## Colaboraciones
TODA colaboración es bienvenida. Por ahora es un API con las cartas. Se viene:
- Un front web para poder imprimir las cartas (básicamente una vista html con una hoja de estilos de impresión).
- Faltan traducciones.
- Un app para jugar (near future).

## API
- GET _/api/question_: devuelve una carta negra.
- GET _/api/questions_: devuelve todas las cartas negras
- GET _/api/answer_: devuelve una carta blanca.
- GET _/api/answers_: devuelve todas las cartas blancas.

## Instalación
Lo de siempre.

```
npm install
npm start
```

Si buscas de acelerar el workflow, necesitarás [Gulp](http://gulpjs.com/)

```
npm install --global gulp
```

Puedes ejecutar el server con `gulp serve` para recargarlo cuando hayan cambios en lib o tener Livereload haciendo `gulp front` en otra terminal para solo recargar el browser automaticamente cuando hayan cambios en vistas o recursos estáticos.

Y listo. Ya el API estará escuchando en `http://localhost:3000` or en el puerto que indique la variable `PORT`.
