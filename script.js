AOS.init({
         duration: 1000,
      });

      
  const darkToggle = document.getElementById('darkToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const body = document.body;

  sunIcon.addEventListener('click', () => {
    if (!darkToggle.classList.contains('active')) {
      darkToggle.classList.add('active');
      body.classList.add('dark-mode'); 
     
    }
  });

  moonIcon.addEventListener('click', () => {
    if (darkToggle.classList.contains('active')) {
      darkToggle.classList.remove('active');
      body.classList.remove('dark-mode');
      
    }
  });

