<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="goHome"><image src="../../images/index.png" style="width:30px;height:30px;" bindtap="goHome"></image></view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="lotteryTitle"><image style="width:{{viewWidth}}px;height:80px;" src="{{cjTitleImage}}"></image></view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="lotteryTitle2">{{lotteryTitle}}</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow">
    <i-col span="12"><view class="timeLeftTitle"><image style="width:150px;height:30px;" src="{{djsTitleImage}}"></image></view></i-col>
    <i-col span="12"><view class="timeLeftValue">{{timeLeftValue}}</view></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
<view qq:if="{{isFirst}}">
    <i-row class="iRow">
        <i-col span="4">
            <view style="width:{{leftMarign}}px;height:71px;"></view>
        </i-col>
        <i-col span="4" qq:for="{{lottery_codes}}" qq:key="id" qq:for-index="index">
            <view class="box b1"  animation="{{animationMain}}" ><image class="myImage" src="{{item.pkImage}}"></image></view>
            <view class="box b2"  animation="{{animationBack}}" style="position:relative;top:-73px;"><image class="myImage" src="{{item.image}}"></image></view>
        </i-col>
        <i-col span="4">
            <view style="width:{{leftMarign}}px;height:71px;"></view>
        </i-col>
    </i-row>
</view>
<view qq:else>
    <i-row class="iRow">
    <i-col span="24">
        <view class="waitImageP"><image class="waitImage" src="{{waitImage}}"></image></view>
    </i-col>
    <i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
    </i-row>
    <i-row class="iRow"><i-col span="24"><view class="oldUser" bindtap="myRecords">点我查看抽奖记录 <image src="../../images/right.png" class="rightImage"></image></view></i-col></i-row>
</view>
<i-row class="iRow">
<i-col span="24"><i-button loading="{{isLoading}}" disabled="{{isDisabled}}" bind:click="joinLottery" type="success" shape="circle" size="large">开始抽奖</i-button></i-col>
</i-row>
<i-row class="iRow">
    <i-col span="24"><view class="hasTitle">已有（<text class="hasValue">{{joinUsers}}</text>）人参与抽奖</view></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="rewardTitle3"><image  src="../../images/my.png" class="rightImage2"></image>往期中奖用户</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24">
    <view class='swiper-notice'>
    <swiper class='swiper-nav' vertical='true' autoplay='true' circular='true' interval='3000'>
        <block qq:for='{{noticeList}}' qq:key='unique'>
        <navigator hover-class='none'>
            <swiper-item>
            <view class='swiper-context'><image class="userImage" src="{{item.avatar}}"></image>{{item.context}}</view>
            </swiper-item>
        </navigator>
        </block>
    </swiper>
    </view>
</i-col></i-row>

<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow">
    <i-col span="12"><view class="noticeTitle"><image style="width:180px;height:30px;" src="{{tipsImage}}"></image></view></i-col>
    <i-col span="12"><button open-type="share" class="iconP2" animation="{{animation}}"><image class="btnImage" src="{{myShareBtn}}"></image></button></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">1、观看完视频可获取一次抽奖，一天限一次</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">2、如遇按钮置灰无法点击，请退出重新进入</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">3、在“我的”界面，点击“中奖记录”查询信息</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">4、请于开奖后7天有效期内领取，逾期视为放弃</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">5、分享参与的人越多，奖品也越多（乘以倍数）</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">6、抽奖成功后分享好友或群，可获额外奖励号码</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="rewardTitle">本期奖品</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="rewardContent">{{rewardTitle}} * <text class="rewardNum">{{rewardNum}}</text>倍(目前加成)</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="rewardValue"><image style="width:{{viewWidth}}px;height:248px;" src="{{rewardImage}}"></image></view></i-col></i-row>




