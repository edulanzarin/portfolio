// Obtém o elemento do header
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

  bolinha.style.top = topValue;
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
      span.style.color = 'rgb(98, 0, 255)';
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








