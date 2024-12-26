describe("auth", ()=>{
    it("Login is visible", ()=>{
        cy.visit("http://localhost:5173/login");
        
        cy.get('input[type="Email"]').type("test@test.com");
        cy.get('input[type="Password"]').type("ABC-123");
        cy.get("button").contains("Login").click();
        
    });
});