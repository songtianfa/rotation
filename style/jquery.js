/*
* @Author: Administrator
* @Date:   2019-11-15 17:57:40
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-15 17:57:49
*/
   $(document).ready(function(){
          //设置遍历
           speed=1000;
           m=1;
           var playTimer=setInterval(runPlay,speed);
             function runPlay(){
                  if(m>5){
                   m=0;
                }
                 controlPlay(m);
                // console.log(m);
                 m++;
             }
              
              //图片轮播
             function controlPlay(m){
                 $("#imgList li").removeClass('current').eq(m).addClass('current');
                 $("#iconList li").removeClass('current').eq(m).addClass('current'); 
             }
            
            //给整个轮播图绑定 鼠标悬停事件
             $(".playBox").mouseenter(function(event) {
                //鼠标进入的时候取消时间动态
                 clearInterval(playTimer)
                 $(".slideBar").fadeIn(300);
             }).mouseleave(function(event) {
                //鼠标离开的时候继续执行时间动态
               playTimer=setInterval(runPlay,speed);
                $(".slideBar").fadeOut(300);
             });

             //按钮轮播
             $("#iconList li").click(function(){
                 controlPlay($(this).index());
                 m=$(this).index()+1;
             })


             //右图标切换
             $(".slideBar_right").click(function(){
                   if(m>5){
                           m=0;
                        }
                 controlPlay(m);
                     m++;
             })
            

             //左图标切换
              $(".slideBar_left").click(function(){
                    m-=2
                  if(m<0){
                      m=5;   
                  }
                    controlPlay(m);
                     m++;
              })

     })