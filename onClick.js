const allContainers = document.querySelectorAll('.image-container');

allContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Toggle the 'hidden' class
      //console.log('Container clicked:', container);
      container.querySelector('.default-image').classList.toggle('hidden');
      container.querySelector('.click-image').classList.toggle('hidden');

      // The text corresponding to the image has the same id as the image but with -text appended. This therefore will make the matching text toggle.
      const icon_id = container.querySelector('.default-image').id
      const myDiv = document.getElementById(icon_id.concat("-text"));
      // Toggle the 'hidden' class
      if (myDiv.classList.contains('hidden')) {
        myDiv.classList.remove('hidden');
      } else {
        myDiv.classList.add('hidden');
      }
    });

  });