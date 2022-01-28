const body = document.body;
const button = document.querySelector('#click');
const imageArr = ['./img/1.webp', './img/2.webp', './img/3.webp'];

function createNewHTMLElememt(elementTag, elementText) {
  let inputText = '';
  if (elementText !== null) inputText = elementText;
  const newElement = document.createElement(elementTag);
  const text = document.createTextNode(inputText);
  newElement.appendChild(text);
  return newElement;
}

function createAttribute(element, attributeArr) {
  attributeArr.forEach((attribute) => {
    element.setAttribute(attribute.attribute, attribute.value);
  });
}

/* AJAX */
async function getProducts(url) {
  try {
    // 1)get res from server
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Unable to connect to ' + url);
    }
    // 2)parse res from json to js object
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('There is no data');
    }
    // 3) return data
    return data;
  } catch (err) {
    const errorMessage = createNewHTMLElememt('div', err.message);
    body.appendChild(errorMessage);
  }
}

async function render() {
  /* call helper to get returned data */
  const products = await getProducts(
    'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
  );

  // hide button after being clicked
  button.style.visibility = 'hidden';
  button.style.opacity = '0';

  // transition & create new product cards
  setTimeout(() => {
    // make button undisplayed on screen
    button.style.display = 'none';

    // render product cards
    products.forEach((product, index) => {
      // 1)create containers
      const container = createNewHTMLElememt('div', null);
      const imgContainer = createNewHTMLElememt('div', null);
      const productInfoContainer = createNewHTMLElememt('div', null);

      // 2)give container class
      container.classList.add('container');
      imgContainer.classList.add('img-container');
      productInfoContainer.classList.add('product-container');

      // 3)create images
      createAttribute(imgContainer, [
        { attribute: 'role', value: 'img' },
        { attribute: 'aria-label', value: product.description },
      ]);
      imgContainer.style.backgroundImage = `url(${imageArr[index]})`;

      // 4)create text box
      const productTitle = createNewHTMLElememt('span', `${product.name}`);
      const productPrice = createNewHTMLElememt('span', `${product.price}元`);
      const productDescription = createNewHTMLElememt(
        'span',
        `${product.description}`
      );
      [productTitle, productPrice, productDescription].forEach(
        (text, index) => {
          text.setAttribute('id', `product-info-${index}`);
          productInfoContainer.appendChild(text);
        }
      );

      // 5)fill container
      container.appendChild(imgContainer);
      container.appendChild(productInfoContainer);
      body.appendChild(container);

      // 6)display cards
      setTimeout(() => {
        container.classList.add('container-show');
      }, 300);
    });
  }, 300);
}

button.addEventListener('click', render);
