<view class="i-class i-cell i-input {{ error ? 'i-input-error' : '' }} {{ mode === 'wrapped' ? 'i-input-wrapped' : '' }}">
    <view qq:if="{{ title }}" class="i-cell-hd i-input-title">{{ title }}</view>
    <textarea
        qq:if="{{ type === 'textarea' }}"
        auto-height
        disabled="{{ disabled }}"
        focus="{{ autofocus }}"
        value="{{ value }}"
        placeholder="{{ placeholder }}"
        maxlength="{{ maxlength }}"
        class="i-input-input i-cell-bd {{ right ? 'i-input-input-right' : '' }}"
        placeholder-class="i-input-placeholder"
        bindinput="handleInputChange"
        bindfocus="handleInputFocus"
        bindblur="handleInputBlur"
    ></textarea>
    <input
        qq:else
        type="{{ type }}"
        disabled="{{ disabled }}"
        focus="{{ autofocus }}"
        value="{{ value }}"
        placeholder="{{ placeholder }}"
        maxlength="{{ maxlength }}"
        class="i-input-input i-cell-bd {{ right ? 'i-input-input-right' : '' }}"
        placeholder-class="i-input-placeholder"
        bindinput="handleInputChange"
        bindfocus="handleInputFocus"
        bindblur="handleInputBlur"
    />
</view>
