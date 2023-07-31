# Task Manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependency list.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Mock User List

The application uses the following mock user list for authentication:

1. Username: admin1, Password: admin123, User Group: admin
2. Username: admin2, Password: admin456, User Group: admin
3. Username: editor1, Password: editor123, User Group: editor
4. Username: editor2, Password: editor456, User Group: editor
5. Username: author1, Password: author123, User Group: author
6. Username: author2, Password: author456, User Group: author

## Completion Task List

Task 1: Component Creation and State Management (40 minutes)
Create a React application that simulates a task management system where multiple users can
collaborate within the same group. The application should include the following features:
- A form to add a new task with fields for title and description.
- A list of tasks displaying their titles and descriptions for the current user's group.
- Buttons to mark tasks as "completed" or "incomplete."
- Ability to delete a task from the list.
- Use React state management to handle the task data and user groups.

Task 2: Responsive Web Design (30 minutes)
Convert the task management system you created in Task 1 into a responsive web application.
The application should adapt gracefully to different screen sizes (desktop, tablet, mobile).
Consider using CSS media queries and flexbox/grid to achieve responsive layouts.

Task 3: Interactivity and User Experience (30 minutes)
Enhance the task management system with the following interactivity:
- Add animations or transitions to improve the user experience.
- Implement drag-and-drop functionality to reorder tasks in the list.
- Provide appropriate feedback to users when they perform actions like adding, completing, or
deleting tasks.

Task 4: API Integration and Data Sharing (50 minutes)
Integrate the task management system with a mock API that supports data sharing between
users in the same group. Mock the API responses for developer testing.
- Each user should be part of a specific group.
- When a user logs in, they should only see tasks from other users within the same group.
- Allow users to add tasks that will be visible to others in the same group.
- Ensure that the state management allows for real-time updates when a user adds, completes,
or deletes a task.
