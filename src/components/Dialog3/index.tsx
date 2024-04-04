import { View, Button } from '@tarojs/components'
import DialogManager from '@/utils/manager/DialogManager'
import './index.scss'

interface DialogData {
  name: string
  title: string
}

type IProps = {
  dialogData: DialogData
}

export default function Dialog1({ dialogData }: IProps) {
  const onClose = () => {
    DialogManager.close()
  }

  return (
    <View className='dialog'>
      <View className='mask' onClick={onClose}></View>
      <View className='main'>
        <View className='title'>{dialogData.title}</View>
        <Button onClick={onClose}>关闭3</Button>
      </View>
    </View>
  )
}
