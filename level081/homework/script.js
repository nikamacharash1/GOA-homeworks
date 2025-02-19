// 1. **Პროგრამის ღილაკზე დაჭერით Fade In/Fade Out ანიმაცია** - შექმენით ელემენტი, რომელიც ღილაკზე დაჭერით ნელ-ნელა გამოჩნდება ან გაქრება.
// 2. **Slide In ანიმაცია** - შექმენით ბლოკი, რომელიც ღილაკზე დაჭერისას გვერდიდან ნელა გამოვა.

// 3. **Მოძრავი ბურთი** - შექმენით პატარა ბურთი, რომელიც მარჯვენა მხარეს ნელა გადადის და შემდეგ უკან ბრუნდება.

// 4. **Მოცემული ტექსტის ნელა გაზრდა** - ტექსტის ზომის ნელა გაზრდა და დაბრუნება თავდაპირველ ზომაზე, ღილაკზე დაჭერისას.

// 5. **როტაცია** - დააგეგმეთ ანიმაცია, რომელიც ელემენტს ნელა ატრიალებს ღილაკზე დაჭერისას. 

// ყველაფერი ჯავასკრიპტის ანიმაციებით.
const toggleButton = document.getElementById('toggleButton');
const fadeElement = document.getElementById('fadeElement');

// ღილაკზე დაჭერით ელემენტი გამოჩნდება ან გაქრება
toggleButton.addEventListener('click', () => {
  if (fadeElement.classList.contains('show')) {
    fadeElement.classList.remove('show');
    setTimeout(() => {
      fadeElement.style.display = 'none'; 
    }, 1000); 
  } else {
    fadeElement.style.display = 'block'; 
    setTimeout(() => {
      fadeElement.classList.add('show');
    }, 10); 
  }
});
