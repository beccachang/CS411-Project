**Log In**

On the main page of the application, there is a button that will direct the user to create a profile or log in to the app. Upon clicking the button, the user should see the ways of signing using Open Authorization (OAuth) via Google, Facebook, and GitHub accounts. The user enters the log in information to one of these accounts. Then the user clicks a submit button.

If the log in is successful, then the user should be directed to the main page for logged in users where dates can be searched.

If the log in is not successful, an error should be displayed and the app should redirect the user back to the log in page to try logging in again.


---


**Search a Date**

After the user logs in (see above), the user will be able to input a search date in month/year format. After inputting the date, the user will click a submit button. 

If the submission is valid, a list of the most popular Wikipedia articles of events, YouTube videos, and Spotify songs related to the input date will be returned to the user, if they can be found.

If the submission is valid, but some of the compoments (Wikipedia articles, YouTube videos, Spotify songs) could not found, the components that were found will still be returned, and the application will state that the compoment(s) that could not be found. If none of the compoments could be found, then the application will state that none of the compoments could be found.

There are several ways for the submission to be invalid:
* The input parameter is missing the month or the year.
* The date is non-sensical (e.g. a date in the future).

In all of these cases, the application will display the error and state to give a valid date.


This functionality is available only to logged in users.


---


**Look for Past Searches**

After the user logs in (see first user story), the user will be directed to the main page. On this main page, there will be a button that a user can click to browse up to the last 10 valid dates for which the user searched. The user will click this button.

If the submission is successful, the user should be directed to the page containing up to the user's last 10 searches. Each of these will contain the Wikipedia pages, YouTube videos, and Spotify songs related to the dates, if they exist.

If the submission is not successful, the application should display an error and tell the user to try again later.

If the user is not logged in and tries to search the browsing history, the application should display the error that the user should log in, then give a button to redirect the user to log in.