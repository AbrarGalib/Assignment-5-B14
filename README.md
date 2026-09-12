Project Name

⇾ DevStack

Description

⇾ A friendly web app where you can explore different programming languages, frameworks, and databases, and build your own dream tech stack for a project.

Technologies Used

⇾ React (with TypeScript)

⇾ Tailwind CSS and DaisyUI

⇾ React-Toastify

3 Features

⇾ Interactive Tech Grid: Browse through various tools categorized by frontend, backend, and databases, complete with ratings and difficulty tags.

⇾ Smart Stack Panel: A sidebar that tracks your chosen technologies in real time, warns you if you try to add a duplicate, and updates instantly.

⇾ Toast Notifications: Clean, animated pop-up alerts that let you know when something is added, removed, or cleared.


1. What is JSX, and why is it used in React?
⇾ It is a special syntax that lets us write HTML-like code directly inside JavaScript files. It makes building user interfaces much easier and cleaner to look at than standard JavaScript functions.

2. What is the difference between props and state?
⇾ Props are like read-only settings passed down from a parent component. State is data managed inside a component that can change and update when the user interacts with the app.

3. What does the useState hook do, and where did you use it in this project?
⇾ It lets a component remember and update values over time. We used it to keep track of the technologies the user adds to or removes from their stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
⇾ It handles side-effects like fetching data after a component appears on the screen. It's used to safely load external information, like our local data.json file, when the application first starts.

5. Why does every item in a .map() list need a unique key prop?
⇾ It helps React tell each item apart. That way, if an item is added, moved, or deleted, React only updates that specific item instead of re-rendering the whole list.

6. What is conditional rendering? Show one place you used it.
⇾ It means showing different things on the screen based on a true/false condition. We used it to display the "Your stack is empty" message when no technologies are selected, and switch to showing the actual list when items are added.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
⇾ Parents pass data down to children using props. Children send data or triggers back up to the parent by calling a function (callback) that the parent passed down to them.