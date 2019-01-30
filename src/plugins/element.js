import { vueUsing } from 'UTILS'
import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Form,
  FormItem,
  Input,
  MessageBox,
  Message,
  Menu,
  Submenu,
  MenuItem,
  Scrollbar
} from 'element-ui'

// Prototype functions
Vue.prototype.$_plugins_messageBox = MessageBox
Vue.prototype.$_plugins_message = Message

// components using
vueUsing([
  Button,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Form,
  FormItem,
  Input,
  Menu,
  Submenu,
  MenuItem,
  Scrollbar
])
