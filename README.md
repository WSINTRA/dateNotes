DateNotes
A calendar for the entire year and a notepad, a user can write a note and save it to a date and it will save to the users account. 

User logs on and then the React App fetched the saved notes and user data from the backend.

...........
NOTES
...........

I built the app as a way of experimenting with persisting data to a backend database. Also wanted to use React component in-line styling, using a style.js file to style all the components and then import the style.js where it is needed.
A user logs in or registers, then you can click on a date and save a note to it.
The notes persist into the Rails PostGreSQL backend at https://github.com/WSINTRA/datenotes_backend_storage

The app is built in React.JS

```
git clone https://github.com/WSINTRA/dateNotes
cd dateNotes
npm install
npm run

```

Make sure you have the backend database running on port 3050.