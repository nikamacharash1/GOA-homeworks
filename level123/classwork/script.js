// dv
// 1
const task1 = new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 complete"), 2000);
  });
  
  // 2
  const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
  }).catch((error) => console.log(error));
  
  // 3
  const task3 = new Promise((resolve) => resolve(5));
  task3
    .then((num) => num * 2)
    .then((doubled) => console.log(doubled));
  
  // 4
  function task4() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("First"), 2000);
    });
  }
  
  task4()
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
    })
    .then((message) => console.log(message));
  
  // 5
  function task5() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    });
  }
  
  task5().catch((error) => console.log(error));
  