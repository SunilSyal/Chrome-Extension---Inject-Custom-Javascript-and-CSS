# Chrome-Extension---Additional-Search-Button
Add an additional search button on Google search page using a chrome extension 

# How to add extension
To add the extension on your local machine chrome browser - watch the following video.
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/M0RMSWuwMGY/0.jpg)](https://youtu.be/M0RMSWuwMGY)

# How to change the search keyword
- Open `init.js`
- Replace Mathemafia with your search keyword
- If it is a single word, you are done
- If your search has multiple words, then replace the `event.target.value.split(" ")[1]` with `event.target.value.slice(str.indexOf(" "));` 

