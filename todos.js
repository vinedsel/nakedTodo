let input = prompt("What would you like to do?");

const todos = ['Add a new task'];

while(input !== 'quit' && input !== 'q') {
    if(input === 'list' || input === 'l') {
        console.log('*************');
        for(i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************');
    };
    input = prompt("What would you like to do?");
}
console.log("Quit successful");

 