# CSV README
## Project Details
    Name: Server
    Estimated time: 25 hours
    Repo: https://github.com/cs0320-f23/server-anikamahns907-chloenevas

## Design Choices
### Class/Interface Relationships
     Among the classes and Interfaces, the Server class serves as the central 
     class that handles user requests and directs them to the appropriate handlers. 
     LoadCSVHandler held the responsibility for loading and parsing CSV data 
     from a file. ViewCSVHandler then handles the requests to view the content 
     of a loaded CSV file. SearchCSVHandler then manages search requests within 
     the loaded CSV data. BroadbandHandler handles HTTP requests to retrieve
     broadband access data for a specific location. CSVInfo simply stores the 
     parsed CSV data and related information (such as if a CSV has been loaded
     and any headers if applicable). The CensusDataSource interface 
     has a method that provides a percentage based on a given Location record that's
     passed in. The CensusAPI lass implements the CensusDataSource interface for 
     fetching CensusData and ultimately returning the broadband access percentage
     and timestamp of the query.

     In CensusAPI, there's a method that accesses the state codes, and loads those
     into a hashmap. There's another method that takes in a state code and then 
     accesses the county codes for that state and loads those into a hashmap. 
     In getPercentage, the state codes method is called and the hashmap is populated. 
     Using the passed in state argument, the state ID is retrieved using the hashmap 
     and then passed into the county codes method to populate the county codes for that
     state. These state/county ids are then used when requesting the data from the census API.
    
### Data Structures/High Level Explanations
    For CSVInfo the class stores parsed CSV data, headers, and information about 
    whether a CSV file is loaded. It uses various data structures to organize 
    and manage the data efficiently. CensusData represents data related to 
    the broadband access in a specific location. It simply has a percentage parameter
    and timestamp parameter. CensusDataSource is an
    interface defining methods for fetching CensusData. SearchCsv is a utility 
    class that performs searches within the loaded CSV data using data 
    structures optimized for search operations. The Moshi library is used for 
    JSON serialization and deserialization, allowing for easy conversion between
    JSON and Java objects.

## Errors/Bugs
    There are no known errors or bugs at this time. The code appears to be 
    well-strutured and free from any known issues.


## Tests
### TestBroadbandHandler
    This test checks if the BroadBandHandler correctly retrieves and formats 
    broadband access data for a specific location.
### TestCensusAPI
    This test checks if the CensusAPI implementation of CensusDataSource correctly
    fetches censusData.
### TestCensusSource
    This test validates the functionality of the CensusDataSource interface and 
    its methods.
### TestLoadCSVHandler
    This test verifies if the LoadCSVHandler correctly loads and parses CSV
    files, especially with various configurations like weather headers are 
    included or not.
### TestSearchCSVHandler
    The test makes sure that the SearchCSVHandler performs the searches within 
    the loaded CSV data accurately and efficiently.
### TestViewCSVHandler
    This test may check if the ViewCSVHandler correctly displays the content of
    loaded CSV files. 




## How to...
### Run the tests:
    In order to run the tests, use a testing framework such as JUnit. Execute 
    the test classes mentioned above to validate the functionality componentof each.

### Run the program:
    answer here
    To run the program, you need to execute the `main` method of the `Server` 
    class. Ensure that you have the necessary dependencies and configurations 
    set up. Once the server is running, it should respond to incoming HTTP
    requests based on the defined routes and handlers. Access the specified 
    endpoints to interact with the program.

    The user should go to the localhost provided and enter the path followed by
    a question mark, and then the necessary parameters. To include a value with 
    spaces, replace space with "+".

    To search or view a csv, it's necessary that a csv is loaded first. 