

function echarts_draw_Scenes(data,total) {
    var data = data;
    // console.log('data==',data);
    var option = {

        color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
        backgroundColor: '#000',
        title: {
            top: '51%',
            text: '平台热度',
            subtext: total,
            textStyle: {
                color: '#f2f2f2',
                fontSize: 10,
                // align: 'center'
            },
            subtextStyle: {
                fontSize: 18,
                color: ['#ff9d19']
            },
            x: 'center',
            y: 'center',
        },
        legend: {
            show: false,
            //orient: 'vertical',
            top: "5%",
            right: "2%",

            textStyle: {
                color: '#f2f2f2',
                fontSize: 8,
            },
            icon: 'circle',
            //icon: 'roundRect',
            data: data,
        },
        series: [
            // 主要展示层的
            {
                radius: ['30%', '61%'],
                center: ['50%', '60%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                        formatter: "{b}\n{d}%",
                        textStyle: {
                            fontSize: 12,
   
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        //length: 30,
                        //length2: 55
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: "",
                data: data,
   
            },
            // 边框的设置
            {
                radius: ['30%', '34%'],
                center: ['50%', '60%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '60%'],
                radius: ['65%', '65%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0b5263'
                        }
                    }
                }]
            },
        ]
    };


    echart_Scenes.setOption(option);
}

function getDate_scenes(){
    $.post('http://openapi.inmore.cn/counts/comein', {type: '52',}, function (res) {
        let ress = $.parseJSON(res);
        if(ress.error_code == 0){
            // console.log(ress.result);
            var scenesArr = [];let total =0;
            for(let i in ress.result){
                scenesArr.push({
                    name:ress.result[i].scene_label,
                    value:ress.result[i].dv,
                })
                total += parseInt(ress.result[i].pv)
            }
            echarts_draw_Scenes(scenesArr,total);
        }
    });
}


getDate_scenes();
setInterval(function(){//一小时一次
    getDate_scenes();
},1000*24*60);