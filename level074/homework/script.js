// 3) გააკეთეთ თითოეულ ნასწავლ მეთოდზე (.createElement, .appendChild(node), 
// .insertBefore, .removeChild(node), .parentNode, .replaceChild) 5-5 მაგალითი, ახსენით თითოეულის მუშაობა კომენტარებით

// .createElement, .appendChild(node)
let div = document.createElement('div');  // ვქმნი ახალ div ელემენტს
document.body.appendChild(div);           // ვამატებ div-ს body-ს გვერდზე


let p = document.createElement('p');      // ვქმნი ახალი პარაგრაფის ელემენტს
p.textContent = 'new P';  
document.body.appendChild(p);             // ამატებს <p>-ს body-ს

let ul = document.createElement('ul');    // ვქმნივ <ul> ელემენტს
let li1 = document.createElement('li');   // ვქმნი <li> ელემენტს
li1.textContent = 'goa bst';             // ტექსტის დამატება
ul.appendChild(li1);                      // <li> დაამატე <ul>-ში

let li2 = document.createElement('li');   // ვქმნი მეორე <li> ელემენტს
li2.textContent = 'goa2';             // ტექსტის დამატება
ul.appendChild(li2);                      // <li> დაამატე <ul>-ში

document.body.appendChild(ul);            // <ul> დაამატე body-ს

let img = document.createElement('img');
img.src = 'C:\Users\Acer\Desktop\pytho course\level74\homework\download.jpg';                    
document.body.appendChild(img);           // <img> დაამატე body-ს

let button = document.createElement('button');
button.textContent = 'click me';       // ტექსტის დამატება
document.body.appendChild(button);        // <button> დაამატე body-ს


// .insertBefore,

let ul1 = document.createElement('ul');
let button = document.createElement('button');
button.textContent = 'დაჭერით';
document.body.appendChild(ul);    // ul დამატება body-ში
ul.insertBefore(button, ul.firstChild); // button დამატება ul-ს პირველ შიგთავსამდე

// 3. დამატება <li> <ul>-ის წინ
let li1 = document.createElement('li');
li1.textContent = 'family';
let li2 = document.createElement('li');
li2.textContent = 'children';
ul.appendChild(li1); // li1 დამატება <ul>-ში
ul.insertBefore(li2, li1); // li2 დამატება li1-ის წინ

// 4. ახალი <p> ელემენტის დამატება div-ს პირველ შიგთავსად
let p3 = document.createElement('p');
p3.textContent = 'mother';
let div2 = document.createElement('div');
div2.appendChild(p3);
document.body.appendChild(div2);   // div2 დამატება body-ში
div2.insertBefore(p3, div2.firstChild); // p3 დამატება div2-ს პირველ შიგთავსად

// 5. <img> ელემენტის დამატება body-ს პირველ შიგთავსად
let img = document.createElement('img');
img.src = 'image.jpg';
document.body.insertBefore(img, document.body.firstChild); // image დაამატე body-ს პირველ შიგთავსად


// removeChild(node)?/?
let p = document.createElement('p');
p.textContent = 'paragrap';
document.body.appendChild(p);  // დამატება body-ში
document.body.removeChild(p);  // წაშლა body-დან

let div1 = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);  // დამატება body-ში
document.body.removeChild(div);  // წაშლა body-დან

let button = document.createElement('button');
button.textContent = 'click';
document.body.appendChild(button); // დამატება body-ში
document.body.removeChild(button); // წაშლა body-დან

let ul2 = document.createElement('ul');
let li = document.createElement('li');
li.textContent = 'kay';
ul.appendChild(li);    // li დამატება <ul>-ში
document.body.appendChild(ul);  // <ul> დამატება body-ში
ul.removeChild(li);    // li წაშლა <ul>-დან

let span = document.createElement('span');
span.textContent = 'span';
document.body.appendChild(span);  // დამატება body-ში
document.body.removeChild(span);  // წაშლა body-დან


// parentNode/?/
let div = document.createElement('div');
document.body.appendChild(div);  // div დამატება body-ში
console.log(div.parentNode);      // body იქნება მშობელი ელემენტი

let ul3 = document.createElement('ul');
document.body.appendChild(ul);   // ul დამატება body-ში
console.log(ul.parentNode);       // body იქნება მშობელი

let p = document.createElement('p');
document.body.appendChild(p);    // p დამატება body-ში
console.log(p.parentNode);        // body იქნება მშობელი

let button = document.createElement('button');
document.body.appendChild(button); // button დამატება body-ში
console.log(button.parentNode);      // body იქნება მშობელი

let span = document.createElement('span');
document.body.appendChild(span);   // span დამატება body-ში
console.log(span.parentNode);       // body იქნება მშობელი


// 1. <p> ელემენტის შეცვლა <span>-ით
let p = document.createElement('p');
p.textContent = 'paragrap';
let span = document.createElement
