## Fitness App API

- This is a Node.js API server for a fitness app that allows users to create and manage fitness programs and exercises.
  Technologies Used

      Node.js
      Express.js
      MongoDB
      Mongoose

## Getting Started

. To run this project on your local machine, you'll need to follow these steps:

- Clone this repository to your local machine using git clone https://github.com/satyaveer1994/fitness-app.git
- Install the project dependencies by running npm install
- Start the server by running nodemon src/index.js
- The API server will now be running on http://localhost:3000

# API Endpoints

Fitness Programs

    POST /api/fitness-programs - Create a new fitness program
    GET /api/fitness-programs/:id - Get a fitness program by ID
    PUT /api/fitness-programs/:id - Update a fitness program by ID
    DELETE /api/fitness-programs/:id - Delete a fitness program by ID

# Exercises

    POST /api/exercises - Create a new exercise
    DELETE /api/exercises/:id - Delete an exercise by ID

# Data Models

Fitness Program

json

    {
      "programName": "Beginner Workout Plan",
      "exercises":["644388358e3cf573eea7e2a0", "644388708e3cf573eea7e2a2"

     ]
    }

# Response

     {
       "programName": "Beginner Workout Plan",
       "exercises": [
        "644388358e3cf573eea7e2a0",
        "644388708e3cf573eea7e2a2"
       ],
        "_id": "64439ac44947a168bdd1447b",
         "__v": 0
     }

# Exercise

json

    {
       "exerciseName": "Standing overhead dumbbell presses",
       "exerciseLength": 7
    }

# Response

     {
       "exerciseName": "Standing overhead dumbbell presses",
        "exerciseLength": 7,
        "_id": "644388c18e3cf573eea7e2a8",
        "__v": 0
     }

## Validation

This API server uses the custom validation of incoming requests. Invalid requests will receive a 400 Bad Request response with a JSON message describing the error.
Error Handling

This API server uses a centralized error handling middleware that will catch and handle all errors thrown by the application. The middleware will return a JSON response with a message property containing a description of the error.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Distributed under the MIT License. See LICENSE for more information.

## Conclusion

This README.md file serves as a guide to help users understand the purpose, functionality, and implementation of the Fitness App API server. By following the steps outlined in this document, users can easily set up, deploy, and test the API server, and understand the security and validation measures that have been put in place to ensure its reliability and robustness.
