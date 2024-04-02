import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/test/index'
    })
  }

  return (
    <View className='index'>
      <Text onClick={handleClick}>Hello world!</Text>
    </View>
  )
}
