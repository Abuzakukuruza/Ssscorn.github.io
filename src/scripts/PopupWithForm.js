import { Popup } from './Popup';

export class PopupWithForm extends Popup {
    constructor(popup, nameUser, nameJob, nameSelector, jobSelector, userInfo, api) {
        super(popup, nameUser, nameJob);

        this.form = popup.querySelector('form');
        this.name = this.form.querySelector(nameSelector);
        this.about = this.form.querySelector(jobSelector);
        this.userInfo = userInfo;
        this.api = api;
        this.form.addEventListener('submit', this.handleForm.bind(this));

    }
    handleForm(event) {

        event.preventDefault();
        this.api.sendUserInfo(this.name.value, this.about.value)

        .then(user => {
                this.userInfo.setUserInfo(user._id, user.name, user.about);
                this.userInfo.updateUserInfo();
                this.close()
            })
            .catch(err => {
                console.log(err);
            })
    }
}
// class PopupWithForm extends Popup {
//     constructor(popup, nameUser, nameJob, nameSelector, jobSelector, userInfo, api) {
//         super(popup, nameUser, nameJob);

//         this.form = popup.querySelector('form');
//         this.name = this.form.querySelector(nameSelector);
//         this.about = this.form.querySelector(jobSelector);
//         this.userInfo = userInfo;
//         this.api = api;
//         this.form.addEventListener('submit', this.handleForm.bind(this));

//     }
//     handleForm(event) {

//         event.preventDefault();
//         this.api.sendUserInfo(this.name.value, this.about.value)

//         .then(user => {
//                 this.userInfo.setUserInfo(user._id, user.name, user.about);
//                 this.userInfo.updateUserInfo();
//                 this.close()
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }