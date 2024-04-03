<template>
    <view
        v-if="dialogName"
        class="dialog-wrap"
        @touchmove.stop="blank"
    >

        <!-- ===================================== 账号提示相关弹窗 开始 ===================================== -->
        <!-- 登录弹窗 -->
        <login
            v-if="dialogName === 'login'"
            :dialog-data="dialogData"
        ></login>


        <!-- 帐号相关弹窗 -->
        <account
            v-if="dialogName === 'account'"
            :dialog-data="dialogData"
        ></account>
        <!-- ===================================== 账号提示相关弹窗 结束 ===================================== -->


        <!-- ===================================== 果树成长相关弹窗 开始 ===================================== -->
        <!-- 已种植果树提醒弹窗 重复种植 -->
        <repeat-planting
            v-if="dialogName === 'repeatPlanting'"
            :dialog-data="dialogData"
        ></repeat-planting>

        <!-- 选择种子弹窗 -->
        <select-seed
            v-if="dialogName === 'selectSeed'"
            :dialog-data="dialogData"
            :is-new="isNew"
            :is-exchange="plantInfo.isExchange"
        ></select-seed>

        <!-- 果树成长进度详情 -->
        <growth-progress
            v-if="dialogName === 'growthProgress'"
            :dialog-data="dialogData"
            :plant-info="plantInfo"
        ></growth-progress>


        <!-- 果树成长阶段升级提示弹窗 -->
        <tree-stage-upgrade
            v-if="dialogName === 'upgrade'"
            :dialog-data="dialogData"
            :is-new="isNew"
        ></tree-stage-upgrade>


        <!-- 果树成熟弹窗 -->
        <tree-harvest
            v-if="dialogName === 'harvest'"
            :dialog-data="dialogData"
            :fruit-upgrade-pic="plantInfo.plantPicConfig.fruitUpgradePic"
        ></tree-harvest>


        <!-- 果实成熟后兑换弹窗 -->
        <exchange-fruit
            v-if="dialogName === 'exchangeFruit'"
            :dialog-data="dialogData"
            :exchange-commodity-id="plantInfo.exchangeCommodityId"
            :commodity-exchange-info="plantInfo.commodityExchangeInfo"
        ></exchange-fruit>


        <!-- 水果兑换码过期失效弹窗 -->
        <exchange-expired
            v-if="dialogName === 'exchangeExpired'"
            :dialog-data="dialogData"
        ></exchange-expired>
        <!-- ===================================== 果树成长相关弹窗 结束 ===================================== -->


        <!-- ===================================== 引导相关弹窗 开始 ===================================== -->
        <!-- 浇水引导弹窗 -->
        <guide-watering
            v-if="dialogName === 'guideWatering'"
            :dialog-data="dialogData"
            :is-new="isNew"
        ></guide-watering>

        <!-- 领水滴任务ICON引导弹窗 -->
        <guide-task
            v-if="dialogName === 'guideTask'"
            :dialog-data="dialogData"
        ></guide-task>

        <!-- 通讯录引导弹窗 -->
        <guide-phone-friend
            v-if="dialogName === 'guidePhoneFriend'"
            :dialog-data="dialogData"
        ></guide-phone-friend>

        <!-- 化肥引导弹窗 -->
        <guide-fertilizer
            v-if="dialogName === 'guideFertilizer'"
            :dialog-data="dialogData"
        ></guide-fertilizer>

        <!-- 小程序重启引导弹窗 -->
        <applets-upgrade
            v-if="dialogName === 'appletsUpgrade'"
            :dialog-data="dialogData"
        ></applets-upgrade>

        <!-- 好友果园滑动引导弹窗 -->
        <guide-slide
            v-if="dialogName === 'guideSlide'"
            :dialog-data="dialogData"
        ></guide-slide>
        <!-- ===================================== 引导相关弹窗 结束 ===================================== -->


        <!-- ===================================== 挂件相关弹窗 开始 ===================================== -->
        <!-- 我的奖品弹窗 -->
        <show-prize
            v-if="dialogName === 'showPrize'"
            :dialog-data="dialogData"
        ></show-prize>


        <!-- 订阅弹窗 -->
        <subscrible
            v-if="dialogName === 'subscrible'"
            :dialog-data="dialogData"
        ></subscrible>
        <!-- ===================================== 挂件相关弹窗 结束 ===================================== -->


        <!-- ===================================== 幸运红包相关弹窗 开始 ===================================== -->
        <!-- 幸运红包可开启-领取水滴弹窗 -->
        <red-packet-reward
            v-if="dialogName === 'redPacketReward'"
            :dialog-data="dialogData"
        ></red-packet-reward>
        <!-- 幸运红包不可开启-提醒浇水弹窗 -->
        <red-packet
            v-if="dialogName === 'redPacket'"
            :dialog-data="dialogData"
        ></red-packet>
        <!-- ===================================== 幸运红包相关弹窗 结束 ===================================== -->


        <!-- ===================================== 水滴收集瓶相关弹窗 开始 ===================================== -->
        <!-- 水滴收集瓶翻倍提醒弹窗 -->
        <water-bottle-dobule
            v-if="dialogName === 'collectBottleDouble'"
            :dialog-data="dialogData"
        ></water-bottle-dobule>

        <!-- 领取水滴日历提醒弹窗 -->
        <calendar-collect-water
            v-if="dialogName === 'calendarCollectWater'"
            :dialog-data="dialogData"
            :is-jili-open="isJiliOpen"
        ></calendar-collect-water>
        <!-- ===================================== 水滴收集瓶相关弹窗 结束 ===================================== -->


        <!-- ===================================== 好友列表相关弹窗 开始 ===================================== -->
        <!-- 邀请好友弹窗 添加好友 -->
        <invite-add-friend
            v-if="dialogName === 'inviteAddFriend'"
            :dialog-data="dialogData"
        ></invite-add-friend>

        <!-- 邀请好友弹窗 添加通讯录里的好友 -->
        <invite-add-phone-friend
            v-if="dialogName === 'inviteAddPhoneFriend'"
            :dialog-data="dialogData"
        ></invite-add-phone-friend>

        <!-- 通讯录好友邀请成功弹窗 -->
        <invite-successful
            v-if="dialogName === 'inviteContact'"
            :dialog-data="dialogData"
        ></invite-successful>

        <!-- 引导开启通讯录弹窗 -->
        <contacts-auth
            v-if="dialogName === 'contactsAuth'"
            :dialog-data="dialogData"
        ></contacts-auth>

        <!-- 添加通讯录好友到好友列表弹窗 -->
        <add-phone-friend
            v-if="dialogName === 'addPhoneFriend'"
            :dialog-data="dialogData"
        ></add-phone-friend>

        <!-- 解除好友关系弹窗 -->
        <delete-list-friend
            v-if="dialogName === 'deleteFriend'"
            :dialog-data="dialogData"
        ></delete-list-friend>

        <!-- 好友偷完水-邀请弹窗 -->
        <steal-water-invite-dialog
            v-if="dialogName === 'stealWaterInviteDialog'"
            :dialog-data="dialogData"
        ></steal-water-invite-dialog>
        <!-- ===================================== 好友列表相关弹窗 结束 ===================================== -->


        <!-- ===================================== 化肥相关弹窗 开始 ===================================== -->
        <!-- 化肥小妙招 化肥规则详情弹窗 -->
        <fertilizer-tip
            v-if="dialogName === 'fertilizerTip'"
            :dialog-data="dialogData"
        ></fertilizer-tip>

        <!-- 领取化肥奖励弹窗 -->
        <fertilizer-reward
            v-if="dialogName === 'fertilizerReward'"
            :dialog-data="dialogData"
        ></fertilizer-reward>
        <!-- ===================================== 化肥相关弹窗 结束 ===================================== -->


        <!-- ===================================== 好友果园相关弹窗 开始 ===================================== -->
        <!-- 好友果园召回好友弹窗 -->
        <recall-friend
            v-if="dialogName === 'recallFriend'"
            :dialog-data="dialogData"
        ></recall-friend>

        <!-- 帮助好友浇水-水滴不足弹窗 -->
        <no-water
            v-if="dialogName === 'noWater'"
            :dialog-data="dialogData"
        ></no-water>
        <!-- ===================================== 好友果园相关弹窗 结束 ===================================== -->


        <!-- ===================================== 七日挑战相关弹窗 开始 ===================================== -->
        <!-- 七日挑战主弹窗 -->
        <seven-day-challenge
            v-if="dialogName === 'dailyAttendance'"
            :dialog-data="dialogData"
            :push-status="pushStatus"
            :daily-attendance="dailyAttendance"
        ></seven-day-challenge>
        <!-- ===================================== 七日挑战相关弹窗 结束 ===================================== -->


        <!-- ===================================== 天降红包相关弹窗 开始（已下线）===================================== -->
        <!-- 天降红包弹窗 -->
        <free-red-packet
            v-if="dialogName === 'freeRedPacket'"
            :dialog-data="dialogData"
            :free-red-packet="freeRedPacket"
        ></free-red-packet>

        <!-- 天降红包邀请成功弹窗 -->
        <free-red-packet-share-success
            v-if="dialogName === 'redPacketAct'"
            :dialog-data="dialogData"
        ></free-red-packet-share-success>

        <!-- 天降红包助力成功弹窗 -->
        <free-red-packet-friend
            v-if="dialogName === 'redPacketHelpFriend'"
            :dialog-data="dialogData"
        ></free-red-packet-friend>
        <!-- ===================================== 天降红包相关弹窗 结束 ===================================== -->


        <!-- ===================================== N天挑战相关弹窗 开始 ===================================== -->
        <!-- N天连续浇水抽奖大转盘 -->
        <n-days-watering-draw
            v-if="dialogName === 'keepWateringDraw'"
            :dialog-data="dialogData"
        ></n-days-watering-draw>

        <!-- N天浇水挑战转盘抽奖结果弹窗 -->
        <n-days-drawed
            v-if="dialogName === 'keepWateringDrawSuccess'"
            :dialog-data="dialogData"
        ></n-days-drawed>

        <!-- N天浇水今日任务完成 -->
        <n-days-today-success
            v-if="dialogName === 'keepWateringDoneToday'"
            :dialog-data="dialogData"
        ></n-days-today-success>

        <!-- N天浇水挑战邀请好友成功完成今日任务 -->
        <n-days-invite-success
            v-if="dialogName === 'keepWateringInviteSuccess'"
            :dialog-data="dialogData"
        ></n-days-invite-success>

        <!-- N天浇水挑战成功 -->
        <n-days-success
            v-if="dialogName === 'keepWateringSuccess'"
            :dialog-data="dialogData"
        ></n-days-success>

        <!-- N天浇水挑战邀请好友成功完成整个活动挑战 -->
        <n-days-invite-done
            v-if="dialogName === 'keepWateringInviteSuccessDirect'"
            :dialog-data="dialogData"
        ></n-days-invite-done>

        <!-- N天浇水挑战失败 -->
        <n-days-fail
            v-if="dialogName === 'keepWateringFail'"
            :dialog-data="dialogData"
        ></n-days-fail>
        <!-- ===================================== N天挑战相关弹窗 结束 ===================================== -->


        <!-- ===================================== 任务相关弹窗 开始 ===================================== -->
        <!-- 一日成熟任务完成 -->
        <one-day-ripe-done
            v-if="dialogName === 'matureOneDaySuccess'"
            :dialog-data="dialogData"
        ></one-day-ripe-done>
        <!-- 任务按钮领取水滴异形弹窗 -->
        <toast-water
            v-if="dialogName === 'toastWater'"
            :dialog-data="dialogData"
        ></toast-water>
        <!-- 激励视频场景（水壶、接水桶、水滴收集瓶） -->
        <get-water-look-video
            v-if="dialogName === 'getWaterLookVideo'"
            :dialog-data="dialogData"
        ></get-water-look-video>
        <!-- 任务方：将小程序添加到桌面弹窗 -->
        <add-to-desktop
            v-if="dialogName === 'addToDesktop'"
            :dialog-data="dialogData"
        ></add-to-desktop>

        <!-- 果园自维护任务 -->
        <active-add-to-desktop
            v-if="dialogName === 'activeAddToDesktop'"
            :dialog-data="dialogData"
        ></active-add-to-desktop>
        <!-- ===================================== 任务相关弹窗 结束 ===================================== -->

        <!-- ===================================== 瓜分水滴相关弹窗 开始 ===================================== -->

        <!-- 打卡成功弹窗 -->
        <carve-water-join
            v-if="dialogName === 'carveWaterJoin'"
            :dialog-data="dialogData"
        ></carve-water-join>

        <!-- 错过瓜分水滴 -->
        <carve-water-miss
            v-if="dialogName === 'carveWaterMiss'"
            :dialog-data="dialogData"
        ></carve-water-miss>

        <!-- 瓜分水滴记录弹窗 -->
        <carve-water-record
            v-if="dialogName === 'carveWaterRecord'"
            :dialog-data="dialogData"        
        ></carve-water-record>

        <!-- 瓜分水滴成功弹窗 -->
        <carve-water-success
            v-if="dialogName === 'carveWaterSuccess'"
            :dialog-data="dialogData"          
        ></carve-water-success>

        <!-- 幸运弹窗(早到星、晚到星、幸运行) -->
        <carve-water-lucky
            v-if="dialogName === 'carveWaterLucky'"
            :dialog-data="dialogData"    
        ></carve-water-lucky>

        <!-- 瓜分水滴规则弹窗 -->
        <carve-water-rule
            v-if="dialogName === 'carveWaterRule'"
            :dialog-data="dialogData"
        ></carve-water-rule>

        <!-- ===================================== 瓜分水滴相关弹窗 结束 ===================================== -->

        <!-- 一日成熟做任务弹窗 -->
        <one-day-ripe-task
            v-if="dialogName === 'oneDayRipeTask'"
            :dialog-data="dialogData"
            :one-day-info="oneDayInfo"
        ></one-day-ripe-task>

        <!-- 任务破壳弹窗 -->
        <break-shell
            v-if="dialogName === 'breakShell'"
            :dialog-data="dialogData"
        ></break-shell>

    </view>
</template>
<script>
/**
 * @file 果园首页弹窗汇总
 * @author chenhui20@baidu.com
 * @tips 弹窗所需的数据如果在展示的时候获取困难，可以使用 props 传递
 * @props {Boolean} isNew 是否展示过新手引导
 * @props {Boolean} isJiliOpen 是否开启激励视频功能 激励视频场景方案
 * @props {Number} pushStatus 用户订阅状态
 * @props {Object} plantInfo 果树信息
 * @props {Object} dailyAttendance 7日挑战数据
 * @props {Object} freeRedPacket 天降红包信息（已下线）
 * @props {Object} oneDayInfo 一日成熟信息
 */

// 弹窗组件
import AppletsUpgrade from './AppletsUpgrade';
import Account from './Account';
import Login from './Login';
import GuideWatering from './GuideWatering';
import GuideTask from './GuideTask';
import GuidePhoneFriend from './GuidePhoneFriend';
import GuideFertilizer from './GuideFertilizer';
import GuideSlide from './GuideSlide';
import RepeatPlanting from './RepeatPlanting';
import SelectSeed from './SelectSeed';
import GrowthProgress from './GrowthProgress';
import TreeStageUpgrade from './TreeStageUpgrade';
import TreeHarvest from './TreeHarvest';
import Subscrible from './Subscrible';
import SevenDayChallenge from './SevenDayChallenge';
import RedPacket from './RedPacket';
import RedPacketReward from './RedPacketReward';
import WaterBottleDobule from './WaterBottleDobule';
import CalendarCollectWater from './CalendarCollectWater';
import ExchangeExpired from './ExchangeExpired';
import ExchangeFruit from './ExchangeFruit';
import ToastWater from './ToastWater';
import GetWaterLookVideo from './GetWaterLookVideo';
import ContactsAuth from './ContactsAuth';
import AddPhoneFriend from './AddPhoneFriend';
import FreeRedPacket from './FreeRedPacket';
import FreeRedPacketFriend from './FreeRedPacketFriend';
import FreeRedPacketShareSuccess from './FreeRedPacketShareSuccess';
import ShowPrize from './ShowPrize';
import DeleteListFriend from './DeleteListFriend';
import FertilizerTip from './FertilizerTip';
import FertilizerReward from './FertilizerReward';
import InviteSuccessful from './InviteSuccessful';
import StealWaterInviteDialog from './StealWaterInviteDialog';
import NDaysWateringDraw from './NDaysWateringDraw.vue';
import NDaysDrawed from './NDaysDrawed';
import NDaysFail from './NDaysFail';
import NDaysInviteDone from './NDaysInviteDone';
import NDaysInviteSuccess from './NDaysInviteSuccess';
import NDaysSuccess from './NDaysSuccess';
import NDaysTodaySuccess from './NDaysTodaySuccess';
import InviteAddFriend from './InviteAddFriend';
import InviteAddPhoneFriend from './InviteAddPhoneFriend';
import RecallFriend from './RecallFriend';
import NoWater from './NoWater';
import AddToDesktop from './AddToDesktop';
import ActiveAddToDesktop from './ActiveAddToDesktop';
import carveWaterJoin from './CarveWaterJoin';
import CarveWaterMiss from './CarveWaterMiss';
import CarveWaterRecord from './CarveWaterRecord';
import CarveWaterSuccess from './CarveWaterSuccess';
import CarveWaterLucky from './CarveWaterLucky';
import CarveWaterRule from './CarveWaterRule';
import OneDayRipeTask from './OneDayRipeTask';
import OneDayRipeDone from './OneDayRipeDone';
import BreakShell from './BreakShell';

// ug-swan-manager
import {ActionManager, DialogManager} from '@baidu/ug-swan-manager';

// 显示小程序胶囊
import {setMenuEnabled} from '@js/enhancedSwanApi/setMenuEnabled';


export default {
    components:{
        AppletsUpgrade,
        Account,
        Login,
        RepeatPlanting,
        SelectSeed,
        GrowthProgress,
        GuideWatering,
        GuideTask,
        GuidePhoneFriend,
        GuideFertilizer,
        GuideSlide,
        TreeStageUpgrade,
        TreeHarvest,
        Subscrible,
        SevenDayChallenge,
        RedPacket,
        RedPacketReward,
        WaterBottleDobule,
        CalendarCollectWater,
        ExchangeExpired,
        ExchangeFruit,
        ToastWater,
        GetWaterLookVideo,
        ContactsAuth,
        AddPhoneFriend,
        FreeRedPacket,
        FreeRedPacketFriend,
        FreeRedPacketShareSuccess,
        ShowPrize,
        DeleteListFriend,
        FertilizerTip,
        FertilizerReward,
        InviteSuccessful,
        StealWaterInviteDialog,
        NDaysWateringDraw,
        NDaysDrawed,
        NDaysFail,
        NDaysInviteDone,
        NDaysInviteSuccess,
        NDaysSuccess,
        NDaysTodaySuccess,
        InviteAddFriend,
        InviteAddPhoneFriend,
        RecallFriend,
        NoWater,
        AddToDesktop,
        ActiveAddToDesktop,
        carveWaterJoin,
        CarveWaterMiss,
        CarveWaterRecord,
        CarveWaterSuccess,
        CarveWaterLucky,
        CarveWaterRule,
        OneDayRipeTask,
        OneDayRipeDone,
        BreakShell,
    },

    props: {
        // 是否展示过新手引导
        isNew: Boolean,

        // 是否开启激励视频功能 激励视频场景方案
        isJiliOpen: Boolean,

        // 用户订阅状态
        pushStatus: Number,

        // 果树信息
        plantInfo: Object,

        // 7日挑战数据
        dailyAttendance: Object,

        // 天降红包信息（已下线）
        freeRedPacket: Object,

        // 一日成熟信息
        oneDayInfo: Object,
    },

    data: {
        // 弹窗类型
        dialogName: '',
        // 弹窗数据
        dialogData: {}
    },

    pageLifetimes: {
        // 组件所在的页面被展示时触发
        show() {
            // 激活弹窗实例
            DialogManager.use('orchard');
        }
    },

    created() {
        DialogManager
            .init('orchard')
            .on('show', dialogInfo => {
                // 隐藏小程序胶囊
                setMenuEnabled({enabled: false});

                // 更新弹窗数据
                this.dialogData = dialogInfo.data;

                // 展示弹窗
                this.dialogName = dialogInfo.name;

            }, {namespace: '_ORCHARD_SHOW_RENDER_'})
            .on('close', (dialogInfo, payload) => {
                // 显示小程序胶囊
                setMenuEnabled({enabled: true});

                // 清空弹窗数据
                this.dialogData = {};

                // 隐藏弹窗
                this.dialogName = '';

                // 弹窗交互结束
                ActionManager.done(dialogInfo?.ext?.actionName ?? dialogInfo.name);

            }, {namespace: '_ORCHARD_CLOSE_RENDER_'});
    },

    methods: {
        // 空函数 阻止滚动事件冒泡
        blank() {}
    }
}
</script>

<style lang="stylus" scoped>
.dialog-wrap
    position fixed
    left 0
    top 0
    // 【 层级规范 】 弹窗-9999
    z-index 9999
    width 100vw
    height 100vh
</style>
