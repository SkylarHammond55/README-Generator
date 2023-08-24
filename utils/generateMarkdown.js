// Define a function to generate markdown content for README
function generateMarkdown(data) {
  const licenseBadge = `![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)`;
  
  const markdownContent = `
# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}. See the LICENSE document in the repository for more information.

## How to Contribute
${data.contributions}

## Tests
${data.testing}

## Questions
If you have any questions, you can contact me on [GitHub](https://github.com/${data.username}) or via email at ${data.email}.
`;

  return markdownContent;
}

module.exports = generateMarkdown;