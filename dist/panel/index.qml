<view class="i-class i-panel">
    <view qq:if="{{ title }}" class="i-panel-title {{ hideTop ? 'i-panel-title-hide-top' : '' }}">{{ title }}</view>
    <view class="i-panel-content {{ hideBorder ? 'i-panel-without-border' : '' }}"><slot></slot></view>
</view>
