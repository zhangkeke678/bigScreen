function echart_draw_Honor(arr01,arr02,arr03,arr04) {
    var data = {
        title: '荣誉',
        data1: arr01,

        data2: arr02,

        data3: arr03,

        data4: arr04,
    };
    option = {
        //backgroundColor: '#05274C',
        color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
        title: [{
            top: '5%',
            text: data.title + '(孵化成果)',
            textStyle: {
                color: '#3494BD',
                fontSize: 14,
                align: 'center',
            },
            left: '8%',
        },
        {
            top: '5%',
            text: data.title + '(称号、资质)',
            textStyle: {
                color: '#3494BD',
                fontSize: 14,
                align: 'center',
            },
            left: '31%',
        }, {
            top: '5%',
            text: data.title + '(知识产权)',
            textStyle: {
                color: '#3494BD',
                fontSize: 14,
                align: 'center',
            },
            left: '56%',
        },
        {
            top: '5%',
            text: data.title + '(高级人才)',
            textStyle: {
                color: '#3494BD',
                fontSize: 14,
                align: 'center',
            },
            left: '81%',
        }
        ],
        // tooltip: {
        // },
        // legend: {
        //     orient: 'vertical',
        //     show: false,
        //     x: 'left',
        //     data: [data.sex[0], data.sex[1], data.sex[2]]
        // },
        series: [
            {
                color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
                type: 'pie',
                radius: ['16%', '23%'],
                center: ['14%', '70%'],
                hoverAnimation: false, //鼠标移入变大
                labelLine: {
                    normal: {
                        //length: 25,
                        length2: 65,
                        lineStyle: {
                            // color: '#41B3DC',
                            //type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: '{b}\n' + '{c}' + ' ({d}%)',
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, -80],
                        height: 70,
                        fontSize: 11,
                        align: 'center',
                        color: '#3494BD',
                        rich: {
                            b: {
                                fontSize: 13,
                                lineHeight: 5,
                                color: '#41B3DC'
                            }

                        }
                    }
                },
                data: data.data2,
            },
            //end

            //begin
            {
                color: ['#76FBC0', '#2AC9FD'],
                type: 'pie',
                radius: ['16%', '23%'],
                center: ['38%', '70%'],
                hoverAnimation: false, //鼠标移入变大
                labelLine: {
                    normal: {
                        //length: 25,
                        length2: 65,
                        lineStyle: {
                            // color: '#41B3DC',
                            type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: '{b}\n' + '{c}' + ' ({d}%)',
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, -90],
                        height: 70,
                        fontSize: 11,
                        align: 'center',
                        color: '#3494BD',
                        rich: {
                            b: {
                                fontSize: 13,
                                lineHeight: 5,
                                color: '#41B3DC'
                            }

                        }
                    }
                },
                data: data.data1,
            },
            //end

            //begin
            {
                color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
                type: 'pie',
                radius: ['16%', '23%'],
                center: ['62%', '70%'],
                hoverAnimation: false, //鼠标移入变大
                labelLine: {
                    normal: {
                        length: 25,
                        length2: 65,
                        lineStyle: {
                            // color: '#41B3DC',
                            type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: '{b}\n' + '{c}' + ' ({d}%)',
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, -80],
                        height: 75,
                        fontSize: 11,
                        align: 'center',
                        color: '#3494BD',
                        rich: {
                            b: {
                                fontSize: 13,
                                lineHeight: 5,
                                color: '#41B3DC'
                            }

                        }
                    }
                },
                data: data.data3,
            },
            //end

            //begin
            {
                color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
                type: 'pie',
                radius: ['16%', '26%'],
                center: ['87%', '70%'],
                hoverAnimation: false, //鼠标移入变大
                labelLine: {
                    normal: {
                        length: 25,
                        length2: 65,
                        lineStyle: {
                            // color: '#41B3DC',
                            type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: '{b}\n' + '{c}' + ' ({d}%)',
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, -80],
                        height: 75,
                        fontSize: 11,
                        align: 'center',
                        color: '#3494BD',
                        rich: {
                            b: {
                                fontSize: 13,
                                lineHeight: 5,
                                color: '#41B3DC'
                            }

                        }
                    }
                },
                data: data.data4,
            },
            //end

        ]
    };
    echart_Honor.setOption(option);
}



function getDate_honor(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign==',sign);
    let params_honor = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/honor', params_honor, function (res) {
        // let ress = $.parseJSON(res);
        // console.log(res);
        if(res.errcode == 0){//secc
            let arr01=[],arr02 = [],arr03=[],arr04;//称号，资质
            for(let i in res.data){
                switch (res.data[i].category) {
                    case '孵化成果':arr01=res.data[i].list;break;
                    case '称号、资质':arr02=res.data[i].list;break;
                    case '知识产权':arr03=res.data[i].list;break;
                    case '高级人才':arr04=res.data[i].list;break;
                }
            }
            // console.log(arr01,arr02,arr03,arr04);
            echart_draw_Honor(arr01,arr02,arr03,arr04);
        }
    });

}

getDate_honor();
setInterval(function(){//一天一次
    getDate_honor();
},1000*24*60*60);