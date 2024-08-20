# WildLens Tours Backend
## Base URL
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

  ## Register User
  <ul>
    <li>Method: POST</li>
    <li>/api/auth/register-user</li>
    <li>By using this end point we can register as regular User or Admin</li>
  </ul>

  ## Login User
  <ul>
    <li>Method: POST</li>
    <li>/api/auth/login-user</li>
    <li>By using the above end point we can login as regular User or Admin</li>
  </ul>

  ## Google OAuth
  <ul>
  <li>Method: POST</li>
  <li>/api/auth/google-auth</li>
  <li>By using the above end point we can register and login as regular User or Admin</li>
  </ul>

  ## Forgot Password
  <ul>
    <li>Method: POST</li>
    <li>api/auth/forgot-password</li>
    <li>By using the above end point we can send a email contain's a link for the reset password to registered email</li>
  </ul>

  ## Reset Password
<ul>
  <li>Method: POST</li>
  <li>/api/auth/reset-password/:id/:token</li>
  <li>By using the above end point we can reset the password</li>
</ul>

 ## Update/Edit User
 <ul>
   <li>Method: PUT</li>
   <li>/api/user/update-user/:id</li>
   <li>By using the above end point we can update/edit the user Profile and also can update the profile picture</li>
 </ul>

 ## Delete User
 <ul>
   <li>Method: DELETE</li>
   <li>/api/user/delete-user/:id</li>
   <li>By using the above end point we can delete the user account</li>
 </ul>

 ## Create Tour's
 <ul>
   <li>Method: POST</li>
   <li>/api/tour/create-tours</li>
   <li>By using the above end point Admin only can create tour's package</li>
 </ul>

 ## Get All Tours
 <ul>
   <li>Method: GET</li>
   <li>/api/tour/getAllTours</li>
   <li>By using the above end point we get and display the tour's in landing page</li>
 </ul>

 ## Get Tours By Id
 <ul>
   <li>Method: GET</li>
   <li>/api/tour/getToursById/:id</li>
   <li>By using the above end point we get a tour by it's id</li>
 </ul>

 ## Update/Edit Tours
 <ul>
   <li>Method: PUT</li>
   <li>/api/tour/update-tours/:id</li>
   <li>By using the above end point Admin only can update/edit the tour's</li>
 </ul>

 ## Delete Tours
 <ul>
   <li>Method: DELETE</li>
   <li>/api/tour/delete-tours/:id</li>
   <li>By using the above end point Admin only can delete the tours</li>
 </ul>

 ## Create Tour Guide 
 <ul>
   <li>Method: POST</li>
   <li>/api/guide/create-tour-Guide</li>
   <li>By using the above end point Admin can only create the Guide</li>
 </ul>

 ## Get All Guide
 <ul>
   <li>Method: GET</li>
   <li>/api/guide/getAllTourGuides</li>
   <li>BY using the above end point user can get and view all Tour Guide</li>
 </ul>

 ## Create Booking
 <ul>
   <li>Method: POST</li>
   <li>/api/booking/create-booking</li>
   <li>By using the end point user can book a tour</li>
 </ul>

 ## Get All Booking By Id
 <ul>
   <li>Method: GET</li>
   <li>/api/booking/getAllBooking/:id</li>
   <li>By using the above end point the user can view the booking's againest the user</li>
 </ul>

 ## Create Review
 <ul>
   <li>Method: POST</li>
   <li>/api/review/create-review</li>
   <li>By using the above end point the user can create/give a review against the tour's</li>
 </ul>

 ## Get Review
 <ul>
   <li>Method: GET</li>
   <li>/api/review/getTourReviews/:id</li>
   <li>Above end point is used to calculate the average rating's and use to display the ratings against the tour's</li>
 </ul>
 

