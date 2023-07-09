var header = document.querySelector('header');

// Função para adicionar ou remover a classe de borda
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add('header-with-border');
  } else {
    header.classList.remove('header-with-border');
  }
}


// Adiciona um ouvinte de evento para o evento de rolagem
window.addEventListener('scroll', handleScroll);

const bolinhas = document.querySelectorAll('.bolinhas');

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

bolinhas.forEach(function (bolinha) {
  const topValue = randomValue(10, 90) + '%';
  const leftValue = randomValue(10, 90) + '%';
  const maxSize = 20; // Tamanho máximo das bolinhas em pixels
  const sizeValue = randomValue(5, maxSize) + 'px'; // Tamanho aleatório entre 5px e 20px

  const windowHeight = window.innerHeight; // Altura da janela
  const documentHeight = Math.max(windowHeight, 700); // Altura mínima de 700px

  const topOffset = windowHeight - documentHeight; // Offset para compensar a diferença de altura

  const adjustedTopValue = parseFloat(topValue) * (documentHeight / 100) + topOffset; // Valor ajustado para o offset

  bolinha.style.top = adjustedTopValue + 'px';
  bolinha.style.left = leftValue;
  bolinha.style.width = sizeValue;
  bolinha.style.height = sizeValue;
  bolinha.style.zIndex = -1; // Definindo o menor z-index possível
});


const spanElement = document.querySelector('.forth-line span');
const text = spanElement.textContent;

const letters = text.split('');
const coloredLetters = letters.map(letter => {
  const span = document.createElement('span');
  if (letter === ' ') {
    span.innerHTML = '&nbsp;';
  } else {
    span.textContent = letter;
  }
  span.addEventListener('mouseover', () => {
    span.style.color = 'rgb(0, 110, 255)';
  });
  span.addEventListener('mouseout', () => {
    span.style.color = '#3d535f';
  });
  return span;
});

spanElement.innerHTML = '';
coloredLetters.forEach(letter => {
  spanElement.appendChild(letter);
});

// Seletor para o botão de modo noturno
// Seletor para o botão de modo noturno
const darkModeButton = document.getElementById('dark-mode-button');

const toggle = document.getElementById('dark-mode-button');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  const indicator = darkModeButton.querySelector('.indicator');
  indicator.classList.toggle('indicator-dark');
}

function toggleDarkMode() {
  var body = document.body;
  var header = document.querySelector('header');
  var textElements = document.querySelectorAll('.bolinhas, .forth-line span, .first-line, .second-line');
  var imgDiv = document.querySelector('.img');
  var bolinhas = document.querySelectorAll('.bolinhas');
  var textEduardo = document.querySelector('.eduardo');
  var iconNight = document.querySelectorAll('.icons a');
  var navNight = document.querySelectorAll('.nav-items li a');

  var isDarkMode = body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  textElements.forEach(element => {
    element.classList.toggle('white-text');
  });
  iconNight.forEach(element => {
    element.classList.toggle('icons-night');
  });
  textEduardo.classList.toggle('eduardo-night');

  bolinhas.forEach(bolinha => {
    bolinha.classList.toggle('bolinhas-night');
  });
  imgDiv.classList.toggle('background-night');
  navNight.forEach(element => {
    element.classList.toggle('nav-night');
  });

  // Verifica se está no modo noturno
  if (isDarkMode) {
    // Lógica para definir a cor do texto no modo noturno
    var spanElement = document.querySelector('.forth-line span');
    var text = spanElement.textContent;
    var letters = text.split('');
    var coloredLetters = letters.map(letter => {
      var span = document.createElement('span');
      if (letter === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = letter;
      }
      span.addEventListener('mouseover', () => {
        span.style.color = 'cyan';
      });
      span.addEventListener('mouseout', () => {
        span.style.color = 'rgb(224, 224, 224)';
      });
      return span;
    });

    spanElement.innerHTML = '';
    coloredLetters.forEach(letter => {
      spanElement.appendChild(letter);
    });
  } else {
    // Lógica para definir a cor do texto no modo claro
    var spanElement = document.querySelector('.forth-line span');
    var text = spanElement.textContent;
    var letters = text.split('');
    var coloredLetters = letters.map(letter => {
      var span = document.createElement('span');
      if (letter === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = letter;
      }
      span.addEventListener('mouseover', () => {
        span.style.color = 'rgb(0, 110, 255)';
      });
      span.addEventListener('mouseout', () => {
        span.style.color = '#3d535f';
      });
      return span;
    }); 

    spanElement.innerHTML = '';
    coloredLetters.forEach(letter => {
      spanElement.appendChild(letter);
    });
  }
}

// Função para adicionar o evento de clique ao botão de modo noturno
function setupDarkModeButton() {
  darkModeButton.addEventListener('click', toggleDarkMode);
}

// Obtém todos os elementos do menu
var menuItems = document.querySelectorAll('.faixa .menu-item');

// Adiciona um ouvinte de evento de mouse a cada item do menu
menuItems.forEach(function(item) {
  item.addEventListener('mouseover', handleMenuItemMouseOver);
  item.addEventListener('mouseout', handleMenuItemMouseOut);
});

// Função para lidar com o evento de passar o mouse sobre um item do menu
function handleMenuItemMouseOver(event) {
  // Obtém o elemento de informação correspondente ao item do menu
  var infoPanel = event.target.nextElementSibling;

  // Exibe o elemento de informação
  infoPanel.style.display = 'block';
}

// Função para lidar com o evento de remover o mouse de cima de um item do menu
function handleMenuItemMouseOut(event) {
  // Obtém o elemento de informação correspondente ao item do menu
  var infoPanel = event.target.nextElementSibling;

  // Oculta o elemento de informação
  infoPanel.style.display = 'none';
}


// Obtém todos os elementos do menu
var menuItems = document.querySelectorAll('.faixa span');

// Adiciona um ouvinte de evento de clique a cada item do menu
menuItems.forEach(function(item) {
  item.addEventListener('click', handleMenuItemClick);
});

let more = document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++) {
  more[i].addEventListener('click', function(){
    more[i].parentNode.classList.toggle('active-more')
  })
}

// Chama a função de configuração do botão de modo noturno quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', setupDarkModeButton);