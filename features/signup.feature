Feature: Allow the user to Signup


  Scenario Outline: As a user, I can Register

    Given The Home page is loaded
    When I clicked on Signin link
    When I signin with <email> and <password> with <firstname> and <lastname>
    Then I should see a flash message saying <message>
    And I Logout from application

    Examples:
      | email            | password            | firstname | lastname | message                  |
      | Xtowipro@123.com | towipro_123@123.com | FirstName | LastName | Welcome to your account. |


