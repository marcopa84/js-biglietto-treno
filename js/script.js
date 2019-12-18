// chiedo quanti kilometri intendano percorrere
var kilometers = parseInt(prompt('Quanti kilometri desidera percorrere?'));
console.log(kilometers);
document.getElementById('kilometers').innerHTML=(kilometers);

// chiedo l'eta dell'user
var age = parseInt(prompt('Quale è la sua eta?'));
console.log(age);
document.getElementById('age').innerHTML=(age);

// costo kilometrico
var kilometersCost = 0.21;

// valuto se hanno diritto a sconti
var under = age < 18;
console.log(under);
var underDiscount = 20;
var over = age > 65;
console.log(over);
var overDiscount = 40;

// comunico se hanno diritto a sconti
if (under == 1){
  document.getElementById('discountH2').innerHTML=('COMPLIMENTI! ha diritto allo sconto minorenni');
}
else if (over == 1){
  document.getElementById('discountH2').innerHTML=('COMPLIMENTI! ha diritto allo sconto ultrasessantancinquenni');
}
else{
  document.getElementById('discount').innerHTML=('non ha diritto a sconti in base alla sua età');
}

// calcolo il costo del biglietto
var cost = kilometers * kilometersCost;

// applico gli sconti e comunico prezzo finale
if (under == 1){
  document.getElementById('price').innerHTML=(cost-((cost/100)*underDiscount)).toFixed(2);
  console.log('sconto under',underDiscount);
}
else if (over == 1){
  document.getElementById('price').innerHTML=(cost-((cost/100)*overDiscount)).toFixed(2);
  console.log('sconto over',overDiscount);
}
else{
  document.getElementById('price').innerHTML=(cost).toFixed(2);
  console.log('costo senza sconti',cost);
}
