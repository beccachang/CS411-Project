**Submit Date Request**

As a logged in user, I want to be able to submit a date and time. After the user logs in (see Log In Story), the user will be redirected to a landing page with a form. The user will be able to input a search request into the form consisting of a date in month/year format. We will validate the date input. If the input is invalid, the user will be unable to submit the request and will be notified by the form that their input is invalid. After inputting the date, the user will click a submit button. While the APIs run, the user will be shown an indication of loading (loading bar, or progress circle). 

If the submission is valid, a page containing the most popular Wikipedia articles of events and YouTube videos related to the input date will be returned to the user in a dashboard, if they can be found. Then the user will be able to interact with the page (see View and Interact with Request Response story). If the request fails, they will be redirected back to the form to try again.

There are several ways for the submission to be invalid:
* The input parameter is missing the month or the year.
* The date is nonsensical (e.g. a date in the future).

In these cases, the application will display the error and state to give a valid input.