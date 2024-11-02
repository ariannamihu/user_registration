"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const readline = __importStar(require("readline"));
const userAuth = new User_1.User();
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
        }
        else if (action.toLowerCase() === 'login') {
            rl.question("Enter username: ", (username) => {
                rl.question("Enter password: ", (password) => {
                    console.log(userAuth.login(username, password));
                    promptUser();
                });
            });
        }
        else {
            console.log("Invalid option. Please type 'register' or 'login'.");
            promptUser();
        }
    });
};
promptUser();
