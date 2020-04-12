;window.onload = function() {
    function $(idname){
        return document.getElementById(idname)
    }
    var game = $('game')
    var gameStart = $('gameStart')
    var headtitle = $('headtitle')
    var RedFighter = $('RedFighter')
    var BlueFighter = $('BlueFighter')
    var BlueBullets = $('BlueBullets')
    var gameEnter = $('gameEnter')
    var bullets = $('BlueBullets')
    var BF = $('BF')
    var RF = $('RF')
    var shot = true
    var hit = true
    var punch = true
    var Rstatus = true
    var Bstatus = true
    var RedLife = 60
    var bulletSet = [];



// Made By Wange in Easter 2020
// Hope your 👍 guys enjoy with your friends
// It is harder as a RedFighter so make sure everytime the game end your guys need to Switch Positions!
// Have a() great time(s)👍



    headtitle.onclick = function(){
        gameStart.style.display = "none"
        gameEnter.style.display = "block"
        document.onkeyup = function(evt){
            var e = evt || window.event
            var keyVal = e.keyCode;
            if(keyVal == 32){
                if(shot){
                    createBullet();
                    BF.src = "BlueFighterShoot.gif"
                    Bstatus = false
                    shot = false
                }else{
                    BF.src = "BlueFighter.gif"
                    shot = true
                    Bstatus = true
                }
            }
            else if(keyVal == 37){
                BmoveL()
            }
            else if(keyVal == 39){
                BmoveR()
            }
            else if(keyVal == 65){
                RmoveL()
            }
            else if(keyVal == 68){
                RmoveR()
            }
            else if(keyVal == 75){
                RmoveK()
            }
            else if(keyVal == 74){
                if(punch){
                    RF.src = "RedFighterPunch.gif"
                    Rstatus = false
                    punch = false
                    judgement(Bstatus)
                }else{
                    RF.src = "RedFighter.gif"
                    Rstatus = true
                    punch = true
                }

            }

        }
    }
    function createBullet(){
        var bullet = new Image(20,15);
        bullet.src = "bullet.png"
        bullet.className = "b";
        var BlueL = getStyle(BlueFighter, 'left')
        bullet.style.left = BlueL + 100 + "px";
        bullet.style.bottom = 50 + "px";
        bullets.appendChild(bullet);
        bulletSet.push(bullet);
        move(bullet,'left')
    }

    function move(ele,attr){
        var speed = 8;
        ele.timer = setInterval(function(){
            var moveVal = getStyle(ele,attr);
            var RedVal = getStyle(RedFighter,'left')
            if(moveVal >= RedVal){
                clearInterval(ele.timer);
                ele.parentNode.removeChild(ele);
                RedLife = RedLife - 1
                if(RedLife <= 0 || Rstatus == false){
                    conditionB = true
                    alert("Blue💙Fighter Win!🏆 \n The Red side and The Blue side Please Swith Positions!\n Made by wange in Easter 2020")
                    clear()
                }
            }else{
                ele.style[attr] = moveVal + speed + "px";
            }
         },10);
    }
    function getStyle(ele, attr){
        var res = null;
        if(ele.currentStyle){
            res = elecurrentStyle[attr];
        }else{
            res = window.getComputedStyle(ele,null)[attr]
        }
        return parseFloat(res);
    }
    function sleep(time){
        var date = new Date()
        var curdate = null
        do{curdate = new Date();}
        while (curdate-date < time);
    }
    function BmoveL(){
        var speed = -5;
        var BL = getStyle(BlueFighter,'left')
        if(BL <= 0){
            BlueFighter.style['left'] = 0
        }else{
            BlueFighter.style['left'] = BL + speed + "px";
        }
    }
    function BmoveR(){
        var speed = 5;
        var BL = getStyle(BlueFighter,'left')
        var RL = getStyle(RedFighter,'left')
        if(BL + 100 >= RL){
            BlueFighter.style['left'] = RL - 100 + 'px'
        }else{
            BlueFighter.style['left'] = BL + speed + 'px';
        }
    }
    function RmoveL(){
        var speed = -5
        var RL = getStyle(RedFighter,'left')
        var BL = getStyle(BlueFighter,'left')
        if(BL + 100 >= RL){
            RedFighter.style['left'] = BL + 100 + 'px'
        }else{
            RedFighter.style['left'] = RL + speed + 'px'
        }
    }
    function RmoveR(){
        var speed = 10
        var RL = getStyle(RedFighter,'left')
        if(RL >= 500){
            RedFighter.style['left'] = 500
        }else{
            RedFighter.style['left'] = RL + speed + 'px'
        }
    }
    function RmoveK(){
        var superK = -50
        var RL = getStyle(RedFighter,'left')
        var BL = getStyle(BlueFighter,'left')
        if(BL + 100 >= RL){
            RedFighter.style['left'] = BL + 100 + 'px'
        }else{
            RedFighter.style['left'] = RL + superK + 'px'
        }
    }
    function judgement(B){
        var BL = getStyle(BlueFighter, 'left')
        var RL = getStyle(RedFighter, 'left')
        if (RL <= BL + 101 && B == false){
            clear()
            alert("Wow!The RedFighter Win🏆❤️ Very Good Job!\nIt is very Hard to win as a RedFighter🤯\nThe Person Who Control the RedFighter Must be Very Clever and Courageous🤩🏆👍!!!\nMade by Wange In Easter 2020 and wish all of you happy everyday and keep fight!\nWhat is the next stage?")
        }
    }
    function clear(){
        bulletSet = []
        gameStart.style.display = "block"
        gameEnter.style.display = "none"
        Bstatus = true
        Rstatus = true
        RedLife = 60
        hit = true
        shot = true
        punch = true
        RedFighter.style['left'] = 400 + 'px'
        BlueFighter.style['left'] = 100 + 'px'
        BF.src = "BlueFighter.gif"
        RF.src = "RedFighter.gif"
    }
}

