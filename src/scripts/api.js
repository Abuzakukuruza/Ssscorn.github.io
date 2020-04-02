export class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;

    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
                headers: this.headers

            })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject()
                }
                return res.json();
            })

    }

    getUser() {
        return fetch(`${this.baseUrl}/users/me`, {
                headers: this.headers

            })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject()
                }
                return res.json();
            })


    }

    sendUserInfo(name, about) {


        return fetch('https://praktikum.tk/cohort8/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: '72c21e45-064e-408d-8880-9cc3f4690a39',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, about })
            })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject()
                }
                return res.json();
            })

    }
}
