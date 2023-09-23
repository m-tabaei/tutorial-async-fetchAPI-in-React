# tutorial-async-fetchAPI-in-React



1. `useState`: Three state variables are defined: `post`, `loading`, and `error`. These states are used to manage the data fetched from the API, loading state, and error state.

2. `useEffect`: The `useEffect` hook is used to initiate the data-fetching process. Inside the `fetchPosts` function, an asynchronous request is made to "https://jsonplaceholder.typicode.com/posts" using the `fetch` API. 

   - If the request is successful, the response data is converted to JSON, and the `post` state is updated with the fetched data. Additionally, `error` is set to `null`, indicating no error, and `loading` is set to `false`, indicating that the data has finished loading.
   
   - If there is an error during the fetch, the error message is captured, and `error` is updated with the error message. `loading` is set to `true` to indicate that an error occurred.

3. Conditional Rendering: The content of the component is conditionally rendered based on the values of `error` and `loading`.

   - If `error` is not `null`, it means an error occurred during the fetch, and an error message is displayed in a red text.
   
   - If `loading` is `true`, it indicates that the data is still being fetched, and a loading spinner is displayed.
   
   - When the data has been successfully fetched and there are no errors (`error` is `null` and `loading` is `false`), the `Posts` component is rendered to display the fetched posts.

This code structure allows you to handle different states of the data-fetching process, ensuring a user-friendly experience by displaying loading indicators and error messages as needed.

![Faild to fetch](https://github.com/m-tabaei/tutorial-async-fetchAPI-in-React/blob/main/async.JPG?raw=true)



- 🔗 ([https://github.com/m-tabaei/tutorial-async-fetchAPI-in-React])
-
- 💻 Developed by Seyed Mohammad Tabaei
- 📆 Created - 2023
- 🔧 Technologies Used - React Hook, UseState and useEffect, async FetchAPI
- 🧑‍ Role - Frontend

- How to reach me : with my [e-mail](https://www.m-tabaie@gmail.com) and [linkedin](https://www.linkedin.com/in/mohammad-tabaei/)
