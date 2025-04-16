

// Inicializar Swiper
const swiper = new Swiper('#image-carousel', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Função para adicionar os efeitos de profundidade e rotação
swiper.on('slideChange', function () {
	// Selecionar todos os slides
	const slides = document.querySelectorAll('.swiper-slide');
  
	// Obter o índice do slide ativo (central)
	const activeIndex = swiper.activeIndex;
  
	// Adicionar efeito de profundidade e rotação nos slides
	slides.forEach((slide, index) => {
	  // A imagem central (ativa) deve ter o destaque
	  if (index === activeIndex) {
		// Imagem central (ativa)
		slide.style.transform = 'scale(1) rotateY(0deg)';
		slide.style.opacity = '1';
	  } else if (index === activeIndex + 1 || index === activeIndex - 1) {
		// Imagem anterior ou próxima (adjacentes)
		slide.style.transform = 'scale(0.4) rotateY(60deg)';
		slide.style.opacity = '0.5';
	  } else {
		// Imagens fora de foco (não são as próximas nem anteriores)
		slide.style.transform = 'scale(0.4) rotateY(60deg)';
		slide.style.opacity = '0.3';
	  }
	});
  });

// Voltar ao topo
const backToTopButtons = document.querySelectorAll('.back-to-top');
backToTopButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Detecta quando a seção de contato estiver visível na tela
window.addEventListener('scroll', function () {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(function (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Adiciona a classe 'visible' quando o card estiver visível
            card.classList.add('visible');
        }
    });
});
