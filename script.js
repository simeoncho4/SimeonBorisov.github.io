
        function showSection(sectionId) {
            // Скриваме всички секции
            let sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
        
            // Показваме само избраната секция
            let activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        }
        
  // Функция за показване на подкатегориите
  function showSubcategory(subcategory) {
      let sections = document.querySelectorAll('.subcategory');
      
      // Скриваме всички подкатегории
      sections.forEach(function(section) {
          section.style.display = 'none';
      });
      
      // Показваме избраната подкатегория
      let activeSection = document.getElementById(subcategory);
      if (activeSection) {
          activeSection.style.display = 'block';
      }
  }
  



//Това е за перилни препарати отваряне
function openModal(imageSrc, description) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    if (!modal || !modalImage || !modalText) return;

    modalImage.src = imageSrc;
    modalText.textContent = description;

    modal.style.display = "flex"; 
}

function closeModal(event) {
    const modal = document.getElementById("imageModal");
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
        modal.style.display = "none"; 
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const models = {
    1: [
      { src: "1.1.jpg", desc: "Victorinox Classic SD – червен" },
      { src: "1.2.jpg", desc: "Victorinox Classic SD– черен" },
      { src: "1.3.jpg", desc: "Victorinox Classic SD – син" }
    ],
    2: [
      { src: "2.2.jpg", desc: "Victorinox Spartan – черен" },
      { src: "2.3.jpg", desc: "Victorinox Spartan – син" },
      { src: "2.1.jpg", desc: "Victorinox Spartan – червен" }
    ],
    3: [
      { src: "victorinox3_red.jpg", desc: "Victorinox Spartan – червен" },
      { src: "victorinox3_silver.jpg", desc: "Victorinox Spartan – сребрист" },
      { src: "victorinox3_black.jpg", desc: "Victorinox Spartan – черен" }
    ]
  };

  const INTERVAL = 5000; // 5 секунди

  Object.keys(models).forEach(modelNumber => {
    const images = models[modelNumber];
    const carousel = document.getElementById(`carousel${modelNumber}`);
    if (!carousel) return;

    // добавяме всички изображения
    images.forEach((imgData, i) => {
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.desc;
      img.dataset.desc = imgData.desc; // запазваме текста в data атрибут
      if (i === 0) img.classList.add("active");
      carousel.appendChild(img);
    });

    // плавна автоматична смяна
    let current = 0;
    setInterval(() => {
      const imgs = carousel.querySelectorAll("img");
      imgs[current].classList.remove("active");
      current = (current + 1) % imgs.length;
      imgs[current].classList.add("active");
    }, INTERVAL);

    // 🟢 добавяме клик върху целия карусел
    carousel.addEventListener("click", () => {
      const activeImg = carousel.querySelector("img.active");
      if (activeImg) {
        const src = activeImg.src;
        const desc = activeImg.dataset.desc;
        openModal(src, desc); // отваря активната снимка и текста ѝ
      }
    });
  });
});