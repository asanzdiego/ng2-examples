#  Ejemplo básico de TypeScript

Para transpilar el fichero TypeScript a JavaScript:
```bash
tsc greeter.ts
```

Abrir entonces el fichero index.html para ver el resultado


Para generar el fichero tsconfig.json

```bash
tsc --init --experimentalDecorators --emitDecoratorMetadata --target ES5 --module ES6 --moduleResolution node
```

Para generar el fichero typings.json

```bash
typings install dt~es6-shim --save --global
```

Enlaces útiles:

* [Opciones de configuración de tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
