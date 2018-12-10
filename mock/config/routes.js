module.exports = {
  'POST /user/login': (req, res) => {
    const { username, password } = req.body
    if ((
      username === 'sudo' || username === 'admin' || username === 'user'
    ) && password) {
      return res.send({
        'code': 2000,
        'msg': 'OK',
        'access_token': username
        // "access_token": Math.random().toString(16).slice(2)
      })
    }
    res.send({
      code: 5000,
      msg: 'wrong username or password'
    })
  },

  'POST /user/validate': (req, res) => {
    // const { token, username } = req.body
    const { username } = req.body
    return res.end({
      code: 2000,
      msg: 'OK',
      role: [username]
    })
  },

  'POST /user/access': (req, res) => {
    const { token } = req.body

    if ((token === 'sudo')) {
      return res.send({
        code: 2000,
        msg: 'OK',
        roles: ['super admin']
      })
    }

    if ((token === 'admin')) {
      return res.send({
        code: 2000,
        msg: 'OK',
        roles: ['admin']
      })
    }

    return res.send({
      code: 2000,
      msg: 'OK',
      roles: ['user']
    })
  },

  'POST /user/dynamic': (req, res) => {
    res.send({
      code: 2000,
      msg: 'OK',
      routes: [
        {
          path: '/dashboard',
          meta: {
            title: 'dashboard'
          },
          children: [
            {
              path: 'analysis',
              meta: {
                title: 'analysis'
              }
            },
            {
              path: 'workspace',
              meta: {
                title: 'workspace'
              }
            }
          ]
        }
      ]
    })
  }
}
