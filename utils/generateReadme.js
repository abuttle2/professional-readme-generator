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
`;
}

module.exports = generateReadme;