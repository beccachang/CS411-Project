**Look for Past Searches**

After the user successfully logs in (see first user story), the user will be directed to the main page. On this main page, there will be a button that a user can click to browse up to the past 50 searches (from all users). The user will click this button.

If the submission is successful, the user should be directed to the page containing the month and years of all the searches, along with the Wikipedia articles and Youtube videos. This page will be saved between sessions, such that if a user logs out and later comes back and logs back in, they are able to view the 50 searches. If there is no search history, the submission will still be successful, and the user will be informed that there is no history to display.

If the submission is not successful, the application should display an error and tell the user to try again later. A submission is not successful if the application is not able to gather the search history.  

If the user is not logged in and tries to search the browsing history, the application should display the error that the user should log in, then give a button to redirect the user to log in.