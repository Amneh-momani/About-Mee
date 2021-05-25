"use strict";

let Name=prompt("Input your name plz");
alert("Hi "+Name+" ,welcome here.");

let sport=prompt("do I exercise evey day?");
sport=sport.toLowerCase();

if(sport==="yes" || sport==="y"){
    alert("wrong answer because I don't exercise evey day");

}else if(sport==="no" || sport==="n"){
    alert("right, I dont't exercise evey day");
}else{
            alert("you have to answer by y/n or yes/no only");
}
   

let lang=prompt("Is my native language Arabic?");
lang=lang.toLowerCase();

switch(lang){
    case 'yes':
    case 'y':
        alert("right ,my native language is Arabic");
        break;
       
    case 'no':
    case 'n':
        alert("wrong,my native language is Arabic");
        break;
    default:
        alert("you have to answer by y/n or yes/no only");
        break;
}

let country=prompt("do I live in Jordan?");
country=country.toLowerCase();

switch(country){
    case 'yes':
    case 'y':
        alert("yes ,I live in Jordan");
        break;
    case 'no':
    case 'n':
    alert("wrong answer");
        break;
    default:
        alert("you have to answer by y/n or yes/no only");
        break;

}

let web=prompt("Am I web developer?");
web=web.toLowerCase();

switch(web){
    case 'yes':
    case 'y':
        alert("you rigth, I'm web developer");
        break;
       
    case 'no':
    case 'n':
        alert("wrong answer, I'm web developer");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;
}

let work=prompt("do I work?");
work=work.toLowerCase();

switch(work){
    case 'yes':
    case 'y':
        alert("No, I don't work");
        break;
       
    case 'no':
    case 'n':
        alert("rigth,I don't work");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;
}

alert("Nice to see "+Name);
