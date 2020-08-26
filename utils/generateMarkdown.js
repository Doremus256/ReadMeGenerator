// function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}
  # Unit 09 Node.js and ES6+ Homework: README Generator
  # Table of Contents

  ## Description
  * [Description](#Description)

  ## Questions
  * [Questions](#Questions)

  ## Installation 
  * [Installation](#Installation)

  ## License
  * [Usage](#Usage)

  ## Usage
  * [Usage](#Usage)

  ## Contribution
  * [Contribution](#Contribution)

  ## Tests
  * [Tests](#Tests)

  ## Title :
  ${data.Title}

  ## Username :
  ${data.Username}
  
  ## Email :
  ### ${data.Email}

  ## Project Name :
  ### ${data.Name}
  
  ## Description :
  ### ${data.Description}

  ## License :
  ### ${data.License}

  ## Installation :
  ### ${data.Installation}

  ## Tests :
  ### ${data.Tests}
  
  ## Usage :
  ### ${data.Usage}

  ## Contribution :
  ### ${data.Contribution}

  [Title](https://www.example.com)
  ![alt text](image.jpg)
`;
}

module.exports = generateMarkdown;
