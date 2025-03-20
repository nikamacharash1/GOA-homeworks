// 1
// def set_alarm(employed, vacation):
//     return employed and not vacation
// 2
// def comp(array1, array2):
//     if array1 is None or array2 is None:
//         return False
//     if len(array1) != len(array2):
//         return False
    
//     array1_squared = sorted([x ** 2 for x in array1])
//     array2_sorted = sorted(array2)
    
//     return array1_squared == array2_sorted
// 3
// def update_light(current):
//     if current == "green":
//         return "yellow"
//     elif current == "yellow":
//         return "red"
//     elif current == "red":
//         return "green"
// First Promise
4
const promise1 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Random number greater than 0.5: immediate resolution");
    } else {
      setTimeout(() => resolve("Random number less than or equal to 0.5: delayed resolution"), 2000);
    }
  });
  
  const promise2 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Promise 2 resolved immediately");
    } else {
      setTimeout(() => resolve("Promise 2 resolved after 2 seconds"), 2000);
    }
  });
  
  const promise3 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Promise 3 resolved immediately");
    } else {
      setTimeout(() => resolve("Promise 3 resolved after 2 seconds"), 2000);
    }
  });
