$(function () {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
    var toast = function (elem, msg) {
        layer.open({
            content: (msg ? msg : elem.attr('placeholder')),
            skin: 'msg',
            time: 3
        });
    };
    var validate = function (form, key, value) {
        if (key === 'name') {
            var pattern = /^[\u4E00-\u9FA5]{2,10}$/;
            if (!pattern.test(value)) {
                toast(null, "只能输入中文哦，且至少两个字~~");
                return false;
            }
        } else if (key === 'phone') {
            var pattern = /^1\d{10}$/;
            if (!pattern.test(value)) {
                toast(null, "手机号码格式不正确哦~~");
                return false;
            }
        }
        return true;
    };
    $(".form-submit").click(function () {
        var form = $(this).closest("form");
        var json = form.serializeJson();
        if (json['wq']) {
            if (/^1\d{10}$/.test(json['wq'])) {
                json['weixin'] = json['wq'];
            } else if (/^\d{5,15}$/.test(json['wq'])) {
                json['qq'] = json['wq'];
            } else {
                json['weixin'] = json['wq'];
            }
        }
        var error = false;
        $.each(json, function (key, value) {
			var input = $("*[name='" + key + "']", form);
			if(input.attr("required")){
				if (value === "") {
					toast(input);
					error = true;
					return false;
				}
				if(value !== "" && !validate(form, key, value)){
					error = true;
					return false;
				}
			}else{
				if(value !== "" && !validate(form, key, value)){
					error = true;
					return false;
				}
			}
        });
        if (error) {
            return false;
        }
        var defaultJson = {
            current_url: location.href,
            current_domain: location.origin || location.host || location.hostname,
            current_path: location.pathname,
            current_search: location.search ? location.search : '',
            current_location: JSON.stringify(location)
        };
        var json = $.extend({}, json, defaultJson);
        var index = layer.open({type: 2, content: '数据提交中....', shadeClose: false});
        $.post("http://mb-zz2019-ins.zhizhouvip.com/submit", json, function (ret) {
            layer.close(index);
            toast(null, (ret['code'] === 0) ? "您的信息我们已经收到<br/>稍后将排工作人员为您处理~~~" : "是乎出了点什么问题<br/>要不等一会试试~~~");
            form[0].reset();
        });
    });
});