// fetch(`https://sqlite-api.herokuapp.com/predict`){ 
//     method: "POST",
//     headers: {
//       Access-Control-Allow-Origin: no-cors,
    
//     .then(response => response.json())
//     .then((data) => {
        
//         console.log(data);
//     });

//Collaboration avec les Bouman pour aller chercher les informations d'une API
// ==> On selectionne le document



const url = "https://davy-api.herokuapp.com/predict";
const urlCORS = "https://cors-anywhere.herokuapp.com/";


document.querySelector("#price").addEventListener("click",function(event){
  event.preventDefault()
let theData = {}

let data1= document.getElementById("area");
theData["area"]=parseInt(data1.value);

let data2= document.getElementsByName("property-type");

data2.forEach(element => {
  if(element.checked){
    theData["property-type"]=element.value;
  }
});

let data3= document.getElementById("rooms-number");
theData["rooms-number"]=parseInt(data3.value);

let data4= document.getElementById("zip-code");
theData["zip-code"]=parseInt(data4.value);

//========== Option de la maison ============

let data5 = document.getElementsByName("garden")[0].checked;
theData["garden"]= (data5);
 
 let data6= document.getElementsByName("equipped-kitchen")[0].checked;
 theData["equipped-kitchen"]= (data6);

 let data7= document.getElementsByName("terrace")[0].checked;
 theData["terrace"]=(data7);

  
 



// "property-type": document.getElementById("type").value ,
// "rooms-number": parseInt(document.getElementById("room").value),
// "zip-code": parseInt(document.getElementById("code").value),

// //optionnel
// "garden": Boolean(document.getElementsByName("jardin")[0].checked),
// "equipped-kitchen": Boolean(document.getElementsByName("cuisine")[0].checked),
// "terrace": Boolean(document.getElementsByName("terrace")[0].checked)

      console.log(theData);

  fetch (urlCORS +url, {
    method: "POST",
    body: JSON.stringify(theData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8 "
    },
   
  })
  .then(response => response.json())
  .then(data => console.log(data))
  const price= data.Predicted_price;
  console.log('data:', data)
  const priceContainer=document.querySelector(".price-container");
  priceContainer.innerHtml= `<p>The predict price is : ${price}</p>`
  
  .catch(err => console.log(err));

  
})



