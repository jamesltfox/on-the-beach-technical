# On the Beach Technical Assessment

This is a small React application for users to filter through holiday packages. The folloing features are available

1. Sort Holidays Alphabetically
2. Sort by Price
3. Sort by Star rating
4. Filter by start and end dates of a holiday
5. Filter by departing airport

## Running locally 

1. Download or clone the repository into a relevant directory
2. Cd into the directory 
3. Run yarn / npm install to download all dependencies
4. Run yarn / npm build-dev - this copies static assets to the dist folder
5. Run yarn / npm start to begin the development server 
6. Point the browser to http://localhost:8080

## Features

The alphabetical, price and star ratings will toggle between Ascending and Descending values when clicking on the relavant menu item.

If a departure date or particular airport is selected the 3 sorting features will only filter on the available records otherwise the filters will work across the complete data 

If All airports is selected after narrowing the filter, then all records will be returned

