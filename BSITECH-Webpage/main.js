
const data = DATA;

productImage = document.getElementById('productImage');
productName = document.getElementById('productName');
// productPrice = document.getElementById('productPrice');
addToCartPage = document.getElementById('addToCartPage');
productDescription = document.getElementById('productDescription');
closeButton = document.querySelector('.close-btn-times');
addToCartPage.style.display = 'none';
closeButton.addEventListener('click', function() { addToCartPage.style.display = 'none'});

function displayFeaturedProduct() {
  const featuredContainer = document.querySelector('.product-section');
  //console.log(featuredContainer);
  for(var i = 0; i < data.featured.length; i++) {
    var outDiv = document.createElement('div');
    outDiv.setAttribute('class', 'product-container');

    var innerDiv = document.createElement('div');

    var image = document.createElement('img');
    image.src = data.featured[i].image;
    // image.setAttribute('value', data.featured[i].id)
    // image.addEventListener('click', onAddtoCartHandler);

    var productName = document.createElement('p');
    productName.innerHTML = data.featured[i].name;

    // var price = document.createElement('p');
    // price.innerHTML = '$' + data.featured[i].price;
    // price.style.color = '#e14235';
    // price.style.fontSize = '1.1em';

    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'view-detials-btn')
    button.innerText = 'View Techniques ';
    button.value = data.featured[i].id;
    button.addEventListener('click', onAddtoCartHandler);

    innerDiv.appendChild(image);
    innerDiv.appendChild(productName);
    // innerDiv.appendChild(price);
    innerDiv.appendChild(button);
    outDiv.appendChild(innerDiv);
    featuredContainer.appendChild(outDiv);
    // outDiv.addEventListener('click', onAllProductHandler());
  }
}

function onAddtoCartHandler(event) {
  console.log('click');
  const productListImage = document.getElementById('productListImage');
  console.log(this.value);
  var item = {};

  for(var i = 0; i < data.featured.length; i++) {
    if(data.featured[i].id == this.value) {
      item = data.featured[i];
    }
  }

  console.log(item);

  productListImage.src = item.image;
  //   console.log(productListImage);
  productName.innerHTML = item.name;
  productDescription.innerHTML = item.desc;
  // productPrice.innerHTML = '$' + item.price;

  addToCartPage.style.display = 'flex';
}

function displayCategories() {
  const categoryContainer = document.querySelector('.categories-section');
  // console.log(catergoryContainer);
  for(var i = 0; i < data.categories.length; i++) {
    // console.log(data.categories[i]);
    var outDiv = document.createElement('div');
    outDiv.setAttribute('class', 'category-container');

    var image = document.createElement('img');
    image.src = data.categories[i].image;

    outDiv.appendChild(image);
    categoryContainer.appendChild(outDiv);
  }
}

function displayFigure() {
  const figureSplitter = document.querySelectorAll('.figure-splitter');
  // const arrayFigure = [...figureSplitter];
  for(var i = 0; i < figureSplitter.length; i++) {
    figureSplitter[i].src = data.figureImage.image;
  }
}


displayFigure();
displayFeaturedProduct();
displayCategories();
displayBrands();