<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="tipsTitle">{{tips}}</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="tipsImageP"><image class="tipsImage" src="{{tipsImage}}"></image></view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="8">
    <view class="lotteryTitle">开奖号码</view>
  </i-col>
  <i-col span="4" qq:for="{{lottery_codes}}" qq:key="id" qq:for-index="index">
    <view class="pukeImage"><image class="pukeImage" src="{{item.image}}"></image></view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="8">
    <view class="lotteryTitle2">你的号码</view>
  </i-col>
  <i-col span="4" qq:for="{{my_codes}}" qq:key="id" qq:for-index="index">
    <view class="pukeImage"><image class="pukeImage" src="{{item.image}}"></image></view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="8">
    <view class="lotteryTitle2">奖励号码</view>
  </i-col>
  <i-col span="4" qq:for="{{reward_codes}}" qq:key="id" qq:for-index="index">
    <view class="pukeImage"><image class="pukeImage" src="{{item.image}}"></image></view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="zhu">注：</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">1、抽奖成功后在抽奖页面分享，可获取奖励号码</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">2、请于开奖后7天有效期内领取，逾期视为放弃</view></i-col></i-row>
<i-row class="iRow"><i-col span="24"><view class="tipsValue">3、号码越多，抽奖概率越大</view></i-col></i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="rewardTitle">中奖记录</view>
  </i-col>
</i-row>
  <i-row class="iRow"><i-col span="24" i-class="col-space3"></i-col></i-row>
<view class="dataP">
  <i-row class="iRow">
      <i-col span="6" i-class="listTitle">日期</i-col>
      <i-col span="6" i-class="listTitle">奖品</i-col>
      <i-col span="6" i-class="listTitle">状态</i-col>
      <i-col span="6" i-class="listTitle">操作</i-col>
    </i-row>
    <view wx:if="{{records}}" wx:for="{{records}}" wx:key="id" wx:for-index="index">
      <i-row class="iRow">
        <i-col span="6" i-class="listValue">{{item.create_time}}</i-col>
        <i-col span="6" i-class="listValue">{{item.reward}}</i-col>
        <i-col span="6" i-class="listValue"><view style="color:{{item.color}};">{{item.status}}</view></i-col>
        <i-col span="6" i-class="listValue"><view qq:if="{{item.status == 0}}"><i-button bind:click="handleClick" type="primary" size="small" data-id="{{item.id}}">兑奖</i-button>
    </view></i-col>
    </i-row>
    <i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
  </view>
  <i-row class="iRow">
    <i-col span="24">
      <i-page current="{{ page }}" total="{{ total }}" bind:change="pageChange">
      <view slot="prev">上一页</view>
      <view slot="next">下一页</view>
      </i-page>
    </i-col>
  </i-row>
</view>



