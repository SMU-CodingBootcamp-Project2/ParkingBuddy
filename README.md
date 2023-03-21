# ParkingBuddy Application

## Description

-The "ParkingBuddy" application allows Users to store and manage parking lot information for their respective properties. As apartment residents, Users can create accounts which will store their personal and vehicle information, allow them to manage their own parking spot details, as well as submit requests for temporary parking permits for guest spots if available. As apartment administrators, Users can manage all resident information, review and update parking spot details, and approve or deny submitted requests for temporary parking permits. 

-Upon landing at the homepage, both resident and administrative Users are greeted and prompted to log into their accounts. The "Log-In" button will direct them to the Log-In Page. 

-Logging-in requires an email and password for authentication. If password authentication fails, Users will see a message generated using Connect-Flash notifying them of the failed log-in usin. If verified, resident Users will be directed to their Resident portal page, administrative Users will be directed to the Administrative portal page. Passwords are protected using Bcrypt funcationality.

-Upon loading of the Resident portal page, a GET request will auto-populate the logged-in User's information stored during account creation (Name, Address, Unit Number, Email Address, Vehicle Make, Vehicle Model, Vehicle Color, Vehicle License Plate Number). This data will be inserted using Handlebars templates. Users can then submit requests for available Guest spots which will be sent via POST request to Administrators for approval. Pending requests and status will be listed at the top of the Resident portal. Once they are finished, Users will be able to log-out of the application.

-Upon loading of the Administrative portal page, a GET request will auto-populate a list of pending Guest Parking requests that have been submitted by residents. This data will be inserted using Handlebars templates via POST requests, and sorted so that the oldest pending request is at the top of the list. From this Administrative portal, Users can approve or deny pending parking requests, which will trigger PUT requests to update the status of the parking spots. Once they are finished, Users will be able to log-out of the application.

-This application was made using Bootstrap Studio for wire-framing, the Bootstrap framework for styling, Nodemon for server management, Connect-Flash for incorrect log-in credentials, Bcrypt for protecting password information, routing functionality and database management using Sessions, Express Sessions, mysql2, and Sequelize.

## Usage

ParkingBuddy is deployed live through [Heroku](https://serene-cove-30368.herokuapp.com/)

[Project GitHub Repository](https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy)

## Page Screenshots

[Homepage Screenshot](public/images/ParkingBuddyHPScreenShot.png)

[Log-In Page Screenshot](public/images/ParkingBuddyLogInScreenShot.png)

[Create Account Page Screenshot](public/images/ParkingBuddyCreateScreenshot.png)

[Resident Portal Screenshot](public/images/ParkingBuddyUserScreenShot.png)

[Administrative Screenshot](public/images/ParkingBuddyAdminScreenShot.png)

## Presentation

[ParkingBuddy Prezi](https://prezi.com/view/fqZcOHlV6YtWwK6zb3Fa/)

## Credits

[Bootstrap CSS Framework](https://getbootstrap.com/docs/5.3/getting-started/introduction/)