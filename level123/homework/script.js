// 5. 
function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), 2000);
    });
}

task5().catch(console.error);

// 6.
function task6() {
    return new Promise(resolve => {
        const delay = Math.random() * 4000 + 1000;
        setTimeout(() => resolve("Task 1 complete"), delay);
    });
}

// 7. 
function task7() {
    return new Promise(resolve => {
        const delay1 = Math.random() * 2000 + 1000;
        setTimeout(() => {
            console.log("First");
            const delay2 = Math.random() * 2000 + 1000;
            setTimeout(() => console.log("Second"), delay2);
        }, delay1);
    });
}

task7();

// 8. 
function task8() {
    return new Promise((_, reject) => {
        const delay = Math.random() * 3000 + 1000;
        setTimeout(() => reject("Task 3 failed"), delay);
    });
}

task8().catch(console.error);

// 9. 
function task9() {
    return new Promise(resolve => {
        const delay = Math.random() * 4000 + 1000;
        setTimeout(() => {
            resolve(Math.random() > 0.5 ? "Task 1 complete" : "Task 1 was quick");
        }, delay);
    });
}

// 10. 
function task10() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 3000 + 1000;
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Task 3 failed") : resolve("Task 3 complete");
        }, delay);
    });
}

task10().catch(console.error);
