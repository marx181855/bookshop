import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css'
import { Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs, Card, Image as VanImage, Tag, Button, Form, Field, Checkbox, CheckboxGroup, SwipeCell, Stepper, SubmitBar, Icon, AddressEdit, AddressList, Popup, Grid, GridItem, PullRefresh, List } from 'vant'
createApp(App)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload, {
    loading: require('./assets/images/loading.jpg')
  })
  .use(Badge)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Collapse)
  .use(CollapseItem)
  .use(Tab)
  .use(Tabs)
  .use(Card)
  .use(VanImage)
  .use(Tag)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SwipeCell)
  .use(Stepper)
  .use(SubmitBar)
  .use(Icon)
  .use(AddressEdit)
  .use(AddressList)
  .use(Popup)
  .use(Grid)
  .use(GridItem)
  .use(PullRefresh)
  .use(List)
  .use(store)
  .use(router)
  .mount('#app')
