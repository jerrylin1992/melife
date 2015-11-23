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
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>',
            'open-sans-condensed, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans-condensed:n7,n3,i3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.1.min.js",
            js+"EdgeCommons.js",
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
                            id: 'home_page_move2',
                            type: 'image',
                            rect: ['-26px', '-5px', '2103px', '1150px', 'auto', 'auto'],
                            clip: 'rect(0px 1950.375px 1089.375px 24.671875px)',
                            fill: ["rgba(0,0,0,0)",im+"home%20page%20move.svg",'0px','0px']
                        },
                        {
                            id: 'instruction_before_home',
                            symbolName: 'instruction_before_home',
                            display: 'none',
                            type: 'rect',
                            rect: ['567', '132', '786', '701', 'auto', 'auto']
                        },
                        {
                            id: 'big_palm_move2',
                            symbolName: 'big_palm_move',
                            type: 'rect',
                            rect: ['791px', '1113px', '321', '467', 'auto', 'auto']
                        },
                        {
                            id: 'education_btn',
                            type: 'ellipse',
                            rect: ['1549px', '708px', '122px', '122px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.549)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'health_btn',
                            type: 'ellipse',
                            rect: ['1155px', '354px', '122px', '122px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,11,110,0.4588)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0.04, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'industry_btn',
                            type: 'ellipse',
                            rect: ['1243px', '201px', '122px', '122px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.549)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'entertainment_btn',
                            type: 'ellipse',
                            rect: ['791px', '166px', '122px', '122px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.549)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'house_btn',
                            type: 'ellipse',
                            rect: ['386px', '474px', '122px', '122px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.549)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bottom_line',
                            type: 'image',
                            rect: ['0', '990px', '1920px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bottom%20line.svg",'0px','0px']
                        },
                        {
                            id: 'learn_more_btn',
                            display: 'none',
                            type: 'image',
                            rect: ['-55px', '989px', '406px', '91px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"learn%20more.svg",'0px','0px'],
                            transform: [[],[],[],['0.66086','0.66086']]
                        },
                        {
                            id: 'sound_btn',
                            display: 'none',
                            type: 'image',
                            rect: ['358px', '1011px', '66px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sound%20btn.svg",'0px','0px'],
                            transform: [[],[],[],['0.88432','0.88432']]
                        },
                        {
                            id: 'symbol_edu',
                            symbolName: 'symbol_edu',
                            type: 'rect',
                            rect: ['1920px', '4px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00648']]
                        },
                        {
                            id: 'symbol_house',
                            symbolName: 'symbol_house',
                            type: 'rect',
                            rect: ['1920px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00001']]
                        },
                        {
                            id: 'symbol_health',
                            symbolName: 'symbol_health',
                            type: 'rect',
                            rect: ['-1920px', '0px', '1920', '1080', 'auto', 'auto'],
                            transform: [[],[],[],['1.00019','1.00035']]
                        },
                        {
                            id: 'symbol_entertainment',
                            symbolName: 'symbol_entertainment',
                            type: 'rect',
                            rect: ['1920px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.99955']]
                        },
                        {
                            id: 'symbol_industry',
                            symbolName: 'symbol_industry',
                            type: 'rect',
                            rect: ['1920px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00048']]
                        },
                        {
                            id: 'right',
                            display: 'none',
                            type: 'image',
                            rect: ['1778px', '430', '103px', '103px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"right.svg",'0px','0px']
                        },
                        {
                            id: 'left',
                            display: 'none',
                            type: 'image',
                            rect: ['55px', '430', '103px', '103px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"left.svg",'0px','0px']
                        },
                        {
                            id: 'home_btn',
                            type: 'ellipse',
                            rect: ['39px', '37px', '166px', '179px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.549)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tram_learn',
                            symbolName: 'tram_learn',
                            type: 'rect',
                            rect: ['-1434', '670', '1420', '302', 'auto', 'auto']
                        },
                        {
                            id: 'motion_graphics',
                            display: 'block',
                            type: 'video',
                            tag: 'video',
                            rect: ['0', '2px', '1920', '1079px', 'auto', 'auto'],
                            controls: 'controls',
                            autoplay: 'autoplay',
                            opacity: '1',
                            source: [vid+"motion%20graphics.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'bg_music',
                            display: 'none',
                            volume: '0.65072523214286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '2', '320px', '45px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [aud+"A%20List%20Of%20Things%20That%20Quicken%20The%20Heart%20-%20I%20Am%20Robot%20And%20Proud.mp3"],
                            preload: 'auto'
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
                    duration: 34000,
                    autoPlay: true,
                    labels: {
                        "video end": 16000,
                        "start close": 20768,
                        "home": 26000,
                        "education": 27000,
                        "house": 28500,
                        "health": 30000,
                        "entertainment": 31500,
                        "industry": 33000
                    },
                    data: [
                        [
                            "eid531",
                            "opacity",
                            18000,
                            2000,
                            "easeOutSine",
                            "${learn_more_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "display",
                            18000,
                            0,
                            "easeOutSine",
                            "${learn_more_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid550",
                            "opacity",
                            18000,
                            2000,
                            "easeOutSine",
                            "${sound_btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid355",
                            "left",
                            33000,
                            1000,
                            "easeInQuad",
                            "${symbol_industry}",
                            '1920px',
                            '0px'
                        ],
                        [
                            "eid345",
                            "left",
                            28500,
                            1000,
                            "easeInQuad",
                            "${symbol_house}",
                            '1920px',
                            '0px'
                        ],
                        [
                            "eid347",
                            "left",
                            30000,
                            1000,
                            "easeInQuad",
                            "${symbol_house}",
                            '0px',
                            '-1920px'
                        ],
                        [
                            "eid362",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${left}",
                            'none',
                            'none'
                        ],
                        [
                            "eid357",
                            "display",
                            27000,
                            0,
                            "easeInQuad",
                            "${left}",
                            'none',
                            'none'
                        ],
                        [
                            "eid361",
                            "display",
                            28500,
                            0,
                            "easeInQuad",
                            "${left}",
                            'none',
                            'block'
                        ],
                        [
                            "eid549",
                            "volume",
                            15000,
                            1000,
                            "linear",
                            "${bg_music}",
                            '0.003460',
                            '0.65072523214286'
                        ],
                        [
                            "eid356",
                            "display",
                            27000,
                            0,
                            "easeInQuad",
                            "${right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid360",
                            "display",
                            33873,
                            0,
                            "easeInQuad",
                            "${right}",
                            'block',
                            'block'
                        ],
                        [
                            "eid358",
                            "display",
                            34000,
                            0,
                            "easeInQuad",
                            "${right}",
                            'block',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${instruction_before_home}",
                            'none',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            16000,
                            0,
                            "easeOutBounce",
                            "${instruction_before_home}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            20768,
                            0,
                            "linear",
                            "${instruction_before_home}",
                            'block',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            26000,
                            0,
                            "easeInQuad",
                            "${instruction_before_home}",
                            'block',
                            'none'
                        ],
                        [
                            "eid336",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${symbol_edu}",
                            '1920px',
                            '0px'
                        ],
                        [
                            "eid341",
                            "left",
                            28500,
                            1000,
                            "easeInQuad",
                            "${symbol_edu}",
                            '0px',
                            '-1920px'
                        ],
                        [
                            "eid326",
                            "left",
                            30000,
                            1000,
                            "easeInQuad",
                            "${symbol_health}",
                            '1920px',
                            '0px'
                        ],
                        [
                            "eid332",
                            "left",
                            31500,
                            1000,
                            "easeInQuad",
                            "${symbol_health}",
                            '0px',
                            '-1920px'
                        ],
                        [
                            "eid544",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${motion_graphics}",
                            'block',
                            'none'
                        ],
                        [
                            "eid551",
                            "display",
                            18000,
                            0,
                            "easeOutSine",
                            "${sound_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "left",
                            31500,
                            1000,
                            "easeInQuad",
                            "${symbol_entertainment}",
                            '1920px',
                            '0px'
                        ],
                        [
                            "eid353",
                            "left",
                            33000,
                            1000,
                            "easeInQuad",
                            "${symbol_entertainment}",
                            '0px',
                            '-1920px'
                        ],
                        [
                            "eid546",
                            "opacity",
                            14677,
                            1323,
                            "linear",
                            "${motion_graphics}",
                            '1',
                            '0'
                        ],
                            [ "eid547", "trigger", 15000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${bg_music}', [] ] ],
                            [ "eid297", "trigger", 16000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction_before_home}', [0] ] ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '154px', '137px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(146,202,238,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '154px', '137px']
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
            "instruction_before_home": {
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
                            id: 'instruct_bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-566px', '-132px', '1919px', '989px', 'auto', 'auto'],
                            display: 'block',
                            transform: [[], [], [], [], ['50%', '100%']],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.55)']
                        },
                        {
                            rect: ['0px', '0px', '786', '701', 'auto', 'auto'],
                            type: 'group',
                            display: 'block',
                            opacity: '0.30773616079392',
                            id: 'Group',
                            c: [
                            {
                                rect: ['0px', '0px', '786px', '701px', 'auto', 'auto'],
                                id: 'instruction_infor',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/instruction%20infor.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'start_button',
                                rect: ['323px', '584px', '139px', '46px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/start%20button.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'black_folded',
                                rect: ['0px', '-2px', '187px', '149px', 'auto', 'auto'],
                                transform: [[], [], [], ['1.24632', '1.28859'], ['0%', '0%']],
                                fill: ['rgba(0,0,0,0)', 'images/black%20folded.svg', '0px', '0px']
                            }]
                        },
                        {
                            transform: [[], [], [], ['0.3', '0.3']],
                            type: 'image',
                            display: 'block',
                            id: 'seven_down',
                            opacity: '0',
                            rect: ['325px', '313px', '195px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seven%20down.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-180'], [], ['0.3', '0.3']],
                            type: 'image',
                            display: 'block',
                            id: 'seven_up',
                            opacity: '0',
                            rect: ['268px', '197px', '195px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seven%20down.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '786px', '701px']
                        }
                    }
                },
                timeline: {
                    duration: 6820,
                    autoPlay: true,
                    labels: {
                        "black fold start": 2947,
                        "black fold end": 3906,
                        "instruction before home end": 4906
                    },
                    data: [
                        [
                            "eid281",
                            "scaleY",
                            5750,
                            1070,
                            "easeOutBounce",
                            "${instruct_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid316",
                            "display",
                            6820,
                            0,
                            "easeInQuad",
                            "${seven_up}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "opacity",
                            1906,
                            341,
                            "easeInQuad",
                            "${seven_down}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            5174,
                            662,
                            "easeInQuad",
                            "${seven_down}",
                            '1',
                            '0'
                        ],
                        [
                            "eid317",
                            "display",
                            6820,
                            0,
                            "easeInQuad",
                            "${seven_down}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "opacity",
                            1906,
                            750,
                            "easeInQuad",
                            "${Group}",
                            '0.30773616079392',
                            '1'
                        ],
                        [
                            "eid262",
                            "opacity",
                            4906,
                            885,
                            "easeInQuad",
                            "${Group}",
                            '1',
                            '0.30773616079392'
                        ],
                        [
                            "eid211",
                            "left",
                            1906,
                            750,
                            "easeInQuad",
                            "${seven_down}",
                            '325px',
                            '711px'
                        ],
                        [
                            "eid275",
                            "left",
                            4906,
                            885,
                            "easeInQuad",
                            "${seven_down}",
                            '711px',
                            '325px'
                        ],
                        [
                            "eid218",
                            "opacity",
                            1906,
                            341,
                            "easeInQuad",
                            "${seven_up}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            5174,
                            662,
                            "easeInQuad",
                            "${seven_up}",
                            '1',
                            '0'
                        ],
                        [
                            "eid277",
                            "opacity",
                            1000,
                            841,
                            "easeInQuad",
                            "${instruct_bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid214",
                            "left",
                            1906,
                            750,
                            "easeInQuad",
                            "${seven_up}",
                            '268px',
                            '-120px'
                        ],
                        [
                            "eid272",
                            "left",
                            4906,
                            885,
                            "easeInQuad",
                            "${seven_up}",
                            '-120px',
                            '268px'
                        ],
                        [
                            "eid289",
                            "scaleY",
                            5561,
                            397,
                            "easeInQuad",
                            "${seven_up}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid196",
                            "scaleY",
                            1906,
                            750,
                            "easeInQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "scaleY",
                            4906,
                            885,
                            "easeInQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "scaleX",
                            2947,
                            479,
                            "easeInOutQuad",
                            "${black_folded}",
                            '1',
                            '1.24632'
                        ],
                        [
                            "eid256",
                            "scaleX",
                            3426,
                            479,
                            "easeInOutQuad",
                            "${black_folded}",
                            '1.24632',
                            '1'
                        ],
                        [
                            "eid197",
                            "scaleX",
                            1906,
                            750,
                            "easeInQuad",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid261",
                            "scaleX",
                            4906,
                            885,
                            "easeInQuad",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid290",
                            "scaleX",
                            5561,
                            397,
                            "easeInQuad",
                            "${seven_down}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid215",
                            "top",
                            1906,
                            750,
                            "easeInQuad",
                            "${seven_up}",
                            '197px',
                            '544px'
                        ],
                        [
                            "eid270",
                            "top",
                            4906,
                            885,
                            "easeInQuad",
                            "${seven_up}",
                            '544px',
                            '197px'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            2947,
                            479,
                            "easeInOutQuad",
                            "${black_folded}",
                            '1',
                            '1.28859'
                        ],
                        [
                            "eid257",
                            "scaleY",
                            3426,
                            479,
                            "easeInOutQuad",
                            "${black_folded}",
                            '1.28859',
                            '1'
                        ],
                        [
                            "eid319",
                            "display",
                            6820,
                            0,
                            "easeInQuad",
                            "${instruct_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid318",
                            "display",
                            6820,
                            0,
                            "easeInQuad",
                            "${Group}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "top",
                            1906,
                            750,
                            "easeInQuad",
                            "${seven_down}",
                            '313px',
                            '-33px'
                        ],
                        [
                            "eid273",
                            "top",
                            4906,
                            885,
                            "easeInQuad",
                            "${seven_down}",
                            '-33px',
                            '313px'
                        ],
                        [
                            "eid288",
                            "scaleX",
                            5561,
                            397,
                            "easeInQuad",
                            "${seven_up}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            5561,
                            397,
                            "easeInQuad",
                            "${seven_down}",
                            '1',
                            '0.3'
                        ]
                    ]
                }
            },
            "symbol_health": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "symbol_edu": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(19,189,42,0.38)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "symbol_house": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(233,237,84,0.38)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "symbol_entertainment": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(189,18,172,0.38)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "symbol_industry": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(189,96,18,0.38)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
                            rect: ['0px', '10px', '44', '90', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                                id: 'doctor_no_eyebrow',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20no%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'doctor_eyebrow_right',
                                rect: ['29px', '32px', '7px', '3px', 'auto', 'auto'],
                                transform: [[], ['20'], [0, 0, 0], [1, 1, 1]],
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
                    duration: 3368.5909297343,
                    autoPlay: true,
                    labels: {
                        "brow loop": 106
                    },
                    data: [
                        [
                            "eid482",
                            "top",
                            1750,
                            723,
                            "easeInOutSine",
                            "${Group}",
                            '10px',
                            '-1px'
                        ],
                        [
                            "eid484",
                            "top",
                            2473,
                            723,
                            "easeInOutSine",
                            "${Group}",
                            '-1px',
                            '10px'
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
                            rect: ['0', '-10px', '223', '338', 'auto', 'auto'],
                            id: 'Group5',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                rect: ['-6px', '-10px', '236px', '358px', 'auto', 'auto'],
                                id: 'student_no_eye',
                                transform: [[], [], [], ['0.94492', '0.94413']],
                                clip: 'rect(32.104736328125px 236px 123.435546875px 176.771484375px)',
                                fill: ['rgba(0,0,0,0)', 'images/student%20no%20eye.svg', '0px', '0px']
                            },
                            {
                                type: 'group',
                                id: 'EYES',
                                opacity: '1',
                                rect: ['186', '58', '20', '4', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['16px', '0px', '4px', '4px', 'auto', 'auto'],
                                    id: 'student_eye_right',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                                    id: 'student_eye_left',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['186px', '58', '20px', '4', 'auto', 'auto'],
                                id: 'blink',
                                type: 'group',
                                c: [
                                {
                                    rect: ['16px', '0px', '3px', '4px', 'auto', 'auto'],
                                    id: 'student_blink_right',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20blink.svg', '0px', '0px']
                                },
                                {
                                    rect: ['0px', '0px', '3px', '4px', 'auto', 'auto'],
                                    id: 'student_blink_left',
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
                    duration: 2904.8817091888,
                    autoPlay: true,
                    labels: {
                        "blink loop": 103
                    },
                    data: [
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
                            500,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid415",
                            "opacity",
                            705,
                            0,
                            "linear",
                            "${EYES}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '1'
                        ],
                        [
                            "eid417",
                            "opacity",
                            1397,
                            0,
                            "linear",
                            "${EYES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid418",
                            "opacity",
                            1602,
                            0,
                            "linear",
                            "${EYES}",
                            '0',
                            '1'
                        ],
                        [
                            "eid494",
                            "top",
                            1000,
                            837,
                            "easeInOutSine",
                            "${Group5}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid499",
                            "top",
                            1837,
                            837,
                            "easeInOutSine",
                            "${Group5}",
                            '-10px',
                            '0px'
                        ]
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
                            type: 'group',
                            id: 'Group4',
                            clip: 'rect(-7.110595703125px 186.64453125px 104.4453125px 137.91015625px)',
                            rect: ['0', '-12px', '238', '358', 'auto', 'auto'],
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
                                type: 'group',
                                id: 'worker_eye',
                                opacity: '1',
                                rect: ['150', '46', '25', '4', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['20px', '0px', '5px', '5px', 'auto', 'auto'],
                                    id: 'worker_eye_right',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                },
                                {
                                    rect: ['-1px', '0px', '5px', '5px', 'auto', 'auto'],
                                    id: 'worker_eye_left',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                                }]
                            },
                            {
                                type: 'group',
                                id: 'worker_close',
                                opacity: '0',
                                rect: ['149', '47', '27', '2', 'auto', 'auto'],
                                c: [
                                {
                                    type: 'image',
                                    id: 'worker_close_right',
                                    rect: ['21px', '0px', '6px', '2px', 'auto', 'auto'],
                                    transform: [[], [], [], ['1', '0.88']],
                                    fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'worker_close_left',
                                    rect: ['0px', '0px', '6px', '2px', 'auto', 'auto'],
                                    transform: [[], [], [], ['1', '0.88']],
                                    fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
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
                    duration: 3250,
                    autoPlay: true,
                    labels: {
                        "close loop": 819
                    },
                    data: [
                        [
                            "eid389",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '0'
                        ],
                        [
                            "eid392",
                            "opacity",
                            1299,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '1'
                        ],
                        [
                            "eid393",
                            "opacity",
                            1397,
                            0,
                            "linear",
                            "${worker_close}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "opacity",
                            1706,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '0'
                        ],
                        [
                            "eid396",
                            "opacity",
                            2005,
                            0,
                            "linear",
                            "${worker_close}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "opacity",
                            2103,
                            0,
                            "linear",
                            "${worker_close}",
                            '1',
                            '0'
                        ],
                        [
                            "eid516",
                            "top",
                            1500,
                            750,
                            "easeInOutSine",
                            "${Group4}",
                            '-12px',
                            '0px'
                        ],
                        [
                            "eid517",
                            "top",
                            2250,
                            750,
                            "easeInOutSine",
                            "${Group4}",
                            '0px',
                            '-12px'
                        ],
                        [
                            "eid390",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid391",
                            "opacity",
                            1299,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid394",
                            "opacity",
                            1397,
                            0,
                            "linear",
                            "${worker_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            1706,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid399",
                            "opacity",
                            2005,
                            0,
                            "linear",
                            "${worker_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid400",
                            "opacity",
                            2103,
                            0,
                            "linear",
                            "${worker_eye}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "player_one_blink": {
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
                            id: 'Group6',
                            clip: 'rect(-36.984375px 56px 128px 0px)',
                            rect: ['0', '0px', '56', '128', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'player_one_blink',
                                rect: ['0px', '0px', '56px', '128px', 'auto', 'auto'],
                                clip: 'rect(0px 56px 87.560791015625px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/player%20one%20blink.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'blinking_eye',
                                opacity: '0',
                                rect: ['36px', '26px', '4px', '4px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/blinking%20eye.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'player_right_eye',
                                opacity: '1',
                                rect: ['36px', '26', '4px', '4px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/student%20eye.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 3116.6845293754,
                    autoPlay: true,
                    labels: {
                        "one blink loop": 500
                    },
                    data: [
                        [
                            "eid420",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid423",
                            "opacity",
                            896,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid424",
                            "opacity",
                            1146,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid426",
                            "opacity",
                            1396,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '1',
                            '1'
                        ],
                        [
                            "eid427",
                            "opacity",
                            1792,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid428",
                            "opacity",
                            2042,
                            0,
                            "linear",
                            "${player_right_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid421",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '0',
                            '0'
                        ],
                        [
                            "eid422",
                            "opacity",
                            896,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid425",
                            "opacity",
                            1146,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid429",
                            "opacity",
                            1396,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '0',
                            '0'
                        ],
                        [
                            "eid430",
                            "opacity",
                            1792,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '0',
                            '1'
                        ],
                        [
                            "eid431",
                            "opacity",
                            2042,
                            0,
                            "linear",
                            "${blinking_eye}",
                            '1',
                            '0'
                        ],
                        [
                            "eid501",
                            "top",
                            1146,
                            837,
                            "easeInOutSine",
                            "${Group6}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid503",
                            "top",
                            1983,
                            837,
                            "easeInOutSine",
                            "${Group6}",
                            '-10px',
                            '0px'
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
                                type: 'image',
                                rect: ['-2px', '7px', '243px', '355px', 'auto', 'auto'],
                                id: 'housewife_tongue',
                                transform: [[], ['-4'], [], ['0.9177', '0.90141'], ['24.4409%', '13.5343%']],
                                clip: 'rect(0px 87.58837890625px 94.570556640625px 28.6796875px)',
                                fill: ['rgba(0,0,0,0)', 'images/housewife%20tongue.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['65px', '53px', '4px', '4px', 'auto', 'auto'],
                                transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
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
                    duration: 2750,
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
                            750,
                            850,
                            "easeInOutSine",
                            "${Group7}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid507",
                            "top",
                            1600,
                            850,
                            "easeInOutSine",
                            "${Group7}",
                            '-11px',
                            '0px'
                        ]
                    ]
                }
            },
            "big_palm_move": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '109px', '321', '467', 'auto', 'auto'],
                            id: 'big_palm_move',
                            type: 'group',
                            transform: [[], ['4'], [], ['1.20463', '1.20463'], ['54.5025%', '87.4531%']],
                            c: [
                            {
                                rect: ['18px', '-9px', '309px', '443px', 'auto', 'auto'],
                                id: 'big_palm2',
                                transform: [[], [], [], ['0.95944', '0.95944']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/big%20palm2.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                opacity: '1',
                                id: 'doctor_eyebrow_move',
                                symbolName: 'doctor_eyebrow_move',
                                cursor: 'pointer',
                                rect: ['196px', '-4px', '44', '90', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                transform: [[], [], [], [], ['68.4043%', '16.9067%']],
                                cursor: 'pointer',
                                id: 'worker_eye_close_move',
                                symbolName: 'worker_eye_close',
                                clip: 'rect(0.904596209526062px 189.60400390625px 109.140869140625px 133.59375px)',
                                rect: ['0px', '0px', '238', '358', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                transform: [[], [], [], [], ['88.6666%', '22.0614%']],
                                cursor: 'pointer',
                                id: 'student_eye_blink_move',
                                symbolName: 'student_eye_blink',
                                clip: 'rect(-0.392633318901062px 223px 120.03515625px 167.21875px)',
                                rect: ['76px', '25px', '223', '338', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                transform: [[], [], [], [], ['53.2043%', '37.1175%']],
                                cursor: 'pointer',
                                id: 'player_one_blink_move',
                                symbolName: 'player_one_blink',
                                clip: 'rect(-30.43915367126465px 56px 92.78271484375px 0px)',
                                rect: ['79px', '36px', '56', '128', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                transform: [[], [], [], [], ['23.4492%', '18.9458%']],
                                cursor: 'pointer',
                                id: 'housewife_tongue_move',
                                symbolName: 'housewife_tongue_move',
                                clip: 'rect(-9.628522872924805px 88.69775390625px 117.919189453125px 25.38525390625px)',
                                rect: ['17px', '132px', '245', '335', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '321px', '467px']
                        }
                    }
                },
                timeline: {
                    duration: 27000,
                    autoPlay: true,
                    labels: {
                        "plam show": 250,
                        "hand wave": 3985
                    },
                    data: [
                        [
                            "eid508",
                            "clip",
                            27000,
                            0,
                            "easeInOutSine",
                            "${worker_eye_close_move}",
                            [0.904596209526062,189.60400390625,109.140869140625,133.59375],
                            [0.904596209526062,189.60400390625,109.140869140625,133.59375],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid438",
                            "originY",
                            26000,
                            0,
                            "linear",
                            "${student_eye_blink_move}",
                            '22.0614%',
                            '22.0614%'
                        ],
                        [
                            "eid437",
                            "originX",
                            26000,
                            0,
                            "linear",
                            "${student_eye_blink_move}",
                            '88.6666%',
                            '88.6666%'
                        ],
                        [
                            "eid440",
                            "originY",
                            26000,
                            0,
                            "linear",
                            "${worker_eye_close_move}",
                            '16.9067%',
                            '16.9067%'
                        ],
                        [
                            "eid452",
                            "top",
                            1500,
                            820,
                            "easeOutBounce",
                            "${big_palm_move}",
                            '109px',
                            '-536px'
                        ],
                        [
                            "eid485",
                            "left",
                            0,
                            0,
                            "easeInOutSine",
                            "${big_palm_move}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid512",
                            "clip",
                            27000,
                            0,
                            "easeInOutSine",
                            "${student_eye_blink_move}",
                            [-0.392633318901062,223,120.03515625,167.21875],
                            [-0.392633318901062,223,120.03515625,167.21875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid439",
                            "originX",
                            26000,
                            0,
                            "linear",
                            "${worker_eye_close_move}",
                            '68.4043%',
                            '68.4043%'
                        ],
                        [
                            "eid460",
                            "rotateZ",
                            2500,
                            1485,
                            "easeInOutQuad",
                            "${big_palm_move}",
                            '0deg',
                            '4deg'
                        ],
                        [
                            "eid461",
                            "rotateZ",
                            3985,
                            2758,
                            "easeInOutQuad",
                            "${big_palm_move}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid463",
                            "rotateZ",
                            6742,
                            2758,
                            "easeInOutQuad",
                            "${big_palm_move}",
                            '-4deg',
                            '4deg'
                        ]
                    ]
                }
            },
            "tram_learn": {
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
                            display: 'block',
                            rect: ['1716px', '0px', '1420px', '302px', 'auto', 'auto'],
                            id: 'tram_learn_more',
                            fill: ['rgba(0,0,0,0)', 'images/tram%20learn%20more.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['650px', '226px', '53px', '48px', 'auto', 'auto'],
                            display: 'block',
                            id: 'tram_go_btn',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/tram%20go%20btn.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1420px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 3390,
                    autoPlay: true,
                    labels: {
                        "tram show": 250,
                        "tram off": 2250
                    },
                    data: [
                        [
                            "eid525",
                            "left",
                            250,
                            1250,
                            "easeOutSine",
                            "${tram_go_btn}",
                            '650px',
                            '2350px'
                        ],
                        [
                            "eid527",
                            "left",
                            2250,
                            1000,
                            "easeOutSine",
                            "${tram_go_btn}",
                            '2350px',
                            '4030px'
                        ],
                        [
                            "eid521",
                            "left",
                            250,
                            1250,
                            "easeOutSine",
                            "${tram_learn_more}",
                            '5px',
                            '1716px'
                        ],
                        [
                            "eid523",
                            "left",
                            2250,
                            1000,
                            "easeOutSine",
                            "${tram_learn_more}",
                            '1716px',
                            '3380px'
                        ],
                        [
                            "eid535",
                            "display",
                            3390,
                            0,
                            "easeOutSine",
                            "${tram_learn_more}",
                            'block',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            3390,
                            0,
                            "easeOutSine",
                            "${tram_go_btn}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation%20palm_edgeActions.js");
})("EDGE-56593759");
