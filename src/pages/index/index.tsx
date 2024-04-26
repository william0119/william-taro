import { useEffect } from 'react'
import { Button, View } from '@tarojs/components'
import Dialog from '@/components/Dialog'
import DialogManager from '@/utils/manager/DialogManager'
import ActionManager from '@/utils/manager/ActionManager'
import './index.scss'

// 假设接口给出的弹窗数据如下，权重由前端控制，后端不给
const dialogData = [
  {
    name: 'dialog1',
    data: { name: 'dialog1', title: 'dialog11111111' }
  },
  {
    name: 'dialog2',
    data: { name: 'dialog2', title: 'dialog222222' }
  },
  {
    name: 'dialog3',
    data: { name: 'dialog3', title: 'dialog3333333333' }
  }
]

export default function Index() {
  useEffect(() => {
    loadDialog()
  }, [])

  /**
   * 情形一：假如弹 3 个弹窗，3个弹窗之间无其他依赖关系，只是按顺序弹即可！
   *
   * question1: dialog1 点击关闭结束弹窗后，进入 dialog2 的这个过程没有一点点间隔，难道要用 settimeout 包一下，还是用 css 去处理两个弹窗之间的过渡效果？（这里不考虑实际业务中，点击关闭掉接口的情况）
   * answer1:
   *
   * question2: 下面 loadDialog 方法中，每次等待上一个弹窗结束,然后让下一个弹窗入队，只能使用 ActionManager.on('done',() => ActionManager.enQueue...) 去处理么？
   * 这样如果很多弹窗的话是不是就很鸡肋？或者直接一个循环先让所有弹窗入队？
   * answer2:
   *
   * question3: src/components/Dialog1/index.tsx 里 onClose 方法里处理 DialogManager.close() 是正确的做法么？
   * answer3:
   *
   * question4: 每个弹窗的业务类型的埋点，是建议放在各个 dialog 的 UI 组件里做还是建议放在 src/components/Dialog/index.tsx 这里做？
   * answer4:
   */

  /**
   * 情形二：假如现在由后端的一个接口返回某个页面的所有弹窗，你建议该接口的返回该如何定义比较好？像上面第 9 行 dialogData 一样可以么？
   */
  const loadDialog = () => {
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
      <Button onClick={loadDialog}>弹窗测试</Button>
      <Dialog />
    </View>
  )
}
