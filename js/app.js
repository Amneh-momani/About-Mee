'use strict';

let point=0;
let Name=prompt('Input your name plz');
alert('Hi '+Name+' ,welcome here.');

function sports()
{


  let sport=prompt('do I exercise evey day?');
  sport=sport.toLowerCase();

  if(sport==='yes' || sport==='y'){
    alert('wrong answer because I don\'t exercise evey day');

  }else if(sport==='no' || sport==='n'){
    point++;
    alert('right, I dont\'t exercise evey day');
  }else{
    alert('you have to answer by y/n or yes/no only');
  }

}
sports();


function lang()
{

  let lang=prompt('Is my native language Arabic?');
  lang=lang.toLowerCase();

  switch(lang){
  case 'yes':
  case 'y':
    point++;
    alert('right ,my native language is Arabic');
    break;

  case 'no':
  case 'n':
    alert('wrong,my native language is Arabic');
    break;
  default:
    alert('you have to answer by y/n or yes/no only');
    break;
  }
}
lang();
function country()
{

  let country=prompt('do I live in Jordan?');
  country=country.toLowerCase();

  switch(country){
  case 'yes':
  case 'y':
    point++;
    alert('yes ,I live in Jordan');
    break;
  case 'no':
  case 'n':
    alert('wrong answer');
    break;
  default:
    alert('you have to answer by y/n or yes/no only');
    break;

  }
}
country();

function web()
{

  let web=prompt('Am I web developer?');
  web=web.toLowerCase();

  switch(web){
  case 'yes':
  case 'y':
    point++;
    alert('you rigth, I\'m web developer');
    break;

  case 'no':
  case 'n':
    alert('wrong answer, I\'m web developer');
    break;
  default:
    console.log('you have to answer by y/n or yes/no only');
    alert('you have to answer by y/n or yes/no only');
    break;
  }
}
web();

function work()
{

  let work=prompt('do I work?');
  work=work.toLowerCase();

  switch(work){
  case 'yes':
  case 'y':
    alert('No, I don\'t work');
    break;

  case 'no':
  case 'n':
    point++;
    alert('rigth,I don\'t work');
    break;
  default:
    console.log('you have to answer by y/n or yes/no only');
    alert('you have to answer by y/n or yes/no only');
    break;
  }


}
work();

function luckynum()
{

  for(let i=1;i<=4;i++){

    let num=prompt('what do you think my lucky num \'It should be bt (0-10)\'!!');

    if(num ==='6'){
      point++;
      alert('your answer is correct');
      break;
    }else if(num>6){
      alert('too high');
    }else if(num<6){
      alert('too low');
    }else{
      alert('you should input only numbers');
    }
  }
  alert('the correct answer is \'6\'');

}
luckynum();


let fav=['shopping','traveling','cooking','watching movies','video games'];

function hobbies()
{


  for(let i=1;i<=6;i++){

    let hobbies=prompt('guess one of my hobbies');
    for(let j=0;j<fav.length;j++){
      if(hobbies=== fav[j]){
        point++;
        alert('your answer is correct');
        console.log('your answer is correct');
        i=6;
      }
    }
    if(i<6){
      alert('your answer isn\'t correct');
    }

  }

}
hobbies();

alert(`the options were "(${fav})"`);



alert(`Nice to see you ${Name} your points are ${point} out of 7`);
