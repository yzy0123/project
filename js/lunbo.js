 var oLeft = document.getElementById("btn_list").children[0];
        var oRight = document.getElementById("btn_list").children[1];
        var aLi = document.querySelectorAll("#wrap li");
        var zIndex = 1;
        var nowIndex = 0;
        oRight.onclick = function () {
            if (nowIndex == aLi.length - 1) {
                nowIndex = 0;
            } else {
                nowIndex++;
            }
            animate()
        }
        oLeft.onclick = function () {
            if(nowIndex == 0){
                nowIndex = aLi.length - 1;
            }else{
                nowIndex--;
            }
            animate()
        }

        function animate(){
            aLi[nowIndex].style.zIndex = ++zIndex;
            aLi[nowIndex].style.opacity = 0;
            move(aLi[nowIndex], "opacity", "1")
            for(var i = 0 ; i < aSpan.length ; i ++){
                aSpan[i].className = "";
            }
            aSpan[nowIndex].className = "active";
        }

        setInterval(oRight.onclick,5000)

        var aSpan = document.querySelectorAll("#btn span");
        for(let i = 0 ; i < aSpan.length ; i ++){
            aSpan[i].onmouseover = function(){
                // console.log(i);
                if(i == nowIndex){
                    return 0;
                }
                nowIndex = i;

                animate();
            }
        }

 