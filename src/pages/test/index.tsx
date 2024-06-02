import { ScrollView, View, Image } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default () => {
  const [imageWidth, setImageWidth] = useState(375)
  const [imageHeight, setImageHeight] = useState(300)
  const [scrollTop, setScrollTop] = useState(0)
  const [isFillImg, setIsFillImg] = useState(true)

  const handleScroll = (e) => {
    const scrollTop1 = e.detail.scrollTop // 获取滚动位置
    console.log(scrollTop1)


    if (scrollTop1 >0 && scrollTop1 > scrollTop) {
      console.log('??????????????????????????')
      setImageWidth(375 - 150)
      setImageHeight(300 - 150)
      setIsFillImg(false)
    }

    setScrollTop(scrollTop1)

  }

  const onScrollToUpper = () => {
    setImageWidth(375)
    setImageHeight(300)
    setIsFillImg(true)
  }


  return (
    <View className='wrapper'>
      <View className='popup'>
        <View
          className='container'
          style={{
            // width: `${imageWidth}px`,
            height: `${imageHeight}px`
          }}
        >
          <Image
            className='image'
            mode='scaleToFill'
            src='https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`
            }}
          ></Image>
        </View>
        <ScrollView scroll-y onScroll={handleScroll} onScrollToUpper={onScrollToUpper}>
          {/* style={{paddingTop: `${scrollTop <= 150 ? scrollTop : 150}px`}} */}
          <View className='list'>
            {new Array(30).fill(1).map((item, index) => (
              <View key={index}>{item + index}</View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
