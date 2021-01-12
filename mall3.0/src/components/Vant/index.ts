import { App } from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem } from 'vant'

const plugins = [Button, List, Cell, Tabbar, TabbarItem]

export default {
  install: function(vm: App) {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}

// https://youzan.github.io/vant/#/zh-CN/home
// import {
//   Button,
//   Toast,
//   Dialog,
//   Field,
//   Form,
//   Notify,
//   Cell,
//   CellGroup,
//   NavBar,
//   Search,
//   Image,
//   Lazyload,
//   Swipe,
//   SwipeItem,
//   Loading,
//   Tag,
//   Tabbar,
//   TabbarItem,
//   List,
//   PullRefresh,
//   TreeSelect,
//   Icon,
//   Progress,
//   ImagePreview,
//   Rate,
//   GoodsAction,
//   GoodsActionIcon,
//   GoodsActionButton,
//   Sku,
//   AddressList,
//   AddressEdit,
//   SwipeCell,
//   Card,
//   SubmitBar,
//   Checkbox,
//   CheckboxGroup,
//   Grid,
//   GridItem,
//   DropdownMenu,
//   DropdownItem,
//   ContactCard,
//   ContactList,
//   ContactEdit,
//   ShareSheet,
//   Tab,
//   Tabs,
//   Sticky,
//   Empty
// } from 'vant'

// app
//   .use(Toast)
//   .use(Dialog)
//   .use(Notify)
//   .use(Field)
//   .use(Form)
//   .use(Button)
//   .use(Cell)
//   .use(CellGroup)
//   .use(NavBar)
//   .use(Search)
//   .use(Image)
//   .use(Lazyload)
//   .use(Swipe)
//   .use(SwipeItem)
//   .use(Loading)
//   .use(Tag)
//   .use(Tabbar)
//   .use(TabbarItem)
//   .use(List)
//   .use(PullRefresh)
//   .use(TreeSelect)
//   .use(Icon)
//   .use(Progress)
//   .use(ImagePreview)
//   .use(Rate)
//   .use(GoodsAction)
//   .use(GoodsActionIcon)
//   .use(GoodsActionButton)
//   .use(Sku)
//   .use(AddressList)
//   .use(AddressEdit)
//   .use(SwipeCell)
//   .use(Card)
//   .use(SubmitBar)
//   .use(Checkbox)
//   .use(CheckboxGroup)
//   .use(Grid)
//   .use(GridItem)
//   .use(DropdownMenu)
//   .use(DropdownItem)
//   .use(ContactCard)
//   .use(ContactList)
//   .use(ContactEdit)
//   .use(ShareSheet)
//   .use(Tab)
//   .use(Tabs)
//   .use(Sticky)
//   .use(Empty)
