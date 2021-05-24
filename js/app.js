"use strict";

let sport=prompt("do you exercise evey day?");
sport=sport.toLowerCase();

let lang=prompt("Is your native language Arabic?");
lang=lang.toLowerCase();

let country=prompt("do you live in Jordan?");
country=country.toLowerCase();

let web=prompt("Are you web developer?");
web=web.toLowerCase();

let work=prompt("do you work?");
work=work.toLowerCase();

let Name=prompt("Input your name plz");
alert("Hi "+Name+" ,welcome here.");


if(sport==="yes"){
    console.log("your answer is yes");
    alert("you exercise evey day");
}else if(sport==="y"){
    console.log("your answer is yes");
    alert("you exercise evey day");
}else if(sport==="no"){
    console.log("your answer is no");
    alert("you don't exercise evey day");
}else if(sport==="n"){
    console.log("your answer is no");
    alert("you don't exercise evey day");
}else{
            console.log("you have to answer by y/n or yes/no only");
            alert("you have to answer by y/n or yes/no only");
}
   
switch(lang){
    case 'yes':
    case 'y':
        console.log("your answer is yes");
        alert("your native language is Arabic");
        break;
       
    case 'no':
    case 'n':
        console.log("your answer is no");
        alert("your native language isn't Arabic");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;
}

switch(country){
    case 'yes':
    case 'y':
        console.log("your answer is yes");
        alert("you live in Jordan");
        break;
    case 'no':
    case 'n':
        console.log("your answer is no");
    alert("you don't live in Jordan");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;

}


switch(web){
    case 'yes':
    case 'y':
        console.log("your answer is yes");
        alert("you are web developer");
        break;
       
    case 'no':
    case 'n':
        console.log("your answer is no");
        alert("you aren't web developer");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;
}

switch(work){
    case 'yes':
    case 'y':
        console.log("your answer is yes");
        alert("you are working");
        break;
       
    case 'no':
    case 'n':
        console.log("your answer is no");
        alert("you aren't working");
        break;
    default:
        console.log("you have to answer by y/n or yes/no only");
        alert("you have to answer by y/n or yes/no only");
        break;
}

alert("Nice to see "+Name);
