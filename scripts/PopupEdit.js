
class PopupEdit extends Popup {
    constructor(container, validation) {
      super(container);
      this.validation = validation;
    }

    open(e) {
        if (e.target.classList.contains('user-info__edit-button')) {
            this.container.classList.add('popup_is-opened');
      
            const [name, job] = this.form.elements;
      
            name.value = document.querySelector('.user-info__name').textContent;
            job.value = document.querySelector('.user-info__job').textContent;
      
            this.activateButton();    
           
        }
    }

    close(e) {
        if (e.target.classList.contains('popup__close')) {
            this.container.classList.remove('popup_is-opened');
          }
        }
    
  
    submit(e) {
      e.preventDefault();
  
      const [name, job] = this.form.elements;
  
      document.querySelector('.user-info__name').textContent = name.value;
      document.querySelector('.user-info__job').textContent = job.value;
  
      this.container.classList.remove('popup_is-opened');
    }
  
  }