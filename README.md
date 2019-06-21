# Adminize template [![CircleCI](https://circleci.com/gh/lbwa/admin-template.svg?style=svg)](https://circleci.com/gh/lbwa/admin-template)

<p align="center">
  <a href="https://lbwa.github.io/adminize-template">Online site</a>
</p>

> A front-end access control solution, implement by Vuejs 2.0.

## Features

1. Dynamic aside rendering

   All of console aside menu items is based on current user global routes which is made of public routes and private routes

   - **Public routes** means their generation will be ignored by access verification process.

   - **Private routes** means these routes are filtered by current user access.

1. The implement of mandatory access control and Optional access control

   You can set up two typical solutions for access verification.

   - **Mandatory access control**, current user access should be satisfied all of them, otherwise routes wouldn't be created.

   - **Optional access control**, private routes will be create when current user access just matched one of them

1. User access console which is used to distribute access to user.

1. Dynamic component importer.

   Just edit your own component path based on `{PROJECT_ROOT}/src` in the `{PROJECT_ROOT}/src/router/components` directory.

   ```js
   // It will use `() => import(...)` function to import your component dynamically
   export default ['page/someComponent']
   ```

   then you can import component like these code:

   ```js
   import { privateComponents } from 'ROUTER/components'

   export default [
     {
       path: '/private',
       component: privateComponents.pageSomeComponent
     }
   ]
   ```

## Schema

- User access schema, you can store it anywhere (eg, local environment or remote database).

  ```ts
  /**
   * @description These access set can be store anywhere you want.
   * You should fetch all current access before you activate
   * private routes generation.
   */
  interface UserAccess {
    access: string
    update_time: string
    [extraMeta: string]: any
  }

  type UserAccessSet = UserAccess[]
  ```

  The most **important** thing is in `access` field of `UserAccess` scheme. We will use this field to create current user access map which is used to implement front-end access control and aside menu rendering dynamically.

- Route schema, inherited from [route schema](https://router.vuejs.org/api/#the-route-object) of `vue-router`

  ```ts
  interface Route extends RouteOfVueRouter {
    meta: {
      title: string
      icon: string
      layout: string
      access?: string[]
      optionalAccess?: string[]
    }
  }
  ```

  | Field          | description                                               |
  | -------------- | --------------------------------------------------------- |
  | title          | Used to create a title in the aside menu                  |
  | icon           | Used to create a icon for above title                     |
  | layout         | Used to create a layout for route linked with above title |
  | access         | Used to determine mandatory access for current route      |
  | optionalAccess | Used to determine optional access for current route       |

## Usages

- Routes sample

  ```js
  export default [
    {
      path: '/fist-routes',
      components: firstComponent,
      meta: {
        /**
         * @description This route will be added to global routes map if user
         * accesses include 'device.read' and 'device.write' access.
         */
        access: ['manage.device.read', 'manage.device.write']
      }
    },
    {
      path: '/second-routes',
      components: secondComponent,
      meta: {
        /**
         * @description Private routes creation will ignore current route,
         * because current user has no 'mange.device.write' access
         */
        access: ['manage.device.read', 'manage.device.write']
      }
    },
    {
      path: '/optional-routes',
      components: optionalComponent,
      meta: {
        /**
         * @description Once one of access was matched, private routes will be created.
         */
        optionalAccess: ['manage.device.read', 'manage.device.write']
      }
    }
    // ... other routes
  ]
  ```

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

## Commands

- Compiles and hot-reloads for development

```bash
yarn run serve
```

- Compiles and minifies for production

```bash
yarn run build
```
