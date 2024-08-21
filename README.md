# WildLens Tours Backend

## Base URL
The base URL for the WildLens Tours backend is:

https://wildlens-tours-backend-culd.onrender.com

## The above mentioned URL is the base URL of WildLens Tours

## By using this API we can do the below
<ul>
  <li>We can Register the user as Admin or Normal user
  <li>Admin only has the access to Create, update/Edit, Delete the tours</li>
<li>He can also able create the Guide also</li>
<li>For the Admin access he/she need the backend access or ask a permision who has the backend permision</li></li>
  <li>User can login
  <li>The loged in user can view tour packages, can book the tour package</li>
  <li>User can also make booking</li>
<li>And also can view the bookings he/she make previously</li>
<li>User can also give review and see the review already given</li>
<li>User can also edit their profile and update the profile picture</li>
<li>And also the user can delete their account</li>
<li>User can also logout from the account</li></li>
  </ul>

  
## API Overview

The WildLens Tours API provides endpoints for managing users, tours, bookings, and reviews. Below is a summary of the available endpoints and their functionalities.

### User Management

- **Register User**
  - **Method:** POST
  - **Endpoint:** `/api/auth/register-user`
  - **Description:** Register as a regular user or admin. 

- **Login User**
  - **Method:** POST
  - **Endpoint:** `/api/auth/login-user`
  - **Description:** Log in as a regular user or admin.

- **Google OAuth**
  - **Method:** POST
  - **Endpoint:** `/api/auth/google-auth`
  - **Description:** Register and log in using Google OAuth.

- **Forgot Password**
  - **Method:** POST
  - **Endpoint:** `/api/auth/forgot-password`
  - **Description:** Send a password reset link to the registered email.

- **Reset Password**
  - **Method:** POST
  - **Endpoint:** `/api/auth/reset-password/:id/:token`
  - **Description:** Reset the password using the provided token.

- **Update/Edit User**
  - **Method:** PUT
  - **Endpoint:** `/api/user/update-user/:id`
  - **Description:** Update/edit user profile and profile picture.

- **Delete User**
  - **Method:** DELETE
  - **Endpoint:** `/api/user/delete-user/:id`
  - **Description:** Delete the user account.

### Tour Management

- **Create Tours**
  - **Method:** POST
  - **Endpoint:** `/api/tour/create-tours`
  - **Description:** Admin only endpoint for creating tour packages.

- **Get All Tours**
  - **Method:** GET
  - **Endpoint:** `/api/tour/getAllTours`
  - **Description:** Retrieve and display all tours on the landing page.

- **Get Tour By ID**
  - **Method:** GET
  - **Endpoint:** `/api/tour/getToursById/:id`
  - **Description:** Retrieve a specific tour by its ID.

- **Update/Edit Tours**
  - **Method:** PUT
  - **Endpoint:** `/api/tour/update-tours/:id`
  - **Description:** Admin only endpoint for updating tour details.

- **Delete Tours**
  - **Method:** DELETE
  - **Endpoint:** `/api/tour/delete-tours/:id`
  - **Description:** Admin only endpoint for deleting tours.

### Tour Guide Management

- **Create Tour Guide**
  - **Method:** POST
  - **Endpoint:** `/api/guide/create-tour-Guide`
  - **Description:** Admin only endpoint for creating tour guides.

- **Get All Guides**
  - **Method:** GET
  - **Endpoint:** `/api/guide/getAllTourGuides`
  - **Description:** Retrieve and view all tour guides.

### Booking Management

- **Create Booking**
  - **Method:** POST
  - **Endpoint:** `/api/booking/create-booking`
  - **Description:** Book a tour.

- **Get All Bookings By User ID**
  - **Method:** GET
  - **Endpoint:** `/api/booking/getAllBooking/:id`
  - **Description:** Retrieve all bookings made by a specific user.

### Review Management

- **Create Review**
  - **Method:** POST
  - **Endpoint:** `/api/review/create-review`
  - **Description:** Submit a review and rating for a tour.

- **Get Reviews**
  - **Method:** GET
  - **Endpoint:** `/api/review/getTourReviews/:id`
  - **Description:** Retrieve reviews for a specific tour and calculate the average rating.

## Backend Deployment Link
The backend is deployed at:
 https://wildlens-tours-backend-culd.onrender.com

