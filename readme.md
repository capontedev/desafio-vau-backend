
# Desafío Técnico VAU Back-end

## Autor

- [@capontedev](https://www.github.com/capontedev)

## Descripción

La solución que se implementa está basada en Arquitectura Hexagonal con enfoque vertical slicing. Esta permite escalabilidad, flexibilidad, mejor mantenimiento.

Pensado para proyectos grandes.

También se pueden hacer cambios ya sea de base de datos o otros modulos sin afectar la lógica de negocio.

## Instrucciones

Existe un archivo adjunto .env para el uso de credenciales JWT y base de datos

Ejecutar en entorno de desarrollo

```bash
  npm run dev
```

Ejecutar en entorno de producción

```bash
  npm run build
  npm start
```

## API Reference

#### Get all users

```http
  GET /users
```
Authorization: Bearer <token> (Obligatorio)

#### Create user

```http
  POST /users
```
Content-Type: application/json

| Parámetros | Type     | Descripción                        |
| :--------  | :------- | :--------------------------------  |
| `username` | `string` | **Requerido, mínimo 3 caracteres** |
| `email`    | `string` | **Requerido, email valido**        |
| `password` | `string` | **Requerido, mínimo 6 caracteres** |


#### Login user
```http
  POST /login
```
Content-Type: application/json

| Parámetros | Type     | Descripción                        |
| :--------  | :------- | :--------------------------------  |
| `email`    | `string` | **Requerido, email valido**        |
| `password` | `string` | **Requerido, mínimo 6 caracteres** | 
 