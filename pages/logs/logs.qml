<i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
<view qq:if="{{userInfo.isLogin}}">
    <i-row class="iRow">
        <i-col span="8" i-class="iFirst">
        <view class='viewP'><image class="iAvatar" src="{{userInfo.avatarUrl}}"></image></view>
        </i-col>
        <i-col span="16" i-class="iFirst">
        <view class="viewP">{{userInfo.nickName}}</view>
        </i-col>
    </i-row>
</view>
<view qq:else>
    <i-row class="iRow">
        <i-col span="8" i-class="iFirst">
        <view class='viewP'><image class="iAvatar" src="../../images/defaultAvatar.png"></image></view>
        </i-col>
        <i-col span="8" i-class="iFirst">
        <view class="viewP"><button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="getQQInfo" class="iLoginBtn" hover-class='ui-share-hover'>登录</button></view>
        </i-col>
        <i-col span="8" i-class="iFirst">
        </i-col>
    </i-row>
</view>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow" bindtap='jumpLottery'>
    <i-col span="3" i-class="iSecond"><image class='icon' src="../../images/gift0111.png"></image></i-col>
    <i-col span="10" i-class="iThird"><view class="col-title">抽 奖</view></i-col>
    <i-col span="8" i-class="iSecond"></i-col>
    <i-col span="3" i-class="iSecond"><image class='iYou' src="../../images/you.png"></image></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow" bindtap='jumpRecords'>
    <i-col span="3" i-class="iSecond"><image class='icon' src="../../images/record0111.png"></image></i-col>
    <i-col span="10" i-class="iThird"><view class="col-title">开奖记录</view></i-col>
    <i-col span="8" i-class="iSecond"></i-col>
    <i-col span="3" i-class="iSecond"><image class='iYou' src="../../images/you.png"></image></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow" bindtap='jumpExpress'>
    <i-col span="3" i-class="iSecond"><image class='icon' src="../../images/address0111.png"></image></i-col>
    <i-col span="10" i-class="iThird"><view class="col-title">收货地址</view></i-col>
    <i-col span="8" i-class="iSecond"></i-col>
    <i-col span="3" i-class="iSecond"><image class='iYou' src="../../images/you.png"></image></i-col>
</i-row>
<view qq:if="{{isAdmin}}">
    <i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
    <i-row class="iRow" bindtap='jumpGift'>
        <i-col span="3" i-class="iSecond"><image class='icon' src="../../images/check.png"></image></i-col>
        <i-col span="10" i-class="iThird"><view class="col-title">奖品下发</view></i-col>
        <i-col span="8" i-class="iSecond"></i-col>
        <i-col span="3" i-class="iSecond"><image class='iYou' src="../../images/you.png"></image></i-col>
    </i-row>
</view>
<i-row class="iRow"><i-col span="24" i-class="col-space"></i-col></i-row>
<i-row class="iRow" bindtap='aboutMe'>
    <i-col span="3" i-class="iSecond"><image class='icon' src="../../images/guanyu.png"></image></i-col>
    <i-col span="10" i-class="iThird"><view class="col-title">关于我</view></i-col>
    <i-col span="8" i-class="iSecond"></i-col>
    <i-col span="3" i-class="iSecond"><image class='iYou' src="../../images/you.png"></image></i-col>
</i-row>
<i-row class="iRow"><i-col span="24" i-class="col-space2"></i-col></i-row>
<ad unit-id="cad8e3854f67c5317388238b10abb3cd"></ad>
