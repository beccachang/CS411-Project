**Submit Date and Country Request**

As a logged in user, I want to be able to submit a date, time, and country. After the user logs in (see Log In Story), the user will be redirected to a landing page with a form. The user will be able to input a search request into the form consisting of a date in month/year format, and optionally, a country of interest. We will validate the date and country input. If the input is invalid, the user will be unable to submit the request and will be notified by the form that their input is invalid. After inputting the date, the user will click a submit button. While the APIs run, the user will be shown an indication of loading (loading bar, or progress circle). 

If the submission is valid, a page containing the most popular Wikipedia articles of events, YouTube videos, and Spotify songs related to the input date will be returned to the user in a dashboard, if they can be found. Then the user will be able to interact with the page (see View and Interact with Request Response story). If the request fails, they will be redirected back to the form to try again.

There are several ways for the submission to be invalid:
* The input parameter is missing the month or the year.
* The date is nonsensical (e.g. a date in the future).
* The input country is not valid (e.g. Foo).

In these cases, the application will display the error and state to give a valid date or country, depending on which was invalid.