Feature: e2e


  Scenario: Validating first page
    When I open application
    Then I see "Conduit" in the title
    
  Scenario: Validate application
    When I open application
    And Select test from tags
    Then I should be able to see comments with test
