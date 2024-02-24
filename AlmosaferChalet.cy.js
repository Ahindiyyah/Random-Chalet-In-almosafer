/// <reference types="cypress" />
import 'cypress-xpath';

describe('', () => {
    it('', () => {
        cy.visit('https://www.almosafer.com/ar?ncr=1');
        cy.get('#uncontrolled-tab-example-tab-chalets').click();
        cy.get('.sc-kvZOFW').click()
        cy.contains('المدينة المنورة').click()
        cy.get('[data-testid="searchBox_searchChaletsButton"]').click()
        cy.xpath('//div[@class="SearchResultsListContainer__Wrapper-sc-4gdcc2-0 bcjehR"]/div[2]').should('be.visible').click()
        cy.get('[data-testid="searchBox_checkInDate"] > .DesktopDatePickerstyles__DateString-sc-de798v-7').click()
       
                for (let i = 0; i < 2; i++) {
                    cy.get('.DayPicker-Body > >.DayPicker-Day')
                    .not('.DayPicker-Day--blocked, .DayPicker-Day--outside,.DayPicker-Day--selected, .DayPicker-Day--disabled')
                    .then(($days) => {
                    const DateOfBooking = $days.length;
                    let Randomindex = Math.floor(Math.random() * DateOfBooking);
                    const randomDay = $days.eq(Randomindex);
                    cy.wrap(randomDay).click();


                });
                }


            
    });
});