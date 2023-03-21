# ParkingBuddy Application

## Description

-The "ParkingBuddy" application allows Users to store and manage parking lot information for their respective properties. As apartment residents, Users can create accounts which will store their personal and vehicle information, allow them to manage their own parking spot details, as well as submit requests for temporary parking permits for guest spots if available. As apartment administrators, Users can manage all resident information, review and update parking spot details, and approve or deny submitted requests for temporary parking permits. This application was made using Bootstrap for styling, <!--ADD ANY OTHER TECHNOLOGIES AND USAGES HERE, I will be sure to mention them specifically below>.

-Upon landing at the homepage, both resident and administrative Users are greeted and prompted to log into their accounts. The "Log-In" button will direct them to the Log-In Page. 

-Logging-in requires an email and password for authentication, which will employ Passport technology. If password authentication fails, Users will see a message notifying them of the failed log-in. If verified, resident Users will be directed to their Resident portal page, administrative Users will be directed to the Administrative portal page. Users who have not yet created an account will have the option to do so by following the above the log-in box.

-Upon loading of the Resident portal page, a GET request will auto-populate the User's information stored during account creation (Name, Address, Unit Number, Email Address, Vehicle Make, Vehicle Model, Vehicle Color, Vehicle License Plate Number). This data will be inserted using Handlebars partials. From this Resident portal, Users can view all available Guest Parking spot information which will then be listed for their review (retrieved with a GET request and inserted using Handlebars). Users can then submit requests for specific Guest spots which will be sent via POST request to Administrators for approval. Pending requests and status will be listed at the top of the Resident portal. Once they are finished, Users will be able to log-out of the application.

-Upon loading of the Administrative portal page, a GET request will auto-populate a list of pending Guest Parking requests that have been submitted by residents. This data will be inserted using Handlebars partials, and sorted so that the oldest pending request is at the top of the list. From this Administrative portal, Users can view all parking spot details and all resident information (retrieved through GET requests, populated through Handlebars). Using this data, Users can approve or deny pending parking requests, which will trigger PUT requests to update the status of the parking spots. Once they are finished, Users will be able to log-out of the application.

## Usage

Application homepage is deployed live at the following link:

[Heroku](https://serene-cove-30368.herokuapp.com/)

## Page Screenshots <!--Will add once styling is final>

[Home Page Screenshot]()

[Log-In Page Screenshot]()

[Create Account Page Screenshot]()

[Resident Portal Screenshot]()

[Administrative Screenshot]()

## Credits <!--Please add any documentation that you utilized below in the format example shown>

[Documentation Name](link)

[Bootstrap CSS Framework](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

[Bootstrap Studio]

[Handlebars]

[Bcrypt]

[Connect-Flash]

[Connect-Session-Sequelize]

[Express]

[Express-Handlebars]

[Express-Session]

[Mysql2]

[Nodemon]

[Sequelize]