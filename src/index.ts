import { User } from './User';
import * as readline from 'readline';

const userAuth = new User();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptUser = () => {
    rl.question("Would you like to (register/login)? ", (action) => {
        if (action.toLowerCase() === 'register') {
            rl.question("Enter username: ", (username) => {
                rl.question("Enter password: ", (password) => {
                    console.log(userAuth.register(username, password));
                    promptUser(); 
                });
            });

        } else if (action.toLowerCase() === 'login') {
            rl.question("Enter username: ", (username) => {
                rl.question("Enter password: ", (password) => {
                    console.log(userAuth.login(username, password));
                    promptUser(); 
                });
            });

        } else {
            console.log("Invalid option. Please type 'register' or 'login'.");
            promptUser(); 
        }
    });
};

promptUser();
