/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'comfortaa, sans-serif': '<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>',
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.4.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'hospital_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            fill: ["rgba(246,148,104,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'factoryroom',
                            display: 'none',
                            type: 'image',
                            rect: ['281px', '61px', '1286px', '808px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"factoryroom.svg",'0px','0px'],
                            transform: [[],[],[],['1.03724','1.01376']]
                        },
                        {
                            id: 'origPosition',
                            type: 'rect',
                            rect: ['389px', '123px', '1143px', '640px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'logo',
                            display: 'none',
                            type: 'image',
                            rect: ['1590px', '946px', '304px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        },
                        {
                            id: 'tram_shape',
                            symbolName: 'tram_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['24', '932', '291', '111', 'auto', 'auto']
                        },
                        {
                            id: 'madein_shape',
                            symbolName: 'madein_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['352px', '946px', '179', '91', 'auto', 'auto']
                        },
                        {
                            id: 'payment_shape',
                            symbolName: 'payment_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['571px', '936', '141', '104', 'auto', 'auto']
                        },
                        {
                            id: 'coin_shape',
                            symbolName: 'coin_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['760px', '951', '100', '66', 'auto', 'auto']
                        },
                        {
                            id: 'bicycle_light_shape',
                            symbolName: 'bicycle_light_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['928', '916', '92', '143', 'auto', 'auto']
                        },
                        {
                            id: 'light_shape',
                            symbolName: 'light_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1092', '901', '43', '172', 'auto', 'auto']
                        },
                        {
                            id: 'scope_shape',
                            symbolName: 'scope_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1186', '948', '148', '81', 'auto', 'auto']
                        },
                        {
                            id: 'blackbox_shape2',
                            symbolName: 'blackbox_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1371', '900px', '166', '174', 'auto', 'auto'],
                            transform: [[],[],[],['0.97033','0.97033']]
                        },
                        {
                            id: 'home_btn',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '31px', '166px', '213px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"home%20btn.svg",'0px','0px']
                        },
                        {
                            id: 'worker_eye_close_move',
                            symbolName: 'worker_eye_close',
                            display: 'none',
                            type: 'rect',
                            rect: ['1627px', '105px', '238', '358', 'auto', 'auto'],
                            clip: 'rect(0.904596209526062px 189.60400390625px 109.140869140625px 133.59375px)',
                            cursor: 'pointer',
                            transform: [[],[],[],['2.02087','2.05013'],['68.4043%','16.9067%']]
                        },
                        {
                            id: 'tram_drag',
                            symbolName: 'tram_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['465', '581', '291', '117', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'madein_drag',
                            symbolName: 'madein_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['840', '462', '178', '88', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'payment_drag',
                            symbolName: 'payment_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['962', '530', '130', '77', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'coin_drag',
                            symbolName: 'coin_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['823', '525', '101', '66', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'bicycle_light_drag',
                            symbolName: 'bicycle_light_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['1180', '165', '91', '143', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'light_drag',
                            symbolName: 'light_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['624', '205', '41', '172', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'scope_drag',
                            symbolName: 'scope_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['1056', '490', '130', '71', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'blackbox_drag',
                            symbolName: 'blackbox_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['1274', '413', '166', '169', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Instruction2',
                            symbolName: 'Instruction',
                            display: 'block',
                            type: 'rect',
                            rect: ['388px', '218px', '1127', '536', 'auto', 'auto']
                        },
                        {
                            id: 'transition',
                            display: 'block',
                            type: 'group',
                            rect: ['-269px', '0', '2189', '1080', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle_bottom',
                                type: 'rect',
                                rect: ['269px', '886px', '1920px', '194px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(246,148,104,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],[],['100%','0%']]
                            },
                            {
                                id: 'Rectangle_top',
                                type: 'rect',
                                rect: ['269px', '0px', '1920px', '900px', 'auto', 'auto'],
                                clip: 'rect(0px 1920px 886.984375px 11.84375px)',
                                opacity: '0',
                                fill: ["rgba(246,148,104,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['90'],[],['1.00621'],['100%','100%']]
                            },
                            {
                                id: 'top_content',
                                type: 'group',
                                rect: ['269px', '225px', '1919', '664', 'auto', 'auto'],
                                transform: [[],[],[],[],['100%','99.9999%']],
                                c: [
                                {
                                    id: 'orange_dash_line',
                                    type: 'image',
                                    rect: ['1px', '656px', '1920px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"orange%20dash%20line.svg",'0px','0px']
                                },
                                {
                                    id: 'house_description',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['475px', '371px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "For much of its history Melbourne has been <br>Australia's largest single centre of manufacturing.",
                                    align: "center",
                                    font: ['open-sans, sans-serif', [42, "px"], "rgba(185,76,41,0.99)", "600", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'Houseware_heading',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['711px', '202px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Industry",
                                    font: ['comfortaa, sans-serif', [126, "px"], "rgba(195,78,42,1.00)", "500", "none", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['1','0.93']]
                                },
                                {
                                    id: 'factory_icon',
                                    type: 'image',
                                    rect: ['826px', '-8px', '308px', '216px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"factory%20icon%20new.svg",'0px','0px'],
                                    filter: [0.0029296874999997, 0, 0.86705729166667, 1.7454427083334, 0, 0.078255208333333, 0.172265625, 0, "rgba(0,0,0,0)", 0, 0, 0]
                                }]
                            },
                            {
                                id: 'scissor_new',
                                type: 'group',
                                rect: ['2187px', '818px', '260', '196', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'scissor_finger',
                                    type: 'image',
                                    rect: ['63px', '-39px', '946px', '349px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"scissor%20finger.svg",'0px','0px'],
                                    transform: [[],[],[],['0.18','0.18'],['2.7662%','32.6449%']]
                                },
                                {
                                    id: 'scissor_worker',
                                    type: 'image',
                                    rect: ['-69px', '-427px', '631px', '716px', 'auto', 'auto'],
                                    clip: 'rect(267.448486328125px 659.0849609375px 565.9026489257813px 74.27852630615234px)',
                                    fill: ["rgba(0,0,0,0)",im+"scissor%20worker.svg",'0px','0px'],
                                    transform: [[],[],[],['0.39','0.39'],['19.84%','70.2464%']]
                                },
                                {
                                    id: 'scissor_palm',
                                    type: 'image',
                                    rect: ['-352px', '-296px', '915px', '807px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"scissor%20palm.svg",'0px','0px'],
                                    transform: [[],[],[],['0.18208','0.18208']]
                                }]
                            }]
                        },
                        {
                            id: 'eye_details',
                            symbolName: 'eye_details',
                            type: 'rect',
                            rect: ['0', '0px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'nucleus_details2',
                            symbolName: 'nucleus_details',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'council_house_details',
                            symbolName: 'council_house_details',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'topography_details',
                            symbolName: 'topography_details',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'product_fifth_details',
                            symbolName: 'product_fifth_details',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'smartbox_details',
                            symbolName: 'smartbox_details',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'polilight_details',
                            symbolName: 'polilight_details',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'compumetics_details',
                            symbolName: 'compumetics_details',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'free_wifi_page',
                            symbolName: 'free_wifi_page',
                            display: 'none',
                            type: 'rect',
                            rect: ['-12', '-240', '2034', '1469', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'give-me-five-page',
                            symbolName: 'give-me-five-page',
                            type: 'rect',
                            rect: ['0', '0', '1924', '1079', 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 14491.484375,
                    autoPlay: true,
                    labels: {
                        "instruction": 2000,
                        "one": 3406,
                        "dragdrop": 4000,
                        "close giveme5": 11991
                    },
                    data: [
                        [
                            "eid48",
                            "rotateZ",
                            2000,
                            1500,
                            "easeOutBounce",
                            "${Rectangle_bottom}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid103",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${hospital_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid785",
                            "opacity",
                            11991,
                            114,
                            "linear",
                            "${give-me-five-page}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1196",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${bicycle_light_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1113",
                            "opacity",
                            0,
                            750,
                            "easeOutBounce",
                            "${orange_dash_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1178",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${payment_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid878",
                            "display",
                            0,
                            0,
                            "linear",
                            "${factory_icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid879",
                            "display",
                            750,
                            0,
                            "linear",
                            "${factory_icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1179",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${coin_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1199",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${light_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${house_description}",
                            'block',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            750,
                            0,
                            "linear",
                            "${house_description}",
                            'block',
                            'block'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${house_description}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1180",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${coin_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid831",
                            "rotateZ",
                            750,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid836",
                            "rotateZ",
                            978,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '-11deg',
                            '0deg'
                        ],
                        [
                            "eid838",
                            "rotateZ",
                            1206,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid840",
                            "rotateZ",
                            1434,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '-11deg',
                            '0deg'
                        ],
                        [
                            "eid842",
                            "rotateZ",
                            1662,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid844",
                            "rotateZ",
                            1889,
                            228,
                            "linear",
                            "${scissor_finger}",
                            '-11deg',
                            '0deg'
                        ],
                        [
                            "eid1173",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${madein_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle_top}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1202",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${scope_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid866",
                            "rotateZ",
                            750,
                            228,
                            "linear",
                            "${scissor_worker}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid867",
                            "rotateZ",
                            978,
                            228,
                            "linear",
                            "${scissor_worker}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid868",
                            "rotateZ",
                            1206,
                            228,
                            "linear",
                            "${scissor_worker}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid869",
                            "rotateZ",
                            1434,
                            228,
                            "linear",
                            "${scissor_worker}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid870",
                            "rotateZ",
                            1662,
                            227,
                            "linear",
                            "${scissor_worker}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid871",
                            "rotateZ",
                            1889,
                            228,
                            "linear",
                            "${scissor_worker}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle_bottom}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1201",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${scope_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid849",
                            "background-color",
                            978,
                            0,
                            "linear",
                            "${Rectangle_top}",
                            'rgba(246,148,104,1.00)',
                            'rgba(246,148,104,1.00)'
                        ],
                        [
                            "eid601",
                            "display",
                            0,
                            0,
                            "linear",
                            "${free_wifi_page}",
                            'none',
                            'none'
                        ],
                        [
                            "eid602",
                            "display",
                            11991,
                            0,
                            "linear",
                            "${free_wifi_page}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1172",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${tram_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1177",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${payment_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "rotateZ",
                            2000,
                            1500,
                            "easeOutBounce",
                            "${Rectangle_top}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid1204",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${blackbox_shape2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1200",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${light_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid774",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${give-me-five-page}",
                            'none',
                            'none'
                        ],
                        [
                            "eid775",
                            "display",
                            9000,
                            0,
                            "easeInOutCubic",
                            "${give-me-five-page}",
                            'none',
                            'block'
                        ],
                        [
                            "eid776",
                            "display",
                            12482,
                            0,
                            "easeInOutCubic",
                            "${give-me-five-page}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1195",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${bicycle_light_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1203",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${blackbox_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transition}",
                            'block',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            3406,
                            0,
                            "linear",
                            "${transition}",
                            'block',
                            'none'
                        ],
                        [
                            "eid880",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${factory_icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${home_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Instruction2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            2000,
                            0,
                            "easeInQuad",
                            "${Instruction2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            3406,
                            0,
                            "easeInQuad",
                            "${Instruction2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Instruction2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1170",
                            "display",
                            2000,
                            0,
                            "easeInOutSine",
                            "${worker_eye_close_move}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Houseware_heading}",
                            'block',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Houseware_heading}",
                            'block',
                            'block'
                        ],
                        [
                            "eid846",
                            "left",
                            750,
                            1367,
                            "linear",
                            "${scissor_new}",
                            '-7px',
                            '2187px'
                        ],
                        [
                            "eid187",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${Houseware_heading}",
                            '0',
                            '1'
                        ],
                        [
                            "eid852",
                            "background-color",
                            978,
                            0,
                            "linear",
                            "${Rectangle_bottom}",
                            'rgba(246,148,104,1.00)',
                            'rgba(246,148,104,1.00)'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            2000,
                            1500,
                            "easeOutBounce",
                            "${top_content}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid1174",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${madein_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1167",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${factoryroom}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1171",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${tram_shape}",
                            'none',
                            'block'
                        ],
                            [ "eid139", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Instruction2}', ['show'] ] ],
                            [ "eid777", "trigger", 9000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${give-me-five-page}', [] ] ],
                            [ "eid603", "trigger", 11991.484375, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${free_wifi_page}', [0] ] ]
                    ]
                }
            },
            "Instruction": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['2.49681', '2.21']],
                            rect: ['352px', '-212px', '536px', '365px', 'auto', 'auto'],
                            id: 'speech_bubble_orange',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/speech%20bubble%20orange.svg', '0px', '0px']
                        },
                        {
                            font: ['open-sans, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Hi, I\'m your tour guide in the factory !<br>Let me show you a stunning range of  products<br>designed and manufactured in Melbourne.<br><br>Try to find all the 8 industrial products in the factory,<br>drag and drop them to the correct shapes.<br><br>A big surprise is waiting for you !!!',
                            id: 'Instruction',
                            opacity: '1',
                            align: 'center',
                            rect: ['-20px', '-26px', '1127px', '365px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.51479', '0.51479']],
                            type: 'image',
                            id: 'ok_btn_green',
                            rect: ['1268px', '392px', '169px', '169px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/ok%20btn%20orange.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['1301px', '432px', '87px', '88px', 'auto', 'auto'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(21,21,21,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1127px', '536px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "show": 0,
                        "disappear": 180,
                        "reverse": 998
                    },
                    data: [
                        [
                            "eid193",
                            "scaleY",
                            180,
                            810,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid190",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            180,
                            0,
                            "easeInOutQuad",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_orange}",
                            '2.49681',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${speech_bubble_orange}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${Instruction}",
                            '1',
                            '0'
                        ],
                        [
                            "eid369",
                            "left",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_green}",
                            '791px',
                            '1268px'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '1',
                            '0'
                        ],
                        [
                            "eid119",
                            "top",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_orange}",
                            '40px',
                            '-212px'
                        ],
                        [
                            "eid118",
                            "left",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_orange}",
                            '352px',
                            '1095px'
                        ],
                        [
                            "eid368",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_green}",
                            '1',
                            '0'
                        ],
                        [
                            "eid195",
                            "opacity",
                            180,
                            809,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid370",
                            "scaleX",
                            180,
                            820,
                            "easeInOutQuad",
                            "${ok_btn_green}",
                            '0.51479',
                            '0'
                        ],
                        [
                            "eid367",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${ok_btn_green}",
                            'block',
                            'block'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_orange}",
                            '2.21',
                            '0'
                        ],
                        [
                            "eid196",
                            "left",
                            180,
                            809,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '831px',
                            '1301px'
                        ],
                        [
                            "eid366",
                            "scaleY",
                            180,
                            820,
                            "easeInOutQuad",
                            "${ok_btn_green}",
                            '0.51479',
                            '0'
                        ],
                        [
                            "eid192",
                            "top",
                            180,
                            809,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '432px',
                            '-74px'
                        ],
                        [
                            "eid194",
                            "scaleX",
                            180,
                            810,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "top",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '-26px',
                            '-225px'
                        ],
                        [
                            "eid135",
                            "left",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '-20px',
                            '801px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '1',
                            '0'
                        ],
                        [
                            "eid365",
                            "top",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_green}",
                            '392px',
                            '-125px'
                        ]
                    ]
                }
            },
            "ellipse1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['88'], [], ['0.89013']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['10px', '-12px', '87px', '105px', 'auto', 'auto'],
                            id: 'Ellipse1',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "ellipse2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '65px', '131px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '131px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bio_eye": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['15px', '17px', '92px', '53px', 'auto', 'auto'],
                            transform: [[], ['7'], [], ['7.17313', '7.17313']],
                            id: 'bio_eye',
                            type: 'image',
                            clip: 'rect(3.0712783336639404px 68.79817962646484px 46.12966537475586px 25.419607162475586px)',
                            fill: ['rgba(0,0,0,0)', 'images/seat.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '122px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "eye_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'eye_shape',
                            rect: ['0px', '0px', '166px', '112px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eye%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "eye_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4px', '1px', '1920px', '891px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                type: 'image',
                                id: 'tram_detail_real',
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/tram%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['322px', '65px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.72957', '0.75447']],
                                filter: [0, 0, 1, 1, 0, 0, 0.280859375, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0.280859375, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'Yarra-Trams-E-Class',
                                type: 'image',
                                rect: ['772px', '115px', '750px', '384px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Yarra-Trams-E-Class.jpg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 3661,
                    autoPlay: true,
                    labels: {
                        "seat details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "seat details end": 3000
                    },
                    data: [
                        [
                            "eid916",
                            "display",
                            3661,
                            0,
                            "easeInOutQuad",
                            "${folded_new}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid920",
                            "display",
                            72,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid989",
                            "display",
                            3661,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid911",
                            "scaleY",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid914",
                            "scaleY",
                            1400,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid679",
                            "scaleY",
                            72,
                            542,
                            "easeInSine",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid689",
                            "scaleY",
                            3000,
                            542,
                            "easeInSine",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid921",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid922",
                            "opacity",
                            3000,
                            500,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid910",
                            "scaleX",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid915",
                            "scaleX",
                            1400,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid678",
                            "scaleX",
                            72,
                            542,
                            "easeInSine",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid690",
                            "scaleX",
                            3000,
                            542,
                            "easeInSine",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "nucleus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'nucleus',
                            type: 'image',
                            rect: ['0px', '0px', '100px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cricket.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "nucleur_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'nucleur_shape4',
                            type: 'image',
                            rect: ['0px', '0px', '95px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cricket%20line%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "nucleus_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '1px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            rect: ['386px', '101px', '1123px', '740', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'image',
                                id: 'madein_detail_real',
                                rect: ['-1px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/madein%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['15px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'MADEIN_MOVE',
                                symbolName: 'MADEIN_MOVE',
                                rect: ['-376px', '-31px', null, null, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "nucleus details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "nucleus details end": 2000
                    },
                    data: [
                        [
                            "eid713",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid717",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid937",
                            "scaleY",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid940",
                            "scaleY",
                            1400,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid929",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid930",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid931",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid936",
                            "scaleX",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid941",
                            "scaleX",
                            1400,
                            400,
                            "easeInOutQuad",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid932",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid933",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid711",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid716",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Ellipse3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'Ellipse3',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '96px', '77px', 'auto', 'auto'],
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ellipse4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], ['-32'], [1, 1, 1]],
                            rect: ['24px', '0px', '96px', '77px', 'auto', 'auto'],
                            id: 'Ellipse4',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ellipse5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], ['-13', '23'], [1, 1, 1]],
                            rect: ['4px', '20px', '96px', '77px', 'auto', 'auto'],
                            id: 'Ellipse5',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ellipse6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], ['-30', '38'], [1, 1, 1]],
                            rect: ['1px', '38px', '96px', '77px', 'auto', 'auto'],
                            id: 'Ellipse6',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '152px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ellipse7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['38'], ['-50', '32'], [1, 1, 1]],
                            rect: ['33px', '-15px', '65px', '77px', 'auto', 'auto'],
                            id: 'Ellipse7',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '132px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ellipse8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['38'], ['-61', '10'], [1, 1, 1]],
                            rect: ['10px', '20px', '129px', '46px', 'auto', 'auto'],
                            id: 'Ellipse8',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,79,79,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "big_palm": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.16327', '1.16327']],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_firework2',
                            symbolName: 'yellow_firework',
                            rect: ['-252px', '6px', '294', '190', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['-0.54526', '0.58476']],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_firework_second',
                            symbolName: 'yellow_firework_second',
                            rect: ['509px', '244px', null, null, 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['-0.32062', '0.34622']],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_firework_third',
                            symbolName: 'yellow_firework_third',
                            rect: ['390px', '-76px', null, null, 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            fi: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework2',
                            symbolName: 'orange_firework',
                            rect: ['482px', '75px', '342', '320', 'auto', 'auto'],
                            filter: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-54'], [], ['-0.49125', '0.47161']],
                            fi: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework_third2',
                            symbolName: 'orange_firework_third',
                            rect: ['-269px', '38px', null, null, 'auto', 'auto'],
                            filter: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.59375', '0.59375']],
                            fi: [0, 323, 1.4833333333333, 2.7805989583333, 0, 0, 0.36744791666667, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework_second',
                            symbolName: 'orange_firework_second',
                            rect: ['352px', '-206px', null, null, 'auto', 'auto'],
                            filter: [0, 323, 1.4833333333333, 2.7805989583333, 0, 0, 0.36744791666667, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            rect: ['0px', '-270px', '544px', '557px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.00605', '0.00605']],
                            id: 'big_palm',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big%20palm.svg', '0px', '0px']
                        },
                        {
                            rect: ['10px', '-71px', '49', '51', 'auto', 'auto'],
                            id: 'red_star',
                            symbolName: 'red_star',
                            type: 'rect',
                            transform: [[], [], [], ['0.76471', '0.76471']]
                        },
                        {
                            rect: ['354px', '-91px', null, null, 'auto', 'auto'],
                            id: 'red_star_2',
                            symbolName: 'red_star_2',
                            type: 'rect',
                            transform: [[], [], [], ['0.7551', '0.7551']]
                        },
                        {
                            type: 'rect',
                            fi: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_star2',
                            symbolName: 'yellow_star',
                            rect: ['508px', '369px', '37', '39', 'auto', 'auto'],
                            filter: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.64457', '0.64457']],
                            fi: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_star_second',
                            symbolName: 'yellow_star_second',
                            rect: ['210px', '-139px', null, null, 'auto', 'auto'],
                            filter: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.30769', '1.30769']],
                            fi: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'yellow_star_third',
                            symbolName: 'yellow_star_third',
                            rect: ['-163px', '463px', null, null, 'auto', 'auto'],
                            filter: [0.06, -15, 0.93, 6, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '544px', '557px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    labels: {
                        "down": 1250
                    },
                    data: [
                        [
                            "eid435",
                            "opacity",
                            0,
                            600,
                            "linear",
                            "${big_palm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "top",
                            0,
                            1067,
                            "easeOutBounce",
                            "${big_palm}",
                            '-270px',
                            '0px'
                        ],
                        [
                            "eid437",
                            "top",
                            1067,
                            183,
                            "easeInOutQuad",
                            "${big_palm}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid440",
                            "top",
                            1250,
                            1333,
                            "easeInOutQuad",
                            "${big_palm}",
                            '0px',
                            '15px'
                        ],
                        [
                            "eid442",
                            "top",
                            2583,
                            1333,
                            "easeInOutQuad",
                            "${big_palm}",
                            '15px',
                            '0px'
                        ],
                        [
                            "eid421",
                            "scaleX",
                            0,
                            600,
                            "swing",
                            "${big_palm}",
                            '0.00605',
                            '1'
                        ],
                        [
                            "eid445",
                            "scaleX",
                            1250,
                            1333,
                            "easeInOutQuad",
                            "${big_palm}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid449",
                            "scaleX",
                            2583,
                            1333,
                            "easeInOutQuad",
                            "${big_palm}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid452",
                            "rotateZ",
                            1067,
                            1433,
                            "easeInOutQuad",
                            "${big_palm}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid454",
                            "rotateZ",
                            2500,
                            1416,
                            "easeInOutQuad",
                            "${big_palm}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid423",
                            "scaleY",
                            0,
                            600,
                            "swing",
                            "${big_palm}",
                            '0.00605',
                            '1'
                        ],
                        [
                            "eid446",
                            "scaleY",
                            1067,
                            1433,
                            "easeInOutQuad",
                            "${big_palm}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid450",
                            "scaleY",
                            2500,
                            1416,
                            "easeInOutQuad",
                            "${big_palm}",
                            '1.05',
                            '1'
                        ],
                            [ "eid585", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_star_third}', [0] ] ],
                            [ "eid586", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_star_second}', [0] ] ],
                            [ "eid588", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_second}', [0] ] ],
                            [ "eid587", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_third2}', [0] ] ],
                            [ "eid589", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework2}', [0] ] ],
                            [ "eid594", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_third}', [0] ] ],
                            [ "eid590", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_second}', [0] ] ],
                            [ "eid591", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework2}', [0] ] ],
                            [ "eid592", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star}', [0] ] ],
                            [ "eid593", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star_2}', [0] ] ],
                            [ "eid595", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_star2}', [0] ] ]
                    ]
                }
            },
            "red_star": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '49px', '51px', 'auto', 'auto'],
                            transform: [[], ['500'], [0, 0, 0], [1, 1, 1]],
                            id: 'star1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/star1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '49px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid464",
                            "rotateZ",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${star1}",
                            '0deg',
                            '500deg'
                        ],
                        [
                            "eid456",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${star1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "red_star_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['360'], [], ['0', '0']],
                            rect: ['0px', '0px', '49px', '51px', 'auto', 'auto'],
                            id: 'star1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/star1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '49px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid475",
                            "scaleX",
                            0,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid480",
                            "scaleX",
                            625,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid456",
                            "opacity",
                            0,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "opacity",
                            625,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid464",
                            "rotateZ",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${star1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid477",
                            "scaleY",
                            0,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid481",
                            "scaleY",
                            625,
                            625,
                            "easeInOutQuad",
                            "${star1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "red_star_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '49px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "yellow_star": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-21px', '-26px', '78px', '91px', 'auto', 'auto'],
                            transform: [[], ['60'], [], ['0.33774', '0.33774']],
                            id: 'yellow_star',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20star.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '37px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid492",
                            "scaleY",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid496",
                            "scaleY",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ],
                        [
                            "eid501",
                            "rotateZ",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid483",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '1',
                            '0'
                        ],
                        [
                            "eid491",
                            "scaleX",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid495",
                            "scaleX",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ]
                    ]
                }
            },
            "yellow_star_second": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-21px', '-26px', '78px', '91px', 'auto', 'auto'],
                            transform: [[], ['60'], [], ['0.33774', '0.33774']],
                            id: 'yellow_star',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20star.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '37px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 1660,
                    autoPlay: true,
                    data: [
                        [
                            "eid491",
                            "scaleX",
                            0,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid495",
                            "scaleX",
                            830,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ],
                        [
                            "eid492",
                            "scaleY",
                            0,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid496",
                            "scaleY",
                            830,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ],
                        [
                            "eid483",
                            "opacity",
                            0,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            830,
                            830,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '1',
                            '0'
                        ],
                        [
                            "eid501",
                            "rotateZ",
                            0,
                            1660,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
                        ]
                    ]
                }
            },
            "yellow_star_third": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['60'], [], ['0.33774', '0.33774']],
                            rect: ['-21px', '-26px', '78px', '91px', 'auto', 'auto'],
                            id: 'yellow_star',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20star.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '37px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid501",
                            "rotateZ",
                            0,
                            2250,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid491",
                            "scaleX",
                            0,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid495",
                            "scaleX",
                            1125,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ],
                        [
                            "eid483",
                            "opacity",
                            0,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            1125,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '1',
                            '0'
                        ],
                        [
                            "eid492",
                            "scaleY",
                            0,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.33774',
                            '0.52'
                        ],
                        [
                            "eid496",
                            "scaleY",
                            1125,
                            1125,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0.52',
                            '0.33774'
                        ]
                    ]
                }
            },
            "yellow_firework": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            id: 'yellow_firework',
                            type: 'image',
                            clip: 'rect(0px 294px 190px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '294px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 4170.1762043031,
                    autoPlay: true,
                    labels: {
                        "firework": 1682
                    },
                    data: [
                        [
                            "eid505",
                            "scaleY",
                            91,
                            1591,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid541",
                            "scaleY",
                            1682,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid551",
                            "scaleY",
                            2926,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid509",
                            "left",
                            91,
                            1591,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '140px',
                            '0px'
                        ],
                        [
                            "eid507",
                            "top",
                            91,
                            1591,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid503",
                            "scaleX",
                            91,
                            1591,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "scaleX",
                            1682,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid550",
                            "scaleX",
                            2926,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid553",
                            "rotateZ",
                            1682,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid555",
                            "rotateZ",
                            2926,
                            1244,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "yellow_firework_second": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            id: 'yellow_firework',
                            type: 'image',
                            clip: 'rect(0px 294px 190px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '294px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "firework": 2000
                    },
                    data: [
                        [
                            "eid553",
                            "rotateZ",
                            2000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid555",
                            "rotateZ",
                            3000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid509",
                            "left",
                            380,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '140px',
                            '0px'
                        ],
                        [
                            "eid503",
                            "scaleX",
                            380,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "scaleX",
                            2000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid550",
                            "scaleX",
                            3000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid507",
                            "top",
                            380,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid505",
                            "scaleY",
                            380,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid541",
                            "scaleY",
                            2000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid551",
                            "scaleY",
                            3000,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "orange_firework": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            id: 'orange_firework',
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/orange%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '342px', '320px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    labels: {
                        "firework2": 1634
                    },
                    data: [
                        [
                            "eid564",
                            "left",
                            78,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-44px',
                            '35px'
                        ],
                        [
                            "eid566",
                            "top",
                            78,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '199px',
                            '46px'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            78,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid568",
                            "scaleY",
                            1634,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid572",
                            "scaleY",
                            2624,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid560",
                            "scaleX",
                            78,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "scaleX",
                            1634,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid571",
                            "scaleX",
                            2624,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid574",
                            "rotateZ",
                            1634,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-24deg',
                            '-21deg'
                        ],
                        [
                            "eid575",
                            "rotateZ",
                            2624,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-21deg',
                            '-24deg'
                        ]
                    ]
                }
            },
            "orange_firework_second": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            id: 'orange_firework',
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/orange%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '342px', '320px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "firework2": 1884
                    },
                    data: [
                        [
                            "eid564",
                            "left",
                            328,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-44px',
                            '35px'
                        ],
                        [
                            "eid566",
                            "top",
                            328,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '199px',
                            '46px'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            328,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid568",
                            "scaleY",
                            1884,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid572",
                            "scaleY",
                            2874,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid560",
                            "scaleX",
                            328,
                            1556,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "scaleX",
                            1884,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid571",
                            "scaleX",
                            2874,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid574",
                            "rotateZ",
                            1884,
                            990,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-24deg',
                            '-21deg'
                        ],
                        [
                            "eid575",
                            "rotateZ",
                            2874,
                            1126,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-21deg',
                            '-24deg'
                        ]
                    ]
                }
            },
            "yellow_firework_third": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            id: 'yellow_firework',
                            type: 'image',
                            clip: 'rect(0px 294px 190px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/yellow%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '294px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    labels: {
                        "firework": 2250
                    },
                    data: [
                        [
                            "eid505",
                            "scaleY",
                            630,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid541",
                            "scaleY",
                            2250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid551",
                            "scaleY",
                            3250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid509",
                            "left",
                            630,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '140px',
                            '0px'
                        ],
                        [
                            "eid507",
                            "top",
                            630,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '88px',
                            '0px'
                        ],
                        [
                            "eid503",
                            "scaleX",
                            630,
                            1603,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "scaleX",
                            2250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid550",
                            "scaleX",
                            3250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid553",
                            "rotateZ",
                            2250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid555",
                            "rotateZ",
                            3250,
                            1000,
                            "easeInOutCubic",
                            "${yellow_firework}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "orange_firework_third": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            id: 'orange_firework',
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/orange%20firework.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '342px', '320px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "firework2": 1983
                    },
                    data: [
                        [
                            "eid564",
                            "left",
                            500,
                            1483,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-44px',
                            '35px'
                        ],
                        [
                            "eid566",
                            "top",
                            500,
                            1483,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '199px',
                            '46px'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            500,
                            1483,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid568",
                            "scaleY",
                            1983,
                            944,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid572",
                            "scaleY",
                            2927,
                            1073,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid560",
                            "scaleX",
                            500,
                            1483,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "scaleX",
                            1983,
                            944,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid571",
                            "scaleX",
                            2927,
                            1073,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid574",
                            "rotateZ",
                            1983,
                            944,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-24deg',
                            '-21deg'
                        ],
                        [
                            "eid575",
                            "rotateZ",
                            2927,
                            1073,
                            "easeInOutCubic",
                            "${orange_firework}",
                            '-21deg',
                            '-24deg'
                        ]
                    ]
                }
            },
            "give-me-five-page": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1924px', '1079px', 'auto', 'auto'],
                            id: 'surprise_bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            rect: ['670px', '219px', '544', '557', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'big_palm',
                            cursor: 'pointer',
                            id: 'big_palm2'
                        },
                        {
                            type: 'image',
                            id: 'give_me_five_txt2',
                            opacity: '0',
                            rect: ['421px', '867px', '1081px', '61px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            clip: 'rect(0px 1081px 61px 1081px)',
                            fill: ['rgba(0,0,0,0)', 'images/give%20me%20five%20text%20orange.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1924px', '1079px']
                        }
                    }
                },
                timeline: {
                    duration: 4682.0965058516,
                    autoPlay: true,
                    labels: {
                        "giveme5": 432
                    },
                    data: [
                        [
                            "eid578",
                            "opacity",
                            682,
                            1500,
                            "easeInOutCubic",
                            "${give_me_five_txt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid580",
                            "clip",
                            682,
                            1500,
                            "easeInOutCubic",
                            "${give_me_five_txt2}",
                            [0,1081,61,1081],
                            [0,1081,61,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid778",
                            "display",
                            0,
                            0,
                            "linear",
                            "${big_palm2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid779",
                            "display",
                            500,
                            0,
                            "linear",
                            "${big_palm2}",
                            'none',
                            'block'
                        ],
                            [ "eid605", "trigger", 432.09650585163, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${big_palm2}', [0] ] ]
                    ]
                }
            },
            "free_wifi_page": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'eclass_bg2',
                            rect: ['11px', '239px', '1930px', '1096px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eclass%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'home_btn2',
                            rect: ['27px', '258px', '166px', '213px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/home%20btn.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'long_tram',
                            rect: ['485px', '898px', '1061px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/long%20tram.svg', '0px', '0px']
                        },
                        {
                            rect: ['307px', '803px', '1349px', '484px', 'auto', 'auto'],
                            id: 'tram_values_new',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tram%20values%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2034px', '1469px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1208",
                            "top",
                            1250,
                            1250,
                            "easeInQuad",
                            "${tram_values_new}",
                            '803px',
                            '766px'
                        ],
                        [
                            "eid1210",
                            "opacity",
                            1250,
                            1250,
                            "easeInQuad",
                            "${tram_values_new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1206",
                            "left",
                            0,
                            2000,
                            "easeInOutBack",
                            "${long_tram}",
                            '-1110px',
                            '485px'
                        ]
                    ]
                }
            },
            "council_house": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'council_house2',
                            rect: ['0px', '0px', '103px', '157px', 'auto', 'auto'],
                            clip: 'rect(13.7265625px 103px 144.5859375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/art%20processor.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "council_house_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['10px', '0px', '84px', '147px', 'auto', 'auto'],
                            id: 'council_house_shape',
                            transform: [[], [], [], ['1.23157']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/art%20processor%20line%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "council_house_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'willow_detail',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/payment%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy2',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['608px', '-27px', '355px', '543px', 'auto', 'auto'],
                                id: 'payment',
                                transform: [[], ['-9'], [], ['1.40809', '0.63202']],
                                clip: 'rect(-3.546875px 355px 543px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/payment%20img.jpg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "council details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "council details end": 2000
                    },
                    data: [
                        [
                            "eid961",
                            "scaleY",
                            1000,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid962",
                            "scaleY",
                            1430,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy2}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid963",
                            "scaleX",
                            1000,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid964",
                            "scaleX",
                            1430,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy2}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid956",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid952",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid953",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid954",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "topographer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['-0.99621']],
                            id: 'wheel',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '163px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '167px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "topography_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'wheel_line',
                            rect: ['-156px', '-198px', '415px', '528px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2506', '0.2506']],
                            fill: ['rgba(0,0,0,0)', 'images/wheel%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '132px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "EYE_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.89', '1.12128']],
                            fi: null,
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            rect: ['983px', '125px', '407px', '286px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chair2.jpeg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.95', '1.22536']],
                            id: 'seat_pic1',
                            type: 'image',
                            rect: ['983px', '125px', '407px', '286px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/chair1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid695",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0.94869',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0',
                            '0.95'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.892',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.89'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.89',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.89'
                        ]
                    ]
                }
            },
            "EAR_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['404px', '-64px', '730px', '549px', 'auto', 'auto'],
                            id: 'ear_pic2',
                            transform: [[], [], [], ['0.38', '0.50582'], ['51.8192%', '47.2877%']],
                            clip: 'rect(-28.224018096923828px 729.5943603515625px 563.1705322265625px 3.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/kd-training-2p-red.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ear_pic1',
                            opacity: '1',
                            rect: ['441px', '-73px', '675px', '549px', 'auto', 'auto'],
                            fi: null,
                            transform: [[], [], [], ['0.62', '0.59035'], ['49.9999%']],
                            filter: [0, 0, 1, 0.70377604166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            clip: 'rect(-4.084102630615234px 675px 549px 1.3139737844467163px)',
                            fill: ['rgba(0,0,0,0)', 'images/cricketball-9168819-431x300.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid719",
                            "scaleX",
                            2000,
                            1000,
                            "easeInSine",
                            "${ear_pic1}",
                            '0.62372',
                            '0'
                        ],
                        [
                            "eid736",
                            "scaleX",
                            6750,
                            1000,
                            "easeInSine",
                            "${ear_pic1}",
                            '0',
                            '0.62'
                        ],
                        [
                            "eid721",
                            "scaleX",
                            2000,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0.37975',
                            '0'
                        ],
                        [
                            "eid725",
                            "scaleX",
                            3000,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0',
                            '0.38'
                        ],
                        [
                            "eid734",
                            "scaleX",
                            5750,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0.38',
                            '0'
                        ],
                        [
                            "eid735",
                            "scaleX",
                            6750,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0',
                            '0.38'
                        ]
                    ]
                }
            },
            "topography_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385px', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'coin_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/coin%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy3',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'TOPO_MOVE',
                                symbolName: 'TOPO_MOVE',
                                rect: ['0', '0', '0', '0', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "topo details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "topo details end": 2000
                    },
                    data: [
                        [
                            "eid973",
                            "scaleY",
                            1000,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy3}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid977",
                            "scaleY",
                            1430,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy3}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid972",
                            "scaleX",
                            1000,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy3}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid976",
                            "scaleX",
                            1430,
                            430,
                            "easeInOutQuad",
                            "${folded_newCopy3}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid968",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid969",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid965",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid966",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid967",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "TOPO_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['587px', '6px', '408px', '407px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.62', '0.60783']],
                            id: 'topo_pic2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/coin2.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.42421', '0.38924']],
                            id: 'topo_pic1',
                            opacity: '1',
                            rect: ['496px', '-114px', '593px', '652px', 'auto', 'auto'],
                            fi: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/coin1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid767",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0.61656',
                            '0'
                        ],
                        [
                            "eid769",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0',
                            '0.62'
                        ],
                        [
                            "eid770",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0.62',
                            '0'
                        ],
                        [
                            "eid771",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0',
                            '0.62'
                        ],
                        [
                            "eid1182",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${topo_pic1}",
                            '0.42421',
                            '0'
                        ],
                        [
                            "eid1184",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${topo_pic1}",
                            '0',
                            '0.42421'
                        ]
                    ]
                }
            },
            "product_fifth": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-299px', '-224px', '736px', '552px', 'auto', 'auto'],
                            id: 'product5',
                            transform: [[], [], [], ['0.1876', '0.1876']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/product5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '138px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "product_fifth_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'product5_shape2',
                            type: 'image',
                            rect: ['0px', '0px', '160px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/product5%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "product_fifth_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385px', '101px', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'bicyclelight_details',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bicyclelight%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'BAG_MOVE',
                                symbolName: 'BAG_MOVE',
                                rect: ['-403px', '-4px', null, null, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "product5 details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "product5 details end": 2000
                    },
                    data: [
                        [
                            "eid1003",
                            "scaleY",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1007",
                            "scaleY",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid998",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid999",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid995",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid996",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid997",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1002",
                            "scaleX",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_new}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1006",
                            "scaleX",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_new}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "smartbox_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'smartbox',
                            rect: ['-224px', '-221px', '613px', '605px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.27078', '0.27079']],
                            fill: ['rgba(0,0,0,0)', 'images/smartbox.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '164px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "smartbox_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'smart_shape',
                            rect: ['-159px', '-157px', '474px', '468px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.32735', '0.32735']],
                            fill: ['rgba(0,0,0,0)', 'images/smart%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '153px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "smartbox_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                type: 'image',
                                id: 'light_detail_real',
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/light%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['773px', '-169px', '800px', '800px', 'auto', 'auto'],
                                id: 'light',
                                transform: [[], [], [], ['0.31234', '0.31234']],
                                clip: 'rect(0px 800px 739.0072631835938px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/light.jpg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['322px', '65px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 4661,
                    autoPlay: true,
                    labels: {
                        "smartbox details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "smartbox details end": 4000
                    },
                    data: [
                        [
                            "eid1132",
                            "background-color",
                            1000,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            'rgba(246,148,104,1.00)',
                            'rgba(246,148,104,1.00)'
                        ],
                        [
                            "eid1016",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1017",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1018",
                            "display",
                            4661,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1023",
                            "scaleX",
                            1000,
                            400,
                            "easeInSine",
                            "${folded_newCopy}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1027",
                            "scaleX",
                            1400,
                            400,
                            "easeInSine",
                            "${folded_newCopy}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid679",
                            "scaleY",
                            72,
                            542,
                            "easeInSine",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid689",
                            "scaleY",
                            4000,
                            542,
                            "easeInSine",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1019",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1020",
                            "opacity",
                            4000,
                            500,
                            "easeInSine",
                            "${Rectangle3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1024",
                            "scaleY",
                            1000,
                            400,
                            "easeInSine",
                            "${folded_newCopy}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1028",
                            "scaleY",
                            1400,
                            400,
                            "easeInSine",
                            "${folded_newCopy}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid678",
                            "scaleX",
                            72,
                            542,
                            "easeInSine",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid690",
                            "scaleX",
                            4000,
                            542,
                            "easeInSine",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "SMARTBOX_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'smartbox_pic2',
                            rect: ['1003px', '77px', '407px', '364px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.84', '0.92249']],
                            fill: ['rgba(0,0,0,0)', 'images/mario%2Bmatkovich_daniels_sharps_container.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.84', '1.02686']],
                            filter: [0, 0, 1.194453125, 0.75455729166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: null,
                            id: 'smartbox_pic1',
                            type: 'image',
                            rect: ['1022px', '99px', '384px', '327px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/daniels_sharpsmart__large.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid695",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${smartbox_pic1}",
                            '0.84',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${smartbox_pic1}",
                            '0',
                            '0.83677'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${smartbox_pic2}",
                            '0.84',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${smartbox_pic2}",
                            '0',
                            '0.84'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${smartbox_pic2}",
                            '0.84',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${smartbox_pic2}",
                            '0',
                            '0.84'
                        ]
                    ]
                }
            },
            "polilight_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'polilight',
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            fill: ['rgba(0,0,0,0)', 'images/polilight.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '105px', '153px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "polilight_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'polilight_shape2',
                            rect: ['-76px', '-110px', '268px', '387px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.43152', '0.43152']],
                            fill: ['rgba(0,0,0,0)', 'images/polilight%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '167px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "polilight_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'scope_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/scope%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-61px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy2',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['336px', '-116px', '900px', '668px', 'auto', 'auto'],
                                id: 'scope2',
                                transform: [[], [], [], ['0.4847', '0.4847']],
                                clip: 'rect(92.40625px 900px 559.8125px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/scope.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "polilight details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "polilight details end": 2000
                    },
                    data: [
                        [
                            "eid1043",
                            "scaleY",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_newCopy2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1047",
                            "scaleY",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_newCopy2}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid1042",
                            "scaleX",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_newCopy2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1046",
                            "scaleX",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_newCopy2}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid1038",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1039",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1035",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1036",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1037",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "compumedics_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'polilight',
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            fill: ['rgba(0,0,0,0)', 'images/compumetics.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '105px', '153px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "compumetics_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'compumetics_shape',
                            rect: ['-156px', '-75px', '451px', '261px', 'auto', 'auto'],
                            transform: [[], ['-15'], ['-11', '2'], ['0.30619', '0.30619']],
                            fill: ['rgba(0,0,0,0)', 'images/compumetics%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '139px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "compumetics_details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,148,104,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385px', '101px', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'blackbox_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/blackbox%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-61px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy3',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20orange.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'blackbox1',
                                rect: ['416px', '-129px', '757px', '634px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.34842', '0.34842']],
                                fill: ['rgba(0,0,0,0)', 'images/blackbox1.jpg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2661,
                    autoPlay: true,
                    labels: {
                        "compumetics details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "compumetics details end": 2000
                    },
                    data: [
                        [
                            "eid1058",
                            "scaleY",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_newCopy3}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1062",
                            "scaleY",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_newCopy3}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid1057",
                            "scaleX",
                            1000,
                            430,
                            "easeInSine",
                            "${folded_newCopy3}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1061",
                            "scaleX",
                            1430,
                            430,
                            "easeInSine",
                            "${folded_newCopy3}",
                            '1.45',
                            '1'
                        ],
                        [
                            "eid752",
                            "scaleY",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "scaleY",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1053",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${Rectangle3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1054",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${Rectangle3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1050",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1051",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1052",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${Rectangle3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            72,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            2000,
                            542,
                            "easeInOutQuad",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "doctor_eyebrow_move": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'doctor_no_eyebrow',
                                type: 'image',
                                rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20no%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                rect: ['29px', '32px', '7px', '3px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'doctor_eyebrow_right',
                                transform: [[], ['20'], [0, 0, 0], [1, 1, 1]],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'doctor_eyebrow_left',
                                rect: ['8px', '32px', '7px', '3px', 'auto', 'auto'],
                                transform: [[], ['-20'], [0, 0, 0], [1, 1, 1]],
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 3369,
                    autoPlay: true,
                    labels: {
                        "brow loop": 106
                    },
                    data: [
                        [
                            "eid482",
                            "top",
                            106,
                            1545,
                            "easeInOutSine",
                            "${Group}",
                            '0px',
                            '4px'
                        ],
                        [
                            "eid484",
                            "top",
                            1651,
                            1545,
                            "easeInOutSine",
                            "${Group}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid401",
                            "rotateZ",
                            106,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid403",
                            "rotateZ",
                            400,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid405",
                            "rotateZ",
                            604,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '-16deg',
                            '0deg'
                        ],
                        [
                            "eid407",
                            "rotateZ",
                            905,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid408",
                            "rotateZ",
                            1199,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid409",
                            "rotateZ",
                            1404,
                            0,
                            "linear",
                            "${doctor_eyebrow_left}",
                            '-16deg',
                            '0deg'
                        ],
                        [
                            "eid402",
                            "rotateZ",
                            106,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid404",
                            "rotateZ",
                            400,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid406",
                            "rotateZ",
                            604,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid410",
                            "rotateZ",
                            905,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid411",
                            "rotateZ",
                            1199,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid412",
                            "rotateZ",
                            1404,
                            0,
                            "linear",
                            "${doctor_eyebrow_right}",
                            '16deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "seat_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['7'], [], ['0.71598', '0.71598']],
                            type: 'image',
                            id: 'seat2',
                            rect: ['-39px', '-43px', '393px', '414px', 'auto', 'auto'],
                            clip: 'rect(34.8046875px 359.0546875px 350.1015625px 63.8984375px)',
                            fill: ['rgba(0,0,0,0)', 'images/seat.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '315px', '328px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "seat_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-116px', '-126px', '386px', '419px', 'auto', 'auto'],
                            id: 'seat_line',
                            transform: [[], [], [], ['0.39856', '0.39856']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/seat%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '154px', '167px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "art_processor_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '2px', '80px', '87px', 'auto', 'auto'],
                            id: 'art_processor',
                            transform: [[], [], [], ['1.03519', '1.0352']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/art%20processor.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "wheel_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-24px', '-34px', '109px', '155px', 'auto', 'auto'],
                            id: 'wheel',
                            transform: [[], [], [], ['-0.5584', '0.55838']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bag_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bag',
                            rect: ['-116px', '-82px', '399px', '280px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.41604', '0.41604']],
                            fill: ['rgba(0,0,0,0)', 'images/bag.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bag_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bag_line',
                            rect: ['-121px', '-84px', '408px', '286px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.40686', '0.40686']],
                            fill: ['rgba(0,0,0,0)', 'images/bag%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "BAG_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.18', '1.31882']],
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            type: 'image',
                            rect: ['996px', '169px', '353px', '248px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bicyclelight2.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['963px', '153px', '407px', '286px', 'auto', 'auto'],
                            id: 'seat_pic1',
                            transform: [[], [], [], ['-0.82', '1.2097']],
                            clip: 'rect(0px 385.43157958984375px 286px 24.203968048095703px)',
                            fill: ['rgba(0,0,0,0)', 'images/bicyclelight1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid695",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '-0.81787',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0',
                            '-0.82'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '1.18478',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '1.18'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '1.18',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '1.18'
                        ]
                    ]
                }
            },
            "red_book_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'red_book',
                            rect: ['0px', '0px', '174', '130', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: '_3CDC0F94F624CD28',
                                rect: ['-1361px', '-1097px', '2897px', '2325px', 'auto', 'auto'],
                                transform: [[], ['14'], ['-7'], ['0.04877', '0.04387']],
                                fill: ['rgba(0,0,0,0)', 'images/3CDC0F94F624CD28.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'red_people_new_2d_copy',
                                rect: ['-661px', '-461px', '1506px', '1037px', 'auto', 'auto'],
                                transform: [[], [], ['-7'], ['0.07702', '0.07702']],
                                fill: ['rgba(0,0,0,0)', 'images/red%20people%20new_2d%20copy.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '174px', '131px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "book_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'book_line',
                            rect: ['-100px', '-68px', '375px', '292px', 'auto', 'auto'],
                            transform: [[], ['19'], [], ['0.39161', '0.39161']],
                            fill: ['rgba(0,0,0,0)', 'images/book%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "movement_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'movement_line2',
                            rect: ['-182px', '-176px', '495px', '495px', 'auto', 'auto'],
                            transform: [[], [], ['0', '-5'], ['0.26464', '0.26464']],
                            fill: ['rgba(0,0,0,0)', 'images/movement%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '142px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "movement_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'movement',
                            rect: ['-179px', '-174px', '487px', '489px', 'auto', 'auto'],
                            transform: [[], [], ['0', '-5'], ['0.26366', '0.26366']],
                            fill: ['rgba(0,0,0,0)', 'images/movement.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "wifi_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'wifi_line',
                            rect: ['-225px', '-163px', '591px', '428px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.23831', '0.23831']],
                            fill: ['rgba(0,0,0,0)', 'images/wifi%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "wifi_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'wifi_drag',
                            rect: ['-220px', '-156px', '576px', '414px', 'auto', 'auto'],
                            transform: [[], [], [], ['-0.23511', '0.24637']],
                            fill: ['rgba(0,0,0,0)', 'images/wifi%20drag.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "WIFI_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            id: 'wifi1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi2',
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi3',
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '222px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: false,
                    labels: {
                        "wifi start": 100,
                        "wifi loop": 1750
                    },
                    data: [
                        [
                            "eid1069",
                            "opacity",
                            3083,
                            667,
                            "easeInSine",
                            "${wifi3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            3750,
                            667,
                            "easeInSine",
                            "${wifi3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1068",
                            "opacity",
                            2417,
                            667,
                            "easeInSine",
                            "${wifi2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1072",
                            "opacity",
                            3750,
                            667,
                            "easeInSine",
                            "${wifi2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1066",
                            "opacity",
                            1750,
                            667,
                            "easeInSine",
                            "${wifi1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            3750,
                            667,
                            "easeInSine",
                            "${wifi1}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "tram_down": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '96px', '231px', 'auto', 'auto'],
                            id: 'tram',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/tram.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '231px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    labels: {
                        "tram go": 0
                    },
                    data: [
                        [
                            "eid600",
                            "top",
                            0,
                            5500,
                            "linear",
                            "${tram}",
                            '0px',
                            '1330px'
                        ]
                    ]
                }
            },
            "tram_up": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '-1330px', '96px', '231px', 'auto', 'auto'],
                            id: 'tram',
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/tram.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '231px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    labels: {
                        "tram go": 0
                    },
                    data: [
                        [
                            "eid600",
                            "top",
                            0,
                            5500,
                            "linear",
                            "${tram}",
                            '0px',
                            '-1330px'
                        ]
                    ]
                }
            },
            "WIFI_MOVE_with_phone": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            id: 'wifi1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi2',
                            type: 'image',
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi3',
                            type: 'image',
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '222px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "wifi loop": 0
                    },
                    data: [
                        [
                            "eid1069",
                            "opacity",
                            1333,
                            667,
                            "easeInSine",
                            "${wifi3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            2000,
                            667,
                            "easeInSine",
                            "${wifi3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1068",
                            "opacity",
                            667,
                            667,
                            "easeInSine",
                            "${wifi2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1072",
                            "opacity",
                            2000,
                            667,
                            "easeInSine",
                            "${wifi2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1066",
                            "opacity",
                            0,
                            667,
                            "easeInSine",
                            "${wifi1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            2000,
                            667,
                            "easeInSine",
                            "${wifi1}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "hand_move_with_phone": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258', '470', 'auto', 'auto'],
                            id: 'hand_move_with_phone',
                            type: 'group',
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            c: [
                            {
                                type: 'image',
                                id: 'hand_hold_phone',
                                rect: ['0px', '0px', '258px', '470px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['45.7243%', '99.0591%']],
                                fill: ['rgba(0,0,0,0)', 'images/hand%20hold%20phone.svg', '0px', '0px']
                            },
                            {
                                rect: ['15px', '15px', null, null, 'auto', 'auto'],
                                id: 'WIFI_MOVE_with_phone',
                                symbolName: 'WIFI_MOVE_with_phone',
                                type: 'rect',
                                transform: [[], ['-5'], [], ['0.4269', '0.4269']]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "hand with phone wave": 0
                    },
                    data: [
                        [
                            "eid1077",
                            "rotateZ",
                            0,
                            2500,
                            "easeInOutQuad",
                            "${hand_move_with_phone}",
                            '-3deg',
                            '10deg'
                        ],
                        [
                            "eid1079",
                            "rotateZ",
                            2500,
                            2500,
                            "easeInOutQuad",
                            "${hand_move_with_phone}",
                            '10deg',
                            '-3deg'
                        ]
                    ]
                }
            },
            "WIFI_MOVE_with_phone_later": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            id: 'wifi1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi2',
                            type: 'image',
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            id: 'wifi3',
                            type: 'image',
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '222px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "wifi loop": 1637
                    },
                    data: [
                        [
                            "eid1069",
                            "opacity",
                            2500,
                            375,
                            "easeInSine",
                            "${wifi3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            2875,
                            375,
                            "easeInSine",
                            "${wifi3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1068",
                            "opacity",
                            2125,
                            375,
                            "easeInSine",
                            "${wifi2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1072",
                            "opacity",
                            2875,
                            375,
                            "easeInSine",
                            "${wifi2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1066",
                            "opacity",
                            1750,
                            375,
                            "easeInSine",
                            "${wifi1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            2875,
                            375,
                            "easeInSine",
                            "${wifi1}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "student_eye_blink": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group5',
                            rect: ['2038px', '514px', '225px', '335px', 'auto', 'auto'],
                            clip: 'rect(27.207775115966797px 224px 119.59576416015625px 165.15704345703125px)',
                            transform: [[], [], [], ['3.64125', '3.64125'], ['444.2649%', '69.0104%']],
                            c: [
                            {
                                type: 'image',
                                rect: ['-6px', '-9px', '236px', '358px', 'auto', 'auto'],
                                id: 'student_no_eye',
                                transform: [[], [], [], ['0.94492', '0.94413']],
                                clip: 'rect(-0.17531250417232513px 236px 353.7236022949219px 0.2519112825393677px)',
                                fill: ['rgba(0,0,0,0)', 'images/student%20no%20eye.svg', '0px', '0px']
                            },
                            {
                                rect: ['186', '58', '20', '4', 'auto', 'auto'],
                                id: 'EYES',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    id: 'student_eye_right',
                                    rect: ['16px', '0px', '4px', '4px', 'auto', 'auto'],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                },
                                {
                                    id: 'student_eye_left',
                                    rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                }]
                            },
                            {
                                type: 'group',
                                id: 'blink',
                                rect: ['186px', '58', '20px', '4', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'student_blink_right',
                                    rect: ['16px', '0px', '3px', '4px', 'auto', 'auto'],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20blink.svg', '0px', '0px']
                                },
                                {
                                    id: 'student_blink_left',
                                    rect: ['0px', '0px', '3px', '4px', 'auto', 'auto'],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20blink.svg', '0px', '0px']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '338px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    labels: {
                        "blink loop": 103
                    },
                    data: [
                        [
                            "eid1100",
                            "top",
                            103,
                            1448,
                            "easeInOutQuad",
                            "${Group5}",
                            '514px',
                            '527px'
                        ],
                        [
                            "eid1109",
                            "top",
                            1551,
                            1448,
                            "easeInOutQuad",
                            "${Group5}",
                            '527px',
                            '514px'
                        ],
                        [
                            "eid413",
                            "opacity",
                            103,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '1'
                        ],
                        [
                            "eid414",
                            "opacity",
                            561,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid415",
                            "opacity",
                            798,
                            0,
                            "linear",
                            "${EYES}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            1139,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '1'
                        ],
                        [
                            "eid417",
                            "opacity",
                            1597,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid418",
                            "opacity",
                            1834,
                            0,
                            "linear",
                            "${EYES}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "housewife_tongue_move": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0px', '245', '335', 'auto', 'auto'],
                            id: 'Group7',
                            type: 'group',
                            c: [
                            {
                                rect: ['70px', '125px', '243px', '355px', 'auto', 'auto'],
                                transform: [[], [], [], ['3.42184', '3.3611'], ['24.4409%', '13.5343%']],
                                id: 'housewife_tongue',
                                type: 'image',
                                clip: 'rect(0px 87.58837890625px 94.570556640625px 28.6796875px)',
                                fill: ['rgba(0,0,0,0)', 'images/housewife%20tongue.svg', '0px', '0px']
                            },
                            {
                                rect: ['164px', '173px', '4px', '4px', 'auto', 'auto'],
                                transform: [[], [], [], ['3.72871', '3.72871']],
                                type: 'image',
                                id: 'tongue',
                                opacity: '1',
                                clip: 'rect(0px 0px 0px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/tongue.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '245px', '335px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "tongue loop": 202
                    },
                    data: [
                        [
                            "eid446",
                            "clip",
                            202,
                            199,
                            "linear",
                            "${tongue}",
                            [0,4,4,0],
                            [0,0,0,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid448",
                            "clip",
                            500,
                            199,
                            "linear",
                            "${tongue}",
                            [0,0,0,0],
                            [0,4,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid449",
                            "clip",
                            1207,
                            199,
                            "linear",
                            "${tongue}",
                            [0,4,4,0],
                            [0,0,0,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid450",
                            "clip",
                            1505,
                            199,
                            "linear",
                            "${tongue}",
                            [0,0,0,0],
                            [0,4,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid505",
                            "top",
                            202,
                            1649,
                            "easeInOutSine",
                            "${Group7}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid507",
                            "top",
                            1851,
                            1649,
                            "easeInOutSine",
                            "${Group7}",
                            '-11px',
                            '0px'
                        ]
                    ]
                }
            },
            "chair_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.80166', '0.80166']],
                            id: 'chair',
                            type: 'image',
                            rect: ['-16px', '-21px', '157px', '208px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/chair.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '167px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "chair_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'chair_line_new',
                            type: 'image',
                            rect: ['0px', '0px', '126px', '164px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/chair%20line%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "store_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.92222', '0.92222']],
                            id: 'store',
                            type: 'image',
                            rect: ['-3px', '-3px', '90px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/store.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '67px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "store_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'store_line_new',
                            type: 'image',
                            rect: ['0px', '0px', '84px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/store%20line%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "chair_shape_new": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'chair_line_new2',
                            rect: ['0px', '0px', '128px', '167px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chair%20line%20new2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '167px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "willow_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'willow',
                            rect: ['0px', '0px', '103px', '156px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/willow.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "willow_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'willow_line',
                            rect: ['0px', '0px', '101px', '161px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/willow%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "knife_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '10px', '176px', '48px', 'auto', 'auto'],
                            id: 'knife',
                            transform: [[], ['7'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/knife.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '180px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "knife_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['11'], [0, 0, 0], [1, 1, 1]],
                            id: 'knife_line',
                            type: 'image',
                            rect: ['3px', '18px', '190px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/knife%20shape.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '195px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "powerboard_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-2'], [0, 0, 0], [1, 1, 1]],
                            id: 'powerboard',
                            type: 'image',
                            rect: ['2px', '3px', '195px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/powerboard.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '198px', '101px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sofa_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['2'], [0, 0, 0], [1, 1, 1]],
                            id: 'sofa_line',
                            type: 'image',
                            rect: ['2px', '4px', '206px', '119px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sofa%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sofa_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.22641', '1.22641']],
                            id: 'sofa',
                            type: 'image',
                            rect: ['18px', '11px', '159px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sofa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '195px', '117px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "powerboard_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'powerboard_line2',
                            rect: ['0px', '0px', '204px', '102px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/powerboard%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '204px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bin_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.96296', '0.96296']],
                            id: 'bin_line',
                            type: 'image',
                            rect: ['-2px', '-3px', '97px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bin%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '93px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bin_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bin',
                            rect: ['0px', '0px', '90px', '156px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bin.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "BIN_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.8', '1.1422']],
                            rect: ['1003px', '97px', '407px', '286px', 'auto', 'auto'],
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            fi: null,
                            clip: 'rect(0px 371.23614501953125px 286px 44.63172149658203px)',
                            fill: ['rgba(0,0,0,0)', 'images/bin2.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.53', '1.1422']],
                            type: 'image',
                            id: 'seat_pic1',
                            rect: ['1003px', '104px', '407px', '286px', 'auto', 'auto'],
                            clip: 'rect(0px 385.43157958984375px 286px 24.203968048095703px)',
                            fill: ['rgba(0,0,0,0)', 'images/bin1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid695",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0.53124',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0',
                            '0.53'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.8017',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.8'
                        ]
                    ]
                }
            },
            "fridge_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.65873', '0.65873']],
                            id: 'fridge',
                            type: 'image',
                            rect: ['-24px', '-50px', '141px', '295px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fridge.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '93px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "fridge_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fridge_line',
                            rect: ['0px', '0px', '84px', '172px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fridge%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "FRIDGE_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.94', '1.34253']],
                            rect: ['1003px', '97px', '407px', '286px', 'auto', 'auto'],
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            fi: null,
                            clip: 'rect(0px 371.23614501953125px 286px 44.63172149658203px)',
                            fill: ['rgba(0,0,0,0)', 'images/fridge2.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '1.35611']],
                            type: 'image',
                            id: 'seat_pic1',
                            rect: ['1003px', '100px', '407px', '286px', 'auto', 'auto'],
                            clip: 'rect(0px 385.43157958984375px 286px 24.203968048095703px)',
                            fill: ['rgba(0,0,0,0)', 'images/fridge1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid695",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '1.00342',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.94231',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.94'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.94',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.94'
                        ]
                    ]
                }
            },
            "powerboard_drag_new": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-24px', '-12px', '204px', '99px', 'auto', 'auto'],
                            id: 'powerboard2',
                            transform: [[], [], [], ['0.7636', '0.7636']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/powerboard2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "worker_eye_close": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0px', '238', '358', 'auto', 'auto'],
                            id: 'Group4',
                            clip: 'rect(-7.110595703125px 186.64453125px 104.4453125px 137.91015625px)',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                rect: ['-5px', '-2px', '245px', '371px', 'auto', 'auto'],
                                id: 'worker_no_eye',
                                transform: [[], [], [], ['0.97143', '0.96602'], ['68.1584%', '16.257%']],
                                clip: 'rect(12.97265625px 192.1171875px 107.9296875px 140.34375px)',
                                fill: ['rgba(0,0,0,0)', 'images/worker%20no%20eye.svg', '0px', '0px']
                            },
                            {
                                rect: ['150', '46', '25', '4', 'auto', 'auto'],
                                id: 'worker_eye',
                                opacity: '1',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'worker_eye_right',
                                    rect: ['20px', '0px', '5px', '5px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'worker_eye_left',
                                    rect: ['-1px', '0px', '5px', '5px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['149', '47', '27', '2', 'auto', 'auto'],
                                id: 'worker_close',
                                opacity: '0',
                                type: 'group',
                                c: [
                                {
                                    type: 'image',
                                    id: 'worker_close_right',
                                    rect: ['21px', '0px', '6px', '2px', 'auto', 'auto'],
                                    transform: [[], [], [], ['1', '0.88']],
                                    fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow2.svg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'worker_close_left',
                                    rect: ['0px', '0px', '6px', '2px', 'auto', 'auto'],
                                    transform: [[], [], [], ['1', '0.88']],
                                    fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow2.svg', '0px', '0px']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '238px', '358px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "close loop": 819
                    },
                    data: [
                        [
                            "eid389",
                            "opacity",
                            819,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '0'
                        ],
                        [
                            "eid392",
                            "opacity",
                            1187,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '1'
                        ],
                        [
                            "eid393",
                            "opacity",
                            1307,
                            0,
                            "linear",
                            "${worker_close}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "opacity",
                            1687,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '0'
                        ],
                        [
                            "eid396",
                            "opacity",
                            2054,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "opacity",
                            2175,
                            0,
                            "linear",
                            "${worker_close}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1169",
                            "top",
                            819,
                            1465,
                            "easeInOutSine",
                            "${Group4}",
                            '0px',
                            '-8px'
                        ],
                        [
                            "eid517",
                            "top",
                            2284,
                            1466,
                            "easeInOutSine",
                            "${Group4}",
                            '-8px',
                            '0px'
                        ],
                        [
                            "eid390",
                            "opacity",
                            819,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid391",
                            "opacity",
                            1187,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid394",
                            "opacity",
                            1307,
                            0,
                            "linear",
                            "${worker_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            1687,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid399",
                            "opacity",
                            2054,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid400",
                            "opacity",
                            2175,
                            0,
                            "linear",
                            "${worker_eye}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "tram_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tram22',
                            rect: ['-137px', '-55px', '565px', '227px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.51541', '0.51541']],
                            fill: ['rgba(0,0,0,0)', 'images/tram2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '291px', '117px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "tram_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tram_line_test',
                            rect: ['-8px', '-3px', '308px', '117px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.94481', '0.94481']],
                            fill: ['rgba(0,0,0,0)', 'images/tram%20line%20test.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '291px', '111px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "madein_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'madein_line',
                            rect: ['-72px', '-34px', '322px', '160px', 'auto', 'auto'],
                            transform: [[], ['-1'], [], ['0.55101', '0.55101']],
                            fill: ['rgba(0,0,0,0)', 'images/madein%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '179px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "madein_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'madein',
                            rect: ['-50px', '-25px', '278px', '137px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6402', '0.6402']],
                            fill: ['rgba(0,0,0,0)', 'images/madein.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '178px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "MADEIN_MOVE": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.89', '1.12128']],
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            type: 'image',
                            rect: ['983px', '125px', '407px', '286px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/madein2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['994', '100', '373', '332', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0.86']],
                            c: [
                            {
                                rect: ['0px', '2px', '373px', '330px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                type: 'image',
                                id: 'seat_pic1',
                                rect: ['-21px', '15px', '407px', '286px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.9888', '1.10457']],
                                fill: ['rgba(0,0,0,0)', 'images/madein1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 9250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 2000
                    },
                    data: [
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.892',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.89'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0.89',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '0',
                            '0.89'
                        ],
                        [
                            "eid1176",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${Group}",
                            '0.85517',
                            '0'
                        ],
                        [
                            "eid1175",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${Group}",
                            '0',
                            '0.86'
                        ]
                    ]
                }
            },
            "payment_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'payment_line',
                            rect: ['-189px', '-121px', '520px', '347px', 'auto', 'auto'],
                            transform: [[], ['-8'], [], ['0.25089', '0.25089']],
                            fill: ['rgba(0,0,0,0)', 'images/payment%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "payment_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'payment',
                            rect: ['-138px', '-81px', '407px', '239px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.32055', '0.32055']],
                            fill: ['rgba(0,0,0,0)', 'images/payment.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "coin_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'coin_line',
                            rect: ['-8px', '-6px', '117px', '77px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.85593', '0.85593']],
                            fill: ['rgba(0,0,0,0)', 'images/coin%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "coin_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'coin',
                            rect: ['-71px', '-47px', '244px', '159px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.41393', '0.41393']],
                            fill: ['rgba(0,0,0,0)', 'images/coin.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bicycle_light_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bicycle_light',
                            rect: ['-40px', '-62px', '170px', '268px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.53544', '0.53544']],
                            fill: ['rgba(0,0,0,0)', 'images/bicycle%20light.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bicycle_light_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bicycle_light_line',
                            rect: ['-16px', '-25px', '125px', '194px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.73968', '0.73968']],
                            fill: ['rgba(0,0,0,0)', 'images/bicycle%20light%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '92px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "light_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'light',
                            rect: ['-25px', '-104px', '90px', '380px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45263', '0.45263']],
                            fill: ['rgba(0,0,0,0)', 'images/light.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "light_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'light_line',
                            rect: ['1px', '5px', '41px', '161px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.06832', '1.06832']],
                            fill: ['rgba(0,0,0,0)', 'images/light%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "scope_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'scope_line',
                            rect: ['-1px', '7px', '151px', '66px', 'auto', 'auto'],
                            transform: [[], ['8'], [], ['0.93377', '0.93377']],
                            fill: ['rgba(0,0,0,0)', 'images/scope%20line.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "scope_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'scope',
                            rect: ['-134px', '-73px', '398px', '217px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.32663', '0.32663']],
                            fill: ['rgba(0,0,0,0)', 'images/scope.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "blackbox_shape": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'blackbox_line_new',
                            rect: ['-64px', '-67px', '294px', '309px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5646', '0.56461']],
                            fill: ['rgba(0,0,0,0)', 'images/blackbox%20line%20new.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '174px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "blackbox_drag": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'blackbox',
                            rect: ['-122px', '-124px', '409px', '416px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.40586', '0.40586']],
                            fill: ['rgba(0,0,0,0)', 'images/blackbox.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("real%20factory_edgeActions.js");
})("EDGE-17682068");
