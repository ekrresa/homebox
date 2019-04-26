# HomeBox

Modelling a movie rental store with objects.

## Installation

- Clone project.
- Open with text editor.
- Open index.js and have fun with the objects.
- Use console for output.

## Basic Functionality

The application is a movie rental store where customers can subscribe monthly to rent movies. Persons who are not customers can only view the movies. Admins manage all other objects except Person and Customer (implement soon). Customers can only rent four movies at a go. Due date is 5 days from date of checkout.

## Objects

- Admin
- Person
- Customer (Inherits from Person)
- Movie (For Abstraction purpose)
- Rental (For Abstraction purpose)

## Properties

- Admin

  - Name, Email, Password

- Person

  - Name, Email

- Customer
  - Name, Email, Monthlyfee
