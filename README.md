# Online Group-Study Assignment Website 📚

This repository contains a web application for online group study with friends. Users can create assignments, complete them, and grade their friends' assignments. Below are the features and technologies used in this website.

## Live Site 🌐
[Visit the live site here](https://ratemy-project.web.app/)

## Features 🚀

### Authentication 🔐
- Users can register an account with their name, photoURL, email, and password using Firebase.
- Social login options like Google login and GitHub sign up are available.

### Assignment Management (Private Routes) 📋
a. **Assignment Creation**
- Any logged-in user can create an assignment for all users.
- Assignments include a title, description, marks, thumbnail image URL, assignment difficulty level (easy, medium, hard), and a due date.
- Success message displayed upon successful assignment creation.

b. **Assignment Deletion**
- Only the user who created the assignment can delete it.
- An error message is displayed if a user tries to delete an assignment created by someone else.

c. **Assignment Updating**
- Any user can update any assignment.
- Input fields are filled with previous assignment data for editing.

### Taking Assignment as an Individual 📝
- Users can visit the assignment page and filter assignments based on their difficulty level.
- Assignment cards display the thumbnail, title, marks, assignment difficulty level, and "View Assignment" and "Update Assignment" buttons.
- Users can click "View Assignment" to see assignment details and click "Take Assignment" to submit it.

### Marking Assignment 📊
- The submitted assignments page displays all pending assignments.
- Users can give marks, feedback, and submit assignments.

### Pages 📄
1. **Home Page** (Public)