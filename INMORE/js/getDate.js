

/*最上面一排 数据*/
function fetchTopDate(){
    $.post('http://openapi.inmore.cn/counts/comein', {type: '51',}, function (res) {
        let ress = $.parseJSON(res);
        if(ress.error_code == 0){
            $('#pv').html(ress.result.all_pv);
            $('#uv').html(ress.result.all_uv);
            $('#ip').html(ress.result.all_ip);
            $('#orders').html(ress.result.all_order);
            $('#users').html(ress.result.all_user);
            $('#turnover').html(ress.result.all_amount);
        }
    });
}

/*最新订单 数据*/
var base  = 'http://openapi.inmore.cn/counts/comein';
function fetchData_order(){
    $.post(base, {type: '54',}, function (res) {//最新订单
        var res = $.parseJSON(res);//将json字符串转为json对象
        if(res.error_code == 0){//返回成功
            var result = res.result;
            var el =  $('#scrollContainer_order ul'); html = '';
            // console.log('result',result);

            for(let i in result){
                html += '<li>';
                html += '<p class="pull-right">'+result[i].order_amount+'</p>';
                html += '<p>'+result[i].phone+'</p>';
                html +=  '</li>';
            }
            el.html(html);
        }
    });
};

/*入场车辆 数据*/

function fetchData_car(){
    $.post(base, {type: '53',}, function (res) {//最新订单
        var res = $.parseJSON(res);//将json字符串转为json对象
        if(res.error_code == 0){//返回成功
            var result = res.result;
            var el =  $('#scrollContainer_car ul'); html = '';
            // console.log('result',result);
            for(let i in result){
                html += '<li>';
                html += '<p class="pull-right"> <i class="fa fa-clock-o margin-r-5"></i>'+result[i].pay_time+'</p>';
                html += '<p class="pull-left" ><i class="fa fa-map-marker margin-r-5"></i>'+result[i].seller+'</p>';
                html += '<p> &nbsp;&nbsp; &nbsp;&nbsp;<i class="fa fa-car"></i>'+result[i].car_no+'</p>';
                html +=  '</li>';
            }
            el.html(html);
        }
    });
};

/*园区基地物业 数据*/

function fetchData_park(){
    /*一些公用的参数*/
    var appid = '165721';
    var stamp = Math.round(new Date()/1000).toString();
    let signS = '165721' + stamp + '42eeea75ce7691aa52e8335ba7c6c9d6';
    var sign = $.md5(signS); //签名
    // console.log('sign===',sign);
    let params_park={
        "appid": appid,
        "stamp": stamp,
        "sign": sign
    };
    $.post('http://api.eisp.em.com.cn/bigdata/inmore/estate', params_park, function (res) {//最新订单
        if(res.errcode == 0){//返回成功
            var result = res.data;
            var el =  $('#scrollContainer_park ul'); html = '';
            // console.log('result',result);
            let json={
                1:'园区基地(个)',
                2:'省份覆盖(省)',
                3:'城市覆盖(城)',
                4:'物业面积(m²)',
                5:'独立办公室(个)',
                6:'开放工位(个)',
                7:'注册地址(个)',
                8:'停车位(个)',
            };
            let icon={
                1:'fa-diamond',
                2:'fa-street-view',
                3:'fa-street-view',
                4:'fa-university',
                5:'fa-lock',
                6:'fa-unlock',
                7:'fa-registered',
                8:'fa-automobile',
            };
            for(let i in result){
                html += '<li class="clearfix">';
                html += '<div class="box-order-list-item text-center clearfix">';
                html += '<div class="pull-right">'+result[i].value+'</div>';
                html += '<div class="pull-left" ><i class="fa '+icon[result[i].type]+' margin-r-5"></i> '+json[result[i].type]+'</div>';
                html +=  '</div>';
                html +=  '</li>';
                el.html(html);
            }
        }
    });
};


fetchTopDate();
fetchData_order();
fetchData_car();
fetchData_park();
setInterval(function(){//3s一次
    fetchTopDate();
},3000);
setInterval(function(){//10s一次
    fetchData_order();
    fetchData_car();
    fetchData_park();
},10000);
