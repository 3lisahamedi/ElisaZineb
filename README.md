## ZIEL CARS

ZINEB&ELISA is a car rental platform, supplier-oriented, with a backend for managing car fleets and bookings, as well as a frontend and a mobile app for renting cars.

ZINEB&ELISA is designed to work with multiple suppliers. Each supplier can manage his car fleet and bookings from the backend. BookCars can also work with only one supplier and can be used as a car rental aggregator.

From the backend, admins can create and manage suppliers, cars, locations, customers and bookings.

When new suppliers are created, they receive an email prompting them to create an account in order to access the backend and manage their car fleet and bookings.

Customers can sign up from the frontend or the mobile app, search for available cars based on pickup and drop-off points and time, choose a car and complete the checkout process.

A key design decision was made to use TypeScript instead of JavaScript due to its numerous advantages. TypeScript offers strong typing, tooling, and integration, resulting in high-quality, scalable, more readable and maintainable code that is easy to debug and test.


## Features

* Supplier management
* Ready for one or multiple suppliers
* Car fleet management
* Booking management
* Payment management
* Customer management
* Multiple payment methods (Credit Card, PayPal, Google Pay, Apple Pay, Link, Pay Later)
* Operational Stripe Payment Gateway
* Multiple language support (English, French)
* Multiple pagination options (Classic pagination with next and previous buttons, infinite scroll)
* Responsive backend and frontend
* Native Mobile app for Android and iOS with single codebase
* Push notifications
* Secure against XSS, XST, CSRF and MITM
* Supported Platforms: iOS, Android, Web, Docker

## Live Demo

### Frontend
* URL: https://BookCars.v6.rocks:3002/
* Login: jdoe@BookCars.ma
* Password: B00kC4r5

### Backend
* URL: https://BookCars.v6.rocks:3001/
* Login: admin@BookCars.ma
* Password: B00kC4r5

### Mobile App

* [Download APK](https://github.com/aelassas/BookCars/releases/download/v4.1/BookCars-4.1.apk)
* Login: jdoe@BookCars.ma
* Password: B00kC4r5
