<template>
  <n-menu
    
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
  />
</template>

<script>
import { defineComponent, h} from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  HomeOutline as HomeIcon,
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
  
}

const menuOptions = [
   {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '../components/common/Home'
          }
        },
        { default: () => 'Going Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '헤헤헤',
    key: 'fish',
    icon: renderIcon(FishIcon)
  },
  {
    label: 'Bear Paw',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: 'Protect Wild Animals',
        key: 'protect-wild-animals'
      }
    ]
  },
  {
    label: 'Both',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: "You can't have your cake and eat it",
        key: 'can-not'
      }
    ]
  }
]

export default defineComponent({
    components: {
        NMenu
    },
  setup () {
    return {
      menuOptions,
      defaultExpandedKeys: ['fish', 'braise']
    }
  }
})
</script>