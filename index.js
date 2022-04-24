const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (data) =>
  `# ${data.title}
  ![image](https://img.shields.io/badge/License-${data.license}-red)  

# Table of Contents  
* [Description](#description)  
* [Motivation for Building Application](#motivation-for-project)  
* [Challenges](#challenges)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)  
* [Contribution Guidelines](#contribution-guidelines)  
* [Tests](#tests)
* [License for Application](#license-for-application)  
* [Questions](#questions)



## Description
 ${data.description}
## Motivation for Project
 ${data.motivation}  
## Challenges
 ${data.challenges}
## Installation Instructions
 ${data.installation}  
## Usage Information
 ${data.usage}  
## Contribution Guidelines
 ${data.contribution}     
## Tests
 ${data.test}  
## License for Application
 ${data.license}   
## Questions
Please contact me at https://github.com/${data.github} or e-mail me at ${data.email}
`;

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
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "motivation",
      message: "Why you chose to build this application:",
    },
    {
      type: "input",
      name: "challenges",
      message:
        "Some challenges I ran into when I was building this application:",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Describe any necessary instructions for installation for your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "How do we test your application?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license for your application?",
      choices: ["BSD", "MIT", "GPL"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email:",
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile("README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
