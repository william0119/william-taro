import Taro from '@tarojs/taro'
import { useState } from 'react'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

export default () => {
  const [showModal, setShowModal] = useState(true)
  const [animation, setAnimation] = useState({})

  const openModal = () => {
    setShowModal(true)
    const animation1 = Taro.createAnimation({
      duration: 400,
      timingFunction: 'ease-in-out'
    })
    animation1.scale(1).opacity(1).step()

    setAnimation(animation1.export())
  }

  const closeModal = () => {
    const animation1 = Taro.createAnimation({})

    // animation1.translateY(-100).step()

    // setAnimation(animation1.export())

    // // 第一步：缩小弹窗
    // animation1.scale(0.3).step()

    // setAnimation(animation1.export())

    // setTimeout(() => {
      // 第二步：贝塞尔曲线移动到指定位置
      const targetX = 0 // 指定X轴目标位置
      const targetY = 0 // 指定Y轴目标位置
      const bezierControlPoint = { x: 190, y: 260 } // 贝塞尔曲线控制点，可以调整以实现不同效果

      animation1.translateY(-100).step({
        timingFunction: 'linear',
        duration: 200
      })

      animation1
        .translate3d(targetX, targetY, 0)
        .scale(0.2)
        .step({
          timingFunction: 'ease',
          // timingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          // timingFunction: 'cubic-bezier(0.33,0,0.67,1)',
          transformOrigin: `${bezierControlPoint.x}px ${bezierControlPoint.y}px`,
          duration: 600
        })

      setAnimation(animation1.export())

      setTimeout(() => {
        setShowModal(false)
      }, 1000) // 匹配第二步动画持续时间
    // }, 300) // 匹配第一步动画持续时间
  }

  return (
    <View className='container'>
      <Button class='banner' onClick={openModal}>Banner</Button>
      {showModal && (
        <View className='modal' animation={animation}>
          <View className='modal-content'>
            <Text>这是一个弹窗</Text>
            <Button onClick={closeModal}>关闭</Button>
          </View>
        </View>
      )}
    </View>
  )
}
