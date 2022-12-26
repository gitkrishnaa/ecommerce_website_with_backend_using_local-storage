const data=[];
for(let i=0;i<50;i++){
data[i]=i
}

//////////random  data assign using loop

data.map((a,i)=>{data[i]={
  
  name:"item"+i,
  price:Math.round(1000*Math.random()+10),
  rate:Math.round(Math.random()*10)+"/"+"10",

}})

console.log(data[0].price);
let content_div=document.getElementById("content")
let render_data=(item_name,price1,rating1)=>{
  let div1=document.createElement("div");
  content_div.appendChild(div1);

  let div3=document.createElement("div");
  div1.appendChild(div3);
   
  let name=document.createElement("h3");
  let price=document.createElement("h4");
  let rating=document.createElement("h5");
div3.appendChild(name)
div3.appendChild(price)
div3.appendChild(rating)

///innnertext
name.innerHTML="<span></span>"+item_name
price.innerHTML="<span>Price-  </span>"+price1+"rs"
rating.innerHTML="<span>rate-   </span>"+rating1

//class name for css
name.className="item_property_css"
price.className="item_property_css"
rating.className="item_property_css"

  let div2=document.createElement("div");
  div1.appendChild(div2);
  let liked=document.createElement("div")
  div2.appendChild(liked)
  let add_to_cart=document.createElement("button");
  let buy_item=document.createElement("button")
  div2.appendChild(add_to_cart);
 
  div2.appendChild(buy_item);

  add_to_cart.innerText="add to cart";
  buy_item.innerText="buy";
  liked.innerText="♥";


 

}
data.map((a,i)=>{
render_data(data[i].name,data[i].price,data[i].rate)
})
console.log(data);