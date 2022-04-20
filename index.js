const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (data) =>
  `
  Application Name: ${data.title}
  Application Description: ${data.description}
  Table of Contents: ${data.tableOfContents}
  Installation Instructions: ${data.installation}
  Usage Information: ${data.usage}
  Contribution Guidelines: ${data.contribution} 
  Tests: ${data.test}
  Choose a license for your application: ${data.license}   
  LinkedIn: ${data.linkedin}`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Enter table of contents for your project.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Describe any necessary instructions for installation for your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines.",
    },
    {
      type: "input",
      name: "test",
      message: "How do we test your application?",
    },
    {
      type: "list",
      name: "license",
      message: "Which license do you choose for your application?",
      choices: ["License Type 1", "License Type 2", "License Type 3"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile("README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
