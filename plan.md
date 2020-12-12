# PROJECT FRAMEWORK

STARTING THE PROJECT
- Set up Home, Feeling, Understanding, Support, Comments and Submission Review components
- Set up reducer to take in the data
- Start working through components in order one at a time

APP
- [x] Set up Routes

INDEX
- [x] Create a reducer for each component

HOME
- [x] Just a screen with a 'Begin Feedback' button
- [x] Button routes to Feeling

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
- [] Create local state to use reduxState as values to send to database
- [] Submit button will make a POST request to the server to add all data to the database
    - [] Also must route back to home screen
