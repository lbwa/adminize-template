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

export function fetchDynamicRoutes ({
  username,
  accessToken
}) {
  return request.post(routes.DYNAMIC_ROUTES, {
    username,
    accessToken
  })
}
