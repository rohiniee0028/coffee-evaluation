// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffeeData = JSON.parse(localStorage.getItem("coffee")) || [];

let total = coffeeData.reduce(function(sum,el,index,arr){
    return sum + Number(el.price);
},0);

document.getElementById("total_amount").innerText=`${total}`;

console.log(total);

coffeeData.map(function(elem,index){

    let box = document.createElement("div");
    box.setAttribute("class","coffee");

    let image = document.createElement("img");
    image.setAttribute("id","image");
    image.src = elem.image;
    
    let title = document.createElement("h2");
    title.innerText = elem.title;

    let price = document.createElement("h3");
    price.innerText = `₹`+ elem.price;

    let button = document.createElement("button");
    button.innerText = "Remove";
    button.setAttribute("id","remove_coffee");
    button.addEventListener("click",function(){
        RemovefromBucket(elem,index);
    })

    box.append(image,title,price,button);

    document.getElementById("bucket").append(box);
});

function RemovefromBucket(elem,index){
   coffeeData.splice(index,1);
   localStorage.setItem("coffee",JSON.stringify(coffeeData));
   window.location.reload();
} 