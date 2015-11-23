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
                            fill: ["rgba(156,206,239,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'hospital_new',
                            type: 'image',
                            rect: ['418px', '111px', '1035px', '730px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hospital%20new.svg",'0px','0px'],
                            transform: [[],[],[],['1.16503','1.0738']]
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
                            id: 'eye_shape2',
                            symbolName: 'eye_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['51px', '929px', '166', '112', 'auto', 'auto'],
                            transform: [[],['-14'],[],['0.83181','0.83929']]
                        },
                        {
                            id: 'nucleur_shape5',
                            symbolName: 'nucleur_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1422px', '910px', '96', '141', 'auto', 'auto'],
                            transform: [[],[],[],['0.7234','0.7234']]
                        },
                        {
                            id: 'council_house_shape2',
                            symbolName: 'council_house_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['828px', '907px', '103', '147', 'auto', 'auto'],
                            transform: [[],[],[],['0.92621','0.92621']]
                        },
                        {
                            id: 'topography_shape2',
                            symbolName: 'topography_shape',
                            type: 'rect',
                            rect: ['467px', '916', '104', '132', 'auto', 'auto']
                        },
                        {
                            id: 'product_fifth_shape3',
                            symbolName: 'product_fifth_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['605px', '924px', '160', '120', 'auto', 'auto'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'smartbox_shape',
                            symbolName: 'smartbox_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['1201px', '908px', '155', '153', 'auto', 'auto']
                        },
                        {
                            id: 'polilight_shape3',
                            symbolName: 'polilight_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['271px', '901px', '116', '167', 'auto', 'auto'],
                            opacity: '0.80742521367521'
                        },
                        {
                            id: 'compumetics_shape2',
                            symbolName: 'compumetics_shape',
                            display: 'none',
                            type: 'rect',
                            rect: ['996', '929', '139', '112', 'auto', 'auto']
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
                            id: 'doctor_eyebrow_move',
                            symbolName: 'doctor_eyebrow_move',
                            display: 'none',
                            type: 'rect',
                            rect: ['1750px', '108px', '44', '90', 'auto', 'auto'],
                            clip: 'rect(-0.3057076930999756px 58.84819412231445px 124.06304168701172px -1.811888337135315px)',
                            cursor: 'pointer',
                            opacity: '1',
                            boxShadow: ["", 5, 5, 13, 1, "rgba(0,0,0,0.03)"],
                            transform: [[],[],[],['2.2','2.2']]
                        },
                        {
                            id: 'head2',
                            display: 'none',
                            type: 'image',
                            rect: ['399px', '256px', '117px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"head2.svg",'0px','0px'],
                            transform: [[],['-3']]
                        },
                        {
                            id: 'bio_eye2',
                            symbolName: 'bio_eye',
                            display: 'none',
                            type: 'rect',
                            rect: ['401px', '254', '122', '88', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'nucleus2',
                            symbolName: 'nucleus',
                            type: 'rect',
                            rect: ['824px', '352px', '54', '77', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.28578','1.22079']]
                        },
                        {
                            id: 'council_house',
                            symbolName: 'council_house',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '312px', '103', '157', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.92621','0.92621']]
                        },
                        {
                            id: 'topographer3',
                            symbolName: 'topographer',
                            type: 'rect',
                            rect: ['1285', '316', '103', '167', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'product_fifth',
                            symbolName: 'product_fifth',
                            display: 'none',
                            type: 'rect',
                            rect: ['1196px', '406px', '138', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'smartbox_drag',
                            symbolName: 'smartbox_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['739px', '571px', '166', '164', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.9347','0.9347']]
                        },
                        {
                            id: 'polilight_drag',
                            symbolName: 'polilight_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['610', '490', '105', '153', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'compumedics_drag',
                            symbolName: 'compumedics_drag',
                            display: 'none',
                            type: 'rect',
                            rect: ['539px', '175px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(31.2578125px 117.328125px 123.546875px -7.554687976837158px)',
                            cursor: 'pointer',
                            transform: [[],[],[],['1.1619','1.1619']]
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
                                fill: ["rgba(146,202,238,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],[],['100%','0%']]
                            },
                            {
                                id: 'Rectangle_top',
                                type: 'rect',
                                rect: ['269px', '0px', '1920px', '900px', 'auto', 'auto'],
                                clip: 'rect(0px 1920px 886.984375px 11.84375px)',
                                opacity: '0',
                                fill: ["rgba(146,202,238,1.00)"],
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
                                    transform: [[],[],[],[],['100%']]
                                },
                                {
                                    id: 'edu_description',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['651px', '372px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Melbourne provides world-class <br>healthcare for the people",
                                    align: "center",
                                    font: ['open-sans, sans-serif', [42, "px"], "rgba(40,56,140,0.99)", "600", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'Hospital_heading',
                                    display: 'block',
                                    type: 'text',
                                    rect: ['741px', '199px', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Hospital<br>",
                                    font: ['comfortaa, sans-serif', [126, "px"], "rgba(40,56,140,0.99)", "500", "none", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['1','0.93']]
                                },
                                {
                                    id: 'edu_icon',
                                    display: 'block',
                                    type: 'image',
                                    rect: ['872px', '0px', '216px', '200px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(0,0,0,0)",im+"hospital%20icon.svg",'0px','0px']
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
                                    id: 'scissor_doctor',
                                    type: 'image',
                                    rect: ['-231px', '-277px', '1447px', '1087px', 'auto', 'auto'],
                                    clip: 'rect(0px 1447px 483.3541564941406px 282.6822814941406px)',
                                    fill: ["rgba(0,0,0,0)",im+"scissor%20doctor.svg",'0px','0px'],
                                    transform: [[],[],[],['0.18','0.18'],['21.1672%','30.7403%']]
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
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
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
                    duration: 17991.484375,
                    autoPlay: true,
                    labels: {
                        "instruction": 2000,
                        "one": 3406,
                        "dragdrop": 4000,
                        "close giveme5": 11991
                    },
                    data: [
                        [
                            "eid624",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${topographer3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${edu_icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            750,
                            0,
                            "linear",
                            "${edu_icon}",
                            'block',
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
                            "eid187",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${Hospital_heading}",
                            '0',
                            '1'
                        ],
                        [
                            "eid606",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${council_house}",
                            'none',
                            'block'
                        ],
                        [
                            "eid786",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${product_fifth_shape3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${smartbox_shape}",
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
                            "eid819",
                            "display",
                            0,
                            0,
                            "easeInOutSine",
                            "${doctor_eyebrow_move}",
                            'none',
                            'none'
                        ],
                        [
                            "eid820",
                            "display",
                            2000,
                            0,
                            "easeInOutSine",
                            "${doctor_eyebrow_move}",
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
                            "eid832",
                            "rotateZ",
                            750,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid835",
                            "rotateZ",
                            978,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid837",
                            "rotateZ",
                            1206,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid839",
                            "rotateZ",
                            1434,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid841",
                            "rotateZ",
                            1662,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid843",
                            "rotateZ",
                            1889,
                            228,
                            "linear",
                            "${scissor_doctor}",
                            '10deg',
                            '0deg'
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
                            "eid814",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${compumedics_drag}",
                            'none',
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
                            "eid815",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${compumetics_shape2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid790",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${smartbox_drag}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Hospital_heading}",
                            'block',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Hospital_heading}",
                            'block',
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
                            "eid197",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${bio_eye2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid622",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${hospital_new}",
                            'none',
                            'block'
                        ],
                        [
                            "eid816",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${polilight_shape3}",
                            'none',
                            'block'
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
                            "eid817",
                            "display",
                            2000,
                            0,
                            "easeInSine",
                            "${polilight_drag}",
                            'none',
                            'block'
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
                            "eid186",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${edu_icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${head2}",
                            'none',
                            'block'
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
                            "eid787",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${product_fifth}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${eye_shape2}",
                            'none',
                            'block'
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
                            [ "eid139", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Instruction2}', ['show'] ] ],
                            [ "eid821", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${doctor_eyebrow_move}', [0] ] ],
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
                            rect: ['364px', '-212px', '536px', '365px', 'auto', 'auto'],
                            transform: [[], [], [], ['2.29591', '0']],
                            id: 'speech_bubble',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted3.svg', '0px', '0px']
                        },
                        {
                            font: ['open-sans, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Instruction',
                            opacity: '1',
                            text: 'Hi, I\'m your personal doctor !<br>I provide healthcare for your trip in Melife.<br><br>Try to find all the 8 medical products in the hospital,<br>drag and drop them to the correct shapes.<br><br>A big surprise is waiting for you !!!',
                            rect: ['0px', '0px', '1127px', '365px', 'auto', 'auto']
                        },
                        {
                            rect: ['1268px', '-125px', '169px', '169px', 'auto', 'auto'],
                            id: 'ok_btn_revise',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/ok%20btn%20revise.svg', '0px', '0px']
                        },
                        {
                            rect: ['1301px', '-74px', '87px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
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
                            "eid366",
                            "scaleY",
                            180,
                            820,
                            "easeInOutQuad",
                            "${ok_btn_revise}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid195",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid368",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_revise}",
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
                            "eid115",
                            "scaleY",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble}",
                            '2.21',
                            '0'
                        ],
                        [
                            "eid369",
                            "left",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_revise}",
                            '791px',
                            '1268px'
                        ],
                        [
                            "eid370",
                            "scaleX",
                            180,
                            820,
                            "easeInOutQuad",
                            "${ok_btn_revise}",
                            '1',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            180,
                            819,
                            "easeInOutQuad",
                            "${speech_bubble}",
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
                            "eid113",
                            "scaleX",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble}",
                            '2.29591',
                            '0'
                        ],
                        [
                            "eid118",
                            "left",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble}",
                            '364px',
                            '1095px'
                        ],
                        [
                            "eid192",
                            "top",
                            180,
                            819,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '423px',
                            '-74px'
                        ],
                        [
                            "eid196",
                            "left",
                            180,
                            819,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '831px',
                            '1301px'
                        ],
                        [
                            "eid119",
                            "top",
                            180,
                            818,
                            "easeInOutQuad",
                            "${speech_bubble}",
                            '40px',
                            '-212px'
                        ],
                        [
                            "eid365",
                            "top",
                            180,
                            819,
                            "easeInOutQuad",
                            "${ok_btn_revise}",
                            '382px',
                            '-125px'
                        ],
                        [
                            "eid194",
                            "scaleX",
                            180,
                            820,
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
                            '0px',
                            '-225px'
                        ],
                        [
                            "eid135",
                            "left",
                            180,
                            820,
                            "easeInOutQuad",
                            "${Instruction}",
                            '0px',
                            '801px'
                        ],
                        [
                            "eid367",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${ok_btn_revise}",
                            'block',
                            'block'
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
                            transform: [[], ['-13'], [], ['1.20244', '1.20244']],
                            id: 'bio_eye',
                            type: 'image',
                            rect: ['15px', '17px', '92px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bio%20eye.svg', '0px', '0px']
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
                            type: 'image',
                            id: 'eye_shape',
                            rect: ['0px', '0px', '166px', '112px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                type: 'image',
                                id: 'eye_detail_real',
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/eye%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'EYE_MOVE',
                                symbolName: 'EYE_MOVE',
                                rect: ['0', '0', '0', '0', 'auto', 'auto']
                            },
                            {
                                rect: ['383px', '64px', '204px', '235px', 'auto', 'auto'],
                                id: 'folded_page-02',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                type: 'image',
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
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
                        "eye details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "eye details end": 4000
                    },
                    data: [
                        [
                            "eid331",
                            "height",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
                        ],
                        [
                            "eid332",
                            "width",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
                        ],
                        [
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            4000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
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
                            "eid316",
                            "display",
                            4661,
                            0,
                            "easeInSine",
                            "${folded_page-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            4661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
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
                            transform: [[], [], [], ['0.27594', '0.27594']],
                            id: 'nucleus',
                            type: 'image',
                            rect: ['-71px', '-101px', '197px', '279px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nucleus.svg', '0px', '0px']
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
                            rect: ['0px', '0px', '95px', '142px', 'auto', 'auto'],
                            id: 'nucleur_shape4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nucleur%20shape.svg', '0px', '0px']
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['386px', '101px', '1123px', '740', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'image',
                                id: 'nucleus_detail_real',
                                rect: ['-1px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/nucleus%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['-1px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['15px', '37px', '51px', '45px', 'auto', 'auto'],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'EAR_MOVE',
                                symbolName: 'EAR_MOVE',
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
                        "nucleus details play": 72,
                        "folded begin": 1000,
                        "folded end": 1859,
                        "nucleus details end": 2000
                    },
                    data: [
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
                        ],
                        [
                            "eid332",
                            "width",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
                        ],
                        [
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
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
                            "eid331",
                            "height",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            transform: [[], [], [], ['1.16327', '1.16327']],
                            id: 'yellow_firework2',
                            symbolName: 'yellow_firework',
                            rect: ['-252px', '6px', '294', '190', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-0.54526', '0.58476']],
                            id: 'yellow_firework_second',
                            symbolName: 'yellow_firework_second',
                            rect: ['509px', '244px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-0.32062', '0.34622']],
                            id: 'yellow_firework_third',
                            symbolName: 'yellow_firework_third',
                            rect: ['390px', '-76px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['482px', '75px', '342', '320', 'auto', 'auto'],
                            id: 'orange_firework2',
                            symbolName: 'orange_firework',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['-54'], [], ['-0.49125', '0.47161']],
                            id: 'orange_firework_third2',
                            symbolName: 'orange_firework_third',
                            rect: ['-269px', '38px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.59375', '0.59375']],
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
                            transform: [[], [], [], ['0.76471', '0.76471']],
                            id: 'red_star',
                            symbolName: 'red_star',
                            rect: ['10px', '-71px', '49', '51', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.7551', '0.7551']],
                            id: 'red_star_2',
                            symbolName: 'red_star_2',
                            rect: ['354px', '-91px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['508px', '369px', '37', '39', 'auto', 'auto'],
                            id: 'yellow_star2',
                            symbolName: 'yellow_star',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.64457', '0.64457']],
                            id: 'yellow_star_second',
                            symbolName: 'yellow_star_second',
                            rect: ['210px', '-139px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.30769', '1.30769']],
                            id: 'yellow_star_third',
                            symbolName: 'yellow_star_third',
                            rect: ['-163px', '463px', null, null, 'auto', 'auto'],
                            type: 'rect'
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
                            [ "eid587", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_third2}', [0] ] ],
                            [ "eid589", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework2}', [0] ] ],
                            [ "eid586", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_star_second}', [0] ] ],
                            [ "eid588", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${orange_firework_second}', [0] ] ],
                            [ "eid594", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_third}', [0] ] ],
                            [ "eid592", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star}', [0] ] ],
                            [ "eid593", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${red_star_2}', [0] ] ],
                            [ "eid590", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework_second}', [0] ] ],
                            [ "eid591", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${yellow_firework2}', [0] ] ],
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
                            "eid501",
                            "rotateZ",
                            0,
                            2250,
                            "easeInOutQuad",
                            "${yellow_star}",
                            '0deg',
                            '60deg'
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
                            type: 'image',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            id: 'yellow_firework',
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            id: 'yellow_firework',
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            id: 'orange_firework',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            id: 'orange_firework',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            rect: ['140px', '88px', '294px', '190px', 'auto', 'auto'],
                            id: 'yellow_firework',
                            transform: [[], ['5'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            id: 'orange_firework',
                            rect: ['-44px', '199px', '273px', '227px', 'auto', 'auto'],
                            transform: [[], ['-27'], [0, 0, 0], [1, 1, 1]],
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
                            fill: ['rgba(146,202,238,1.00)']
                        },
                        {
                            rect: ['670px', '219px', '544', '557', 'auto', 'auto'],
                            id: 'big_palm2',
                            display: 'none',
                            symbolName: 'big_palm',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: ['421px', '867px', '1081px', '61px', 'auto', 'auto'],
                            id: 'give_me_five_txt2',
                            opacity: '0',
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
                            type: 'image',
                            id: 'route_bg',
                            rect: ['0px', '128px', '2034px', '1341px', 'auto', 'auto'],
                            clip: 'rect(108.859375px 1939.875px 1198.59375px 8.171875px)',
                            fill: ['rgba(0,0,0,0)', 'images/route%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tram',
                            rect: ['1641px', '0px', '96px', '231px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/tram.svg', '0px', '0px']
                        },
                        {
                            rect: ['13px', '237px', '1926px', '1085px', 'auto', 'auto'],
                            id: 'health_value2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/health%20value.svg', '0px', '0px']
                        },
                        {
                            rect: ['42px', '268px', '166px', '213px', 'auto', 'auto'],
                            id: 'home_btn2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/home%20btn.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2034px', '1469px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid600",
                            "top",
                            500,
                            5500,
                            "linear",
                            "${tram}",
                            '0px',
                            '1330px'
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
                            fill: ['rgba(0,0,0,0)', 'images/council%20house2.svg', '0px', '0px']
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
                            type: 'image',
                            id: 'council_house_shape',
                            rect: ['10px', '0px', '84px', '147px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.23157']],
                            fill: ['rgba(0,0,0,0)', 'images/council%20house.svg', '0px', '0px']
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'council_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/council%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['0px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                rect: ['694px', '76px', '355px', '543px', 'auto', 'auto'],
                                id: 'ext6',
                                type: 'image',
                                clip: 'rect(-3.546875px 355px 543px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/ext6.jpg', '0px', '0px']
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
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "height",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "width",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
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
                            id: 'topographer',
                            rect: ['-2px', '0px', '107px', '167px', 'auto', 'auto'],
                            transform: [[], [], [], ['-0.95808', '1.0013']],
                            fill: ['rgba(0,0,0,0)', 'images/topographer.svg', '0px', '0px']
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
                            id: 'topography_shape',
                            transform: [[], [], [], ['0.2506', '0.2506']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/topography%20shape.svg', '0px', '0px']
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
                            id: 'eye_pic2',
                            rect: ['1003px', '125px', '407px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/C1_RearAngle_no%20bg.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'eye_pic1',
                            rect: ['1003px', '125px', '407px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/C1_FrontAngle_no%20bg.jpg', '0px', '0px']
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
                            "${eye_pic1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${eye_pic1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            2000,
                            1059,
                            "easeInSine",
                            "${eye_pic2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            3059,
                            1059,
                            "easeInSine",
                            "${eye_pic2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            5750,
                            1059,
                            "easeInSine",
                            "${eye_pic2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleX",
                            6809,
                            1059,
                            "easeInSine",
                            "${eye_pic2}",
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
                            rect: ['570px', '-75px', '730px', '549px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.51', '0.55287'], ['31%']],
                            id: 'ear_pic2',
                            type: 'image',
                            clip: 'rect(0px 436.7414245605469px 549px 3.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/N6_Hero_Hybrid.jpg', '0px', '0px']
                        },
                        {
                            rect: ['241px', '-142px', '675px', '549px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.89', '0.84134'], ['82%', '65%']],
                            id: 'ear_pic1',
                            type: 'image',
                            clip: 'rect(154.015625px 675px 549px 433.234375px)',
                            fill: ['rgba(0,0,0,0)', 'images/N6_Hero_Hybrid.jpg', '0px', '0px']
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
                            "eid721",
                            "scaleX",
                            3000,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0.5058',
                            '0'
                        ],
                        [
                            "eid725",
                            "scaleX",
                            4000,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0',
                            '0.51'
                        ],
                        [
                            "eid734",
                            "scaleX",
                            6750,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0.51',
                            '0'
                        ],
                        [
                            "eid735",
                            "scaleX",
                            7750,
                            1000,
                            "easeInSine",
                            "${ear_pic2}",
                            '0',
                            '0.51'
                        ],
                        [
                            "eid719",
                            "scaleX",
                            3000,
                            1000,
                            "easeInSine",
                            "${ear_pic1}",
                            '0.88891',
                            '0'
                        ],
                        [
                            "eid736",
                            "scaleX",
                            7750,
                            1000,
                            "easeInSine",
                            "${ear_pic1}",
                            '0',
                            '0.89'
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385px', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'topographer_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/topographer%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['0px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
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
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "width",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
                        ],
                        [
                            "eid759",
                            "height",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            rect: ['600px', '78px', '412px', '412px', 'auto', 'auto'],
                            id: 'topo_pic2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Ovac-thumbnail.jpg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'topo_img1',
                            rect: ['601', '79', '412', '412', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '412px', '412px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], [], [], ['0.57973', '0.57973']],
                                filter: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1.1565104166667, 0.986328125, 0, 0.14772135416667, 0.1447265625, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'topo_pic1',
                                type: 'image',
                                rect: ['-48px', '-128px', '555px', '639px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/e300-new.png', '0px', '0px']
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
                            "eid767",
                            "scaleX",
                            3000,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '1',
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
                            '1'
                        ],
                        [
                            "eid770",
                            "scaleX",
                            6750,
                            1059,
                            "easeInSine",
                            "${topo_pic2}",
                            '1',
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
                            '1'
                        ],
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
                            type: 'image',
                            id: 'product5',
                            rect: ['-299px', '-224px', '736px', '552px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1876', '0.1876']],
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
                            rect: ['0px', '0px', '160px', '120px', 'auto', 'auto'],
                            id: 'product5_shape2',
                            type: 'image',
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385px', '101px', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'product5_details',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/product5%20details.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['0px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.91', '0.91']],
                                type: 'image',
                                id: 'lc1150_lg',
                                rect: ['496px', '-46px', '600px', '450px', 'auto', 'auto'],
                                clip: 'rect(77.09375px 488.3515625px 351.3671875px 94.296875px)',
                                fill: ['rgba(0,0,0,0)', 'images/lc1150_lg.jpg', '0px', '0px']
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
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "height",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "width",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
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
                            transform: [[], [], [], ['0.27078', '0.27079']],
                            id: 'smartbox',
                            type: 'image',
                            rect: ['-224px', '-221px', '613px', '605px', 'auto', 'auto'],
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
                            transform: [[], [], [], ['0.32735', '0.32735']],
                            id: 'smart_shape',
                            type: 'image',
                            rect: ['-159px', '-157px', '474px', '468px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['2px', '54px', '948', '418', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0', '0'], ['100%', '100%']],
                            c: [
                            {
                                type: 'image',
                                id: 'smartbox_detail_real',
                                rect: ['383px', '65px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/smartbox%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'SMARTBOX_MOVE',
                                symbolName: 'SMARTBOX_MOVE',
                                rect: ['-2', '4', null, null, 'auto', 'auto']
                            },
                            {
                                rect: ['383px', '64px', '204px', '235px', 'auto', 'auto'],
                                id: 'folded_page-02',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.79907', '0.79907']],
                                type: 'image',
                                rect: ['399px', '83px', '51px', '45px', 'auto', 'auto'],
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
                        ],
                        [
                            "eid332",
                            "width",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
                        ],
                        [
                            "eid298",
                            "display",
                            4661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
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
                            "eid316",
                            "display",
                            4661,
                            0,
                            "easeInSine",
                            "${folded_page-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            4000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid331",
                            "height",
                            1000,
                            400,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1401,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            transform: [[], [], [], ['0.84', '0.92249']],
                            id: 'smartbox_pic2',
                            type: 'image',
                            rect: ['1003px', '77px', '407px', '364px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mario%2Bmatkovich_daniels_sharps_container.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.84', '1.02686']],
                            filter: [0, 0, 1.194453125, 0.75455729166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1.194453125, 0.75455729166667, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
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
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            id: 'polilight',
                            type: 'image',
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
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
                            transform: [[], [], [], ['0.43152', '0.43152']],
                            id: 'polilight_shape2',
                            type: 'image',
                            rect: ['-76px', '-110px', '268px', '387px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'polilight_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/polilight%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['0px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['1.20822', '0.94674']],
                                type: 'image',
                                id: 'polilight',
                                rect: ['637px', '13px', '355px', '543px', 'auto', 'auto'],
                                clip: 'rect(49.975982666015625px 355px 493.3921813964844px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/forensics_source_rofin_polilight_pl-500_lockhat_tactical.jpg', '0px', '0px']
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
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "width",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
                        ],
                        [
                            "eid759",
                            "height",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            transform: [[], [], [], ['0.33469', '0.33469']],
                            id: 'polilight',
                            type: 'image',
                            rect: ['-105px', '-152px', '315px', '457px', 'auto', 'auto'],
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
                            transform: [[], ['-15'], ['-11', '2'], ['0.30619', '0.30619']],
                            id: 'compumetics_shape',
                            type: 'image',
                            rect: ['-156px', '-75px', '451px', '261px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '1923px', '891px', 'auto', 'auto'],
                            type: 'image',
                            id: 'detail_bg',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/detail%20bg.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['385', '101', '1124', '740', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'compumedics_detail_real',
                                rect: ['0px', '18px', '1115px', '700px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/compumedics%20detail%20real.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'folded_page-02',
                                rect: ['0px', '17px', '204px', '235px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/folded%20page-02.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.8', '0.8']],
                                type: 'image',
                                rect: ['16px', '37px', '51px', '45px', 'auto', 'auto'],
                                id: 'tap_to_start_btn',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/close%20btn.svg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['0.76464', '0.44242']],
                                type: 'image',
                                id: 'polilight',
                                rect: ['606px', '-99px', '355px', '543px', 'auto', 'auto'],
                                clip: 'rect(49.975982666015625px 355px 493.3921813964844px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/xsomte.mth4245_200_200.jpg.pagespeed.ic.No8rGbXqBJ.jpg', '0px', '0px']
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
                            "eid295",
                            "opacity",
                            72,
                            661,
                            "easeInSine",
                            "${detail_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            2000,
                            500,
                            "easeInSine",
                            "${detail_bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "height",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '235px',
                            '363px'
                        ],
                        [
                            "eid335",
                            "height",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '363px',
                            '235px'
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
                            "eid292",
                            "display",
                            0,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            72,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2661,
                            0,
                            "easeInSine",
                            "${detail_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "width",
                            1000,
                            458,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '204px',
                            '315px'
                        ],
                        [
                            "eid336",
                            "width",
                            1458,
                            401,
                            "easeInOutQuad",
                            "${folded_page-02}",
                            '315px',
                            '204px'
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
                                type: 'image',
                                id: 'doctor_no_eyebrow',
                                rect: ['0px', '0px', '44px', '90px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20no%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                transform: [[], ['20'], [0, 0, 0], [1, 1, 1]],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'doctor_eyebrow_right',
                                type: 'image',
                                rect: ['29px', '32px', '7px', '3px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/doctor%20eyebrow.svg', '0px', '0px']
                            },
                            {
                                transform: [[], ['-20'], [0, 0, 0], [1, 1, 1]],
                                id: 'doctor_eyebrow_left',
                                type: 'image',
                                rect: ['8px', '32px', '7px', '3px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("real%20health_edgeActions.js");
})("EDGE-17682068");
