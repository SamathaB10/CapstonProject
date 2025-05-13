//redbus application
describe('redbus', function () {
    it('redbus', function () {
        cy.visit("https://www.redbus.com/")
        cy.get('h1[class="hero-tag"]').should('be.visible')
        cy.get('h1[class="hero-tag"]').should('have.text', "Book your journey now with the world's largest bus platform")
        describe('RedBus Date Picker - Dynamic Date', () => {
            beforeEach(() => {
                cy.viewport(1280, 720)
            })
            it('Selects a date dynamically from today', () => {
                cy.visit('https://www.redbus.com/');
                cy.get(".rdc-db").eq(0).click({ force: true });
                var m = 'August 2026'
                function checkCalendar(m)
                {
                    cy.get(".DatePicker__DoubleCalendar-sc-1x9sb82-2 .DatePicker__MainBlock-sc-1x9sb82-1").each(($a, index, $list) =>
                    {
                        const h = Cypress.$($a).find(">:nth-child(1) .DayNavigator__IconBlock-sc-1tlckkc-2").text().trim();
                        cy.log('Extracted text: ' + h);
                        if (h === m)
                        {
                            cy.log('hi')
                            cy.wrap($a).find(".DayTiles__CalendarDaysBlock-sc-14em0t0-0 .DayTiles__CalendarDaysSpan-sc-14em0t0-1").each((e1) =>
                            {
                                const date = e1.text()
                                if (date === '9')
                                {
                                    cy.wrap(e1).click({ force: true })            
                                }
                            })
                        }
                        else if(index>=1)
                        {
                            cy.get("#next").click({ force: true })
                            checkCalendar(m);
                        }
                    })
                }
                checkCalendar(m);
            })
        })


    })
})