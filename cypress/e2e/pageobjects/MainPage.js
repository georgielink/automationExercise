import CommonPage from "./commonPage";

class MainPage extends CommonPage {
    
    get testList() {
      return cy.get('.item.active .test_cases_list');
    }
  
    clickTestListButton() {
      this.testList.click();
    }
  }
  
  export default MainPage;