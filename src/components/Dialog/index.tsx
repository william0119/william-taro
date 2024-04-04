import { View } from '@tarojs/components'
import Dialog1 from '@/components/Dialog1'
import Dialog2 from '@/components/Dialog2'
import Dialog3 from '@/components/Dialog3'
import { useEffect, useState } from 'react'
import DialogManager from '@/utils/manager/DialogManager'
import ActionManager from '@/utils/manager/ActionManager'

interface DialogData {
  name: string
  title: string
}

export default function Dialog() {
  const [dialogName, setDialogName] = useState<string>('')

  const [dialogData, setDialogData] = useState<DialogData>({
    name: '',
    title: ''
  })

  useEffect(() => {
    DialogManager.init('orchard')
      .on(
        'show',
        (dialogInfo) => {
          // 更新弹窗数据
          setDialogData(dialogInfo?.data || {})

          // 展示弹窗
          setDialogName(dialogInfo?.name || '')
        },
        { namespace: '_ORCHARD_SHOW_RENDER_' }
      )
      .on(
        'close',
        (dialogInfo, payload) => {
          // 清空弹窗数据
          setDialogData({
            name: '',
            title: ''
          })

          // 隐藏弹窗
          setDialogName('')

          // 弹窗交互结束
          ActionManager.done(dialogInfo?.ext?.actionName ?? dialogInfo.name)
        },
        { namespace: '_ORCHARD_CLOSE_RENDER_' }
      )
  }, [])

  return dialogName ? (
    <View>
      {dialogName === 'dialog1' && <Dialog1 dialogData={dialogData} />}
      {dialogName === 'dialog2' && <Dialog2 dialogData={dialogData} />}
      {dialogName === 'dialog3' && <Dialog3 dialogData={dialogData} />}
    </View>
  ) : null
}
