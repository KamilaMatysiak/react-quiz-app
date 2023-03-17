export const quiz = {
    topic: 'React',
    totalQuestions: 5,
    questions: [
        {
            question:
                'Q1. If you want to import just the Component from the React library, what syntax do you use?',
            code: null,
            choices: [
                "import React.Component from 'react'",
                "import [ Component ] from 'react'",
                "import Component from 'react'",
                "import { Component } from 'react'"
            ],
            correctAnswer: "import { Component } from 'react'",
        },
        {
            question:
                'Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?',
            code: null,
            choices: [
                "Wrap it in the React.memo higher-order component.",
                "Implement the useReducer Hook.",
                "Implement the useMemo Hook.",
                "Implement the shouldComponentUpdate lifecycle method."
            ],
            correctAnswer: "Wrap it in the React.memo higher-order component.",
        },

        {
            question:
                'Q3. How do you fix the syntax error that results from running this code?',
            code: 'const person = (firstName, lastName) -> {\n    first: firstName,\n    last: lastName\n} \nconsole.log(person("Jill", "Willson"))',
            choices: [
                "Wrap the object in parentheses.",
                "Call the function from another file.",
                "Add a return statement before the first curly brace.",
                "Replace the object with an array."
            ],
            correctAnswer: "Wrap the object in parentheses.",
        },

        {
            question:
                'Q4. If you see the following import in a file, what is being used for state management in the component?',
            code: "import React, {useState} from 'react';",
            choices: [
                "React Hooks",
                "stateful components",
                "math",
                "class components"
            ],
            correctAnswer: "React Hooks",
        },
    ]
}