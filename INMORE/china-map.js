function echarts_3() {
    var myChart = echarts.init(document.getElementById('echart3'));
    var BJData = [
        //[{name:'呼和浩特'}, {name:'乌鲁木齐',value:95}],
        //[{name:'杭州'}, {name:'乌鲁木齐',value:95}],
        [{ name: '杭州' }, { name: '杭州', value: 111 }],
        [{ name: '杭州' }, { name: '合肥', value: 10 }],
        [{ name: '杭州' }, { name: '安庆', value: 10 }],

        [{ name: '杭州' }, { name: '北京', value: 10 }],

        [{ name: '杭州' }, { name: '南平', value: 10 }],
        [{ name: '杭州' }, { name: '莆田', value: 10 }],

        [{ name: '杭州' }, { name: '张掖', value: 10 }],

        [{ name: '杭州' }, { name: '北海', value: 10 }],
        [{ name: '杭州' }, { name: '桂林', value: 10 }],
        [{ name: '杭州' }, { name: '柳州', value: 10 }],

        [{ name: '杭州' }, { name: '贵阳', value: 10 }],
        [{ name: '杭州' }, { name: '哈尔滨', value: 10 }],
        [{ name: '杭州' }, { name: '长沙', value: 10 }],
        [{ name: '杭州' }, { name: '南京', value: 10 }],
        [{ name: '杭州' }, { name: '呼和浩特', value: 10 }],
        [{ name: '杭州' }, { name: '济南', value: 10 }],
        [{ name: '杭州' }, { name: '太原', value: 10 }],

        [{ name: '杭州' }, { name: '宝鸡', value: 10 }],

        [{ name: '杭州' }, { name: '绵阳', value: 10 }],
        [{ name: '杭州' }, { name: '乌鲁木齐', value: 10 }],
        [{ name: '杭州' }, { name: '重庆', value: 10 }],
        [{ name: '杭州' }, { name: '沈阳', value: 10 }],

        [{ name: '杭州' }, { name: '四平', value: 10 }],
        [{ name: '杭州' }, { name: '昆明', value: 10 }],
        [{ name: '杭州' }, { name: '银川', value: 10 }],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };
    var color = ['#fff'];
    var series = [];
    [['北京', BJData]].forEach(function (item, i) {
        series.push({
            name: item[0] + '',
            type: 'lines',
            // zlevel: 1,	
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,

                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
            {
                name: item[0],
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        fontSize: 16,
                        color: '#fff',
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: '10',
                /**symbolSize: function (val) {
                    return val[2] / 8;
                },**/
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    option = {
        //  backgroundColor: '#404a59',
        backgroundColor: 'transparent',
        title: {
            text: '',
            subtext: '',
            left: 'center',
            top: '2%',
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#2a91e2',
                    borderColor: '#0165b4'
                },
                emphasis: {
                    areaColor: '#306de8'
                }
            }
        },
        series: series
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}