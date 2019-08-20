DataDrag.
Create a calendar for the entire year and a notepad, a user can write a note and drag it to a date, or drag a date to the note and it will save to the calendar. 

Todo..

Build out a calendar, that can select different days and months,
Build a input field that looks like a notepad.
Create functionality that allows notes to store with the calendar object.


...........
Workin on
...........
User can login and fetch all saved notes,
Create new user is working, login to be done
Display current days note

Things to think about, the notepad must change as the date changes,
each day is a new notepad,
So think of it like this, when a user scrolls or clicks a date they have previously saved something the value in the note textarea should be the previous entry.
Entries therefore must be based on the date of entry..

...........
STATUS UPDATE
...........
As of 20 Aug 2019 .
back end now saves notes based on the date and the user.
Front end can edit the note and update & auto save as note is typed
Currently only works for current date, nor does it render the previous message on refresh, however the data persists and is in a user data array.
