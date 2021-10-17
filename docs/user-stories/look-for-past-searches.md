*Look for Past Searches*

After the user successfully logs in (see first user story), the user will be directed to the main page. On this main page, there will be a button that a user can click to browse up to the last 10 valid dates (with countries, if applicable) for which the user previously searched. The user will click this button.

If the submission is successful, the user should be directed to the page containing up to the user's last 10 unique searches. Each of these will contain the Wikipedia pages, YouTube videos, and Spotify songs related to the dates, if they exist. This page that contains the user’s last 10 searches will be saved between sessions, such that if a user logs out and later comes back and logs back in, they are able to view their searches from their previous sessions. If the user has no search history, the submission will still be successful, the user will be informed that there is no history to display.

If the submission is not successful, the application should display an error and tell the user to try again later. A submission is not successful if the application is not able to gather the user’s past search history.  

If the user is not logged in and tries to search the browsing history, the application should display the error that the user should log in, then give a button to redirect the user to log in.