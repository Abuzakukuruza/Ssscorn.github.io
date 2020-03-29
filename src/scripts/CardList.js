export class Cardlist {
    constructor(container, card, api, userInfo) {
        this.container = container;
        this.card = card;
        this.api = api;
        this.userInfo = userInfo;

    }
    addCard(element) {

        const card = this.card.create(element);
        this.container.append(card);

    }
    render(array) {

        for (const item of array) {
            const element = { name: item.name, link: item.link };
            this.addCard(element);
        };
    }
}


//--------------------------------------------
//backup

// class Cardlist {
//     constructor(container, card) {
//         this.container = container;

//         this.card = card;

//     }
//     addCard(element) {

//         const card = this.card.create(element);
//         this.container.append(card);

//     }
//     render(array) {

//         for (const item of array) {
//             const element = { name: item.name, link: item.link };
//             this.addCard(element);
//         };
//     }
// }