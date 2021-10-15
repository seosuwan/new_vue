<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header>
     
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="max-height: 320px;"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
          
        </n-layout-sider>
        <router-view />
        <n-layout style="max-height: 320px;" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script>
import { h, defineComponent, ref, resolveComponent } from 'vue'
import { NIcon,NLayoutSider,NLayout,NMenu,NLayoutFooter,NSpace,NLayoutHeader } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
   {
    label: () =>
    
      h(
        resolveComponent('router-link'),
        {
          to: {
            path: '/'
          },
          style: {
            "margin-bottom": "5vh",
          }
        },
        'ME'
      ),
    key: 'go-back-home',
    icon: renderIcon(PersonIcon)
  },
  {
     label: () =>
    
      h(
        resolveComponent('router-link'),
        {
          to: {
            path: '/login'
          }
        },
        '이력'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
     label: () =>
    
      h(
        resolveComponent('router-link'),
        {
          to: {
            path: '/test'
          }
        },
         '테스트중입니다'
      ),
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
  },
  {
     label: () =>
    
      h(
        resolveComponent('router-link'),
        {
          to: {
            path: '/'
          }
        },
        '/'
      ),
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon)
  },
]

export default defineComponent({
   components: {
        NMenu,NLayoutSider,NLayout,NLayoutFooter,NSpace,
        NLayoutHeader
    },
  setup () {
    return {
      inverted: ref(false),
      menuOptions
    }
  }
})
</script>
<style scoped>
* {
  --item-height: 74px !important; 
}
 img{
     animation-duration: 3s;
    animation-name: slidein;

 }
</style>   