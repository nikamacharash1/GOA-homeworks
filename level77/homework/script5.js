// 5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" ->
//  document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)

function getElementByIdAndModify(id) {
    const element = document.getElementById(id);  

    if (!element) {
        console.log(`Element with ID "${id}" not found.`);
        return;
    }

    element.style.color = 'red';             
    element.style.backgroundColor = 'yellow'; 
    element.textContent = 'goal oriented academy'; 

    console.log(`Element with ID "${id}" has been modified.`);
}

getElementByIdAndModify("first");
