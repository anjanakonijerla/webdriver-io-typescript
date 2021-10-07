Feature: Allow the user to login


  Scenario Outline: As a user, I can log into the secure area

    Given The Home page is loaded
    When I clicked on Signin link
    When I login with <username> and <password>
    Then I should see a account name saying <name>
    And I Logout from application


    Examples:
      | username         | password            | name               |
      | Ztowipro@123.com | towipro_123@123.com | FirstName LastName |