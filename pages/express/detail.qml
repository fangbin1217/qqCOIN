<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="tipsTitle">{{tipsTitle}}</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="4">
    <view class="giftTitle">奖品</view>
  </i-col>
  <i-col span="20">
    <view class="giftValue">{{giftValue}}</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24"><view class="rewardValue"><image style="width:{{viewWidth}}px;height:248px;" src="{{lotteryGiftImage}}"></image></view></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="expressTitle">快递信息</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="12">
    <view class="expressTitle2">收件人</view>
  </i-col>
  <i-col span="12">
    <view class="expressTitle2">联系电话</view>
  </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="12">
    <view class="expressValue">{{expressUser}}</view>
  </i-col>
  <i-col span="12">
    <view class="expressValue">{{expressMobile}}</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="expressTitle">详细地址</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="expressValue3">{{expressAddress}}</view>
  </i-col>
</i-row>

<view qq:if="{{isAdmin}}">
  <i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
  <i-row class="iRow">
    <i-col span="24">
      <view class="i-class i-cell i-input i-input-wrapped">
        <view class="i-cell-hd i-input-title">问题反馈</view>
        <input value="{{ remark }}"  type="text" class="i-input-input i-cell-bd i-input-input-right" placeholder-class="i-input-placeholder" placeholder="输入反馈问题" />
      </view>
    </i-col>
  </i-row>
  <i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
  <i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
  <i-row class="iRow">
    <i-col span="12"><i-button bind:click="checkOk" type="success" shape="circle" size="large">确认下发</i-button></i-col>
    <i-col span="12"><i-button bind:click="checkFail" type="error" shape="circle" size="large">反馈问题</i-button></i-col>
  </i-row>
</view>
<view qq:else>
  <view qq:if="{{remark}}">
  <i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
  <i-row class="iRow"><i-col span="24"><view class="remark">注：{{remark}}</view></i-col></i-row>
  </view>
  <i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
  <i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
  <i-row class="iRow">
    <i-col span="24"><i-button bind:click="doStart" type="success" shape="circle" size="large">我要兑奖</i-button></i-col>
  </i-row>
</view>
