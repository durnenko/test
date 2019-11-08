class TabList {
    constructor(buttonsContainer, tabs) {
      this.buttonsContainer = buttonsContainer;
      this.tabs = tabs;
      
      this.buttonsContainer.addEventListener('click', event => {
        const index = event.target.closest('.button').dataset.value;
        
        this.openTab(index);
      });
    }
    
    openTab(index) {
      this.tabs.querySelector('.active').classList.remove('active');
      this.tabs.querySelector(`.tab--${index}`).classList.add('active');
    }
  }
  
  document.addEventListener('DOMContentLoaded', ()=>{
    const buttonsContainer = document.querySelector('.cardTabs_buttons');
    const tabs             = document.querySelector('.cardTabs_tabs');
    
    const tabList = new TabList(buttonsContainer, tabs);
  })