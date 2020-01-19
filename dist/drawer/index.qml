<view class="i-class i-drawer {{ visible ? 'i-drawer-show' : '' }} {{ 'i-drawer-' + mode }}">
    <view qq:if="{{ mask }}" class="i-drawer-mask" bindtap="handleMaskClick"></view>
    <view class="i-drawer-container">
        <slot></slot>
    </view>
</view>
