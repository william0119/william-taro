import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Test() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='test'>
      <Text>Hello world!</Text>
    </View>
  )
}
