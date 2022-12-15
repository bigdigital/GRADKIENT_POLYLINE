import {DEVICE_HEIGHT, DEVICE_WIDTH} from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
Page({
    build() {
        logger.debug('page build invoked')

        //Example 1
        //issue: The widget output buffer is stripped  see https://i.imgur.com/1PnVyGi.png

        const Colors = {
            white: 0xffffff,
            black: 0x000000,
            red: 0xffa0a0,
            bgLow: 0x8bbbff
        };

        let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: DEVICE_HEIGHT,
            color: Colors.white,
        });

        let lineDataList = [
            {x: 0, y: 120},
            {x: 480, y: 120},
            {x: 0, y: 200}
        ];

        const polyline = hmUI.createWidget(hmUI.widget.GRADKIENT_POLYLINE, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: DEVICE_HEIGHT,
            line_color: Colors.red,
            line_width: 4
        })
        polyline.clear()
        polyline.addLine({
            data: lineDataList,
            count: lineDataList.length
        })
    },
    onInit() {
        logger.debug('page onInit invoked')
    },

    onDestroy() {
        logger.debug('page onDestroy invoked')
    },
})