# Country Log Microservice

This microservice provides endpoints for creating and retrieving country log entries. Users can log the countries they have visited, along with relevant details.

## Overview

This microservice provides a RESTful API to create and retrieve country log entries. Users can add details about the countries they have visited, such as the country name, visit count, reason, and date.

## Endpoints

### Create a Country Log Entry

**Endpoint:** `POST /log`

Create a new country log entry.

Request Body (JSON):
```json
{
  "countryName": "Taiwan",
  "nthTimes": 1,
  "reason": "Vacation",
  "date": "2023-08-19"
}
```

Response:
- 201 Created: Successfully created the entry.
- 400 Bad Request: Failed to create the entry due to invalid syntax.

### Retrieve Country Log Entries

**Endpoint:** `GET /log`

Retrieve a list of country log entries.

Response:
- 200 OK: Successfully retrieved the entries.
- 404 Not Found: No entries found.
- 400 Bad Request: Failed to retrieve entries.

## How the Microservice Works

This microservice is built using Node.js and the Express framework. It utilizes the `express.json()` middleware to parse incoming JSON requests. The microservice consists of two main endpoints:

1. **Create a Country Log Entry:** Users can send a POST request with the required information to create a new country log entry. If the entry is created successfully, a 201 Created status is returned; otherwise, a 400 Bad Request status is returned.

2. **Retrieve Country Log Entries:** Users can send a GET request to retrieve a list of all country log entries. If entries are found, a 200 OK status is returned along with the entries. If no entries are found, a 404 Not Found status is returned; for any other error, a 400 Bad Request status is returned.

## Making GET Requests

To programmatically request data from this microservice, you can use the Fetch API in JavaScript. Here's an example of how to retrieve country log entries:

```javascript
async function fetchCountryLogEntries() {
  try {
    const response = await fetch('/log');
    if (response.status === 200) {
      const data = await response.json();
      // Process and use the retrieved data as needed
    } else if (response.status === 404) {
      console.log('No entries found.');
    } else {
      console.error('Failed to retrieve data (status code:', response.status, ')');
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}

// Call the fetchCountryLogEntries function to initiate the GET request
fetchCountryLogEntries();
```