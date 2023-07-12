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
  var textElements = document.querySelectorAll('header nav .logo, .bolinhas, .forth-line span, .first-line, .second-line');
  var imgDiv = document.querySelector('.img');
  var bolinhas = document.querySelectorAll('.bolinhas');
  var textEduardo = document.querySelector('.eduardo');
  var iconNight = document.querySelectorAll('.icons a');
  var navNight = document.querySelectorAll('.nav-items li a');
  var isDarkMode = body.classList.toggle('dark-mode');
  const cards = document.querySelectorAll('.card');
  var javaElement = document.querySelector('.java');
  var pythonElement = document.querySelector('.python');
  var phpElement = document.querySelector('.php');
  var frontendElement = document.querySelector('.frontend');
  var databaseElement = document.querySelector('.database');
  var gitElement = document.querySelector('.git');
  var contentElement = document.querySelectorAll('.content');
  var moreElement = document.querySelectorAll('.more');
  var timelineDark = document.querySelectorAll('.center-line, .sec-about, .icon, .scroll-icon');
  var formDark = document.querySelectorAll('.container-contact .contactInfo, .contactForm, .contactForm h2, .container-contact .contactForm .formBox .inputBox');

  formDark.forEach(element => {
    element.classList.toggle('form-dark');
  })

  timelineDark.forEach( element => {
    element.classList.toggle('timeline-dark');
  })

  moreElement.forEach(element => {
    element.classList.toggle('more-dark');
  })
  
  contentElement.forEach(element => {
    element.classList.toggle('content-dark');
  })
  
  javaElement.classList.toggle('java-dark');
  pythonElement.classList.toggle('python-dark');
  phpElement.classList.toggle('php-dark');
  frontendElement.classList.toggle('frontend-dark');
  databaseElement.classList.toggle('database-dark');
  gitElement.classList.toggle('git-dark');

  cards.forEach(card => {
    card.classList.add('card-night');
  });

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

  var cardElements = document.querySelectorAll('.card');

  if (isDarkMode) {
  } else {
    cardElements.forEach(card => {
      card.classList.remove('card-night');
    });

  }
  if (isDarkMode) {
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

var navItems = document.querySelectorAll('.nav-items li a');
    var sections = document.querySelectorAll('.section');
    
    function changeActiveLink() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navItems.forEach(function(item) {
            item.classList.remove('active');
          });
          
          var correspondingLink = document.querySelector('a[href="#' + sectionId + '"]');
          if (correspondingLink) {
            correspondingLink.classList.add('active');
          }
        }
      });
    }
    
    window.addEventListener('scroll', changeActiveLink);

    function sendEmail () {
      Email.send ({
          Host : "smtp.elasticemail.com",
          Username : "duduflbdudu@gmail.com",
          Password : "5F2C4D3DFCDD938CD0E6F3BCB646E7B5A46F",
          To : 'edulanzarin@outlook.com',
          From : 'duduflbdudu@gmail.com',
          Subject : "Página",
          Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Phone number: " + document.getElementById("number").value
          + "<br> Message: " + document.getElementById("message").value
      }).then(
        message => {
          console.log("Email enviado com sucesso!");
        }
      );
      }

      function proxCampo(event, proximo) {
        if (event.keyCode === 13) {
          if (event.target.tagName.toLowerCase() === 'textarea') {
            return; // Permite a quebra de linha no campo de texto
          }
    
          event.preventDefault(); // Impede o comportamento padrão da tecla "Enter"
    
          if (proximo === 'submit') {
            document.querySelector('.contactForm form').submit(); // Envia o formulário
          } else {
            document.getElementById(proximo).focus(); // Vai para o próximo campo
          }
        }
      }

// Chama a função de configuração do botão de modo noturno quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', setupDarkModeButton);