//Редактирование профиля

export class UserInfo {
    constructor(container) {
        this.nameContainer = container.querySelector('.user-info__name');
        this.jobContainer = container.querySelector('.user-info__job');
        this.avatarContainer = container.querySelector('.user-info__photo');
    }


    userAvatar(avatar) {
        this.avatar = avatar;
        this.avatarContainer.style.backgroundImage = `url(${this.avatar})`;
    }

    setUserInfo(_id, name, about) {
        this._id = _id;
        this.name = name;
        this.about = about;

    }

    updateUserInfo() {

        this.nameContainer.textContent = this.name;
        this.jobContainer.textContent = this.about;
    }
}
// //Редактирование профиля

// class UserInfo {
//     constructor(container) {
//         this.nameContainer = container.querySelector('.user-info__name');
//         this.jobContainer = container.querySelector('.user-info__job');
//         this.avatarContainer = container.querySelector('.user-info__photo');
//     }


//     userAvatar(avatar) {
//         this.avatar = avatar;
//         this.avatarContainer.style.backgroundImage = `url(${this.avatar})`;
//     }

//     setUserInfo(_id, name, about) {
//         this._id = _id;
//         this.name = name;
//         this.about = about;

//     }

//     updateUserInfo() {

//         this.nameContainer.textContent = this.name;
//         this.jobContainer.textContent = this.about;
//     }
// }