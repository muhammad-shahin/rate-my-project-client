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

### Taking Assignment as an Individual
- Users can visit the assignment page and filter assignments based on their difficulty level.
- Assignment cards display the thumbnail, title, marks, assignment difficulty level, and "View Assignment" and "Update Assignment" buttons.
- Users can click "View Assignment" to see assignment details and click "Take Assignment" to submit it.

### Marking Assignment
- The submitted assignments page displays all pending assignments.
- Users can give marks, feedback, and submit assignments.

### Pages
1. **Home Page** (Public)
   - Navbar with links, logo, and user profile image
   - Banner, feature section, FAQ, and footer

2. **Create Assignment Page** (Private)
   - Functionality for creating assignments

3. **All Assignments Page** (Public)
   - List of all assignments created by any user
   - Pagination for assignments

4. **My Assignment Page** (Private)
   - List of assignments submitted by the user

5. **Submitted Assignment Page** (Private)
   - List of pending assignments submitted by any user

6. Additional dynamic pages for updating and viewing individual assignments

7. Login and Registration Pages (Public)

## Technologies Used 🛠️
- React (Frontend)
- Tailwind CSS (Styling)
- Node.js (Backend)
- Firebase (Authentication)
- Express.js (Backend)
- JWT for securing API

## Additional Features 🌟

2. Previewing Docs or PDF
   - Implemented a resource preview for submitted assignments using React PDF.

3. Pagination
   - Implemented pagination on the "All Assignments" page.

4. Validation
   - Added validation for the create assignment form and registration form.

5. Responsiveness
   - Made the website fully responsive for mobile, tablet, and desktop views.

6. JWT Authentication
   - Implemented JWT token creation and storage on the client-side for email/password-based and social login.

## Optional Features
Choose any two of the following optional features:
1. Added a spinner for loading states.
2. Explored and implemented animations using Framer Motion.
3. Explored and implemented Tanstack query mutations in the API.
4. Added an extra feature of your own to differentiate the project.

Feel free to explore the project and visit the live site to experience the online group study assignment website. 👩‍💻👨‍💻
