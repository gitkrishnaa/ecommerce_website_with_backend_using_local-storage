const data = [];
for (let i = 0; i < 50; i++) {
  data[i] = i;
}

//// this function returning to digit random number that i need in image adress targetting

let randomNumber_image_oneUnit = () => {
  // let random2=Math.random();
  // console.log(Math.round(random2),random2)
  // console.log(Math.round(random2*10),random2)
  let temp = Math.round(Math.random() * 10);
  if (temp == 10) {
    temp = temp - 1;
  }
  // console.log(`${Math.round(Math.random())}${temp}`)
  return `${Math.round(Math.random())}${temp}`;
};

//////////random  data assign using loop

data.map((a, i) => {
  //note- i have used to save image location in same object so i can handle backed ,beacause i just have to handle only data /////object
  let imageNumber = randomNumber_image_oneUnit();
  let source =
    'https://cdn.jsdelivr.net/gh/gitkrishnaa/ecommerce_website_with_backend_using_local-storage@main/image/' +
    imageNumber +
    '.webp';

  data[i] = {
    name: 'item' + i,
    price: Math.round(1000 * Math.random() + 10),
    rate: Math.round(Math.random() * 10) + '/' + '10',
    image_Location: source,
  };
});

console.log(data[0].price);
let content_div = document.getElementById('content');

//// main render function
let render_data = (item_name, price1, rating1, image_location) => {
  let div1 = document.createElement('div');
  div1.className = 'div_1_can_none';
  content_div.appendChild(div1);

  let div3 = document.createElement('div');
  div1.appendChild(div3);

  let name = document.createElement('h3');
  let price = document.createElement('h4');
  let rating = document.createElement('h5');

  // produt image section
  let image = document.createElement('IMG');
  image.setAttribute('src', image_location);
  image.style.width = 100 + '%';
  image.style.height = 300 + 'px';

  ////////////////////////////////////////////////
  div3.appendChild(image);
  div3.appendChild(name);
  div3.appendChild(price);
  div3.appendChild(rating);

  ///innnertext
  name.innerHTML = '<span></span>' + item_name;
  price.innerHTML = '<span>Price-  </span>' + price1 + 'rs';
  rating.innerHTML = '<span>rate-   </span>' + rating1;

  //class name for css
  name.className = 'item_property_css';
  price.className = 'item_property_css';
  rating.className = 'item_property_css';

  let div2 = document.createElement('div');
  div1.appendChild(div2);
  let liked = document.createElement('div');
  div2.appendChild(liked);
  let add_to_cart = document.createElement('button');
  let buy_item = document.createElement('button');
  div2.appendChild(add_to_cart);

  div2.appendChild(buy_item);

  add_to_cart.innerText = 'add to cart';
  buy_item.innerText = 'buy';
  liked.innerText = '♥';
};
// / this is final step where i assign or sending data to render
// data.map((a,i)=>{
//   if(data[i].price>500){
// render_data(data[i].name,data[i].price,data[i].rate,data[i].image_Location)
//   }
//   render_data(data[i].name,data[i].price,data[i].rate,data[i].image_Location)

// })
///////////////////////tools part
let filter_price_function = () => {
  let tool_div = document.getElementById('tool_div');
  let filte_div = document.createElement('div');
  tool_div.appendChild(filte_div);

  let filter_price = document.createElement('div');
  filte_div.appendChild(filter_price);

  let inp1 = document.createElement('input');
  inp1.setAttribute("placeholder","range from")
  // let inp1=document.createElement("to")
  let inp2 = document.createElement('input');
  inp2.setAttribute("placeholder","range to")

  let Filter_price_button = document.createElement('button');
  Filter_price_button.innerText = 'filter';

  Filter_price_button.addEventListener('click', () => {
    // previouse loaded part will be display=none
    let abc = document.querySelectorAll('.div_1_can_none');

    console.log(abc.length);
    for (let i = 0; i < abc.length; i++) {
      console.log((abc[i].style.display = 'none'));
    }
    // console.log(abc[0].style.backgroundColor="red")
    // console.log(abc.length)

    //this getting input value to filter data
    let range1 = 0 + inp1.value;
    let range2 = 0 + inp2.value;

    // the main filtering part is there
    let filter_data = data.filter((a, i) => {
      return data[i].price > range1 && data[i].price < range2;
    });
    console.log(filter_data);
    filter_data.map((a, i) => {
      if (false) {
        render_data(
          data[i].name,
          data[i].price,
          data[i].rate,
          data[i].image_Location
        );
      }
      render_data(
        filter_data[i].name,
        filter_data[i].price,
        filter_data[i].rate,
        filter_data[i].image_Location
      );
    });
  });

  filter_price.appendChild(inp1);
  filter_price.appendChild(inp2);
  filter_price.appendChild(Filter_price_button);

  // let filter_rate=document.createElement("div")
};

filter_price_function();

let filter_rating_function = () => {
  let tool_div = document.getElementById('tool_div');
  let filte_div = document.createElement('div');
  tool_div.appendChild(filte_div);

  let filter_price = document.createElement('div');
  filte_div.appendChild(filter_price);

  let inp1 = document.createElement('input');
  // let inp1=document.createElement("to")
  let inp2 = document.createElement('input');

  let Filter_price_button = document.createElement('button');
  Filter_price_button.innerText = 'click me';

  Filter_price_button.addEventListener('click', () => {
    // previouse loaded part will be display=none
    let abc = document.querySelectorAll('.div_1_can_none');

    console.log(abc.length);
    for (let i = 0; i < abc.length; i++) {
      console.log((abc[i].style.display = 'none'));
    }
    // console.log(abc[0].style.backgroundColor="red")
    // console.log(abc.length)

    //this getting input value to filter data
    let range1 = 0 + inp1.value;
    let range2 = 0 + inp2.value;

    // the main filtering part is there
    let filter_data = data.filter((a, i) => {
      return data[i].rate > range1;
    });
    console.log(filter_data);
    filter_data.map((a, i) => {
      if (false) {
        render_data(
          data[i].name,
          data[i].price,
          data[i].rate,
          data[i].image_Location
        );
      }
      render_data(
        filter_data[i].name,
        filter_data[i].price,
        filter_data[i].rate,
        filter_data[i].image_Location
      );
    });
  });

  filter_price.appendChild(inp1);
  filter_price.appendChild(inp2);
  filter_price.appendChild(Filter_price_button);

  // let filter_rate=document.createElement("div")
};
// filter_rating_function()
console.log(data);

//filter applay
// let filter_data = data.filter((a, i) => {
//   return data[i].price > 500 && data[i].price < 600;
// });
// console.log(filter_data);
// filter_data.map((a, i) => {
//   if (false) {
//     render_data(
//       data[i].name,
//       data[i].price,
//       data[i].rate,
//       data[i].image_Location
//     );
//   }
//   render_data(
//     filter_data[i].name,
//     filter_data[i].price,
//     filter_data[i].rate,
//     filter_data[i].image_Location
//   );
// });
data.map((a, i) => {
  if (false) {
    render_data(
      data[i].name,
      data[i].price,
      data[i].rate,
      data[i].image_Location
    );
  }
  render_data(
    data[i].name,
    data[i].price,
    data[i].rate,
    data[i].image_Location
  );
});
