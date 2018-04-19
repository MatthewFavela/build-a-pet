

window.onload = function(){
var form = document.getElementById("form");
var name = document.getElementById("name");
var pet = document.getElementById("type");
var radio2 = document.getElementById("two");
var radio4 = document.getElementById("four");
var radio6 = document.getElementById("six");
var radio8 = document.getElementById("eight");
var laservision = document.getElementById("lv");
var abletofly = document.getElementById("atf");
var smart = document.getElementById("ss");
var karate = document.getElementById("kk");
var xray = document.getElementById("xrv");
var nukes = document.getElementById("sn");
var time = document.getElementById("csdt");
var fat = document.getElementById("mo");
var email = document.getElementById("email");
var password = document.getElementById("password");
var desc = document.getElementById("desc");
var result = document.getElementById("result");
var continutebtn = document.getElementById("talker");
var resultprint = document.getElementById("print");

let obj = {};

    form.addEventListener("submit", function(){
        event.preventDefault();
        obj.name = name.value;
        obj.type = pet.value;
        if(radio2.checked === true){
            obj.legs = radio2.value;
        }else if(radio4.checked === true){
            obj.legs = radio4.value;
        }else if(radio6.checked === true){
            obj.legs = radio6.value;
        }else if(radio8.checked === true){
            obj.legs = radio8.value;
        }

        if(laservision.checked === true){
            obj.powers = "Has laservision. ";
            document.getElementById("lvp").src = "./assets/laservision.jpg";
        }
        if(abletofly.checked === true){
            obj.powers += "Can fly. ";
        }
        if(smart.checked === true){
            obj.powers += "Is smart. ";
        }  
        if(karate.checked === true){
            obj.powers += "Knows karate. ";
        }
        if(xray.checked === true){
            obj.powers += "Has X-Ray Vision. ";
        }
        if(nukes.checked === true){
            obj.powers += "Can Summon Nukes . ";
        }
        if(time.checked === true){
            obj.powers += "Can Slow Down Time. ";
        }
        if(fat.checked === true){
            obj.powers += "Is Massively Obese. ";
        }
        obj.petmail = email.value;
        obj.password = password.value;
        obj.desc = desc.value;
        console.log(obj);
        

    });
        
        

  

        

       
                            

}