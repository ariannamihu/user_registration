"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.users = new Map();
    }
    register(username, password) {
        if (this.users.has(username)) {
            return "User already exists!";
        }
        this.users.set(username, password);
        return "User registered successfully!";
    }
    login(username, password) {
        const storedPassword = this.users.get(username);
        if (storedPassword && storedPassword === password) {
            return "Login successful!";
        }
        return "Invalid username or password.";
    }
}
exports.User = User;
