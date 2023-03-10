# USANDO YARGS

Realizar la operación del desafío anterior, esta vez usando la dependencia YARGS en lugar de minimist.

Realizar una aplicación en Javascript ejecutada a través de Node.JS que al ejecutarse de la siguiente manera:
`node main.js 1 2 3 -m dev -p 8080 -d`
Construya y muestre por pantalla el siguiente objeto:

```javascript
{ modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
```

Y con el siguiente llamado:
`node main.js 1 2 3`
Construya y muestre por pantalla el siguiente objeto:

```javascript
{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }
```
