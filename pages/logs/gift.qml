<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="tipsTitle">奖品统计</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow">
  <i-col span="12">
    <view class="tjTitle">纪念币</view>
  </i-col>
  <i-col span="12">
    <view class="tjTitle">话费</view>
  </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="12">
    <view class="tjValue">{{coins}}</view>
  </i-col>
  <i-col span="12">
    <view class="tjValue">{{cost}}</view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="rewardTitle">中奖用户</view>
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
        <i-col span="6" i-class="listValue"><view><i-button bind:click="handleClick" type="primary" size="small" data-id="{{item.id}}">详情</i-button>
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



