// დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,
//   წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)
// ( პითონში და ასევე ჯავასკიპტში ) 
// ( სამკუთხედზე გამოიყენეთ ჰერონის ფორმულა )
function countAreaRectangle(length, width) {
    let area = length * width;
    return area;
}

function countAreaCircle(radius) {
    let area = 3.14159 * radius * radius;
    return area;
}

function countAreaTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}