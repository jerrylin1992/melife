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
                            fill: ["rgba(137,192,105,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'classroom',
                            type: 'image',
                            rect: ['418px', '111px', '1035px', '730px', 'auto', 'auto'],
                            clip: 'rect(43.33487319946289px 1035px 681.9044799804688px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"classroom%20new.svg",'0px','0px'],
                            transform: [[],[],[],['1.18918','1.27838']]
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
                            id: 'seat_shape',
                            symbolName: 'seat_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['57', '909px', '154', '167', 'auto', 'auto'],
                            opacity: '0.80148237994593',
                            transform: [[],['7']]
                        },
                        {
                            id: 'nucleur_shape5',
                            symbolName: 'nucleur_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['277px', '911px', '96', '141', 'auto', 'auto'],
                            clip: 'rect(16.992856979370117px 96px 126.4000015258789px 0px)',
                            transform: [[],[],[],['1.09375','1.09375']]
                        },
                        {
                            id: 'council_house_shape2',
                            symbolName: 'council_house_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['828px', '907px', '103', '147', 'auto', 'auto'],
                            clip: 'rect(18.360177993774414px 103px 126.65413665771484px 0px)',
                            transform: [[],[],[],['0.9398','1.05422']]
                        },
                        {
                            id: 'topography_shape2',
                            symbolName: 'topography_shape',
                            type: 'rect',
                            rect: ['440px', '909px', '104', '132', 'auto', 'auto'],
                            opacity: '0.85',
                            transform: [[],[],[],['-0.66178','0.65568']]
                        },
                        {
                            id: 'bag_shape',
                            symbolName: 'bag_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['602', '921', '166', '116', 'auto', 'auto'],
                            opacity: '0.84854549751049'
                        },
                        {
                            id: 'book_shape2',
                            symbolName: 'book_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1177px', '903px', '176', '156', 'auto', 'auto'],
                            opacity: '0.84854549751049'
                        },
                        {
                            id: 'movement_shape',
                            symbolName: 'movement_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1398', '911', '131', '142', 'auto', 'auto']
                        },
                        {
                            id: 'wifi_shape',
                            symbolName: 'wifi_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['996', '928', '141', '102', 'auto', 'auto']
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
                            id: 'student_eye_blink',
                            symbolName: 'student_eye_blink',
                            display: 'none',
                            type: 'rect',
                            rect: ['1655px', '-7px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.62607','0.63018']]
                        },
                        {
                            id: 'seat_drag',
                            symbolName: 'seat_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['353px', '299px', '315', '328', 'auto', 'auto'],
                            clip: 'rect(34.5625px 289.46875px 262.625px 65.203125px)',
                            cursor: 'pointer',
                            transform: [[],[],[],['0.85134','0.85134']]
                        },
                        {
                            id: 'nucleus2',
                            symbolName: 'nucleus',
                            type: 'rect',
                            rect: ['737px', '448px', '54', '77', 'auto', 'auto'],
                            clip: 'rect(0px 105.2578125px 143.21432495117188px 0px)',
                            cursor: 'pointer',
                            transform: [[],[],[],['1','0.94945'],['99.9999%','99.9999%']]
                        },
                        {
                            id: 'art_processor_drag',
                            symbolName: 'art_processor_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['388px', '231px', '83', '90', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'wheel_drag',
                            symbolName: 'wheel_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['637px', '597px', '61', '87', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'bag_drag',
                            symbolName: 'bag_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['949', '536', '166', '116', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'red_book_drag',
                            symbolName: 'red_book_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['1161px', '410px', '174', '131', 'auto', 'auto'],
                            clip: 'rect(14.18115234375px 166.84375px 118.00927734375px 9.89990234375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'movement_drag',
                            symbolName: 'movement_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['1289px', '251', '128', '140', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'wifi_drag2',
                            symbolName: 'wifi_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['868', '374', '135', '102', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Instruction2',
                            symbolName: 'Instruction',
                            display: 'block',
                            type: 'rect',
                            rect: ['388px', '218', '1127', '536', 'auto', 'auto']
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
                                fill: ["rgba(136,192,104,0.99)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],[],['100%','0%']]
                            },
                            {
                                id: 'Rectangle_top',
                                type: 'rect',
                                rect: ['269px', '0px', '1920px', '900px', 'auto', 'auto'],
                                clip: 'rect(0px 1920px 886.984375px 11.84375px)',
                                opacity: '0',
                                fill: ["rgba(137,192,105,1.00)"],
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
                                    id: 'dash_line',
                                    type: 'image',
                                    rect: ['0px', '656px', '1919px', '8px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(0,0,0,0)",im+"blu%20dash.svg",'0px','0px'],
                                    filter: [0, -133, 0.89309895833333, 3.7278645833333, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                    transform: [[],[],[],[],['100%']]
                                },
                                {
                                    id: 'green_dash',
                                    type: 'image',
                                    rect: ['0px', '652px', '1919px', '8px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"green dash2.svg",'0px','0px']
                                },
                                {
                                    id: 'edu_description',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['479px', '371px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "A world class education awaits you in Melbourne !",
                                    align: "center",
                                    font: ['open-sans, sans-serif', [42, "px"], "rgba(12,132,80,0.99)", "600", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'Education_heading',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['674px', '193px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Education<br>",
                                    font: ['comfortaa, sans-serif', [126, "px"], "rgba(12,132,80,0.99)", "500", "none", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['1','0.93']]
                                },
                                {
                                    id: 'education_icon',
                                    type: 'image',
                                    rect: ['826px', '-8px', '308px', '216px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"education%20icon.svg",'0px','0px']
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
                                    id: 'scissor_student',
                                    type: 'image',
                                    rect: ['-61px', '-607px', '631px', '716px', 'auto', 'auto'],
                                    clip: 'rect(476.125px 631px 716px 127.96875px)',
                                    fill: ["rgba(0,0,0,0)",im+"scissor%20student.svg",'0px','0px'],
                                    transform: [[],[],[],['0.39','0.39'],['22.5354%','92.9514%']]
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
                    duration: 18491.484375,
                    autoPlay: true,
                    labels: {
                        "instruction": 2000,
                        "one": 3406,
                        "dragdrop": 4000,
                        "close giveme5": 11991
                    },
                    data: [
                        [
                            "eid1033",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${bag_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1112",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${student_eye_blink}",
                            'none',
                            'block'
                        ],
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
                            "eid852",
                            "background-color",
                            978,
                            0,
                            "linear",
                            "${Rectangle_bottom}",
                            'rgba(136,192,104,0.99)',
                            'rgba(136,192,104,0.99)'
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
                            "eid1032",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${movement_drag}",
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
                            "eid1049",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${wifi_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid988",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${wheel_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid360",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${nucleus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1034",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${movement_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid362",
                            "display",
                            2000,
                            0,
                            "easeInQuad",
                            "${nucleur_shape5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid607",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${council_house_shape2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid883",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${green_dash}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1113",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Education_heading}",
                            '674px',
                            '674px'
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
                            "eid984",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${seat_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "opacity",
                            0,
                            750,
                            "easeOutBounce",
                            "${dash_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1048",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${wifi_drag2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1114",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Education_heading}",
                            '193px',
                            '193px'
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
                            "eid864",
                            "filter.contrast",
                            978,
                            0,
                            "linear",
                            "${dash_line}",
                            '0.89309895833333',
                            '0.89309895833333'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${edu_description}",
                            'block',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            750,
                            0,
                            "linear",
                            "${edu_description}",
                            'block',
                            'block'
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
                            "eid187",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${Education_heading}",
                            '0',
                            '1'
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
                            "eid625",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${topography_shape2}",
                            'none',
                            'block'
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
                            "eid881",
                            "display",
                            0,
                            0,
                            "linear",
                            "${green_dash}",
                            'block',
                            'block'
                        ],
                        [
                            "eid882",
                            "display",
                            750,
                            0,
                            "linear",
                            "${green_dash}",
                            'block',
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
                            "eid1030",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${book_shape2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Education_heading}",
                            'block',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Education_heading}",
                            'block',
                            'block'
                        ],
                        [
                            "eid985",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${art_processor_drag}",
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
                            "eid1029",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${red_book_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1031",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${bag_shape}",
                            'none',
                            'block'
                        ],
                        [
                            "eid863",
                            "filter.hue-rotate",
                            978,
                            0,
                            "linear",
                            "${dash_line}",
                            '-133deg',
                            '-133deg'
                        ],
                        [
                            "eid865",
                            "filter.saturate",
                            978,
                            0,
                            "linear",
                            "${dash_line}",
                            '3.7278645833333',
                            '3.7278645833333'
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
                            "eid983",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${seat_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid880",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${education_icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${edu_description}",
                            '0',
                            '1'
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
                            "eid866",
                            "rotateZ",
                            750,
                            228,
                            "linear",
                            "${scissor_student}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid867",
                            "rotateZ",
                            978,
                            228,
                            "linear",
                            "${scissor_student}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid868",
                            "rotateZ",
                            1206,
                            228,
                            "linear",
                            "${scissor_student}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid869",
                            "rotateZ",
                            1434,
                            228,
                            "linear",
                            "${scissor_student}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid870",
                            "rotateZ",
                            1662,
                            227,
                            "linear",
                            "${scissor_student}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid871",
                            "rotateZ",
                            1889,
                            228,
                            "linear",
                            "${scissor_student}",
                            '10deg',
                            '0deg'
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
                            "eid878",
                            "display",
                            0,
                            0,
                            "linear",
                            "${education_icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid879",
                            "display",
                            750,
                            0,
                            "linear",
                            "${education_icon}",
                            'block',
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
                            "eid849",
                            "background-color",
                            978,
                            0,
                            "linear",
                            "${Rectangle_top}",
                            'rgba(137,192,105,1.00)',
                            'rgba(137,192,105,1.00)'
                        ],
                        [
                            "eid622",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${classroom}",
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
                            transform: [[], [], [], ['2.72757', '2.21']],
                            rect: ['352px', '-212px', '536px', '365px', 'auto', 'auto'],
                            id: 'speech_bubble_green',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/speech%20bubble%20green2.svg', '0px', '0px']
                        },
                        {
                            font: ['open-sans, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Hi, I\'m your study consultant !<br>Let me introduce you education in Melbourne.<br><br>Try to find all the 8 educational products in the classroom,<br>drag and drop them to the correct shapes.<br><br>A big surprise is waiting for you !!!',
                            id: 'Instruction',
                            opacity: '1',
                            align: 'center',
                            rect: ['-3px', '0px', '1127px', '365px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.51479', '0.51479']],
                            type: 'image',
                            id: 'ok_btn_green',
                            rect: ['1268px', '-125px', '169px', '169px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/ok%20btn%20green.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['1301px', '-74px', '87px', '88px', 'auto', 'auto'],
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
                            "eid119",
                            "top",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_green}",
                            '40px',
                            '-212px'
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
                            "eid170",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${speech_bubble_green}",
                            '1',
                            '0'
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
                            "eid135",
                            "left",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '-3px',
                            '801px'
                        ],
                        [
                            "eid136",
                            "top",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '0px',
                            '-225px'
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
                            "eid192",
                            "top",
                            180,
                            809,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '423px',
                            '-74px'
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
                            "eid118",
                            "left",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_green}",
                            '352px',
                            '1095px'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_green}",
                            '2.21',
                            '0'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble_green}",
                            '2.72757',
                            '0'
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
                            '382px',
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
                            rect: ['10px', '-12px', '87px', '105px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            transform: [[], ['88'], [], ['0.89013']],
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
                            transform: [[], ['7'], [], ['7.17313', '7.17313']],
                            type: 'image',
                            id: 'bio_eye',
                            rect: ['15px', '17px', '92px', '53px', 'auto', 'auto'],
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
                            type: 'rect',
                            rect: ['4px', '1px', '1920px', '891px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(137,192,105,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                id: 'seat_detail_real',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/seat%20detail%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['0', '0', '0', '0', 'auto', 'auto'],
                                id: 'EYE_MOVE',
                                symbolName: 'EYE_MOVE',
                                type: 'rect'
                            },
                            {
                                rect: ['322px', '65px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                type: 'image',
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
                            type: 'image',
                            id: 'nucleus',
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
                            type: 'image',
                            id: 'nucleur_shape4',
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1px', '1px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            type: 'group',
                            id: 'Group2',
                            rect: ['386px', '101px', '1123px', '740', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                rect: ['-1px', '18px', '1115px', '700px', 'auto', 'auto'],
                                id: 'nucleus_detail_real',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cricket%20detail%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['15px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                rect: ['0', '0', '0', '0', 'auto', 'auto'],
                                id: 'EAR_MOVE',
                                symbolName: 'EAR_MOVE',
                                type: 'rect'
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
                            rect: ['0px', '0px', '96px', '77px', 'auto', 'auto'],
                            id: 'Ellipse3',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
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
                            rect: ['24px', '0px', '96px', '77px', 'auto', 'auto'],
                            transform: [[], [], ['-32'], [1, 1, 1]],
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
                            rect: ['4px', '20px', '96px', '77px', 'auto', 'auto'],
                            transform: [[], [], ['-13', '23'], [1, 1, 1]],
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
                            rect: ['1px', '38px', '96px', '77px', 'auto', 'auto'],
                            transform: [[], [], ['-30', '38'], [1, 1, 1]],
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
                            rect: ['33px', '-15px', '65px', '77px', 'auto', 'auto'],
                            transform: [[], ['38'], ['-50', '32'], [1, 1, 1]],
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
                            rect: ['10px', '20px', '129px', '46px', 'auto', 'auto'],
                            transform: [[], ['38'], ['-61', '10'], [1, 1, 1]],
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
                            id: 'yellow_firework2',
                            symbolName: 'yellow_firework',
                            transform: [[], [], [], ['1.16327', '1.16327']],
                            rect: ['-252px', '6px', '294', '190', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'yellow_firework_second',
                            symbolName: 'yellow_firework_second',
                            transform: [[], [], [], ['-0.54526', '0.58476']],
                            rect: ['509px', '244px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'yellow_firework_third',
                            symbolName: 'yellow_firework_third',
                            transform: [[], [], [], ['-0.32062', '0.34622']],
                            rect: ['390px', '-76px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            fi: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework2',
                            symbolName: 'orange_firework',
                            filter: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['482px', '75px', '342', '320', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-54'], [], ['-0.49125', '0.47161']],
                            filter: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 323, 1.48, 2.78, 0, 0, 0.37, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework_third2',
                            symbolName: 'orange_firework_third',
                            rect: ['-269px', '38px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.59375', '0.59375']],
                            filter: [0, 323, 1.4833333333333, 2.7805989583333, 0, 0, 0.36744791666667, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 323, 1.4833333333333, 2.7805989583333, 0, 0, 0.36744791666667, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'orange_firework_second',
                            symbolName: 'orange_firework_second',
                            rect: ['352px', '-206px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.00605', '0.00605']],
                            rect: ['0px', '-270px', '544px', '557px', 'auto', 'auto'],
                            id: 'big_palm',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big%20palm.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'red_star',
                            symbolName: 'red_star',
                            transform: [[], [], [], ['0.76471', '0.76471']],
                            rect: ['10px', '-71px', '49', '51', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'red_star_2',
                            symbolName: 'red_star_2',
                            transform: [[], [], [], ['0.7551', '0.7551']],
                            rect: ['354px', '-91px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['508px', '369px', '37', '39', 'auto', 'auto'],
                            id: 'yellow_star2',
                            symbolName: 'yellow_star',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'yellow_star_second',
                            symbolName: 'yellow_star_second',
                            transform: [[], [], [], ['0.64457', '0.64457']],
                            rect: ['210px', '-139px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'yellow_star_third',
                            symbolName: 'yellow_star_third',
                            transform: [[], [], [], ['1.30769', '1.30769']],
                            rect: ['-163px', '463px', null, null, 'auto', 'auto']
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
                            [ "eid592", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star}', [0] ] ],
                            [ "eid593", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star_2}', [0] ] ],
                            [ "eid590", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_second}', [0] ] ],
                            [ "eid591", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework2}', [0] ] ],
                            [ "eid594", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_third}', [0] ] ],
                            [ "eid586", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_star_second}', [0] ] ],
                            [ "eid588", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_second}', [0] ] ],
                            [ "eid587", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_third2}', [0] ] ],
                            [ "eid589", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework2}', [0] ] ],
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
                            transform: [[], ['500'], [0, 0, 0], [1, 1, 1]],
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
                            rect: ['0px', '0px', '49px', '51px', 'auto', 'auto'],
                            transform: [[], ['360'], [], ['0', '0']],
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
                    duration: 2000,
                    autoPlay: true,
                    data: [
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
                        ],
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
                            "eid501",
                            "rotateZ",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
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
                    duration: 1660,
                    autoPlay: true,
                    data: [
                        [
                            "eid501",
                            "rotateZ",
                            0,
                            1660,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
                        ],
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
                    duration: 2250,
                    autoPlay: true,
                    data: [
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
                        ],
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
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'yellow_firework',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
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
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'yellow_firework',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
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
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            id: 'orange_firework',
                            type: 'image',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
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
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            id: 'orange_firework',
                            type: 'image',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
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
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'yellow_firework',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
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
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
                            id: 'orange_firework',
                            type: 'image',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'surprise_bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1924px', '1079px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'big_palm2',
                            display: 'none',
                            symbolName: 'big_palm',
                            cursor: 'pointer',
                            rect: ['670px', '219px', '544', '557', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'give_me_five_txt2',
                            opacity: '0',
                            rect: ['421px', '867px', '1081px', '61px', 'auto', 'auto'],
                            filter: [0, 204, 1, 4.0397135416666, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 204, 1, 4.0397135416666, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            clip: 'rect(0px 1081px 61px 1081px)',
                            fill: ['rgba(0,0,0,0)', 'images/give%20me%20five%20txt.svg', '0px', '0px']
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
                            rect: ['-4px', '134px', '2034px', '1341px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.00447', '1.00547']],
                            id: 'route_bg',
                            type: 'image',
                            clip: 'rect(108.859375px 1939.875px 1198.59375px 8.171875px)',
                            fill: ['rgba(0,0,0,0)', 'images/route%20background.svg', '0px', '0px']
                        },
                        {
                            rect: ['1699px', '0', '96', '231', 'auto', 'auto'],
                            id: 'tram_down',
                            symbolName: 'tram_down',
                            type: 'rect'
                        },
                        {
                            rect: ['588px', '1341px', null, null, 'auto', 'auto'],
                            id: 'tram_up',
                            symbolName: 'tram_up',
                            type: 'rect'
                        },
                        {
                            rect: ['877', '946px', '258', '470', 'auto', 'auto'],
                            id: 'hand_move_with_phone2',
                            symbolName: 'hand_move_with_phone',
                            type: 'rect'
                        },
                        {
                            rect: ['27px', '258px', '166px', '213px', 'auto', 'auto'],
                            id: 'home_btn2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/home%20btn.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'right_in',
                            opacity: '0',
                            rect: ['1410px', '314', '409', '905', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['62px', '519px', '347px', '386px', 'auto', 'auto'],
                                id: 'mel_library',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mel%20library.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '404px', '384px', 'auto', 'auto'],
                                id: 'fed_square',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/fed%20square.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-76px', '462', '499', '824', 'auto', 'auto'],
                            id: 'left_in',
                            type: 'group',
                            c: [
                            {
                                rect: ['38px', '499px', '449px', '325px', 'auto', 'auto'],
                                id: 'mel_airport',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mel%20airport.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '499px', '325px', 'auto', 'auto'],
                                id: 'mel_cafe',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mel%20cafe.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['772px', '246px', '330px', '521px', 'auto', 'auto'],
                            id: 'flinder',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flinder.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'WIFI_MOVE_with_phone_later',
                            symbolName: 'WIFI_MOVE_with_phone_later',
                            transform: [[], [], [], ['0.482', '0.482']],
                            rect: ['1352px', '705px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WIFI_MOVE_with_phone_laterCopy2',
                            symbolName: 'WIFI_MOVE_with_phone_later',
                            transform: [[], [], [], ['0.482', '0.482']],
                            rect: ['169px', '827px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WIFI_MOVE_with_phone_laterCopy3',
                            symbolName: 'WIFI_MOVE_with_phone_later',
                            transform: [[], [], [], ['0.482', '0.482']],
                            rect: ['345px', '329px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WIFI_MOVE_with_phone_laterCopy4',
                            symbolName: 'WIFI_MOVE_with_phone_later',
                            transform: [[], [], [], ['0.482', '0.482']],
                            rect: ['852px', '462px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'WIFI_MOVE_with_phone_laterCopy',
                            symbolName: 'WIFI_MOVE_with_phone_later',
                            transform: [[], [], [], ['0.482', '0.482']],
                            rect: ['1265px', '248px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2034px', '1469px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1086",
                            "opacity",
                            1250,
                            2000,
                            "easeInOutQuad",
                            "${left_in}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1085",
                            "left",
                            1250,
                            1167,
                            "easeInOutQuad",
                            "${left_in}",
                            '-76px',
                            '60px'
                        ],
                        [
                            "eid1089",
                            "top",
                            1250,
                            1167,
                            "easeInOutQuad",
                            "${flinder}",
                            '246px',
                            '295px'
                        ],
                        [
                            "eid1084",
                            "opacity",
                            1250,
                            2000,
                            "easeInOutQuad",
                            "${right_in}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1090",
                            "opacity",
                            1250,
                            2000,
                            "easeInOutQuad",
                            "${flinder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1082",
                            "left",
                            1250,
                            1167,
                            "easeInOutQuad",
                            "${right_in}",
                            '1410px',
                            '1266px'
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
                            rect: ['0px', '0px', '103px', '157px', 'auto', 'auto'],
                            id: 'council_house2',
                            type: 'image',
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
                            transform: [[], [], [], ['1.23157']],
                            id: 'council_house_shape',
                            type: 'image',
                            rect: ['10px', '0px', '84px', '147px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                id: 'art_processor_detail',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/art%20detail%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_newCopy2',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                rect: ['665px', '-29px', '355px', '543px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8925', '0.61147']],
                                id: 'art_processor',
                                type: 'image',
                                clip: 'rect(-3.546875px 355px 543px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/art%20processor.jpg', '0px', '0px']
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
                            type: 'image',
                            id: 'wheel',
                            rect: ['0px', '0px', '104px', '163px', 'auto', 'auto'],
                            transform: [[], [], [], ['-0.99621']],
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
                            rect: ['-156px', '-198px', '415px', '528px', 'auto', 'auto'],
                            id: 'wheel_line',
                            transform: [[], [], [], ['0.2506', '0.2506']],
                            type: 'image',
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
                            type: 'image',
                            fi: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['1003px', '125px', '407px', '286px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1418364261-img-quantum-front-facing.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1003px', '125px', '407px', '286px', 'auto', 'auto'],
                            id: 'seat_pic1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Quantum-850-400.jpg', '0px', '0px']
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
                            '1',
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
                            '1',
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
                            '1'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '1',
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
                            '1'
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
                            rect: ['404px', '-64px', '730px', '549px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.38', '0.50582'], ['51.8192%', '47.2877%']],
                            id: 'ear_pic2',
                            type: 'image',
                            clip: 'rect(-28.224018096923828px 729.5943603515625px 563.1705322265625px 3.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/kd-training-2p-red.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ear_pic1',
                            opacity: '1',
                            rect: ['441px', '-73px', '675px', '549px', 'auto', 'auto'],
                            fi: [0, 0, 1, 0.70377604166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 0.70377604166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            transform: [[], [], [], ['0.62', '0.59035'], ['49.9999%']],
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
                        ],
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
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            rect: ['385px', '101', '1124', '740', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                id: 'wheel_detail_real',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/wheel%20detail%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_newCopy3',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                rect: ['0', '0', '0', '0', 'auto', 'auto'],
                                id: 'TOPO_MOVE',
                                symbolName: 'TOPO_MOVE',
                                type: 'rect'
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
                            rect: ['608px', '46px', '438px', '437px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.65', '0.81643']],
                            id: 'topo_pic2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shepherd_caster_1.jpg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'topo_img1',
                            rect: ['621px', '86px', '412', '412', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], [], [], ['0.51264', '0.55834']],
                                id: 'topo_pic1',
                                opacity: '1',
                                rect: ['-52px', '-144px', '555px', '652px', 'auto', 'auto'],
                                fi: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                type: 'image',
                                filter: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fill: ['rgba(0,0,0,0)', 'images/shepherd_caster_2.jpg', '0px', '0px']
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
                    duration: 10250,
                    autoPlay: false,
                    labels: {
                        "flip start": 250,
                        "flip loop": 3000
                    },
                    data: [
                        [
                            "eid766",
                            "scaleX",
                            3000,
                            1059,
                            "easeInSine",
                            "${topo_img1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid773",
                            "scaleX",
                            7809,
                            1059,
                            "easeInSine",
                            "${topo_img1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid767",
                            "scaleX",
                            3000,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0.65',
                            '0'
                        ],
                        [
                            "eid769",
                            "scaleX",
                            4059,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0',
                            '0.65'
                        ],
                        [
                            "eid770",
                            "scaleX",
                            6750,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0.65',
                            '0'
                        ],
                        [
                            "eid771",
                            "scaleX",
                            7809,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '0',
                            '0.65'
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
                            transform: [[], [], [], ['0.1876', '0.1876']],
                            id: 'product5',
                            type: 'image',
                            rect: ['-299px', '-224px', '736px', '552px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            rect: ['385px', '101px', '1124', '740', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                id: 'product5_details',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/bag%20detail.svg', '0px', '0px']
                            },
                            {
                                rect: ['-62px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_new',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                rect: ['-403px', '-4px', null, null, 'auto', 'auto'],
                                id: 'BAG_MOVE',
                                symbolName: 'BAG_MOVE',
                                type: 'rect'
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
                            rect: ['-224px', '-221px', '613px', '605px', 'auto', 'auto'],
                            id: 'smartbox',
                            transform: [[], [], [], ['0.27078', '0.27079']],
                            type: 'image',
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
                            rect: ['-159px', '-157px', '474px', '468px', 'auto', 'auto'],
                            id: 'smart_shape',
                            transform: [[], [], [], ['0.32735', '0.32735']],
                            type: 'image',
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
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                id: 'book_detail_real',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/book%20detail.svg', '0px', '0px']
                            },
                            {
                                rect: ['618px', '4px', '1024px', '402px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.55842', '0.55842']],
                                id: 'agideasCopy',
                                type: 'image',
                                clip: 'rect(0px 1024px 402px 377.5020446777344px)',
                                fill: ['rgba(0,0,0,0)', 'images/agideas.jpg', '0px', '0px']
                            },
                            {
                                rect: ['1005px', '249px', '1024px', '402px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.83462', '0.83462']],
                                id: 'agideasCopy2',
                                type: 'image',
                                clip: 'rect(0px 393.845947265625px 402px -0.44768401980400085px)',
                                fill: ['rgba(0,0,0,0)', 'images/agideas.jpg', '0px', '0px']
                            },
                            {
                                rect: ['322px', '65px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_newCopy',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                type: 'image',
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
                            rect: ['1003px', '77px', '407px', '364px', 'auto', 'auto'],
                            id: 'smartbox_pic2',
                            transform: [[], [], [], ['0.84', '0.92249']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mario%2Bmatkovich_daniels_sharps_container.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.84', '1.02686']],
                            fi: null,
                            filter: [0, 0, 1.194453125, 0.75455729166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'smartbox_pic1',
                            rect: ['1022px', '99px', '384px', '327px', 'auto', 'auto'],
                            type: 'image',
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
                        ],
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
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
                            id: 'polilight',
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            type: 'image',
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
                            rect: ['-76px', '-110px', '268px', '387px', 'auto', 'auto'],
                            id: 'polilight_shape2',
                            transform: [[], [], [], ['0.43152', '0.43152']],
                            type: 'image',
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
                            type: 'rect',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '4px', '1920px', '891px', 'auto', 'auto'],
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                id: 'movement_detail_real',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/movement%20detail.svg', '0px', '0px']
                            },
                            {
                                rect: ['666px', '264px', '268px', '209px', 'auto', 'auto'],
                                id: 'Melbourne_Movement_logo',
                                transform: [[], [], [], ['0.95977', '0.95977']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Melbourne_Movement_logo.png', '0px', '0px']
                            },
                            {
                                rect: ['52px', '-670px', '1458px', '1550px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.17641', '0.17641']],
                                id: 'salone_satellite_2015_max_harper_milan',
                                type: 'image',
                                clip: 'rect(473.34375px 1406.78125px 1493.546875px 112.015625px)',
                                fill: ['rgba(0,0,0,0)', 'images/salone_satellite_2015_max_harper_milan.jpg', '0px', '0px']
                            },
                            {
                                rect: ['-61px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                type: 'image',
                                id: 'folded_newCopy2',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
                            },
                            {
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
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
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
                            id: 'polilight',
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            type: 'image',
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
                            rect: ['-156px', '-75px', '451px', '261px', 'auto', 'auto'],
                            id: 'compumetics_shape',
                            transform: [[], ['-15'], ['-11', '2'], ['0.30619', '0.30619']],
                            type: 'image',
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
                            fill: ['rgba(137,192,105,1)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'wifi_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/wifi%20detail.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['-61px', '18px', '265px', '248px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['23.1261%', '0.228%']],
                                id: 'folded_newCopy3',
                                display: 'block',
                                clip: 'rect(0px 265px 248px 61.1171875px)',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20new.svg', '0px', '0px']
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
                                id: 'wifi_logo',
                                rect: ['699px', '253px', '204px', '64px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/wifi%20logo.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'WIFI_MOVE',
                                symbolName: 'WIFI_MOVE',
                                rect: ['689px', '85px', '222', '138', 'auto', 'auto']
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
                            rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                id: 'doctor_no_eyebrow',
                                type: 'image',
                                rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20no%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                transform: [[], ['20'], [0, 0, 0], [1, 1, 1]],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'doctor_eyebrow_right',
                                rect: ['29px', '32px', '7px', '3px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                rect: ['8px', '32px', '7px', '3px', 'auto', 'auto'],
                                id: 'doctor_eyebrow_left',
                                transform: [[], ['-20'], [0, 0, 0], [1, 1, 1]],
                                type: 'image',
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
                            type: 'image',
                            rect: ['-39px', '-43px', '393px', '414px', 'auto', 'auto'],
                            id: 'seat2',
                            transform: [[], ['7'], [], ['0.71598', '0.71598']],
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
                            transform: [[], [], [], ['0.39856', '0.39856']],
                            id: 'seat_line',
                            type: 'image',
                            rect: ['-116px', '-126px', '386px', '419px', 'auto', 'auto'],
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
                            transform: [[], [], [], ['1.03519', '1.0352']],
                            id: 'art_processor',
                            type: 'image',
                            rect: ['1px', '2px', '80px', '87px', 'auto', 'auto'],
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
                            transform: [[], [], [], ['-0.5584', '0.55838']],
                            id: 'wheel',
                            type: 'image',
                            rect: ['-24px', '-34px', '109px', '155px', 'auto', 'auto'],
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
                            rect: ['-116px', '-82px', '399px', '280px', 'auto', 'auto'],
                            id: 'bag',
                            transform: [[], [], [], ['0.41604', '0.41604']],
                            type: 'image',
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
                            rect: ['-121px', '-84px', '408px', '286px', 'auto', 'auto'],
                            id: 'bag_line',
                            transform: [[], [], [], ['0.40686', '0.40686']],
                            type: 'image',
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
                            transform: [[], [], [], ['1', '1.22344']],
                            fi: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 0.85, 0, 0.06875, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'seat_pic2',
                            rect: ['1003px', '125px', '407px', '286px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/crumpler-private-surprise-burned-orange2-700x700.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1003px', '125px', '407px', '286px', 'auto', 'auto'],
                            id: 'seat_pic1',
                            transform: [[], [], [], ['1.02641', '1.3256']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/crumpler.jpg', '0px', '0px']
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
                            '1.02641',
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
                            '1',
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
                            '1'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${seat_pic2}",
                            '1',
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
                            '1'
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
                            rect: ['0px', '0px', '174', '130', 'auto', 'auto'],
                            id: 'red_book',
                            type: 'group',
                            c: [
                            {
                                rect: ['-1361px', '-1097px', '2897px', '2325px', 'auto', 'auto'],
                                id: '_3CDC0F94F624CD28',
                                transform: [[], ['14'], ['-7'], ['0.04877', '0.04387']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/3CDC0F94F624CD28.png', '0px', '0px']
                            },
                            {
                                rect: ['-661px', '-461px', '1506px', '1037px', 'auto', 'auto'],
                                id: 'red_people_new_2d_copy',
                                transform: [[], [], ['-7'], ['0.07702', '0.07702']],
                                type: 'image',
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
                            rect: ['-100px', '-68px', '375px', '292px', 'auto', 'auto'],
                            id: 'book_line',
                            transform: [[], ['19'], [], ['0.39161', '0.39161']],
                            type: 'image',
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
                            rect: ['-182px', '-176px', '495px', '495px', 'auto', 'auto'],
                            id: 'movement_line2',
                            transform: [[], [], ['0', '-5'], ['0.26464', '0.26464']],
                            type: 'image',
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
                            rect: ['-179px', '-174px', '487px', '489px', 'auto', 'auto'],
                            id: 'movement',
                            transform: [[], [], ['0', '-5'], ['0.26366', '0.26366']],
                            type: 'image',
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
                            rect: ['-225px', '-163px', '591px', '428px', 'auto', 'auto'],
                            id: 'wifi_line',
                            transform: [[], [], [], ['0.23831', '0.23831']],
                            type: 'image',
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
                            rect: ['-220px', '-156px', '576px', '414px', 'auto', 'auto'],
                            id: 'wifi_drag',
                            transform: [[], [], [], ['-0.23511', '0.24637']],
                            type: 'image',
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
                            type: 'image',
                            id: 'wifi1',
                            opacity: '0',
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            id: 'wifi2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            id: 'wifi3',
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
                            type: 'image',
                            id: 'tram',
                            rect: ['0px', '0px', '96px', '231px', 'auto', 'auto'],
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
                            rect: ['0px', '-1330px', '96px', '231px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            id: 'wifi1',
                            opacity: '0',
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            id: 'wifi2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            id: 'wifi3',
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
                            type: 'group',
                            id: 'hand_move_with_phone',
                            rect: ['0px', '0px', '258', '470', 'auto', 'auto'],
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            c: [
                            {
                                rect: ['0px', '0px', '258px', '470px', 'auto', 'auto'],
                                id: 'hand_hold_phone',
                                transform: [[], [], [], [], ['45.7243%', '99.0591%']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/hand%20hold%20phone.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'WIFI_MOVE_with_phone',
                                symbolName: 'WIFI_MOVE_with_phone',
                                transform: [[], ['-5'], [], ['0.4269', '0.4269']],
                                rect: ['15px', '15px', null, null, 'auto', 'auto']
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
                            type: 'image',
                            id: 'wifi1',
                            opacity: '0',
                            rect: ['70px', '102px', '82px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wifi1.svg', '0px', '0px']
                        },
                        {
                            rect: ['31px', '57px', '159px', '49px', 'auto', 'auto'],
                            id: 'wifi2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wifi2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '222px', '68px', 'auto', 'auto'],
                            id: 'wifi3',
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
                            rect: ['2038px', '514px', '225px', '335px', 'auto', 'auto'],
                            id: 'Group5',
                            transform: [[], [], [], ['3.64125', '3.64125'], ['444.2649%', '69.0104%']],
                            clip: 'rect(27.207775115966797px 224px 119.59576416015625px 165.15704345703125px)',
                            type: 'group',
                            c: [
                            {
                                rect: ['-6px', '-9px', '236px', '358px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.94492', '0.94413']],
                                id: 'student_no_eye',
                                type: 'image',
                                clip: 'rect(-0.17531250417232513px 236px 353.7236022949219px 0.2519112825393677px)',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("real%20education_edgeActions.js");
})("EDGE-17682068");
