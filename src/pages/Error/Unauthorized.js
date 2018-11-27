export default {
  name: 'Unauthorized',
  render (h) {
    return h('section', {
      class: 'page-unauthorized'
    },
    'You are unauthorized !')
  }
}
