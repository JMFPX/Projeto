const username = document.getElementById('username')
        const password = document.getElementById('password')
        const check = document.getElementById('check')
        const spinner = document.getElementById('spinner')
        const button = document.getElementById('connect')

        var username_valid = false;
        var password_valid = false;

        username.oninput = function() {
            if (this.value.length > 4) {
                username_valid = true
            } else {
                username_valid = false
            }
            form_valid(username_valid, password_valid)
        }

        password.oninput = function() {
            if (this.value.length > 8) {
                password_valid = true
            } else {
                password_valid = false
            }
        }