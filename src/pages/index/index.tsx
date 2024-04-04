import { View, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Dialog from '@/components/Dialog'
import DialogManager from '@/utils/manager/DialogManager'
import ActionManager from '@/utils/manager/ActionManager'
// import Dialog1 from '@/components/Dialog1'
// import Dialog2 from '@/components/Dialog2'
// import Dialog3 from '@/components/Dialog3'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleClick = () => {
    ActionManager.enQueue(
      () => {
        // 打开弹窗1
        DialogManager.show({
          name: 'dialog1',
          data: { name: 'dialog1', title: 'dialog11111111' }
        })
      },
      { name: 'dialog1', weight: 0, series: true, exec: false }
    ).start()

    ActionManager.on(
      'done',
      () => {
        ActionManager.enQueue(
          () => {
            // 打开弹窗1
            DialogManager.show({
              name: 'dialog2',
              data: { name: 'dialog2', title: 'dialog222222222222222' }
            })
          },
          { name: 'dialog2', weight: 0, series: true, exec: false }
        ).start()
      },
      {
        namespace: '_ORCHARD_CLOSE_RENDER_',
        once: true
      }
    )
  }

  return (
    <View className='index'>
      <Button onClick={handleClick}>Hello world!</Button>
      <Dialog />
    </View>
  )
}
