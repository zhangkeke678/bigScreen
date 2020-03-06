function echarts_draw_Company(total,settled){
    var option = {
        //backgroundColor: 'rgb(0,65,107)',
        series: [{
            name: '辅助饼图最外层',
            type: 'pie',
            radius: '85%',
            z: -1,
            center: ["50%", "38%"],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0.35)"
                }
            },
            data: [{
                value: 1,
                name: '辅助饼图最外层'
            }]
        }, {
            name: '辅助饼图黑色',
            type: 'pie',
            radius: '8%',
            center: ["50%", "38%"],
            z: 3,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.1,
                        y: -0.1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#DDDDDD' // 0% 处的颜色
                        }, {
                            offset: 0.7,
                            color: '#1B1811' // 50% 处的颜色
                        }, {
                            offset: 0.71,
                            color: '#1B1811' // 51% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1B1811' // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    }
                }
            },
            data: [{
                value: 1,
                name: '辅助饼图黑色'
            }],
        }, {
            name: '辅助饼图红色',
            type: 'pie',
            radius: '4%',
            z: 4,
            center: ["50%", "38%"],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#E50505"
                }
            },
            data: [{
                value: 1,
                name: '辅助饼图红色'
            }],
        }, {
            name: '', //大仪表盘左侧
            type: 'gauge',
            min: 0,
            max: 15000,
            z: 2,
            radius: '82%',
            center: ["50%", "38%"],
            startAngle: 130,
            endAngle: 210,
            splitNumber: 3,
            clockwise: false,
            animation: false,
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ''
            }],
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, 'red']
                    ],
                    width: 0
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    color: 'red',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 8,
                },
                formatter: function(e) {
                    return e.toFixed(0);
                }
            },
            itemStyle: {
                normal: {
                    color: '#E50505'
                }
            },
            pointer: {
                width: 0
            }
        }, {
            name: '', //大仪表盘右侧
            type: 'gauge',
            min: 30000,
            max: total+1,
            z: 2,
            radius: '82%',
            center: ["50%", "38%"],
            startAngle: -30,
            endAngle: 50,
            splitNumber: 3,
            clockwise: false,
            animation: false,
            detail: {
                textStyle: {
                    fontSize: 8,
                    color: '#fff'
                },
                // backgroundColor: "rgba(0,0,0,0.35)",
                offsetCenter: [0, '20%'],
                borderRadius: 1,
                formatter: function(e) {
                    return  '企业';
                }
            },
            data: [{
                value: 0,
                name: ''
            }],
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, 'red']
                    ],
                    width: 0
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    color: 'red',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 8,
                },
                formatter: function(e) {
                    return e.toFixed(0);
                }
            },
            itemStyle: {
                normal: {
                    color: '#E50505'
                }
            },
            pointer: {
                width: 0
            }
        }, {
            name: '分钟', //大仪表盘(控制指针指向)
            type: 'gauge',
            min: 30000,
            max: 45000,
            z: 2,
            radius: '82%',
            center: ["50%", "38%"],
            startAngle: -30,
            endAngle: 50,
            splitNumber: 4,
            clockwise: false,
            animation: false,
            detail: {
                textStyle: {
                    fontSize: 1,
                    color: '#f00'
                },
                // backgroundColor: "rgba(0,0,0,0.35)",
                offsetCenter: [0, '52%'],
                borderRadius: 1,
                formatter: function(e) {
                    let eStr = e + '';
                    let eArr = eStr.split('');
                    let len = eArr.length;
                    let str = '';
                    for (let i = 0; i < len - 1; i++) {
                        str += '{per|' + eArr[i] + '} ';
                    }
                    return str + '{per|' + eArr[len - 1] + '}';
                },
                rich: {
                    per: {
                        color: '#fff',
                        backgroundColor: '#f00',
                        padding: [3, 2, 3, 2],
                        borderRadius: 3,
                        //borderColor: '#aaa',
                        borderWidth: 1,
                        fontSize: 14,
                        fontStyle: 'bold'
                    }
                }
            },
            data: [{
                value: total,
                name: ''
            }],
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ],
                    width: 0
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#E50505'
                }
            },
            pointer: {
                width: 3
            } //大仪表盘指针
        }, {
            name: '小仪表盘辅助饼图最外层',
            type: 'pie',
            radius: '65%',
            z: -2,
            startAngle: 70,
            center: ["50%", "73%"],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: { //设置半月形饼图
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: -0.16,
                        r: 1.13,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0,0,0,0)' // 0% 处的颜色
                        }, {
                            offset: 0.6,
                            color: 'rgba(0,0,0,0)' // 60% 处的颜色
                        }, {
                            offset: 0.61,
                            color: 'rgba(0,0,0,0.35)' // 61% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0.35)' // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    }
                }
            },
            data: [{
                value: 1,
                name: '小仪表盘辅助饼图最外层'
            }],
        }, {
            name: '', //小仪表盘最外层显示刻度标签
            type: 'gauge',
            min: 0,
            max: 10000,
            z: 2,
            radius: '62%',
            center: ["50%", "73%"],
            startAngle: 0,
            endAngle: -180,
            splitNumber: 5,
            clockwise: false,
            animation: false,
            detail: {
                textStyle: {
                    fontSize: 9,
                    color: 'white'
                },
                // backgroundColor: "rgba(0,0,0,0.35)",
                offsetCenter: [0, '-20%'],
                borderRadius: 1,
                formatter: function(e) {
                    return  '入驻';
                }
            },
            data: [{
                value: settled,
                name: ''
            }],
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ],
                    width: 0
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    width: 2
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 8,
                },
                formatter: function(e) {
                    return e;
                }
            },
            pointer: {
                width: 0
            }
        }, {
            name: '', //小仪表盘显示轴线及刻度
            type: 'gauge',
            min: 0,
            max: 10000,
            z: 2,
            radius: '62%',
            center: ["50%", "73%"],
            startAngle: 0,
            endAngle: -180,
            splitNumber: 5,
            clockwise: false,
            animation: false,
            detail: {
                textStyle: {
                    fontSize: 14,
                    fontWeight: 400,
                },
                backgroundColor: "green",
                offsetCenter: [0, '10%'],
                borderRadius: 10,
                formatter: function(e) {
                    return e + "";
                }
            },
            data: [{
                value: settled,
                name: ''
            }],
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#fff']
                    ],
                    width: 0
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            axisTick: {
                lineStyle: {
                    color: 'red',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#E50505'
                }
            },
            pointer: {
                width: 3
            }
        }]
    };

    echart_Company.setOption(option);
}



function getDate_company(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign==',sign);
    let params_company = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/company', params_company, function (res) {
        // console.log('res.list',res.list);
        if(res.errcode == 0){//succ
            echarts_draw_Company(res.total,res.settled);
        }
    });
}


getDate_company();
setInterval(function(){//一小时一次
    getDate_company();
},1000*24*60);