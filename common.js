window.onload = function(){
    var pageFunctionName = "pageObj";
    if (window[pageFunctionName] && window[pageFunctionName].pageStart) {
        window[pageFunctionName].pageStart();
    }
}


var gridData = [
    {
        "devId": 99,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "9BQc",
        "mthdRspns": "이태성",
        "initDt": "2022-06-15",
        "childList": [
            {
                "devDetId": 353,
                "itemNo": "60006463",
                "itemNm": "REINFORCEMENT FLR PNL TUN PNL FRT LH",
                "img": 3141,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 82,
                    "mtrlsNm": "GMW3399M-ST-S-CR590T/340Y-DP-HD60G60G-U",
                    "thick": "0.9"
                },
                "procList": [
                    {
                        "devProcId": 1514,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "etc": "1",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1515,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "1",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1516,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1517,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1518,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI/CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 354,
                "itemNo": "60006464",
                "itemNm": "REINFORCEMENT FLR PNL TUN PNL FRT RH",
                "img": 3142,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 82,
                    "mtrlsNm": "GMW3399M-ST-S-CR590T/340Y-DP-HD60G60G-U",
                    "thick": "0.9"
                },
                "procList": [
                    {
                        "devProcId": 1519,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1520,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1521,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1522,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI/CUT",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 76,
        "devYear": "2022",
        "company": {
            "cmpId": 80,
            "cmpNm": "(주)새한산업",
            "secCd": "S001"
        },
        "car": "MV",
        "mthdRspns": "김병규",
        "initDt": "2022-05-16",
        "childList": [
            {
                "devDetId": 206,
                "itemNo": "66432-DO000",
                "itemNm": "REINF HOOD OTR SIDE LH",
                "img": 2395,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "ANC",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "etc": "아진산업",
                "shelfPrchsReceivingDt": "2022-04-11",
                "procList": [
                    {
                        "devProcId": 812,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 813,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 814,
                        "procCd": "OP20",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 815,
                        "procCd": "OP30",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 816,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 817,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 207,
                "itemNo": "66442-DO000",
                "itemNm": "REINF HOOD OTR SIDE RH",
                "img": 2396,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "ANC",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "etc": "아진산업",
                "shelfPrchsReceivingDt": "2022-04-11",
                "procList": [
                    {
                        "devProcId": 818,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 819,
                        "procCd": "OP20",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 820,
                        "procCd": "OP30",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 821,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 822,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 208,
                "itemNo": "71118-DO000",
                "itemNm": "BRKT-FENDER RR LWR MTG,LH",
                "img": 2397,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 58,
                    "mtrlsNm": "SGAFC590 60/60",
                    "thick": "1.2"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-03-26",
                "shelfPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 823,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 824,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 825,
                        "procCd": "OP20",
                        "procDet": "FL",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 826,
                        "procCd": "OP30",
                        "procDet": "FL",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 827,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 828,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 209,
                "itemNo": "71128-DO000",
                "itemNm": "BRKT-FENDER RR LWR MTG,RH",
                "img": 2398,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 58,
                    "mtrlsNm": "SGAFC590 60/60",
                    "thick": "1.2"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-03-26",
                "shelfPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 829,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 830,
                        "procCd": "OP20",
                        "procDet": "FL",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 831,
                        "procCd": "OP30",
                        "procDet": "FL",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 832,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 833,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 210,
                "itemNo": "71154-DO000",
                "itemNm": "REINF-FR DR HINGE LWR,LH",
                "img": 2399,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 59,
                    "mtrlsNm": "SPFC980Y",
                    "thick": "1.4"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-03-29",
                "procList": [
                    {
                        "devProcId": 834,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 835,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 836,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 837,
                        "procCd": "OP30",
                        "procDet": "FO/FL",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 838,
                        "procCd": "OP40",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 839,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 211,
                "itemNo": "71164-DO000",
                "itemNm": "REINF-FR DR HINGE LWR,RH",
                "img": 2400,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 59,
                    "mtrlsNm": "SPFC980Y",
                    "thick": "1.4"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-03-29",
                "procList": [
                    {
                        "devProcId": 840,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 841,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 842,
                        "procCd": "OP30",
                        "procDet": "FO/FL",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 843,
                        "procCd": "OP40",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 844,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 212,
                "itemNo": "71158-DO000",
                "itemNm": "BRKT-FENDER MTG UPR,LH",
                "img": 2401,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-12",
                "procList": [
                    {
                        "devProcId": 845,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 846,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 847,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 848,
                        "procCd": "OP40",
                        "procDet": "CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 849,
                        "procCd": "OP50",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 213,
                "itemNo": "71168-DO000",
                "itemNm": "BRKT-FENDER MTG UPR,RH",
                "img": 2402,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-12",
                "procList": [
                    {
                        "devProcId": 850,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 851,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 852,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 853,
                        "procCd": "OP40",
                        "procDet": "CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 854,
                        "procCd": "OP50",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 214,
                "itemNo": "71179-DO000",
                "itemNm": "REINF-FR PLR OTR UPR NO.2,LH",
                "img": 2407,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.8"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-08",
                "procList": [
                    {
                        "devProcId": 855,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 856,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 857,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 858,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 215,
                "itemNo": "71189-DO000",
                "itemNm": "REINF-FR PLR OTR UPR NO.2,RH",
                "img": 2408,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.8"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-07",
                "procList": [
                    {
                        "devProcId": 859,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 860,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 861,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 216,
                "itemNo": "71336-DO000",
                "itemNm": "BRKT-RR DR LWR MTG,LH",
                "img": 2409,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-05",
                "shelfPrchsReceivingDt": "2022-04-01",
                "procList": [
                    {
                        "devProcId": 862,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 863,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 864,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 865,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 866,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 217,
                "itemNo": "71346-DO000",
                "itemNm": "BRKT-RR DR LWR MTG,RH",
                "img": 2410,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-05",
                "shelfPrchsReceivingDt": "2022-04-01",
                "procList": [
                    {
                        "devProcId": 867,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 868,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 869,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 870,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 218,
                "itemNo": "71438-DO000",
                "itemNm": "EXTN-ROOF SIDE CTR,LH",
                "img": 2413,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 871,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 872,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 873,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 874,
                        "procCd": "OP40",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 219,
                "itemNo": "71448-DO000",
                "itemNm": "EXTN-ROOF SIDE CTR,RH",
                "img": 2414,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "etc": "진명정밀",
                "mtrlsPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 875,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 876,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 877,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 878,
                        "procCd": "OP40",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 89,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BL7m",
        "dstn": "멕시코",
        "mthdRspns": "임종용",
        "initDt": "2022-04-30",
        "childList": [
            {
                "devDetId": 295,
                "itemNo": "64634-H9010",
                "itemNm": "REINF-FR SIDE MBR INR LH",
                "img": 2568,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 53,
                    "mtrlsNm": "SPRC440",
                    "thick": "1.6"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "646C2-AW000 변경",
                "mtrlsPrchsReceivingDt": "2022-03-17",
                "shelfPrchsReceivingDt": "2022-03-22",
                "procList": [
                    {
                        "devProcId": 1225,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "etc": "복열",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1226,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1227,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1228,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1229,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "150",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 296,
                "itemNo": "64644-H9010",
                "itemNm": "REINF-FR SIDE MBR INR RH",
                "img": 2569,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 53,
                    "mtrlsNm": "SPRC440",
                    "thick": "1.6"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "646D2-AW000 변경",
                "mtrlsPrchsReceivingDt": "2022-03-17",
                "shelfPrchsReceivingDt": "2022-03-22",
                "procList": [
                    {
                        "devProcId": 1230,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1231,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1232,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1233,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "150",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 297,
                "itemNo": "64338-F9000",
                "itemNm": "PNL-DUST COVER",
                "img": 2570,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 75,
                    "mtrlsNm": "SPCD",
                    "thick": "1.1"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-04-01",
                "shelfPrchsReceivingDt": "2022-04-13",
                "procList": [
                    {
                        "devProcId": 1234,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1235,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "press": "250",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1236,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1237,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1238,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1239,
                        "procCd": "OP50",
                        "procDet": "C.PI/C.MARK",
                        "press": "150",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 298,
                "itemNo": "64654-BC000",
                "itemNm": "BRKT ENGINE MTG FR",
                "img": 2571,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 7,
                "mtrls": {
                    "mtrlsId": 76,
                    "mtrlsNm": "SAPH440",
                    "thick": "1.8"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-28",
                "shelfPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 1240,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "etc": "복열",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1241,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "press": "200",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1242,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1243,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1244,
                        "procCd": "OP40",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 1245,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1246,
                        "procCd": "OP60",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 299,
                "itemNo": "64664-H9010",
                "itemNm": "BRKT ENGINE MTG RR",
                "img": 2572,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 76,
                    "mtrlsNm": "SAPH440",
                    "thick": "1.8"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-29",
                "shelfPrchsReceivingDt": "2022-04-05",
                "procList": [
                    {
                        "devProcId": 1247,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "press": "200",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1248,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1249,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "DESIGN"
                    },
                    {
                        "devProcId": 1250,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1251,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1252,
                        "procCd": "OP60",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 300,
                "itemNo": "65576-F9000",
                "itemNm": "EXTN RR FLR SD MBR FR LH",
                "img": 2573,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 7,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-21",
                "shelfPrchsReceivingDt": "2022-03-30",
                "procList": [
                    {
                        "devProcId": 1253,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "etc": "CUT(돌려따기)",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1254,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1255,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1256,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1257,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1258,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1259,
                        "procCd": "OP60",
                        "procDet": "PI/C.CUT",
                        "press": "300",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 301,
                "itemNo": "65586-F9000",
                "itemNm": "EXTN RR FLR SD MBR FR RH",
                "img": 2574,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-21",
                "shelfPrchsReceivingDt": "2022-03-30",
                "procList": [
                    {
                        "devProcId": 1260,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1261,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1262,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1263,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1264,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1265,
                        "procCd": "OP60",
                        "procDet": "PI/C.CUT",
                        "press": "300",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 306,
                "itemNo": "64678-AW000",
                "itemNm": "REINF-FR SIDE RR UPR.LH",
                "img": 2664,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 42,
                    "mtrlsNm": "SGACC 60/60",
                    "thick": "0.8"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-30",
                "shelfPrchsReceivingDt": "2022-04-12",
                "procList": [
                    {
                        "devProcId": 1278,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1279,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1280,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1281,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1282,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "150",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1283,
                        "procCd": "OP60",
                        "procDet": "C.PI/CUT",
                        "press": "150",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 307,
                "itemNo": "64688-AW000",
                "itemNm": "REINF-FR SIDE RR UPR.RH",
                "img": 2665,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 42,
                    "mtrlsNm": "SGACC 60/60",
                    "thick": "0.8"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-30",
                "shelfPrchsReceivingDt": "2022-04-07",
                "procList": [
                    {
                        "devProcId": 1284,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 1285,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "150",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 1286,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "press": "150",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 1287,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 1288,
                        "procCd": "OP50",
                        "procDet": "PI/CUT",
                        "press": "150",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 352,
                "itemNo": "64574-H9010",
                "itemNm": "REINF FR T/M MTG UPR",
                "img": 3095,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.4"
                },
                "etc": "초도:8월",
                "procList": [
                    {
                        "devProcId": 1509,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "셔틀",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1510,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1511,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1512,
                        "procCd": "OP40",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1513,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 85,
        "devYear": "2022",
        "company": {
            "cmpId": 99,
            "cmpNm": "(주)엠에스 오토텍",
            "secCd": "S001"
        },
        "car": "AI3(SUV)",
        "dstn": "대주인디아",
        "mthdRspns": "서준영",
        "initDt": "2022-04-30",
        "childList": [
            {
                "devDetId": 262,
                "itemNo": "645C8-K6700",
                "itemNm": "GUESST-FENDER APRON UPR RR LH",
                "img": 2472,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "0.8"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-14",
                "shelfPrchsReceivingDt": "2022-04-01",
                "procList": [
                    {
                        "devProcId": 1076,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1077,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "150",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1078,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1079,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "110",
                        "status": "LOWER"
                    }
                ]
            },
            {
                "devDetId": 263,
                "itemNo": "645D8-K6700",
                "itemNm": "GUESST-FENDER APRON UPR RR RH",
                "img": 2473,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "0.8"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-14",
                "shelfPrchsReceivingDt": "2022-04-01",
                "procList": [
                    {
                        "devProcId": 1080,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "150",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1081,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1082,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "110",
                        "status": "LOWER"
                    }
                ]
            },
            {
                "devDetId": 264,
                "itemNo": "64518-K6700",
                "itemNm": "REINF-FENDER APRON FR LWR LH",
                "img": 2474,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.7"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-10",
                "shelfPrchsReceivingDt": "2022-03-16",
                "procList": [
                    {
                        "devProcId": 1083,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1084,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1085,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1086,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LOWER"
                    },
                    {
                        "devProcId": 1087,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1088,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 265,
                "itemNo": "64528-K6700",
                "itemNm": "REINF-FENDER APRON FR LWR RH",
                "img": 2475,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "1.0"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-10",
                "shelfPrchsReceivingDt": "2022-03-16",
                "procList": [
                    {
                        "devProcId": 1089,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1090,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1091,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "UPPER"
                    },
                    {
                        "devProcId": 1092,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LOWER"
                    },
                    {
                        "devProcId": 1093,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1094,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "ASMB1"
                    }
                ]
            },
            {
                "devDetId": 266,
                "itemNo": "64714-K6700",
                "itemNm": "BRKT ENGINE MTG",
                "img": 2476,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 67,
                    "mtrlsNm": "SAPH440-P",
                    "thick": "1.8"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-16",
                "shelfPrchsReceivingDt": "2022-03-25",
                "procList": [
                    {
                        "devProcId": 1095,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1096,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1097,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "200",
                        "status": "LOWER"
                    },
                    {
                        "devProcId": 1098,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LOWER"
                    },
                    {
                        "devProcId": 1099,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LOWER"
                    },
                    {
                        "devProcId": 1100,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LOWER"
                    }
                ]
            },
            {
                "devDetId": 267,
                "itemNo": "71134-K6700",
                "itemNm": "REINF-FR DR HINGE MTG UPR,LH",
                "img": 2477,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "와이에스정공",
                "mtrlsPrchsReceivingDt": "2022-03-19",
                "shelfPrchsReceivingDt": "2022-04-04",
                "procList": [
                    {
                        "devProcId": 1101,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1102,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1103,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1104,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 268,
                "itemNo": "71144-K6700",
                "itemNm": "REINF-FR DR HINGE MTG UPR,RH",
                "img": 2478,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1.4"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "와이에스정공",
                "mtrlsPrchsReceivingDt": "2022-03-19",
                "shelfPrchsReceivingDt": "2022-04-04",
                "procList": [
                    {
                        "devProcId": 1105,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1106,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1107,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1108,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 269,
                "itemNo": "71672-K6700",
                "itemNm": "BRKT-RR SHOCK ABSORBER MTG LH",
                "img": 2479,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "2.3"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "캠피아",
                "mtrlsPrchsReceivingDt": "2022-03-08",
                "shelfPrchsReceivingDt": "2022-03-10",
                "procList": [
                    {
                        "devProcId": 1109,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1110,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1111,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1112,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1113,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 270,
                "itemNo": "71682-K6700",
                "itemNm": "BRKT-RR SHOCK ABSORBER MTG RH",
                "img": 2480,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "2.3"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "캠피아",
                "mtrlsPrchsReceivingDt": "2022-03-08",
                "shelfPrchsReceivingDt": "2022-03-10",
                "procList": [
                    {
                        "devProcId": 1114,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1115,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1116,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1117,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1118,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 81,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "AI3(SUV)",
        "dstn": "첸나이",
        "mthdRspns": "임종용",
        "initDt": "2022-04-30",
        "childList": [
            {
                "devDetId": 236,
                "itemNo": "69122-K6700",
                "itemNm": "MEMBER-RR TRANSVERSE",
                "img": 2425,
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.65"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우영테크",
                "etc": "TOSS 사용",
                "mtrlsPrchsReceivingDt": "2022-03-28",
                "shelfPrchsReceivingDt": "2022-03-29",
                "procList": [
                    {
                        "devProcId": 947,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 948,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 949,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 950,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 951,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 237,
                "itemNo": "69138-K6700",
                "itemNm": "EXTN-RR TRANSVERSE,LH",
                "img": 2426,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.65"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "etc": "TOSS 사용",
                "mtrlsPrchsReceivingDt": "2022-03-03",
                "shelfPrchsReceivingDt": "2022-03-11",
                "procList": [
                    {
                        "devProcId": 952,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 953,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 954,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 955,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 996,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "ASMB1"
                    }
                ]
            },
            {
                "devDetId": 238,
                "itemNo": "69148-K6700",
                "itemNm": "EXTN-RR TRANSVERSE,RH",
                "img": 2427,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.65"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "etc": "TOSS 사용",
                "mtrlsPrchsReceivingDt": "2022-03-04",
                "shelfPrchsReceivingDt": "2022-03-11",
                "procList": [
                    {
                        "devProcId": 956,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 957,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 958,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 959,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 997,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "ASMB1"
                    }
                ]
            }
        ]
    },
    {
        "devId": 69,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "NE-RT",
        "mthdRspns": "이동혁 과장 / 임종용 대리",
        "devRspns": "정지용",
        "initDt": "2022-04-30",
        "childList": [
            {
                "devDetId": 190,
                "itemNo": "655Q8-LI000",
                "itemNm": "REINF-RR FLR FR CROSS SD LH",
                "img": 2190,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 53,
                    "mtrlsNm": "SPRC440",
                    "thick": "1.0"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "etc": "2150/-467/65",
                "mtrlsPrchsReceivingDt": "2022-02-11",
                "shelfPrchsReceivingDt": "2022-02-25",
                "procList": [
                    {
                        "devProcId": 741,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "400*150(90KN)",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 742,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 743,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 744,
                        "procCd": "OP40",
                        "procDet": "PI/CUT",
                        "press": "150",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 191,
                "itemNo": "655R8-LI000",
                "itemNm": "REINF-RR FLR FR CROSS SD RH",
                "img": 2191,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 53,
                    "mtrlsNm": "SPRC440",
                    "thick": "1.0"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "etc": "2150/-220/65",
                "mtrlsPrchsReceivingDt": "2022-02-15",
                "shelfPrchsReceivingDt": "2022-02-25",
                "procList": [
                    {
                        "devProcId": 745,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 746,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 747,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 748,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "150",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 194,
                "itemNo": "65596-LI000",
                "itemNm": "BRKT BATTERY MTG RR",
                "img": 2194,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "2"
                },
                "blkProc": "BLK",
                "designRspns": "권민재",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "etc": "2800/-290/335",
                "mtrlsPrchsReceivingDt": "2022-02-17",
                "shelfPrchsReceivingDt": "2022-02-25",
                "procList": [
                    {
                        "devProcId": 757,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 758,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "150",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 759,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "110",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 760,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "110",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 761,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "110",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 192,
                "itemNo": "65598-LI000",
                "itemNm": "SUPPORT BATT MTG RR",
                "img": 2192,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "2.0"
                },
                "blkProc": "BLK",
                "designRspns": "권민재",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "etc": "2790/-418/335",
                "mtrlsPrchsReceivingDt": "2022-02-18",
                "shelfPrchsReceivingDt": "2022-02-24",
                "procList": [
                    {
                        "devProcId": 749,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 750,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "150",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 751,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "110",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 752,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "110",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 193,
                "itemNo": "65796-LI000",
                "itemNm": "REINF-BATTERY MTG",
                "img": 2193,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.0"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "etc": "2930/-357/310",
                "mtrlsPrchsReceivingDt": "2022-02-19",
                "shelfPrchsReceivingDt": "2022-02-24",
                "procList": [
                    {
                        "devProcId": 753,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 754,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "300",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 755,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 756,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "250",
                        "status": "TRYOUT"
                    }
                ]
            }
        ]
    },
    {
        "devId": 101,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "테스트 차종3",
        "dstn": "테스트 양산처",
        "mthdRspns": "테스트 담당자",
        "devRspns": "테스트 담당자",
        "initDt": "2022-04-22",
        "childList": [
            {
                "devDetId": 359,
                "itemNo": "test",
                "itemNm": "test",
                "img": 3151,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1558,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 360,
                "itemNo": "1",
                "itemNm": "1",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1559,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "RELEASE"
                    }
                ]
            },
            {
                "devDetId": 361,
                "itemNo": "2",
                "itemNm": "2",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1560,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "RELEASE"
                    }
                ]
            },
            {
                "devDetId": 362,
                "itemNo": "3",
                "itemNm": "3",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1561,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 363,
                "itemNo": "4",
                "itemNm": "4",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1562,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 364,
                "itemNo": "5",
                "itemNm": "5",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1563,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 365,
                "itemNo": "6",
                "itemNm": "6",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1564,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 366,
                "itemNo": "7",
                "itemNm": "7",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1565,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 367,
                "itemNo": "8",
                "itemNm": "8",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1566,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 368,
                "itemNo": "9",
                "itemNm": "9",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1567,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 369,
                "itemNo": "10",
                "itemNm": "10",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1568,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 370,
                "itemNo": "11",
                "itemNm": "11",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1569,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 371,
                "itemNo": "12",
                "itemNm": "12",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1570,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 372,
                "itemNo": "13",
                "itemNm": "13",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1571,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 373,
                "itemNo": "14",
                "itemNm": "14",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1572,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 374,
                "itemNo": "15",
                "itemNm": "15",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1573,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 375,
                "itemNo": "16",
                "itemNm": "16",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1574,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 376,
                "itemNo": "17",
                "itemNm": "17",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1575,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 377,
                "itemNo": "18",
                "itemNm": "18",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1576,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 378,
                "itemNo": "19",
                "itemNm": "19",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1577,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "RECEIVING"
                    }
                ]
            },
            {
                "devDetId": 379,
                "itemNo": "20",
                "itemNm": "20",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 83,
                    "mtrlsNm": "테스트 재질",
                    "thick": "2"
                },
                "etc": "1",
                "procList": [
                    {
                        "devProcId": 1578,
                        "procCd": "OP05",
                        "procDet": "1",
                        "press": "1",
                        "etc": "1",
                        "status": "TRYOUT"
                    }
                ]
            }
        ]
    },
    {
        "devId": 72,
        "devYear": "2022",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BL7r(CROSS)",
        "mthdRspns": "이경원 과장",
        "devRspns": "정지용",
        "initDt": "2022-04-15",
        "childList": [
            {
                "devDetId": 201,
                "itemNo": "69138-BA500",
                "itemNm": "EXTN-RR TRANSVERSE LH",
                "img": 2232,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 9,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "blkProc": "BLK",
                "designRspns": "김희경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mtrlsPrchsReceivingDt": "2022-03-15",
                "shelfPrchsReceivingDt": "2022-03-10",
                "procList": [
                    {
                        "devProcId": 782,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 783,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 784,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "press": "300",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 785,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "press": "250",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 786,
                        "procCd": "OP40",
                        "procDet": "FL(UP/DN)",
                        "press": "250",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 787,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 788,
                        "procCd": "OP60",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 789,
                        "procCd": "OP70",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 790,
                        "procCd": "OP80",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "CASTING"
                    }
                ]
            },
            {
                "devDetId": 202,
                "itemNo": "69148-BA500",
                "itemNm": "EXTN-RR TRANSVERSE RH",
                "img": 2233,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 8,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "김희경",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "mtrlsPrchsReceivingDt": "2022-03-15",
                "shelfPrchsReceivingDt": "2022-03-10",
                "procList": [
                    {
                        "devProcId": 791,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 792,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 793,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 794,
                        "procCd": "OP40",
                        "procDet": "FL(UP/DN)",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 795,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 796,
                        "procCd": "OP60",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 797,
                        "procCd": "OP70",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "CASTING"
                    },
                    {
                        "devProcId": 798,
                        "procCd": "OP80",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "CASTING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 70,
        "devYear": "2022",
        "company": {
            "cmpId": 80,
            "cmpNm": "(주)새한산업",
            "secCd": "S001"
        },
        "car": "TAM(BEV)",
        "mthdRspns": "김욱범",
        "initDt": "2022-04-15",
        "childList": [
            {
                "devDetId": 195,
                "itemNo": "713D8-E2500",
                "itemNm": "REINF SIDE SILL RR RH",
                "img": 2204,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 56,
                    "mtrlsNm": "SGAFC590",
                    "thick": "1.4"
                },
                "blkProc": "BLK",
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "etc": "지성테크",
                "mtrlsPrchsReceivingDt": "2022-02-08",
                "shelfPrchsReceivingDt": "2022-02-10",
                "procList": [
                    {
                        "devProcId": 762,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "160",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 763,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 764,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "press": "150",
                        "status": "LAPPING"
                    }
                ]
            },
            {
                "devDetId": 196,
                "itemNo": "71324-E2500",
                "itemNm": "SUPPORT SIDE SIL OTR FR RH",
                "img": 2205,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 56,
                    "mtrlsNm": "SGAFC590",
                    "thick": "1"
                },
                "blkProc": "PI/BLK",
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "지성테크",
                "mtrlsPrchsReceivingDt": "2022-01-28",
                "shelfPrchsReceivingDt": "2022-02-08",
                "procList": [
                    {
                        "devProcId": 765,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "160",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 766,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 767,
                        "procCd": "OP20",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 768,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 769,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "160",
                        "status": "LAPPING"
                    }
                ]
            },
            {
                "devDetId": 197,
                "itemNo": "71386-E2500",
                "itemNm": "REINF SIDE SILL OTR RR RH",
                "img": 2206,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 56,
                    "mtrlsNm": "SGAFC590",
                    "thick": "1"
                },
                "blkProc": "PI/BLK",
                "designRspns": "ANC",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2022-03-21",
                "shelfPrchsReceivingDt": "2022-03-25",
                "procList": [
                    {
                        "devProcId": 770,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 771,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 772,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 773,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 774,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LAPPING"
                    }
                ]
            },
            {
                "devDetId": 198,
                "itemNo": "71388-E2500",
                "itemNm": "REINF SIDE SILL OTR RH",
                "img": 2210,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 56,
                    "mtrlsNm": "SGAFC590",
                    "thick": "1.2"
                },
                "blkProc": "BLK",
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2022-02-28",
                "shelfPrchsReceivingDt": "2022-03-10",
                "procList": [
                    {
                        "devProcId": 775,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 776,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 777,
                        "procCd": "OP20",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 778,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "ASMB1"
                    },
                    {
                        "devProcId": 779,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LAPPING"
                    }
                ]
            },
            {
                "devDetId": 199,
                "itemNo": "71358/68-E2500",
                "itemNm": "EXTN SIDE SILL OTR FR L/RH",
                "img": 2208,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "1"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "etc": "기존금형 동일제작",
                "mtrlsPrchsReceivingDt": "2022-02-15",
                "shelfPrchsReceivingDt": "2022-02-25",
                "procList": [
                    {
                        "devProcId": 780,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "etc": "부분신작(D/H:850)",
                        "status": "LAPPING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 71,
        "devYear": "2022",
        "company": {
            "cmpId": 80,
            "cmpNm": "(주)새한산업",
            "secCd": "S001"
        },
        "car": "KY(RDE)",
        "mthdRspns": "강지신",
        "initDt": "2022-01-31",
        "childList": [
            {
                "devDetId": 200,
                "itemNo": "65614-DY030",
                "itemNm": "MEMBER-RR FLOOR SIDE EXTH,LH",
                "img": 2228,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 57,
                    "mtrlsNm": "SPFC590",
                    "thick": "1"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2022-01-04",
                "shelfPrchsReceivingDt": "2022-01-07",
                "procList": [
                    {
                        "devProcId": 781,
                        "procCd": "OP50",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "LAPPING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 66,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "SX2",
        "mthdRspns": "이경원 과장",
        "initDt": "2022-03-15",
        "childList": [
            {
                "devDetId": 153,
                "itemNo": "64932/42-BE000",
                "itemNm": "CRASH BOX-FR BPR BEAM INR L/RH",
                "img": 2138,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.6"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 597,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 598,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 599,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 600,
                        "procCd": "OP30",
                        "procDet": "PI/SEP",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 154,
                "itemNo": "64932/42-BE200",
                "itemNm": "CRASH BOX-FR BPR BEAM INR L/RH",
                "img": 2139,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.4"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 601,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 602,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 603,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 604,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 605,
                        "procCd": "OP40",
                        "procDet": "SEP",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 155,
                "itemNo": "64934-BE000",
                "itemNm": "CRASH BOX-FR BPR BEAM OTR LH",
                "img": 2140,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.6"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-20",
                "procList": [
                    {
                        "devProcId": 606,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 607,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 608,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 609,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 156,
                "itemNo": "64944-BE000",
                "itemNm": "CRASH BOX-FR BPR BEAM OTR RH",
                "img": 2141,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.6"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-20",
                "procList": [
                    {
                        "devProcId": 610,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 611,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 612,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 613,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 157,
                "itemNo": "64936-BE000",
                "itemNm": "PLATE-FR BUMPER CRASH BOX LH",
                "img": 2142,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "2.3"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-08",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 614,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 615,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 616,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 617,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 158,
                "itemNo": "64946-BE000",
                "itemNm": "PLATE-FR BUMPER CRASH BOX RH",
                "img": 2143,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "2.3"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-10",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 618,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 619,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 620,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 621,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 159,
                "itemNo": "64936-BE250",
                "itemNm": "PLATE-FR BUMPER CRASH BOX LH",
                "img": 2144,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "2.3"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-08",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 622,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 160,
                "itemNo": "64946-BE250",
                "itemNm": "PLATE-FR BUMPER CRASH BOX RH",
                "img": 2145,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 1,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "2.3"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-10",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 623,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 161,
                "itemNo": "64934-BE200",
                "itemNm": "CRASH BOX-FR BPR BEAM OTR LH",
                "img": 2146,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.4"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-21",
                "procList": [
                    {
                        "devProcId": 624,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 625,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 626,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 627,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 162,
                "itemNo": "64944-BE200",
                "itemNm": "CRASH BOX-FR BPR BEAM OTR RH",
                "img": 2147,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 48,
                    "mtrlsNm": "SPFC780DP",
                    "thick": "1.4"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "mtrlsPrchsReceivingDt": "2021-12-02",
                "shelfPrchsReceivingDt": "2021-12-07",
                "procList": [
                    {
                        "devProcId": 628,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 629,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 630,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 631,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            }
        ]
    },
    {
        "devId": 68,
        "devYear": "2021",
        "company": {
            "cmpId": 100,
            "cmpNm": "삼영공업(주)",
            "secCd": "S001"
        },
        "car": "SX2",
        "mthdRspns": "박철우",
        "devRspns": "박철우",
        "initDt": "2022-03-01",
        "childList": [
            {
                "devDetId": 189,
                "itemNo": "65198-BE000",
                "itemNm": "REINF-TUNNEL CTR",
                "img": 2176,
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 52,
                    "mtrlsNm": "SGACEN",
                    "thick": "1.2"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "etc": "",
                "procList": [
                    {
                        "devProcId": 737,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 738,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 739,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 740,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "300",
                        "etc": "STEEL 금형",
                        "status": "LAPPING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 94,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BN7i(LHD)",
        "dstn": "인도(SHI/SSP)",
        "mthdRspns": "임종용",
        "initDt": "2022-01-15",
        "childList": [
            {
                "devDetId": 325,
                "itemNo": "64678-AY000",
                "itemNm": "REINF-FR SIDE RR UPR LH",
                "img": 2946,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 43,
                    "mtrlsNm": "SPCC",
                    "thick": "0.8"
                },
                "procList": [
                    {
                        "devProcId": 1367,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1368,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1369,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "press": "150",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1370,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "150",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1371,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "150",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1372,
                        "procCd": "OP60",
                        "procDet": "C.PI/CUT",
                        "press": "150",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 67,
        "devYear": "2021",
        "company": {
            "cmpId": 80,
            "cmpNm": "(주)새한산업",
            "secCd": "S001"
        },
        "car": "CE",
        "dstn": "아진산업",
        "mthdRspns": "김병규 과장",
        "initDt": "2022-01-07",
        "childList": [
            {
                "devDetId": 315,
                "itemNo": "66425-KL000",
                "itemNm": "RAIL HOOD OTR",
                "img": 2713,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "김희경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1322,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1323,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "500",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1324,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1325,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1326,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1327,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 316,
                "itemNo": "66429-KL000",
                "itemNm": "RAIL HOOD CTR",
                "img": 2714,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우영테크",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1328,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1329,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "500",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1330,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1331,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1332,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1333,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 317,
                "itemNo": "66432-KL000",
                "itemNm": "RAIL HOOD OTR SIDE LH",
                "img": 2715,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1334,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1335,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1336,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1337,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 318,
                "itemNo": "66442-KL000",
                "itemNm": "RAIL HOOD OTR SIDE RH",
                "img": 2716,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1338,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1339,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1340,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 319,
                "itemNo": "66452-KL000",
                "itemNm": "BRKT HOOD OTR SUPPORT LH",
                "img": 2717,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1341,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1342,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1343,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1344,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 320,
                "itemNo": "66462-KL000",
                "itemNm": "BRKT HOOD OTR SUPPORT RH",
                "img": 2718,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 47,
                    "mtrlsNm": "A6014P-T4",
                    "thick": "0.85"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1345,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1346,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1347,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 321,
                "itemNo": "66931-KL000",
                "itemNm": "REINF HINGE HOOD SIDE LH",
                "img": 2719,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 78,
                    "mtrlsNm": "A6451P-T4",
                    "thick": "2"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1348,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1349,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1350,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1351,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 322,
                "itemNo": "66941-KL000",
                "itemNm": "REINF HINGE HOOD SIDE RH",
                "img": 2720,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 3,
                "mtrls": {
                    "mtrlsId": 78,
                    "mtrlsNm": "A6451P-T4",
                    "thick": "2"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "procList": [
                    {
                        "devProcId": 1352,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1353,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1354,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 323,
                "itemNo": "81112-KL000",
                "itemNm": "PLATE HOOD STRIKER BASE",
                "img": 2721,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 54,
                    "mtrlsNm": "SGARC440",
                    "thick": "1.2"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "mnfctRspns": "우성테크",
                "etc": "대아금속",
                "procList": [
                    {
                        "devProcId": 1355,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1356,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1357,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1358,
                        "procCd": "OP30",
                        "procDet": "FL/BURR'G",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1359,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 163,
                "itemNo": "71658-KL000",
                "itemNm": "MEMBER-RR W/HOUSE INR FR LH",
                "img": 2168,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "blkProc": "BLK",
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우영테크",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2021-12-14",
                "shelfPrchsReceivingDt": "2021-12-27",
                "procList": [
                    {
                        "devProcId": 632,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 633,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 634,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 635,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 636,
                        "procCd": "OP40",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 164,
                "itemNo": "71668-KL000",
                "itemNm": "MEMBER-RR W/HOUSE INR FR RH",
                "img": 2169,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우영테크",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2021-12-14",
                "shelfPrchsReceivingDt": "2021-12-27",
                "procList": [
                    {
                        "devProcId": 637,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 638,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "200",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 639,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 640,
                        "procCd": "OP40",
                        "procDet": "PI/CUT",
                        "press": "200",
                        "status": "TRYOUT"
                    }
                ]
            },
            {
                "devDetId": 187,
                "itemNo": "71752-KL000",
                "itemNm": "PNL-RR W/HOUSE INR UPR LH",
                "img": 2170,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.7"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2021-12-20",
                "shelfPrchsReceivingDt": "2021-12-20",
                "procList": [
                    {
                        "devProcId": 729,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 730,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 731,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 732,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LAPPING"
                    }
                ]
            },
            {
                "devDetId": 188,
                "itemNo": "71762-KL000",
                "itemNm": "PNL-RR W/HOUSE INR UPR RH",
                "img": 2171,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.7"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "etc": "아진산업",
                "mtrlsPrchsReceivingDt": "2021-12-20",
                "shelfPrchsReceivingDt": "2021-12-20",
                "procList": [
                    {
                        "devProcId": 733,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "250",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 734,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 735,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 736,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "LAPPING"
                    }
                ]
            }
        ]
    },
    {
        "devId": 97,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BL7r",
        "dstn": "러시아",
        "mthdRspns": "김경익",
        "initDt": "2021-12-15",
        "childList": [
            {
                "devDetId": 344,
                "itemNo": "76251-BA000",
                "itemNm": "REINF-FR DR LATCH LH",
                "img": 2958,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 42,
                    "mtrlsNm": "SGACC 60/60",
                    "thick": "1"
                },
                "procList": [
                    {
                        "devProcId": 1463,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1464,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1465,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1466,
                        "procCd": "OP40",
                        "procDet": "C.CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1467,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 345,
                "itemNo": "76261-BA000",
                "itemNm": "REINF-FR DR LATCH RH",
                "img": 2959,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 42,
                    "mtrlsNm": "SGACC 60/60",
                    "thick": "1"
                },
                "procList": [
                    {
                        "devProcId": 1468,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1469,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1470,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1471,
                        "procCd": "OP40",
                        "procDet": "C.CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1472,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 346,
                "itemNo": "77417/27-BA000",
                "itemNm": "REINF-FR DR FRAME FR L/RH",
                "img": 2960,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 43,
                    "mtrlsNm": "SPCC",
                    "thick": "1.2"
                },
                "procList": [
                    {
                        "devProcId": 1473,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1474,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1475,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1476,
                        "procCd": "OP30",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1477,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI/SEP",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 347,
                "itemNo": "XBA844-41100-BA000",
                "itemNm": "BRKT-CRT SUPPORT DRIVER SIDE",
                "img": 2961,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 73,
                    "mtrlsNm": "SPHC-P",
                    "thick": "1.5"
                },
                "procList": [
                    {
                        "devProcId": 1478,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1479,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1480,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1481,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1482,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 82,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "eLCV",
        "dstn": "멕시코",
        "mthdRspns": "안지용",
        "initDt": "2021-12-04",
        "childList": [
            {
                "devDetId": 243,
                "itemNo": "BEC11118/24",
                "itemNm": "EXT-RKR INR PNL FRT L/RH",
                "img": 2947,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 60,
                    "mtrlsNm": "GMW30320M-ST-S-340LA-HD60G60G-U",
                    "thick": "1"
                },
                "mtrlsPrchsReceivingDt": "2022-03-21",
                "shelfPrchsReceivingDt": "2022-03-18",
                "procList": [
                    {
                        "devProcId": 977,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "ROBOT",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 978,
                        "procCd": "OP20",
                        "procDet": "TR/PI",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 979,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 980,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "TRYOUT"
                    },
                    {
                        "devProcId": 981,
                        "procCd": "OP50",
                        "procDet": "C.PI/C.CUT/MARK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 982,
                        "procCd": "OP60",
                        "procDet": "C.PI/C.CUT/SEP",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 244,
                "itemNo": "BEC62655",
                "itemNm": "PLATE FLR PNL REINF",
                "img": 2948,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 62,
                    "mtrlsNm": "CR980T/700Y-MP-LCE-EG60G60G-U",
                    "thick": "2"
                },
                "etc": "OP05:정화",
                "procList": [
                    {
                        "devProcId": 983,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 984,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "etc": "ROBOT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 985,
                        "procCd": "OP20",
                        "procDet": "RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 986,
                        "procCd": "OP30",
                        "procDet": "PI/SEP",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 245,
                "itemNo": "BEE03783/84",
                "itemNm": "PATCH L/RH",
                "img": 2949,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 62,
                    "mtrlsNm": "CR980T/700Y-MP-LCE-EG60G60G-U",
                    "thick": "1"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "OP05:동명/정화",
                "procList": [
                    {
                        "devProcId": 987,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "300",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 988,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "500T SEMI T/F",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 989,
                        "procCd": "OP20",
                        "procDet": "RE/FL",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 990,
                        "procCd": "OP30",
                        "procDet": "SEP/MARK",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 341,
                "itemNo": "BEE10914",
                "itemNm": "FRT WELD CLEARANCE CLOSEOUT LH",
                "img": 2951,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 60,
                    "mtrlsNm": "GMW30320M-ST-S-340LA-HD60G60G-U",
                    "thick": "1.5"
                },
                "procList": [
                    {
                        "devProcId": 1450,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "SHUTTLE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1451,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1452,
                        "procCd": "OP30",
                        "procDet": "RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1453,
                        "procCd": "OP40",
                        "procDet": "CUT/PI/MARK",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 342,
                "itemNo": "BEE10913",
                "itemNm": "FRT WELD CLEARANCE CLOSEOUT RH",
                "img": 2952,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 60,
                    "mtrlsNm": "GMW30320M-ST-S-340LA-HD60G60G-U",
                    "thick": "1.5"
                },
                "procList": [
                    {
                        "devProcId": 1454,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "SHUTTLE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1455,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1456,
                        "procCd": "OP30",
                        "procDet": "RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1457,
                        "procCd": "OP40",
                        "procDet": "CUT/PI/MARK",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 246,
                "itemNo": "BEE12149",
                "itemNm": "BRACKET GROUND TERMINAL",
                "img": 2950,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 39,
                    "mtrlsNm": "CR3-UNCOATED-U",
                    "thick": "1"
                },
                "etc": "OP05:동명/정화",
                "procList": [
                    {
                        "devProcId": 991,
                        "procCd": "OP05",
                        "procDet": "COMPOUND",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 992,
                        "procCd": "OP10",
                        "procDet": "FO/FL",
                        "press": "500T SEMI T/F",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 993,
                        "procCd": "OP20",
                        "procDet": "PI/MARK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 994,
                        "procCd": "OP30",
                        "procDet": "RE/FL",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 995,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 343,
                "itemNo": "BEE37015/16",
                "itemNm": "RR WELD CLEARANCE CLOSEOUT L/RH",
                "img": 2953,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 60,
                    "mtrlsNm": "GMW30320M-ST-S-340LA-HD60G60G-U",
                    "thick": "1.5"
                },
                "procList": [
                    {
                        "devProcId": 1458,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "press": "500",
                        "etc": "SEMI T/F",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1459,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1460,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1461,
                        "procCd": "OP40",
                        "procDet": "RE/MARK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1462,
                        "procCd": "OP50",
                        "procDet": "PI/CUT/SEP",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 286,
                "itemNo": "BEE38551",
                "itemNm": "SEAT RISER FLR BRKT INR",
                "img": 2954,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 37,
                    "mtrlsNm": "GMW3032M-ST-S-420LA-UNCOATED-U",
                    "thick": "2.5"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1189,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "SHUTTLE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1190,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1191,
                        "procCd": "OP30",
                        "procDet": "FL/RE/MARK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1192,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 273,
                "itemNo": "BEE82335",
                "itemNm": "REINFTORCEMENT DA LWR EXTN PNL",
                "img": 2955,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 68,
                    "mtrlsNm": "CR980T/700Y-MP-HD60G60G-U ",
                    "thick": "0.75"
                },
                "etc": "OP05:동명/",
                "procList": [
                    {
                        "devProcId": 1126,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "400",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1127,
                        "procCd": "OP10",
                        "procDet": "FO",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1128,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1129,
                        "procCd": "OP30",
                        "procDet": "RE/FL",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1130,
                        "procCd": "OP40",
                        "procDet": "PI/MARK'G",
                        "press": "250",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 287,
                "itemNo": "BEE90478",
                "itemNm": "SEAT RISER FLR BRKT INR FRT",
                "img": 2956,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 64,
                    "mtrlsNm": "GMW3032-ST-S-420LA-HD60G60G-U",
                    "thick": "2.5"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "유창테크",
                "procList": [
                    {
                        "devProcId": 1193,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "etc": "SHUTTLE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1194,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1195,
                        "procCd": "OP30",
                        "procDet": "FL/RE/MARK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1196,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 324,
                "itemNo": "BEH13940",
                "itemNm": "BRKT-BSO VERTICAL SUPPORT REAR",
                "img": 2957,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 7,
                "mtrls": {
                    "mtrlsId": 60,
                    "mtrlsNm": "GMW30320M-ST-S-340LA-HD60G60G-U",
                    "thick": "1.5"
                },
                "designRspns": "손영경",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "etc": "OP05:동명/정화",
                "procList": [
                    {
                        "devProcId": 1360,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "300",
                        "etc": "동명/정화",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1361,
                        "procCd": "OP10",
                        "procDet": "FO(UP/DN)",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1362,
                        "procCd": "OP20",
                        "procDet": "FO/FL",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1363,
                        "procCd": "OP30",
                        "procDet": "FO/FL",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1364,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1365,
                        "procCd": "OP50",
                        "procDet": "PI/MARK",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1366,
                        "procCd": "OP60",
                        "procDet": "C.PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 96,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "SP2i(PE)",
        "dstn": "인도(SHAP)",
        "mthdRspns": "임종용",
        "initDt": "2021-10-30",
        "childList": [
            {
                "devDetId": 338,
                "itemNo": "64176-Q6060",
                "itemNm": "REINF RADITOR SUPPORT LWR LH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 81,
                    "mtrlsNm": "SGARC340E",
                    "thick": "0.7"
                },
                "procList": [
                    {
                        "devProcId": 1438,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1439,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1440,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1441,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 339,
                "itemNo": "64186-Q6060",
                "itemNm": "REINF RADITOR SUPPORT LWR RH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 81,
                    "mtrlsNm": "SGARC340E",
                    "thick": "0.7"
                },
                "procList": [
                    {
                        "devProcId": 1442,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1443,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1444,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1445,
                        "procCd": "OP40",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 340,
                "itemNo": "64638-C9000/646D4-Q6500",
                "itemNm": "REINF-FR SIDE MEMBER OTR FR L/RH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 53,
                    "mtrlsNm": "SPRC440",
                    "thick": "0.9"
                },
                "procList": [
                    {
                        "devProcId": 1446,
                        "procCd": "OP05",
                        "procDet": "PI/BLK",
                        "press": "300",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1447,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1448,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1449,
                        "procCd": "OP30",
                        "procDet": "PI/SEP",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 86,
        "devYear": "2021",
        "company": {
            "cmpId": 99,
            "cmpNm": "(주)엠에스 오토텍",
            "secCd": "S001"
        },
        "car": "BN7i",
        "dstn": "대주 인디아",
        "mthdRspns": "서준영",
        "initDt": "2021-10-30",
        "childList": [
            {
                "devDetId": 274,
                "itemNo": "71574-AW000",
                "itemNm": "EXTN-RR COMB/LAMP HSG LH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 7,
                "mtrls": {
                    "mtrlsId": 69,
                    "mtrlsNm": "SGACUD",
                    "thick": "0.65"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "현진테크",
                "procList": [
                    {
                        "devProcId": 1131,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1132,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1133,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1134,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1135,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1136,
                        "procCd": "OP60",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1137,
                        "procCd": "OP70",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 275,
                "itemNo": "71584-AW000",
                "itemNm": "EXTN-RR COMB/LAMP HSG RH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 7,
                "mtrls": {
                    "mtrlsId": 69,
                    "mtrlsNm": "SGACUD",
                    "thick": "0.65"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1138,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1139,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1140,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1141,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1142,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1143,
                        "procCd": "OP60",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1144,
                        "procCd": "OP70",
                        "procDet": "C.CUT",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 276,
                "itemNo": "71576-AY900",
                "itemNm": "PNL-RR COMBNATION LAMP HSG LH",
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 70,
                    "mtrlsNm": "SGACUD-E P60/60",
                    "thick": "0.7"
                },
                "designRspns": "ANC",
                "pgRspns": "좋은솔루션",
                "lappingRspns": "1팀",
                "mnfctRspns": "사내",
                "procList": [
                    {
                        "devProcId": 1145,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1146,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1147,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1148,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1149,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1150,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI/C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 277,
                "itemNo": "71586-AY900",
                "itemNm": "PNL-RR COMBNATION LAMP HSG RH",
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 70,
                    "mtrlsNm": "SGACUD-E P60/60",
                    "thick": "0.7"
                },
                "designRspns": "ANC",
                "pgRspns": "좋은솔루션",
                "lappingRspns": "2팀",
                "mnfctRspns": "우영테크",
                "procList": [
                    {
                        "devProcId": 1151,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1152,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1153,
                        "procCd": "OP30",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1154,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1155,
                        "procCd": "OP50",
                        "procDet": "PI/C.PI/C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 278,
                "itemNo": "71712-AY900",
                "itemNm": "PNL-PACKAGE TRAY SIDE FR LH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.7"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "영테크",
                "procList": [
                    {
                        "devProcId": 1156,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "LAPPING"
                    },
                    {
                        "devProcId": 1157,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1158,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1159,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1160,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 279,
                "itemNo": "71722-AY900",
                "itemNm": "PNL-PACKAGE TRAY SIDE FR RH",
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.7"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "2팀",
                "mnfctRspns": "영테크",
                "procList": [
                    {
                        "devProcId": 1161,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1162,
                        "procCd": "OP20",
                        "procDet": "FL/RE",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1163,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1164,
                        "procCd": "OP40",
                        "procDet": "PI/C.PI",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 84,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BN7i",
        "dstn": "인도(SSP)",
        "mthdRspns": "임종용",
        "initDt": "2021-10-15",
        "childList": [
            {
                "devDetId": 326,
                "itemNo": "64532-AY900",
                "itemNm": "COVER-SHOCK ABSORBER HSG LH",
                "img": 2790,
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 79,
                    "mtrlsNm": "SAPH370-P",
                    "thick": "2.8"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1374,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1375,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1376,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1377,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1378,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1379,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 327,
                "itemNo": "64542-AY900",
                "itemNm": "COVER-SHOCK ABSORBER HSG RH",
                "img": 2791,
                "sec1": "LP",
                "sec2": "CASTING",
                "numSet": 5,
                "mtrls": {
                    "mtrlsId": 79,
                    "mtrlsNm": "SAPH370-P",
                    "thick": "2.8"
                },
                "designRspns": "김희경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1380,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1381,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1382,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1383,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1384,
                        "procCd": "OP50",
                        "procDet": "PI/C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 255,
                "itemNo": "64678-AY900",
                "itemNm": "REINF-FR SIDE RR UPR LH",
                "img": 2792,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 43,
                    "mtrlsNm": "SPCC",
                    "thick": "0.8"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1038,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1039,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1040,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1041,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1042,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1043,
                        "procCd": "OP60",
                        "procDet": "C.PI/CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 256,
                "itemNo": "64688-AY900",
                "itemNm": "REINF-FR SIDE RR UPR RH",
                "img": 2793,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 43,
                    "mtrlsNm": "SPCC",
                    "thick": "0.8"
                },
                "designRspns": "권민재",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "우성테크",
                "procList": [
                    {
                        "devProcId": 1044,
                        "procCd": "OP10",
                        "procDet": "DR",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1045,
                        "procCd": "OP20",
                        "procDet": "TR",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1046,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1047,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1048,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1049,
                        "procCd": "OP60",
                        "procDet": "CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 328,
                "itemNo": "71254/64-AY900",
                "itemNm": "EXTN-FR PILLER INR LWR SIDE L/RH",
                "img": 2794,
                "sec1": "LP",
                "sec2": "STEEL",
                "numSet": 6,
                "mtrls": {
                    "mtrlsId": 46,
                    "mtrlsNm": "SPRC340",
                    "thick": "0.9"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "1팀",
                "mnfctRspns": "현진테크",
                "mtrlsPrchsReceivingDt": "2022-03-31",
                "shelfPrchsReceivingDt": "2022-03-29",
                "procList": [
                    {
                        "devProcId": 1385,
                        "procCd": "OP10",
                        "procDet": "DR-1ST",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1386,
                        "procCd": "OP20",
                        "procDet": "DR-2ND",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1387,
                        "procCd": "OP30",
                        "procDet": "TRIM",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1388,
                        "procCd": "OP40",
                        "procDet": "FL/RE",
                        "press": "250",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1389,
                        "procCd": "OP50",
                        "procDet": "PI",
                        "press": "200",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1390,
                        "procCd": "OP60",
                        "procDet": "C.PI/SEP",
                        "press": "200",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    },
    {
        "devId": 98,
        "devYear": "2021",
        "company": {
            "cmpId": 79,
            "cmpNm": "(주)성우하이텍",
            "secCd": "S001"
        },
        "car": "BN7r(CROSS)",
        "mthdRspns": "김정호/김경익",
        "initDt": "2021-09-15",
        "childList": [
            {
                "devDetId": 348,
                "itemNo": "69138-AW500",
                "itemNm": "EXTN-RR TRANSVERSE LH",
                "img": 2982,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 9,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "ANC",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "etc": "청운테크",
                "procList": [
                    {
                        "devProcId": 1483,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "300",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1484,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1485,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1486,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1487,
                        "procCd": "OP40",
                        "procDet": "FL/RE(UN/DN)",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1488,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1489,
                        "procCd": "OP60",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1490,
                        "procCd": "OP70",
                        "procDet": "C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1491,
                        "procCd": "OP80",
                        "procDet": "C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 349,
                "itemNo": "69148-AW500",
                "itemNm": "EXTN-RR TRANSVERSE RH",
                "img": 2983,
                "sec1": "SKD",
                "sec2": "CASTING",
                "numSet": 8,
                "mtrls": {
                    "mtrlsId": 41,
                    "mtrlsNm": "SGARC340 60/60",
                    "thick": "1.2"
                },
                "designRspns": "ANC",
                "pgRspns": "TFT",
                "lappingRspns": "1팀",
                "mnfctRspns": "우영테크",
                "etc": "청운테크",
                "procList": [
                    {
                        "devProcId": 1492,
                        "procCd": "OP10",
                        "procDet": "DRAW",
                        "press": "300",
                        "etc": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1493,
                        "procCd": "OP20",
                        "procDet": "TRIM",
                        "press": "",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1494,
                        "procCd": "OP30",
                        "procDet": "CUT",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1495,
                        "procCd": "OP40",
                        "procDet": "FL/RE(UN/DN)",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1496,
                        "procCd": "OP50",
                        "procDet": "FL/RE",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1497,
                        "procCd": "OP60",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1498,
                        "procCd": "OP70",
                        "procDet": "C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1499,
                        "procCd": "OP80",
                        "procDet": "C.CUT",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 350,
                "itemNo": "77439/49-AW500",
                "itemNm": "REINF-RR DR FRAME RR L/RH",
                "img": 2984,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 42,
                    "mtrlsNm": "SGACC 60/60",
                    "thick": "1.4"
                },
                "designRspns": "권민재",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "보승하이텍",
                "procList": [
                    {
                        "devProcId": 1500,
                        "procCd": "OP05",
                        "procDet": "BLK(복열)",
                        "press": "250",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1501,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1502,
                        "procCd": "OP20",
                        "procDet": "PI/C.PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1503,
                        "procCd": "OP30",
                        "procDet": "SEP",
                        "status": "REGIST"
                    }
                ]
            },
            {
                "devDetId": 351,
                "itemNo": "X86633-AW500",
                "itemNm": "BRKT-RR BEAM MTG L/RH",
                "img": 2985,
                "sec1": "SKD",
                "sec2": "STEEL",
                "numSet": 4,
                "mtrls": {
                    "mtrlsId": 43,
                    "mtrlsNm": "SPCC",
                    "thick": "1"
                },
                "designRspns": "손영경",
                "pgRspns": "사내",
                "lappingRspns": "2팀",
                "mnfctRspns": "사내",
                "etc": "일화테크",
                "procList": [
                    {
                        "devProcId": 1504,
                        "procCd": "OP05",
                        "procDet": "BLK",
                        "press": "200",
                        "status": "RECEIVING"
                    },
                    {
                        "devProcId": 1505,
                        "procCd": "OP10",
                        "procDet": "FORM",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1506,
                        "procCd": "OP20",
                        "procDet": "PI",
                        "status": "REGIST"
                    },
                    {
                        "devProcId": 1507,
                        "procCd": "OP30",
                        "procDet": "PI",
                        "status": "REGIST"
                    }
                ]
            }
        ]
    }
]