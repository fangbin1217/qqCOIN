<i-notice-bar icon="systemprompt" loop speed="1500">{{notice}}</i-notice-bar>
<i-row class="iRow">
  <i-col span="24" i-class="iSpace2"></i-col>
</i-row>
<i-row class="iRow">
  <i-col span="6"><view class="date_title">预约兑换：</view></i-col>
  <i-col span="12">
    <picker value="{{index}}" range="{{array2}}" bindchange="bindDateChange">
      <view class="picker">
        {{valueName}}
      </view>
    </picker>
  </i-col>
  <i-col span="6">
    <i-button i-class="searchBtn" bind:click="search" type="success" disabled="{{isDisabled}}" loading="{{isLoading}}" shape="circle" size="small">查询</i-button>
  </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="24" i-class="col-space3"></i-col>
</i-row>
<i-row class="iRow">
<i-col span="24" i-class="iSpace2"></i-col>
</i-row>
<i-row class="iRow">
  <i-col span="8">
    <view class="iconP"><image bindtap="jumpLeftXcx" class="detailImage" src="{{leftIcon}}" animation="{{animation}}"></image></view>
  </i-col>
  <i-col span="8">
    <view class="iconP"><image bindtap="jumpMiddle" class="detailImage" src="{{middleIcon}}" animation="{{animation}}"></image></view>
  </i-col>
  <i-col span="8">
    <button open-type="share" class="iconP2" animation="{{animation2}}"><image class="btnImage" src="{{myShareBtn}}"></image></button>
  </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="24" i-class="iSpace2"></i-col>
</i-row>
<view bindtap="asd">测试</view>
<view qq:if="{{coinInfo}}">
  <i-row class="iRow">
    <i-col span="24"><view class="contentTitle">第{{coinInfo.loop}}轮{{coinInfo.content_title}}</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace2"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveTitle">预约时间</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveContent">{{coinInfo.first_reserve}}</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="col-space4"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveContent">{{coinInfo.second_reserve}}</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveTitle">预约银行</view></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view bindtap="bankCity" class="bank" data-bank_city="{{coinInfo.bank_city}}">点击此处查看银行对应省/市</view></i-col>
  </i-row>
  <ad unit-id="f9d3f143cbf7cbf009f08777e2b6a087" type="feeds"></ad>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveTitle">兑换时间</view></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveContent">{{coinInfo.first_exchange}}</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="col-space4"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveContent">{{coinInfo.second_exchange}}</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveTitle">正面图案</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="13"><view class="reserveContent2">{{coinInfo.z_desc}}</view></i-col>
    <i-col span="11"><view class="viewP"><image class="sxImage" src="{{pic_z}}"></image></view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveTitle" bindtap="myLogin">背面图案</view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="13"><view class="reserveContent2">{{coinInfo.f_desc}}</view></i-col>
    <i-col span="11"><view class="viewP"><image class="sxImage" src="{{pic_f}}"></image></view></i-col>
  </i-row>
  <i-row class="iRow">
  <i-col span="24" i-class="iSpace"></i-col>
  </i-row>
  <i-row class="iRow">
    <i-col span="24"><view class="reserveContent">注：{{coinInfo.limits}}</view></i-col>
  </i-row>
</view>