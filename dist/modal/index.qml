<view class="i-modal-mask i-class-mask {{ visible ? 'i-modal-mask-show' : '' }}"></view>
<view class="i-class i-modal {{ visible ? 'i-modal-show' : '' }}">
    <view class="i-modal-main">
        <view class="i-modal-content">
            <view class="i-modal-title" qq:if="{{ title }}">{{ title }}</view>
            <view class="i-modal-body"><slot></slot></view>
            <view class="i-modal-actions" qq:if="{{ actions.length }}">
                <block qq:if="{{ actionMode === 'horizontal' }}">
                    <i-grid i-class="i-modal-grid">
                        <i-grid-item i-class="{{ actions.length === (index + 1) ? 'i-modal-grid-item-last' : 'i-modal-grid-item' }}" qq:for="{{ actions }}" qq:key="{{ item.name }}">
                            <template is="button" data="{{ item, index }}"></template>
                        </i-grid-item>
                    </i-grid>
                </block>
                <block qq:else>
                    <view class="i-modal-action-vertical" qq:for="{{ actions }}" qq:key="{{ item.name }}">
                        <template is="button" data="{{ item, index }}"></template>
                    </view>
                </block>
            </view>
            <view class="i-modal-actions" qq:else>
                <i-grid i-class="i-modal-grid" qq:if="{{ showOk || showCancel }}">
                    <i-grid-item i-class="i-modal-grid-item" qq:if="{{ showCancel }}">
                        <i-button i-class="i-modal-btn-cancel" long type="ghost" bind:click="handleClickCancel">{{ cancelText }}</i-button>
                    </i-grid-item>
                    <i-grid-item i-class="i-modal-grid-item-last" qq:if="{{ showOk }}">
                        <i-button i-class="i-modal-btn-ok" long type="ghost" bind:click="handleClickOk">{{ okText }}</i-button>
                    </i-grid-item>
                </i-grid>
            </view>
        </view>
    </view>
</view>
<template name="button">
    <i-button long type="ghost" data-index="{{ index }}" bind:click="handleClickItem">
        <view class="i-modal-btn-loading" qq:if="{{ item.loading }}"></view>
        <i-icon qq:if="{{ item.icon }}" type="{{ item.icon }}" i-class="i-modal-btn-icon"></i-icon>
        <view class="i-modal-btn-text" style="{{ item.color ? 'color: ' + item.color : '' }}">{{ item.name }}</view>
    </i-button>
</template>