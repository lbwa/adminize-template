export default {
  name: 'ItemTitle',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []
    if (icon) {
      vnodes.push(
        <i class={icon}></i>
      )
    }

    if (title) {
      vnodes.push(
        <span class="menu__item__title" slot="title">{title}</span>
      )
    }

    return vnodes
  }
}
