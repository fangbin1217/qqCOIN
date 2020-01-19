<view qq:if="{{ show }}" class="i-class i-noticebar" style="color: {{ color }}; background-color: {{ backgroundcolor }}">
    <i-icon qq:if="{{ icon }}" type="{{ icon }}" size="24" color="{{color}}" class="i-noticebar-icon"></i-icon>
    <view class="i-noticebar-content-wrap">
        <view class="i-noticebar-content {{loop?'i-noticebar-content-loop':''}}" animation="{{ animationData }}">
           <slot></slot>
        </view>
    </view>
    <i-icon qq:if="{{closable}}" class="i-noticebar-operation" type="close" size="20" color="{{color}}" bindtap="handleClose"></i-icon>
</view>
