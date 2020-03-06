function echarts_draw_Reception(arr,type,total) {
    var option = {
        //backgroundColor: '#000',
        "animation": true,
        "title": {
            "text": total,
            "subtext": "  批次",
            "x": "center",
            "left": "45%",
            "y": "center",
            "top": "49%",
            "textStyle": {
                "color": "#fff",
                "fontSize": 18,
                "fontWeight": "normal",
                "align": "center",
            },
            "subtextStyle": {
                "color": "#fff",
                "fontSize": 11,
                "fontWeight": "normal",
                "align": "center"
            }
        },
        legend: {
            show: false,
            orient: 'vertical',
            top: "middle",
            right: "1%",
            textStyle: {
                color: '#f2f2f2',
                fontSize: 10,
   
            },
            icon: 'roundRect',
            data: type,
        },
        "series": [{
            "type": "pie",
            "center": ["50%", "60%"],
            "radius": ["55%", "68%"],
            "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
            "startAngle": 135,
            "labelLine": {
                "normal": {
                    "length": 25
                }
            },
            "label": {
                "normal": {
                    "formatter": "{b|{b}:} \n{per|{d}%} ",
                    "backgroundColor": "rgba(255, 147, 38, 0)",
                    "borderColor": "transparent",
                    "borderRadius": 4,
                    "rich": {
                        "a": {
                            "color": "#999",
                            "lineHeight": 12,
                            "align": "center"
                        },
                        "hr": {
                            "borderColor": "#aaa",
                            "width": "100%",
                            "borderWidth": 1,
                            "height": 0
                        },
                        "b": {
                            "color": "#b3e5ff",
                            "fontSize": 12,
                            "lineHeight": 33
                        },
                        "c": {
                            "fontSize": 12,
                            "color": "#eee"
                        },
                        "per": {
                            "color": "#FDF44E",
                            "fontSize": 12,
                            "padding": [5, 8],
                            "borderRadius": 2
                        }
                    },
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
                }
            },
            "emphasis": {
                "label": {
                    "show": true,
                    "formatter": "{b|{b}:} \n{per|{d}%}  ",
                    "backgroundColor": "rgba(255, 147, 38, 0)",
                    "borderColor": "transparent",
                    "borderRadius": 4,
                    "rich": {
                        "a": {
                            "color": "#999",
                            "lineHeight": 12,
                            "align": "center"
                        },
                        "hr": {
                            "borderColor": "#aaa",
                            "width": "100%",
                            "borderWidth": 1,
                            "height": 0
                        },
                        "b": {
                            "color": "#fff",
                            "fontSize": 12,
                            "lineHeight": 33
                        },
                        "c": {
                            "fontSize": 12,
                            "color": "#eee"
                        },
                        "per": {
                            "color": "#FDF44E",
                            "fontSize": 12,
                            "padding": [5, 6],
                            "borderRadius": 2
                        }
                    }
                }
            },
            "data": arr
        }, {
            "type": "pie",
            "center": ["50%", "60%"],
            "radius": ["52%", "55%"],
            "label": {
                "show": false
            },
            "data": [{
                "value": 716,
                "name": "接待",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 1,
                            "y2": 0,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "#9F17FF"
                            }, {
                                "offset": 0.2,
                                "color": "#01A4F7"
                            }, {
                                "offset": 0.5,
                                "color": "#FE2C8A"
                            }, {
                                "offset": 0.8,
                                "color": "#FEE449"
                            }, {
                                "offset": 1,
                                "color": "#00FFA8"
                            }]
                        }
                    }
                }
            }]
        }]
    };

    echart_Reception.setOption(option);
}

function getDate_reception(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign==',sign);
    let params = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/reception', params, function (res) {
        // let ress = $.parseJSON(res);
        // console.log(res);
        if(res.errcode == 0){//secc

            // console.log('ressssssss=====',ress.result);
            let receptionArr = res.data;
            let total = 0;
            for(let i in res.data){
                total += parseInt(res.data[i].value)
            }
            echarts_draw_Reception(receptionArr,res.type,total);
        }
    });

}


getDate_reception();
setInterval(function(){//一小时一次
    getDate_reception();
},1000*24*60);