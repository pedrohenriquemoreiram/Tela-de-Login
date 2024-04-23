new Vue ({
    el: '#app',
    data: {
        email: '',
        password: '',
        isEmailValid: true,
        allowedDomains: ['gmail.com', 'outlook.com', 'hotmail.com']

    },
    methods: {
        login() {

            if (!this.email.includes('@')) {
                this.isEmailValid = false;
                return 'Email inválido, coloque @ para funcionar.';
            }

            const domain = this.email.split('@')[1];
            if (!this.allowedDomains.includes(domain)) {
                this.isEmailValid = false
                return 'Email inválido';
            }


            this.isEmailValid = true;
            console.log('Email:', this.email);
            console.log('Senha:', this.password)
        }
    }

}) 