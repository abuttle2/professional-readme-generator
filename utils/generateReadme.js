function generateReadme(data) {
  let badge = "";
  if (data.license != "None") {
    badge = `![License](https://img.shields.io/badge/license-${data.license}-red.svg)`
  }

  return `# ${data.title}

  ${badge}

  ## Description
  ${data.description}

  ${data.tableOfContents ? `
  ## Table of Contents
  - [Description](#description)
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

  This project uses the following license:
   ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me from the following links: 

  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  - Project URL: [${data.url}](${data.url})
`;
}

module.exports = generateReadme;