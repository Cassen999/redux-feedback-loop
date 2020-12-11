# PROJECT FRAMEWORK

STARTING THE PROJECT
- Set up Home, Feeling, Understanding, Support, Comments and Submission Review components
- Set up reducer to take in the data
- Start working through components in order one at a time

APP
- [x] Set up Routes

INDEX
- [] Create a reducer for each component
    - [] Including SubmitReview to hold the entire local state to send with the POST to the database
- [] Create a local state to hold each object from each reducer

HOME
- [] Just a screen with a 'Begin Feedback' button

FEELING
- [] 1-10 scale required entry
- [] Next button must route to Understanding
    - [] Also must dispatch Feeling data to reducer

UNDERSTANDING
- [] 1-10 scale required entry
- [] Next button must route to Support
    - [] Also must dispatch Understanding data to reducer

SUPPORT
- [] 1-10 scale required entry
- [] Next button must route to Comments
    - [] Also must dispatch Understanding data to reducer

COMMENTS
- [] Text input
- Not required/ Don't need to validate
- [] Next button must route to SubmissionReview
    - [] Also must dispatch Comments data to reducer

SUBMISSION REVIEW
- [] Map reducer and display data for user to review
- [] Submit button will make a POST request to the server to add all data to the database
    - [] Also must route back to home screen
