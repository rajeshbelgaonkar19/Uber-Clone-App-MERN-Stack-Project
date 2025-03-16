# Backend API Documentation

## User Registration Endpoint

### Endpoint
`POST /users/register`

### Description
Registers a new user by creating a user account with the provided information. It returns a JSON response containing an authentication token and user details.

### HTTP Method
`POST`

### Request Body
The request body should be a JSON object with the following properties:
- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
#### Success (201 Created)
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

#### Error Responses
- **400 Bad Request**: Validation error or missing required fields.
- **500 Internal Server Error**: An error occurred on the server.

---

## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method
`POST`

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
#### Success (200 OK)
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

#### Error Responses
- **400 Bad Request**: Validation error or missing required fields.
- **401 Unauthorized**: Invalid email or password.
- **500 Internal Server Error**: An error occurred on the server.

---

## Get User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
Retrieves the profile information of the currently authenticated user.

### HTTP Method
`GET`

### Authentication Required
Yes (JWT Token in Authorization header)

### Response
#### Success (200 OK)
```json
{
  "id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error Responses
- **401 Unauthorized**: Authentication token is missing or invalid.
- **500 Internal Server Error**: An error occurred on the server.

---

## User Logout Endpoint

### Endpoint
`POST /users/logout`

### Description
Logs out the current user and blacklists the token provided in the request.

### HTTP Method
`POST`

### Authentication Required
Yes (Valid JWT Token is required in Authorization header or cookie)

### Response
#### Success (200 OK)
```json
{
  "success": true,
  "message": "User logged out successfully"
}
```

#### Error Responses
- **401 Unauthorized**: Authentication token is missing or invalid.
- **500 Internal Server Error**: An error occurred on the server.

---

## Captain Registration Endpoint

### Endpoint
`POST /captains/register`

### Description
Registers a new captain by creating a captain account with the provided information. It returns a JSON response containing an authentication token and captain details.

### HTTP Method
`POST`

### Request Body
The request body should be a JSON object with the following properties:
- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, required): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle capacity (minimum 1).
  - `vehicleType` (string, required): Vehicle type (must be one of 'car', 'motorcycle', 'auto').

#### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
#### Success (201 Created)
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Responses
- **400 Bad Request**: Validation error or missing required fields.
- **500 Internal Server Error**: An error occurred on the server.

