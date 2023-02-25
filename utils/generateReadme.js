function generateReadme(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ${data.tableOfContents ? `
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`
      : ''
    }

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project uses the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me through the following links: 

  - Github:  ${data.github}
  - Email: ${data.email}
  - Project URL: ${data.url};
`;
}

module.exports = generateReadme;