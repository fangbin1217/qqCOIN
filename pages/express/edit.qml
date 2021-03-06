<i-row class="iRow"><i-col span="24" i-class="col-space1"></i-col></i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="i-class i-cell i-input i-input-wrapped">
      <view class="i-cell-hd i-input-title">收货人</view>
      <input value="{{ contact_name }}" bindinput="getContactName"  type="text" class="i-input-input i-cell-bd i-input-input-right" placeholder-class="i-input-placeholder" placeholder="限输入15个字" maxlength="15" />
    </view>
  </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="i-class i-cell i-input i-input-wrapped">
      <view class="i-cell-hd i-input-title">联系电话</view>
      <input value="{{ mobile }}" bindinput="getMobile"  type="text" class="i-input-input i-cell-bd i-input-input-right" placeholder-class="i-input-placeholder" placeholder="限输入15个字" maxlength="15" />
    </view>
  </i-col>
</i-row>
<i-row class="iRow">
    <i-col span="24" i-class="iFirst">
      <view class="section">
        <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
          <view class="picker">
            <view class="cityValue">{{region[0]}}</view><view class="cityValue">{{region[1]}}</view><view class="cityValue">{{region[2]}}</view>
          </view>
        </picker>
      </view>
    </i-col>
</i-row>
<i-row class="iRow">
  <i-col span="24">
    <view class="i-class i-cell i-input i-input-wrapped">
      <view class="i-cell-hd i-input-title">详细地址</view>
      <input value="{{ address }}" bindinput="getAddress"  type="text" class="i-input-input i-cell-bd i-input-input-right" placeholder-class="i-input-placeholder" placeholder="精确到楼-单元-室" />
    </view>
  </i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
<i-row class="iRow">
<i-col span="24"><i-button loading="{{isLoading}}" disabled="{{isDisabled}}" bind:click="doStart" type="success" shape="circle" size="large">保存收货信息</i-button></i-col>
</i-row>
