// /8) შევქმნათ ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი ან წინადადება (სტრინგი) 
// და უნდა დააბრუნოს ყველაზე დიდი და ყველაზე პატარა ნაპოვნი სიტყვა (მასივის ფორმატში) ( [ ყველაზე პატარა, ყველაზე დიდი ] )
function findMinMaxWords(text) {
    const words = text.split(/\s+/);  
    let minWord = words[0];
    let maxWord = words[0];
        for (let i = 1; i < words.length; i++) {
        if (words[i].length < minWord.length) {
            minWord = words[i];  
        }
        if (words[i].length > maxWord.length) {
            maxWord = words[i];  
        }
    }
    
    return [minWord, maxWord];
}

const text = "goa is best academy in the world.";
const result = findMinMaxWords(text);
console.log(result);  
