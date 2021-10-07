Feature: Allow the user to select products and Validate products on Payments page


  Scenario Outline: As a user, I add the products to the cart

    Given The Home page is loaded
    When I clicked on Signin link
    And I login with <username> and <password>
    And I search for the <product>
    And I add <quantity> of <product> to the cart of <size>
    And I proceed to cart and checkout and then payments page
    Then  I should have products in payments page <product> and <quantity>
 

    Examples:
      | username         | password            | product                     | quantity | size |
      | Stowipro@123.com | towipro_123@123.com | Faded Short Sleeve T-shirts | 2        | L    |
