const VALID_MODE = ['closeable'];
const FONT_COLOR = '#f60';
const BG_COLOR = '#fff7cc';
Component({
    externalClasses: ['i-class'],

    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            value: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            value: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            value: 1000
        }
    },

    data: {
        show: true,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null,
    },
    detached() {
        this.destroyTimer();
    },
    ready() {
        //console.log(app.globalData.userInfo)
        /*
        var that = this;
        setTimeout(function(){
            if (that.data.loop) {
                that.initAnimation();
            }
        },1000);
        */
        if (this.data.loop) {
            this.initAnimation();
        }
    },

    methods: {
        initAnimation() {
            qq.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect((wrapRect) => {
                qq.createSelectorQuery().in(this).select('.i-noticebar-content').boundingClientRect((rect) => {
                    var rectWitdh = 518;
                    var wrapRectWidth = 316;
                  if (rect && wrapRect) {
                        rectWitdh = rect.width;
                        wrapRectWidth = wrapRect.width;
                    }
                    //console.log(rectWitdh, '-', wrapRectWidth);
                    const duration = rectWitdh / 40 * this.data.speed;
                    const animation = qq.createAnimation({
                        duration: duration,
                        timingFunction: "linear",
                    });
                    this.setData({
                        wrapWidth: wrapRectWidth,
                        width: rectWitdh,
                        duration: duration,
                        animation: animation
                    }, () => {
                        this.startAnimation();
                });
                }).exec();
            }).exec();
        },
        startAnimation() {
            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {
                this.startAnimation();
            }, this.data.duration);
            this.setData({
                timer,
            });
        },
        destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
});
