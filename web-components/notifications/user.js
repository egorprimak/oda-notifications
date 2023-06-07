class User {
    constructor(id, name, allowAdmin) {
        this.id = id;
        this.email = name;
        this.isAdmin = allowAdmin || false;
    }
}