# The Tee-Time Scheduler

## Table of Contents:

1. [Description](#description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [License](#License)
7. [GitHub](#GitHub)
8. [DevTeam](#DevTeam)
9. [Contact](#Contact)

## Description

This application is a scheduler for a customer facing business. Many businesses must schedule their clients and customers for events, meetings, and services. This application is a valuable and useful scheduler for those businesses. Specifically, this is an application to schedule tee times for a golf course, The Bushwood Country Club. The application is intended for use by a receptionist or any business employee responsible for scheduling customers.

Here's a User Story for the Application:
AS A business or business employee,
I WANT to be able to schedule my customers and clients for events, appointments, or services,
SO THAT my customers can flow through my business and my business can thrive.

This app:

- Uses ReactJS
- Uses a Node/Express server
- Is backed by a MondgoDB database
- Includes a Post and Get routes to schedule events on the calendar and store them in the MongoDB database
- Is deployed to Heroku
- Utilizes FullCalendar and TailwindCSS
- Authenticates users with Google OAuth
- Uses an MVC paradigm to order directories
- Features code tested with the Travis linter to ensure quality coding standards
- Protects API keys in Node with environment variables

Sceenshots
![Here is a screenshot of the Tee Time Scheduler Log On Page.](/client/public/images/logon.jpg)

![Here is a screenshot of the Tee Time Scheduler Welcome Page.](/client/public/images/welcome.jpg)

![Here is a screenshot of the Tee Time Scheduler Calendar Page.](/client/public/images/calendar.jpg)
<br>
[Here is a link to the deployed page.](https://bushwood-teetime.herokuapp.com/)<br>

## Installation

The application requires no installation if you're simply using the application on the heroku site. If you fork the repo you will need to install the application's dependencies including node and MongoDB.

## Usage

Navigate to the application's deployed web address.
Logging on to the page requires a GMail/Google account because the application utilizes Google OAuth to authenticate users.
Useful information about the business appears on the application's welcome page.
The calendar page is where employees can schedule customers and clients.
When a client or customer is successfully scheduled, a confirmation page appears and useful, relevant business information is provided to the employee.

## Contributing

Please open an issue to discuss any contributions you would like to propose.

## Tests

Please update any tests as appropriate.

## License

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

## GitHub

https://github.com/flynn0087/BWCC_Teetime

## DevTeam
This is the Dev Team:
[Kristina Hamilton's Github.](https://github.com/Kay0s)
[Demitri Dillard's Github.](https://github.com/Meechlouch)
[Ben Flynn's Github.](https://github.com/flynn0087)
[Nate Larson's Github.](https://github.com/ironicminer)
[Esmond Kim's Github.](https://github.com/EsmondKim)

## Contact

Contact the dev team via the repo.



