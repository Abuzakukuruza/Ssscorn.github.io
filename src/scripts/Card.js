export class Card {


    create(element) {

        this.element = document.createElement("div");
        this.element.classList.add("place-card");
        this.element.insertAdjacentHTML('beforeend', `
        <div class="place-card__image">
            <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
            <h3 class="place-card__name"></h3>
            <button class="place-card__like-icon"></button>
        </div>`);
        this.element.querySelector(".place-card__name").textContent = element.name;
        this.element.querySelector(".place-card__image").style.backgroundImage = `url(${element.link})`;


        return this.element;



    }
    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
    remove(event) {
        if (event.target.closest('.place-card__delete-icon')) {
            this.deletedCard = event.target.closest('.place-card');
            this.deletedCard.remove();
        }

    }
}
// class Card {


//     create(element) {

//         this.element = document.createElement("div");
//         this.element.classList.add("place-card");
//         this.element.insertAdjacentHTML('beforeend', `
//         <div class="place-card__image">
//             <button class="place-card__delete-icon"></button>
//         </div>
//         <div class="place-card__description">
//             <h3 class="place-card__name"></h3>
//             <button class="place-card__like-icon"></button>
//         </div>`);
//         this.element.querySelector(".place-card__name").textContent = element.name;
//         this.element.querySelector(".place-card__image").style.backgroundImage = `url(${element.link})`;


//         return this.element;



//     }
//     like(event) {
//         if (event.target.classList.contains('place-card__like-icon')) {
//             event.target.classList.toggle('place-card__like-icon_liked');
//         }
//     }
//     remove(event) {
//         if (event.target.closest('.place-card__delete-icon')) {
//             this.deletedCard = event.target.closest('.place-card');
//             this.deletedCard.remove();
//         }

//     }
// }