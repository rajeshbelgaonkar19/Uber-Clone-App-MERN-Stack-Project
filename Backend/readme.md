# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint registers a new user by accepting their first name, last name, email, and password. It returns a JSON response containing an authentication token and the user details.

## HTTP Method

'POST'
## Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, required): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (minimum 5 characters, must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json
-   `user` (object):{
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "password123"
    }
```

## Response
### Success (201 Created)
- **Description**: User registered successfully.
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Error (400 Bad Request)
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Error (500 Internal Server Error)
- **Description**: An error occurred on the server.
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
