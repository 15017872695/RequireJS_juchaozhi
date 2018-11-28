require.config({
    paths : {
        JinXuan : './Modules/ShouYie/Nav/JinXuan/JinXuan',
        YouHui : './Modules/ShouYie/Nav/YouHui/YouHui',
        HaiTao : './Modules/ShouYie/Nav/HaiTao/HaiTao',
        FaXian : './Modules/ShouYie/Nav/FaXian/FaXian',
        YuanChuang : './Modules/ShouYie/Nav/YuanChuang/YuanChuang'
    }
})
define(['Et','text!./nav.html','JinXuan','YouHui','HaiTao','FaXian','YuanChuang'],function(Et,NavHtml,JinXuan,YouHui,HaiTao,FaXian,YuanChuang){
    Et.enableStyle = true;
    var Nav = {
        initView : function(){
            var app = document.getElementById("App");
            var sae = document.createElement('navB');
            sae.innerHTML += NavHtml;
            app.appendChild(sae);
            var navBar = document.querySelectorAll(".navBar");
            navBar[0].style.cssText="color:red;border-bottom:1px solid red;";
            var navBarLength = navBar.length;
            for(let i=0;i<navBarLength;i++){
                var navBarAll = navBar[i];
                navBarAll.onclick = function(){
                    var Cbn = document.getElementById("ContinerBox");
                    Cbn.innerHTML = "";
                    for(let j=0; j<navBar.length;j++){
                        navBar[j].style.cssText="color:block;border-bottom:none;";
                    }
                    this.style.cssText="color:red;border-bottom:1px solid red;";
                    switch(i){
                        case 0:
                            JinXuan.initView();
                            break;
                        case 1:
                            YouHui.initView();
                            break;
                        case 2:
                            HaiTao.initView();
                            break;
                        case 3:
                            FaXian.initView();
                            break;
                        case 4:
                            YuanChuang.initView();
                            break;
                    }
                }
            }
        }
    }
    return Nav;
})