import { View, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import ActionManager from '@/utils/manager/ActionManager'
// import Dialog1 from '@/components/Dialog1'
// import Dialog2 from '@/components/Dialog2'
// import Dialog3 from '@/components/Dialog3'
// import { useState } from 'react'
import DialogManager from '@/utils/manager/DialogManager'
import './index.scss'

export default function Index() {
  // const [showDialog1, setShowDialog1] = useState<boolean>(false)
  // const [showDialog2, setShowDialog2] = useState<boolean>(false)
  // const [showDialog3, setShowDialog3] = useState<boolean>(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  // const handeCloseDialog1 = () => {
  //   setShowDialog1(false)
  // }

  // const handeCloseDialog2 = () => {
  //   setShowDialog2(false)
  // }

  // const handeCloseDialog3 = () => {
  //   setShowDialog3(false)
  // }

  const handleClick = () => {
    // Taro.navigateTo({
    //   url: '/pages/test/index'
    // })

    // setShowDialog1(true)
    // setShowDialog2(true)
    // setShowDialog3(true)

    ActionManager.enQueue(() => {
      // 打开弹窗1
      DialogManager.show({
        name: 'dialog1111',
        data: { name: 'dialog1', title: 'dialog11111111' }
      })
    }).start()
  }

  return (
    <View className='index'>
      <Button onClick={handleClick}>Hello world!</Button>
      {/* <Dialog1 show={showDialog1} onClose={handeCloseDialog1} />
      <Dialog2 show={showDialog2} onClose={handeCloseDialog2} />
      <Dialog3 show={showDialog3} onClose={handeCloseDialog3} /> */}
    </View>
  )
}
