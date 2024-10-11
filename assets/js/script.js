// MENU

document.querySelector('.menu-opener').addEventListener('click', () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('opened');
});


// FILTRO DOS PRODUTOS
const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarBolos))

function filtrarBolos() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;

  let bolosFiltrados = cakeJson.filter(cake => cake.category == categoria)
  exibirBolos(bolosFiltrados)
}


// EXIBIR PRODUTOS NO HTML

function exibirBolos() {
  cakeJson.map((item, index) => {
    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true);

    cakeItem.querySelector('.product-img img').src = item.image;
    cakeItem.querySelector('.cake-name').innerHTML = item.title;
    cakeItem.querySelector('.cake-desc').innerHTML = item.description;
    cakeItem.querySelector('.cake-price').innerHTML = item.price;

    document.querySelector('.products-grid').append(cakeItem);
  });
}

exibirBolos();
