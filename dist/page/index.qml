<view class="i-class i-page">
    <view class="i-page-prev" qq:if="{{ mode === 'button' }}">
        <i-button i-class="i-page-button" type="ghost" bindclick="handlePrev" disabled="{{ current === 1 }}"><slot name="prev"></slot></i-button>
    </view>
    <view class="i-page-number" qq:if="{{ mode !== 'pointer' && !simple }}">
        <view class="i-page-number-current">{{ current }}</view>/{{total}}
    </view>
    <view class="i-page-pointer" qq:if="{{ mode === 'pointer' }}">
        <view class="i-page-pointer-dot {{ (index + 1) === current ? 'current' : '' }}" qq:for="{{ total }}" qq:key="index"></view>
    </view>
    <view class="i-page-next" qq:if="{{ mode === 'button' }}">
        <i-button i-class="i-page-button" type="ghost" bindclick="handleNext" disabled="{{ current === total }}"><slot name="next"></slot></i-button>
    </view>
</view>
