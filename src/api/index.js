import request from 'UTILS/request'
import routes from './routes'

export function userLogin ({
  username,
  password
}) {
  return request.post(routes.LOGIN, {
    username,
    password
  })
}

export function fetchUserAccess ({ username }) {
  return request.post(routes.ACCESS, {
    username
  })
}

export function fetchDynamicRoutes ({
  username
}) {
  return request.post(routes.DYNAMIC_ROUTES, {
    username
  })
}
