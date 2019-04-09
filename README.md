# Adminize template [![Build Status](https://travis-ci.org/lbwa/adminize-template.svg?branch=master)](https://travis-ci.org/lbwa/adminize-template)

> An administrator dashboard, implemented by Vue.js.

<p align="center">
  <a href="https://lbwa.github.io/adminize-template">Online site</a>
</p>

> Username: admin or user, Password: any words

## Features

- **_Access control_**: Global aside menu is rendered dynamically by global routes map which is made of common routes and dynamic routes, filtered by user access.

- **_User access_**: [Routes filter](./src/permission/controller/routes.js) work with user access set which is made of user api access.

  - User access set

    ```js
    const userAccess = [
      {
        access: 'manage.device.read',
        update_time: '2019-1-1'
      },
      {
        access: 'manage.device.write',
        update_time: '2019-1-1'
      }
      // ... more user access
    ]
    ```

  - Routes filter

    ```js
    const routesMap = [
      {
        path: '/fist-routes',
        components: firstComponent,
        meta: {
          access: {
            // This route will be added to global routes map if user access set
            // including 'device.read' and 'device.write' access.
            device: ['read', 'write']
          }
        }
      },
      {
        path: '/second-routes',
        components: secondComponent,
        meta: {
          access: {
            // This route will not be added to global routes map,
            // because current user has no `import` access.
            device: ['read', 'import']
          }
        }
      }
      // ... other routes
    ]
    ```

- **_Mock development_**: Easy to use mock development solution

## Templates

- Home

- Admin (All pages only can be accessed by user named `admin`, otherwise routes will be redirected to **403** page.)

  - Dashboard

  - Table

- Common (No permission page)

  - User

- Nested (recursive rendering)

  - nested-1

    - nested-2

- Private Device

  - Admin (Appears only when user named `admin`)

  - User (Appears only when user named `admin` or `user`)

- Private App (Appears only when user named `admin`)

  - Admin

## Usages

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
# run development server
yarn run dev
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
