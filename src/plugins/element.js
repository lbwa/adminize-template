import { vueUsing } from 'UTILS'
import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Form,
  FormItem,
  Input,
  MessageBox
} from 'element-ui'

// Prototype functions
Vue.prototype.$messageBox = MessageBox

// components using
vueUsing([
  Button,
  Container,
  Header,
  Main,
  Footer,
  Form,
  FormItem,
  Input
])
