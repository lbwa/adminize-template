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
  Menu,
  Submenu,
  MenuItem
} from 'element-ui'

// Prototype functions
Vue.prototype.$messageBox = MessageBox

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
  MenuItem
])
