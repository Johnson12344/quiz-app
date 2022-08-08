// function sin(){
//     document.getElementById('calculator').result.value = Math.sin( document.getElementById('calculator').result.value);
// }
// function cos(){
//     document.getElementById('calculator').result.value = Math.cos( document.getElementById('calculator').result.value);
// }
// function tan(){
//     document.getElementById('calculator').result.value = Math.tan( document.getElementById('calculator').result.value);
// }

// function BACKSPC(){
//     var back =  document.getElementById('calculator').result.value;
//     document.getElementById('calculator').result.value = back.substr(0, back.lenght-1);
// }
// function square(){
//     document.getElementById('calculator').result.value = Math.pow( document.getElementById('calculator').result.value, 2);
// }
// function cubed(){
//     document.getElementById('calculator').result.value = Math.pow( document.getElementById('calculator').result.value, 3);
// }

// function sqrt2(){
//     document.getElementById('calculator').result.value = Math.pow( document.getElementById('calculator').result.value, 1/2);
// }
// function sqrt3(){
//     document.getElementById('calculator').result.value = Math.pow( document.getElementById('calculator').result.value, 1/3);
// }
// function number(value){
//     document.getElementById('calculator').result.value += value;
// }
// function remv(){
//     document.getElementById('calculator').result.value = " ";
// }
// function equal(){
//     document.getElementById('calculator').result.value = eval(document.getElementById('calculator').result.value);
// }






// function display(val) {
//     document.getElementById('display').innerHTML += val;
// }
// function calc() {
//     let value = document.getElementById('display').innerHTML;
//     let ans = eval(value);
//     if(ans.length > 15){let rounded = ans.toFixed(15);
//         document.getElementById('diplay').innerHTML = rounded;
//     } 
//     document.getElementById('prevDisplay').innerHTML = value;
//     document.getElementById('display').innerHTML = ans;
// }
// function clearScreen() {
//     document.getElementById('display').innerHTML = "";
//     document.getElementById('prevDisplay').innerHTML = "";
// }
// function remove() {
//     let value = document.getElementById('display').innerHTML;
//     var remain = value.slice(0, value.length - 1);
//     document.getElementById('display').innerHTML = remain;
// }





// function num(a){
//     container.display.value+=a;
// }

// function del(){
//     var war = container.display.value;
//     container.display.value=war.substring(0,war.length-1);
// }
// function ac(){
//     container.display.value="";
// }
// function equal(){
//     container.display.value=eval(container.display.value);
// }
// function sqrt(){
//     var shoot=container.display.value;
//     var kill=Math.sqrt(shoot);
//     container.display.value=kill;
// }



// function num(val) {
//        document.getElementById('num').innerHTML += val;
// }

// function num(val){
//    form.display.value+= val;
//    document.getElementById('num').value += val;
//  }
//  function del(){
//        var war = container.display.value;
//          form.display.value=war.substring(0,war.length-1);
//  }
//  function ac(){
//          form.display.value="";
//  }
//   function equal(){
//      form.display.value=eval(form.display.value);
//  }
//  function sqrt(){
//      var shoot= form.display.value;
//      var kill=Math.sqrt(shoot);
//      form.display.value=kill;
//  }







 function designate(a){
  forms.display.value+=a;

}
function del(){
  var war =forms.display.value;
  forms.display.value=war.substring(0,war.length-1);

}
function ac(){
  forms.display.value="";
}
function equal(){
  forms.display.value=eval(forms.display.value);
}
function sqrt(){
  var rema=forms.display.value;
  var divine= Math.sqrt(rema);
  forms.display.value=divine;
}
function per(){
  var perc=forms.display.value;
  var ops=eval(perc);
  var tage= ops*100+"%";
  forms.display.value=tage;
}
function fact(){
  var n= forms.display.value;
  let answer= 1;
  if(n ==0 || n==1){
      answer=1;
  }else{
      for(var i=n; i>=1; i-- ){
          answer=answer *i;
      }
  }
  forms.display.value=answer;
}
function rad(){
  var radian=forms.display.value;
  var radia=(radian*180)/3.14;
  forms.display.value=radia;
}
function square(){
  var sq= forms.display.value;
  var ree=Math.pow(sq,2);
  forms.display.value=ree;
}
function logarithm(){
  var loga= forms.display.value;
  var leg=Math.log(loga);
  forms.display.value=leg;
}
function pi(){
  var pii= forms.display.value;
  var padi= pii*3.141;
  forms.display.value=padi;
}
function sine(){
  var trigo=forms.display.value;
  var ho= Math.sin(trigo);
  forms.display.value=ho;
}
function cos(){
  var trigo=forms.display.value;
  var ho= Math.cos(trigo);
  var d= ho *(180/Math.PI);
  forms.display.value=d;
}
function tan(){
  var trigo=forms.display.value;
  var ho= Math.tan(trigo);
  forms.display.value=ho;
}
function asine(){
  var asha=forms.display.value;
  var nolo=Math.asin(asha);
  forms.display.value=nolo;
}

function atan(){
  var asha=forms.display.value;
  var nolo=Math.atan(asha);
  forms.display.value=nolo;
}
function acos(){
  var asha=forms.display.value;
  var nolo=Math.acos(asha);
  forms.display.value=nolo;
}