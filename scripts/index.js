// Add the coffee to local storage with key "coffee"

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

main();

async function main(){

    let res = await fetch(url);

    let data = await res.json();

    let menu = data.menu;

    let menuData = menu.data;

    console.log(menuData);

    appendmenu(menuData);
}

let coffeearr = JSON.parse(localStorage.getItem("coffee")) || [];

function appendmenu(menuData){

    menuData.map(function(elem){

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
        button.innerText = "Add to Bucket";
        button.setAttribute("id","add_to_bucket");
        button.addEventListener("click",function(){
            addtobucket(elem);
        })

        box.append(image,title,price,button);

        document.getElementById("menu").append(box);
    });

    function addtobucket(elem){
       coffeearr.push(elem);
       localStorage.setItem("coffee",JSON.stringify(coffeearr));
       countitem();
    }
    
} 

function countitem(){

    document.getElementById("coffee_count").innerText=null;

    let items = JSON.parse(localStorage.getItem("coffee")) || [];

    for(let i=0;i<items.length;i++)
    {
        document.getElementById("coffee_count").innerText++;
    }
}

     

