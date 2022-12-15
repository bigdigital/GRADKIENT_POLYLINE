import {DEVICE_HEIGHT, DEVICE_WIDTH} from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
Page({
    build() {
        logger.debug('page build invoked')

        //Example 2
        //issue: If create two widgets, the second widget will clear the output from first, see https://i.imgur.com/P9h0eO6.png

        const Colors = {
            white: 0xffffff,
            black: 0x000000,
            red: 0xffa0a0,
            blue: 0x8bbbff
        };

        let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: DEVICE_HEIGHT,
            color: Colors.white,
        });

        let lineDataList = [
            {x: 0, y: 50},
            {x: 480, y: 50},
        ];

        let lineDataList2 = [
            {x: 0, y: 100},
            {x: 480, y: 100},
        ];

        const polyline = hmUI.createWidget(hmUI.widget.GRADKIENT_POLYLINE, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: 100,
            line_color: Colors.red,
            line_width: 4
        })
        polyline.clear()
        polyline.addLine({
            data: lineDataList,
            count: lineDataList.length
        })

        const polyline2 = hmUI.createWidget(hmUI.widget.GRADKIENT_POLYLINE, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: 100,
            line_color: Colors.blue,
            line_width: 4
        })
        polyline2.clear()
        polyline2.addLine({
            data: lineDataList2,
            count: lineDataList2.length
        })
    },
    onInit() {
        logger.debug('page onInit invoked')
    },

    onDestroy() {
        logger.debug('page onDestroy invoked')
    },
})