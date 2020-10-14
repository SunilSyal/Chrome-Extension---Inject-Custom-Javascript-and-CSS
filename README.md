# Chrome extension - Sample code to add an additional search button
This chrome extension is the bare minimum that you need to inject custom javascript and CSS file in a webpage. This code will add an additional search button on Google search page. 

# How to add extension
To add the extension on your local machine chrome browser - watch the following video.
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/M0RMSWuwMGY/0.jpg)](https://youtu.be/M0RMSWuwMGY)

# How to change the search keyword
- Open `init.js`
- Replace Mathemafia with your search keyword
- If it is a single word, you are done
- If your search has multiple words, then replace the `event.target.value.split(" ")[1]` with `event.target.value.slice(str.indexOf(" "));` 

