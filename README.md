# nina-comment-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).  
  

## About the app and its acceptance criteria: 


### Context
Symptom Journal is an app where the user can click on an area of the patient dummy, then create an entry about what they are feeling there. The main sections of the app are Diary Mode and Symptom History. 

### Story
Build a fully tested feature in which any logged in user can add entries. 

### Acceptance Criteria
(*Tests should reflect the acceptance criteria).

- Match the specs.
- Use bulma css for styling.
- Show name of user. 
- Display image. Image will have a max width of 300px and will be centered inside a container that is always 200px high.
- In Symptom History, display entries that were made about the same body part. 
- Only 5 entries are shown on a page at once. If there are any more entries, show a “show more” button or link that will show the rest of the entries up to 20.
- Ensure the date with the day, month and year is displayed next to old entries.
- In Diary Mode, users can click on parts of the patient dummy, then make an entry about that body part.
- Each entry may have a max of 500 characters.
- Hitting the enter key will submit an entry.
- Entries need to log the date, time, area of body after submission. 
