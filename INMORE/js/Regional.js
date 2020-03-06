/*
1、华东地区（包括山东、江苏、上海、浙江、安徽、福建、江西）；
2、华南地区（包括广东、广西、海南）；
3、华中地区（包括河南、湖南、湖北）；
4、华北地区（包括北京、天津、河北、山西、内蒙古）；
5、西北地区（包括宁夏、青海、陕西、甘肃、新疆）；
6、西南地区（包括四川、贵州、云南、重庆、西藏）；
7、东北地区（包括辽宁、吉林、黑龙江）；
8、港澳台地区（包括香港、澳门、台湾）。
*/

var geoCoordMap = {
    //华东地区（包括山东、江苏、上海、浙江、安徽、福建、江西）
    "山东": [117.1582, 36.8701],
    "江苏": [118.8062, 31.9208],
    '上海': [121.4648, 31.2891],
    "浙江": [119.5313, 29.8773],
    "安徽": [117.29, 32.0581],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],

    //华南地区（包括广东、广西、海南）
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],

    //华中地区（包括河南、湖南、湖北）
    "河南": [113.4668, 34.6234],
    "湖南": [113.0823, 28.2568],
    "湖北": [114.3896, 30.6628],

    //华北地区（包括北京、天津、河北、山西、内蒙古）
    '北京': [116.4551, 40.2539],
    "天津": [117.4219, 39.4189],
    "河北": [114.4995, 38.1006],
    "山西": [112.3352, 37.9413],
    '内蒙古': [110.3467, 41.4899],

    //西北地区（包括宁夏、青海、陕西、甘肃、新疆）
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "新疆": [87.9236, 43.5883],

    //西南地区（包括四川、贵州、云南、重庆、西藏）
    "四川": [103.9526, 30.7617],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "重庆": [108.384366, 30.439702],
    "西藏": [91.11, 29.97],

    //东北地区（包括辽宁、吉林、黑龙江）
    "辽宁": [123.1238, 42.1216],
    "吉林": [125.8154, 44.2584],
    '黑龙江': [127.9688, 45.368],

    //港澳台地区（包括香港、澳门、台湾）
};

var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#326B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],

    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#326B66", "#62a06b", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#22a375", "#73B9BC", "#7079ab", "#91CA8C", "#F49F42"],

    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#326B66", "#5da098", "#E69D87", "#c1b559", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;

var year = [];
var mapData = [[], [], [], [], [], [], [], []];

/*柱子Y名称*/
var categoryData = [];
var barData = [];
var barArr = [],categoryArr = [];
var maxV = 9;
/*数组去重*/
function toSetUniq(arr) {
    return Array.from(new Set(arr));
}
function echart_draw_regional(regionArr){
    // console.log('rrrr',regionArr);
    var mapArr  = [],provice=[],yearArr=[];

    for(let i in regionArr){
        yearArr.push(regionArr[i].team);
        mapArr.push(regionArr[i].list);
        for(let j in regionArr[i].list){
            provice.push(regionArr[i].list[j].name);
        }
    }
    console.log(yearArr);
    year = yearArr;                       //team名字   year
    for (var key in geoCoordMap) {
        // categoryData.push(key);
    }
    mapData = mapArr;                     // mapDate

    // console.log('mapData',mapData);
    // console.log('categoryData',categoryData);
    for (let i = 0; i < mapData.length; i++) {
        barArr.push([]);
        categoryArr.push([]);
        for (let j = 0; j < mapData[i].length; j++) {
            barArr[i].push(mapData[i][j].value);
            categoryArr[i].push(mapData[i][j].name);
        }
    }
    // categoryData = toSetUniq(provice);         //categoryData
    categoryData = categoryArr;         //categoryData
    barData = barArr;                         //barData
    console.log('categoryData',categoryArr);
    // console.log('mapData',mapData);
    // console.log('barData',barData);
    $.getJSON(uploadedDataURL, function (geoJson) {
        //window.open(uploadedDataURL);
        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var convertToLineData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem.name];
                var toCoord = [119.5313, 29.8773];//杭州[113.64964385, 34.7566100641]; //郑州
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: toCoord,
                        value: dataItem.value
                    }, {
                        coord: fromCoord,
                    }]);
                }
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 5000,
                left: '1%',
                right: '1%',
                bottom: '1%',
                width: '97%',
                //height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd',
                            fontSize: 11,
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 8,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '8%',
                    top: '15%',
                    bottom: '9%',
                    width: '10%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)' //hover颜色
                        }
                    }
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 0.5,
                    center: [117.29, 32.0581],//[114.3896, 30.6628],//[113.4668, 34.6234],//[121.1353, 28.6688],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };
        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                //backgroundColor: '#142037',
                title: [{
                    /* text: '地图',
                     subtext: '内部数据请勿外传',
                     left: 'center',
                     textStyle: {
                         color: '#fff'
                     }*/
                },
                    {
                        id: 'statistic',
                        text: year[n],
                        left: '84%',
                        top: '2%',
                        textStyle: {
                            color: colors[colorIndex][n],//'#fff',
                            fontSize: 16
                        },
                        subtext: '园区基地',
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                    }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    interval:8,//强制设置坐标轴分割间隔。
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData[n]
                },
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        }
                    },
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.5, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 5, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                width: 1, //尾迹线条宽度
                                opacity: 1, //尾迹线条透明度
                                curveness: .3 //尾迹线条曲直度
                            }
                        },
                        data: convertToLineData(mapData[n])
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "right",
                            }
                        },
                        data: barData[n]
                    }
                ]
            })
        }
        myChart.setOption(optionXyMap01);
    });
};

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

/*接口数据获取 start*/
function getDate_regional(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign==',sign);
    let params_region = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/parkregion', params_region, function (res) {
        // console.log(res.data);
        if(res.errcode == 0){//secc
            let regionArr = res.data;
            // let total = 0;
            // for(let i in regionArr){
            //
            // }
            echart_draw_regional(regionArr);
        }
    });
}



getDate_regional();
setInterval(function(){//一天一次
    getDate_regional();
},1000*1*60*60);

