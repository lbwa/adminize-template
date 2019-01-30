# Admin template [![Build Status](https://travis-ci.org/lbwa/admin-template.svg?branch=master)](https://travis-ci.org/lbwa/admin-template)

> An administrator dashboard, implemented by Vue.js.

<p align="center">
  <a href="https://lbwa.github.io/admin-template">Online site</a>
</p>

> Username: admin or user, Password: any words

## Features

- ***Access control***: Global aside menu is rendered dynamically by global routes map which is made of common routes and dynamic routes, filtered by user access.

- ***Roles map***: The route's [Roles map](./src/permission/roles-map.js) can be stored by the back-end to enable real-time modification of user access which is used to filter user private routes.

- ***Mock development***: Easy to use mock development solution

## Templates

- Home

- Admin (All page only can be accessed by `admin` role, otherwise redirect to 403 page.)

  - Dashboard

  - Table

- Common (No permission page)

  - User

- Nested (recursive rendering testing)

  - nested-1

    - nested-2

- Private

  - Admin (Appears only when user access include `admin`)

  - User (Appears only when user access include `user`)

- Single (Appears only when user access include `admin`)

  - Admin

## Usages
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
# run development server
yarn run dev

# run development server, same as `yarn run dev`
yarn run serve
```

### Compiles and minifies for production
```bash
yarn run build
```

### Run your tests
```bash
yarn run test
```

### Lints and fixes files
```bash
yarn run lint
```
