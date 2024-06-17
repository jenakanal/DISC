  var group1 = document.querySelector('.group1')
  var group2 = document.querySelectorAll('.hd')
var hdendisplay = document.querySelectorAll('button');
var i = 0
hdendisplay[0].addEventListener("click" , function(){
  if (i < group2.length){
    group2[i].classList.replace("hd", "dsply");
    group1.classList.replace("group1", "hd");
    for (var j = i-1; (j < group2.length) & (j >= 0) ; j--) {
    group2[j].classList.replace("dsply", "hd");
    }
      i++
      if(i==4){
        hdendisplay[0].classList.replace("dsply", "hd");
        hdendisplay[1].classList.replace("hd", "dsply");
      }
    }
})

var next = document.querySelectorAll('button')
console.log(next);
next[1].addEventListener("click", function(){
  var inputs = document.querySelectorAll('input')
  var resutl = new Array()
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].checked==true){
      resutl[i] = inputs[i].value
    }
    else {
      resutl[i] = 0
    }
  }
console.log(resutl);
function check0(x) {
if (x!=0){ return true; }
}
var resultW0 = resutl.filter(check0);
console.log(resultW0);
function checkse(x) {
if (x=="se"){ return true; }
}
var resultse = resultW0.filter(checkse);
console.log(resultse);

function checkph(x) {
if (x=="ph"){ return true; }
}
var resultph = resultW0.filter(checkph);
console.log(resultph.length);
function checkmu(x) {
if (x=="mu"){ return true; }
}
var resultmu = resultW0.filter(checkmu);
console.log(resultmu.length);

function checkiq(x) {
if (x=="iq"){ return true; }
}
var resultiq = resultW0.filter(checkiq);
console.log(resultiq.length);

function checkla(x) {
if (x=="la"){ return true; }
}
var resultla = resultW0.filter(checkla);
console.log(resultla.length);

function checkso(x) {
if (x=="so"){ return true; }
}
var resultso = resultW0.filter(checkso);
console.log(resultso.length);

function checkvi(x) {
if (x=="vi"){ return true; }
}
var resultvi = resultW0.filter(checkvi);
console.log(resultvi.length);
var z = [resultse.length,resultso.length,resultvi.length,resultph.length,resultmu.length,resultiq.length,resultla.length]
console.log(z);

var finalh4 = document.querySelectorAll('.reslt span')
for (var i = 0; i < finalh4.length; i++) {
  finalh4[i].innerHTML += z[i]
}
var all = document.querySelector('.all')
var resltF = document.querySelector('.reslt')
all.classList.replace("all", "hd");
resltF.classList.replace("reslt", "dsply");

})
























// natygat[i].setAttribute("checked","checked")
// console.log(natygat[i].checked);
// i+2
// if(natygat[0].checked==true){
//   console.log("hi");
// }
// console.log(natygat[0].checked);
// console.log(natygat[0].value);
// natyga[0].addEventListener("click";function(){
//   console.log(natygat[0].value);
// })




// hdendisplay[1].addEventListener("click" , function (){
// var nat = new Array() ;
// var natyga = document.querySelectorAll('input');
// for (var i = 0; i < natyga.length; i++) {
//   nat[i]=natyga[i].value
// }
// console.log(nat);
// function check0(x) {
// if (x!=0){ return true; }
// }
// var talyD = nat.filter(check0);
// console.log(talyD);
// })

//   var taly = [natg1,natg2,natg3,natg4,natg5,natg6,natg7,natg8,natg9,natg10,natg11,natg12,natg13,natg14,natg15,natg16,natg17,natg18,natg19,natg20,natg21,natg22,natg23,natg24]
//   console.log(taly);
//   function checkD(d) {
// if (d=="D"){ return true; }
// }
// var talyD = taly.filter(checkD);
// var contD =talyD.length
// console.log(contD);
//
// function checkII(e) {
// if (e=="I"){ return true; }
// }
// var talyII = taly.filter(checkII);
// var contI =talyII.length
// console.log(contI);
//
//
// function checkS(s) {
// if (s=="S"){ return true; }
// }
// var talyS = taly.filter(checkS);
// var contS =talyS.length
// console.log(contS);
//
// function checkC(c) {
// if (c=="C"){ return true; }
// }
// var talyC = taly.filter(checkC);
// var contC =talyC.length
// console.log(contC);
// var fixd = document.querySelector('.all')
// var dinmc = document.querySelector('.reslt')
//
// var prsn1 =document.querySelectorAll('a')
// fixd.classList.replace("all","hd")
// dinmc.classList.replace("reslt","dsply")
// prsn1[0].innerHTML+= contD
// prsn1[1].innerHTML+= contI
// prsn1[2].innerHTML+= contS
// prsn1[3].innerHTML+= contC
// if(contC==contI&&contC==contS&&contC==contD){
// var prsn = document.querySelector('h5')
// prsn[0].innerHTML="انت شخص متزن"
// }
// else {
//    var x = [contD,contI,contS,contC]
//     var personmax = Math.max(x[0],x[1],x[2],x[3])
//  for (var i = 0; i < x.length; i++) {
//    if(x[i]==personmax){
//      var x2 =["D اى شخص قيادى","I اى شخص اجتماعى","S اى شخص ودود","C اى شخص مدقق"]
//      var y = x.indexOf(x[i])
//      var prsn = document.querySelectorAll('h5')
//      prsn[0].innerHTML= "اول انطباع عند انك شخص " + x2[y]
//     x[i]=0
//      var personmax2 = Math.max(x[0],x[1],x[2],x[3])
//      console.log(x);
//      console.log(personmax2);
//   for (var a = 0; a < x.length; a++) {
//    if(x[a]==personmax2){
//      var y1 = x.indexOf(x[a])
//      var prs = document.querySelectorAll('h6')
//      console.log(x2[y1]);
//      prs[0].innerHTML="ثانى صفة عنك انك شخص " + x2[y1]
//
//    }
//    }
// }
//  }
// }
//
//
//
//   })
