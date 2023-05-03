
const Blog = () => {
    return (
        <div className="container mx-auto py-10">
            <div>
                <h1 className="text-[25px] font-semibold">1. Tell us the differences between uncontrolled and controlled components ?</h1>
                <p className="text-[17px] mt-4 ml-12">In the context of software development, uncontrolled and controlled components refer to two different approaches for building user interfaces.

                    Uncontrolled components are typically built using traditional HTML forms, where the state of the form elements (such as text inputs, checkboxes, and radio buttons) is managed by the browser. In other words, the form elements are not directly controlled by the application code, but rather by the user. This approach is simple and requires less code, but it can lead to inconsistencies and errors when dealing with complex forms.<br></br><br></br>

                    Controlled components, on the other hand, are built using JavaScript frameworks like React or Vue.js, where the state of the form elements is managed by the application code. This means that the form elements are directly controlled and manipulated by the code, which makes it easier to handle complex forms and enforce consistency across the application. However, this approach requires more code and can be more difficult to set up initially.<br></br><br></br>

                    In summary, the main difference between uncontrolled and controlled components is the way in which the state of form elements is managed: uncontrolled components rely on the browser to manage state, while controlled components manage state directly in the application code.</p>
            </div>
            <div className="mt-8">
                <h1 className="text-[25px] font-semibold"> 2. How to validate React props using PropTypes ?</h1>
                <p className="text-[17px] mt-4 ml-12">To validate React props using PropTypes, you can use the PropTypes library that comes with React. PropTypes allows you to specify the data type and shape of each prop that your component expects. This can help catch errors early and improve code maintainability.<br></br><br></br>

                    In this example, were using PropTypes to validate that the title and description props are both strings and are required. The isRequired property makes sure that the prop is provided, and if its not, a warning will be logged in the console.<br></br><br></br>

                    In this example, were using PropTypes to validate that the person prop is an object with a name (string) and age (number) property, and that the hobbies prop is an array of strings. The isRequired property makes sure that both props are provided.

                    Overall, using PropTypes can help catch errors early and improve the maintainability of your code.
                </p>
            </div>
            <div className="mt-8">
                <h1 className="text-[25px] font-semibold">3. Tell us the difference between nodejs and express js. ?</h1>
                <p className="text-[17px] mt-4 ml-12">
                    Node.js and Express.js are both popular technologies used for developing web applications with JavaScript, but they serve different purposes.<br></br><br></br>

                    Here are some key differences between Node.js and Express.js:<br></br><br></br>

                    1. Node.js provides the runtime environment for executing JavaScript code outside of the browser, while Express.js is a web framework built on top of Node.js that provides an easy and flexible way to build web applications and APIs.<br></br><br></br>

                    2. Node.js has built-in modules for working with the file system, networking, and other system-level operations, while Express.js provides a set of features for handling HTTP requests, defining routes, and integrating with middleware.<br></br><br></br>

                    3.Node.js is highly scalable and can handle a large number of simultaneous connections, while Express.js is designed to make it easy to handle HTTP requests and integrate with middleware.<br></br><br></br>

                    4.Node.js can be used for building various types of applications, including web applications, desktop applications, and command-line tools, while Express.js is specifically designed for building web applications and APIs.<br></br><br></br>

                    In summary, Node.js provides the runtime environment for executing JavaScript code outside of the browser, while Express.js provides a flexible way to build web applications and APIs on top of Node.js.
                </p>
            </div>
            <div className="mt-8">
                <h1 className="text-[25px] font-semibold"> 4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className="text-[17px] mt-4 ml-12">
                    A custom hook is a function in React that allows you to encapsulate reusable logic in your application. Custom hooks are a powerful feature in React that enable you to abstract away complex logic and reuse it across multiple components.<br></br><br></br>

                    In React, a custom hook is a function that starts with the prefix use and uses one or more of the built-in hooks like useState, useEffect, useRef, useContext, etc. A custom hook can also call other custom hooks to compose complex functionality.<br></br><br></br>

                    Custom hooks can be useful in several scenarios. Here are a few examples:<br></br><br></br>

                    1. Reusing Logic: When you have a piece of logic that needs to be shared between different components, you can encapsulate that logic in a custom hook and reuse it across components.<br></br><br></br>
                    2. Abstracting State Management: When you have complex state management requirements in your application, you can encapsulate that logic in a custom hook and abstract it away from your components.<br></br><br></br>
                    3. Integrating with External Libraries: When you need to integrate with an external library that has its own initialization and cleanup logic, you can encapsulate that logic in a custom hook and abstract it away from your components.
                </p>
            </div>
        </div>
    );
};

export default Blog;