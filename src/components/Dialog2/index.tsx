import { View, Button } from '@tarojs/components'
import DialogManager from '@/utils/manager/DialogManager'
import './index.scss'

interface DialogData {
  name: string
  data: { [key: string]: any }
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
        <View className='title'>{dialogData.data.title}</View>
        <Button onClick={onClose}>关闭2</Button>
      </View>
    </View>
  )
}
