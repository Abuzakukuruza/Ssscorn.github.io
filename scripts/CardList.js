class CardList {
  constructor(container, cardElement) {
    this.container = container;
    this.cardElement = cardElement;
  }

  addCard(name, link) {     

    const card = this.cardElement.template(name, link);
    this.container.insertAdjacentHTML('beforeend', card);
  }


  render(arr) {   
    for (let item of arr) {
      this.addCard(item.name, item.link);
    }
  }

} 