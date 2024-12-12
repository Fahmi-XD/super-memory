document.addEventListener("DOMContentLoaded", () => {
    class Database {
        constructor() {
            this.database = {
                "913240987": {
                    nama: "Fahmi",
                    isAdmin: true,
                    email: "fahmi@gmail.com",
                    password: "admin123#"
                }
            }
        }

        read(id) {
            if (this.database[id]) {
                return this.database[id]
            }

            return null
        }

        readAll() {
            return this.database || null
        }
    }

    class Client {
        readAll() {
            if (sessionStorage.length) {
                return sessionStorage
            }
            return null
        }

        write(value) {
            Object.keys(value).forEach(v => {
                sessionStorage.setItem(v, value[v])
            })
        }

        generateId(length = 10) {
            const rnd = Math.random().toString().slice(2, length + 2);

            return rnd
        }
    }

    const database = new Database()
    const client = new Client()

    function initUser() {
        const isUser = client.readAll()
        if (!isUser) {
            client.write({
                id: client.generateId(),
                nama: "",
                isAdmin: false,
                email: "",
                password: ""
            })
        }
    }

    initUser()

    function checkUserOrAdmin(id, email, password) {
        const isAvailable = database.read(id);
        if (!isAvailable) {
            return false;
        }
        
        if (isAvailable.email != email || isAvailable.password != password) {
            return false;
        }

        return isAvailable;
    }
})