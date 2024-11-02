export class User {
    private users: Map<string, string>;

    constructor() {
        this.users = new Map();
    }

    register(username: string, password: string): string {
        if (this.users.has(username)) {
            return "User already exists!";
        }
        this.users.set(username, password);
        return "User registered successfully!";
    }

    login(username: string, password: string): string {
        const storedPassword = this.users.get(username);
        if (storedPassword && storedPassword === password) {
            return "Login successful!";
        }
        return "Invalid username or password.";
    }
}
