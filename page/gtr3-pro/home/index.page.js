import {DEVICE_HEIGHT, DEVICE_WIDTH} from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
Page({
    build() {
        logger.debug('page build invoked')

        //Example 3
        //issue: If create two widgets, the second widget will replace all properties for the first (color, lineData, etc), see https://i.imgur.com/j3eDIek.png

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
            { x: 0, y: px(200) },
            { x: px(100), y: px(10) },
            { x: px(200), y: px(50) },
            { x: px(300), y: px(50) },
            { x: px(400), y: px(200) }
        ];

        const polyline = hmUI.createWidget(hmUI.widget.GRADKIENT_POLYLINE, {
            x: 0,
            y: 0,
            w: DEVICE_WIDTH,
            h: 100,
            line_color: Colors.red,
            line_width: 1
        })
        polyline.clear()
        polyline.addLine({
            data: lineDataList,
            count: lineDataList.length
        })

        //move down the second widget
        const polyline2 = hmUI.createWidget(hmUI.widget.GRADKIENT_POLYLINE, {
            x: 0,
            y: 100,
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