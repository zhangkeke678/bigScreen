


// var beginEnergyDatas = [{
//     value: 0.0,
//     name: '楼道照明',
// },
//     {
//         value: 0.0,
//         name: '电梯用电',
//     },
//     // {
//     //     value: 0.0,
//     //     name: '园区夜间照明',
//     //     weight: 2,
//     // },
//     // {
//     //     value: 0.0,
//     //     name: '临街轮廓灯',
//     //     weight: 1,
//     // },
//     // {
//     //     value: 0.0,
//     //     name: '绿化能源',
//     //     weight: 2,
//     // },
//     // {
//     //     value: 0.0,
//     //     name: '企业办公',
//     //     weight: 11,
//     // },
//     // {
//     //     value: 0.0,
//     //     name: '其他',
//     //     weight: 1,
//     // },
// ];
function getEnergy(){
    var beginEnergyDatas =[];
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign===',sign);
    var params_energy = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/energy', params_energy, function (res) {
        if(res.errcode == 0){//succ
            let json={
                1:'楼道照明',
                2:'电梯用电',
                3:'园区夜间照明',
                4:'临街轮廓灯',
                5:'绿化能源',
                6:'企业办公',
                7:'其他 ',
            };
            for(let i in res.list){
                beginEnergyDatas.push({
                    name:json[res.list[i].type],
                    value:res.list[i].value
                });
            }
            let water = (res.water).toFixed(2);
            let electric = (res.electric).toFixed(2);
            energyIntervalFun(beginEnergyDatas,water,electric);
            // console.log(beginEnergyDatas);
            // beginEnergyDatas = arr;
        }
    });
}

// //每次增加的数量
// function randomNumeric(minNum, maxNum, p) {
//     return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10) / p;
// }

// var totalEnergyDatas = ['Encergy', 0.0, beginEnergyDatas, '今日电量', 0.0, '今日用水'];
//
// function getTotalEnergyDatas() {
//     var total = 0;
//     beginEnergyDatas.forEach(data => {
//         total += data.value;
//     });
//     return total;
// }
//
// function fmoney(val) {
//     n = 2;
//     if (arguments.length == 2) {
//         n = arguments[1];
//     }
//     s = val;
//     s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
//     var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
//     t = "";
//     for (i = 0; i < l.length; i++) {
//         t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
//     }
//     return t.split('').reverse().join('') + "." + r;
// }

// var energyInterval = 100;
function energyIntervalFun(beginEnergyDatas,water,electric) {
    // var dateEnd = new Date();//获取当前时间
    // var dateBegin = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate(), 8)
    // var dateDiff = parseInt((dateEnd.getTime() - dateBegin.getTime()) / 1000, 10); //相差的秒数


    //console.log(Math.random());

    // var dataIndex = 1;
    // var total = getTotalEnergyDatas();
    // if (total == 0) {
    //     dataIndex = 1;
    //     for (var i = 0; i < dateDiff; i++) {
    //         beginEnergyDatas.forEach(data => {
    //             ++dataIndex;
    //             data.value = data.value + (0.0025 * dataIndex * dataIndex * data.weight + Math.random()) / (dataIndex * dataIndex); //randomNumeric(1 * dataIndex, dataIndex * dataIndex, 1000000);
    //         });
    //         if (Math.random() * 10 > 1) {
    //             totalEnergyDatas[4] = totalEnergyDatas[4] + (0.00001 * dataIndex + Math.random()) / dataIndex;
    //         }
    //     }
    // }
    // dataIndex = 1;
    // beginEnergyDatas.forEach(data => {
    //     ++dataIndex;
    //     data.value = data.value + (0.0025 * dataIndex * dataIndex * data.weight + Math.random()) / (dataIndex * dataIndex); //randomNumeric(1 * dataIndex, dataIndex * dataIndex, 1000000);
    // });
    // totalEnergyDatas[4] = totalEnergyDatas[4] + (0.00001 * dataIndex + Math.random()) / dataIndex;
    //
    // total = getTotalEnergyDatas();
    // //console.log(total);
    // if (Math.random() * 10 > 1) {
    //     totalEnergyDatas = ['Encergy', total, beginEnergyDatas, '今日电量', totalEnergyDatas[4], '今日用水'];
    // }

    var totalEnergyDatas= ['Encergy', 0, beginEnergyDatas, '今日电量', water, '今日用水'];
    var option = {
        //backgroundColor: '#081832',
        title: [{
            top: '36%',
            left: 'center',
            text: totalEnergyDatas[3],
            textStyle: {
                color: 'red',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12
            },
            subtext:  electric+'°',
            subtextStyle: {
                color: 'red',
                fontSize: 16,
                fontWeight: 600,
            }
        }, {
            bottom: '23%',
            left: 'center',
            text: totalEnergyDatas[5],
            textStyle: {
                color: 'blue',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12
            },
            subtext: totalEnergyDatas[4] + '吨',
            subtextStyle: {
                color: 'blue',
                fontSize: 16,
                fontWeight: 600,
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter: function (res) {
                if (res.componentSubType == 'liquidFill') {
                    return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                } else {
                    return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value + '°';
                }
            }
        },
        series: [{
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue'
                }
            },
            name: totalEnergyDatas[3],
            data: [{
                value: 0.6,
                itemStyle: {
                    normal: {
                        color: '#53d5ff',
                        opacity: 0.6
                    }
                }
            }],
            //  background: '#fff',
            color: ['#53d5ff'],
            center: ['50%', '58%'],
            /*  backgroundStyle: {
                  color: '#fff'
              },*/
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 1
                },
                borderDistance: 1
            }
        },
            {
                type: 'pie',
                center: ['50%', '58%'],
                radius: ['55%', '75%'],
                color: ['#c487ee', '#deb140', '#49dff0', '#00ffb4', '#f44336', '#fc9700', '#ffde00', '#ffde00', '#034079', '#6f81da', '#00eaff'],
                hoverAnimation: false, ////设置饼图默认的展开样式
                label: {
                    show: true,

                    normal: {
                        formatter: '{b}\n({d}%)',
                        /*
                        formatter: function(res) {
                            console.log(res);
                            return res.data.name + '\n电量: ' + (res.data.value * 10000 / 100).toFixed(2).split("").reverse().reduce((prev, next, index) => {
                                return ((index % 3) ? next : (next + ',')) + prev;
                            }) + '°\n占比: '+ res.percent+'%';
                        }, */
                        show: true,
                        position: ''
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                itemStyle: { // 此配置
                    normal: {
                        borderWidth: 2,
                        borderColor: '#fff',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 2,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: totalEnergyDatas[2]
            }
        ]
    }
    //console.log('时间：'+ dateEnd+'\n数据：'+totalEnergyDatas);

    //console.log('时间：'+ dateEnd+'\n数据：'+option);
    echart_Energy.setOption(option);

    // if (energyInterval >= 1000) {
    //     energyInterval = 1000 + parseInt(Math.random() * 1000 + 1, 10);
    // } else {
    //     energyInterval = 1000;
    // }
    // window.setTimeout(energyIntervalFun, energyInterval);
};

// window.setTimeout(energyIntervalFun, energyInterval);

// energyIntervalFun();
getEnergy();
setInterval(function(){
    getEnergy();
},2000)