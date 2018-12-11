function move(dom,attr,target){
    if(attr == "opacity"){
        target = parseInt(target * 100);
    }
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        if(attr == "opacity"){
            var iNow = parseInt(getStyle(dom,attr) * 100);
        }else{
            var iNow = parseInt(getStyle(dom,attr));
        }
        var speed = (target - iNow) / 8 ;

        if(speed > 0){
            speed = Math.ceil(speed);
        }else{
            speed = Math.floor(speed);
        } 
        if(iNow == target){
            clearInterval(dom.timer);
            return 0;
        }
        if(attr == "opacity"){
            dom.style[attr] = (iNow + speed) / 100 ;
        }else{
            dom.style[attr] = iNow + speed + "px";
        }
    },50)
}

function getStyle(dom,attr){
    if(getComputedStyle){
        return getComputedStyle(dom)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}