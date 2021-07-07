Feature: Search Functionality

  @Smoke
  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on "buy+sell" tab
    And I click Search Cars
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make          | model       | location          | price    |
      | Land Rover    | Range Rover | SA - All          | $100,000 |
      | Honda         | CR-V        | NSW - Far West    | $60,000  |
      | Mercedes-Benz | E250        | SA - All          | $50,000  |
      | Jeep          | Cherokee    | SA - Adelaide     | $30,000  |
      | Volvo         | V40         | SA - All          | $100,000 |
      | Mazda         | BT-50       | WA - Country East | $80,000  |


