function echart_draw_Type(grade,each,total) {
    // var each = each;//项目数量
    // var total = total;//总
    // var grade = grade;
    var data = {
        title: "*",
        grade: grade,
        each: each,//cost,
        total: total,
    };
    option = {
        //backgroundColor: '#05274C',
        title: {
            top: '5%',
            left: 'center',
            //text: data.title + '',
            textStyle: {
                align: 'center',
                color: '#4DCEF8',
                fontSize: 18
            }
        },
        grid: {
            top: '5%',
            bottom: '5%',
            left: '210',
            right: '60'
        },
        xAxis: {
            show: false,
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                margin: 100,
                show: true,
                color: '#4DCEF8',
                fontSize: 14
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: data.grade
        },
        series: [{
            type: 'bar',
            barGap: '-100%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    fontSize: 12,
                    formatter:
                        function (param) {
                            return '' + (100 * data.each[param.dataIndex] / data.total[param.dataIndex]).toFixed(2) + '%';
                        },
                }
            },
            barWidth: '35%',
            itemStyle: {
                normal: {
                    borderColor: '#4DCEF8',
                    borderWidth: 2,
                    barBorderRadius: 15,
                    color: 'rgba(102, 102, 102,0)'
                },
            },
            z: 1,
            data: data.total,
            // data: da
        }, {
            type: 'bar',
            barGap: '-98%',
            barWidth: '33%',
            itemStyle: {
                normal: {
                    barBorderRadius: 16,
                    color: {
                        type: 'linear',
                        x: 0,
                        x1: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#02ddff'
                        }, {
                            offset: 1,
                            color: '#00feff'
                        }]
                    }
                },
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#fff',
                    fontSize: 13,
                    formatter: function (param) {
                        return data.each[param.dataIndex] + ' / ' + data.total[param.dataIndex];
                    },
                }
            },
            labelLine: {
                show: true,
            },
            z: 2,
            data: data.each,
        }]
    }

    echart_Type.setOption(option);
}


function getDate_type(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign==',sign);
    let params_type = {
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/park', params_type, function (res) {
        // console.log('res.list',res.list);
        if(res.errcode == 0){//succ
            let grade=[],totalArr=[],val = [],total=0;
            let len = Math.min(15, res.list.length);
            for(let i in res.list){

                if(i<len){//取13条数据
                    grade.push(res.list[i].name);
                    val.push(res.list[i].value);
                    total += parseInt(res.list[i].value);
                }
            }
            for(let k=0;k<len;k++){//总和是一样的
                totalArr.push(total);
            }
            // console.log(totalArr);
            echart_draw_Type(grade,val,totalArr);
        }
    });
}

getDate_type();
setInterval(function(){//一小时一次
    getDate_type();
},1000*24*60);
