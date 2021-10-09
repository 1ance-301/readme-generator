// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![NPM](https://img.shields.io/npm/l/express?style=flat-square)';
  } else if (license === 'ISC') {
    return '![NPM](https://img.shields.io/npm/l/glob?style=flat-square)';
  }  else if (license === 'Apache-2.0') {
    return '![NPM](https://img.shields.io/npm/l/typescript?style=flat-square)';
  } else if (license === 'BSD-3-Clause') {
    return '![NPM](https://img.shields.io/npm/l/sinon?style=flat-square)';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'ISC') {
    return '(https://opensource.org/licenses/ISC)';
  }  else if (license === 'Apache-2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD-3-Clause') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'Licensed under the MIT license.';
  } else if (license === 'ISC') {
    return 'Licensed under the ISC license.';
  }  else if (license === 'Apache-2.0') {
    return 'Licensed under the Apache-2.0 license.';
  } else if (license === 'BSD-3-Clause') {
    return 'Licensed under the BSD-3-Clause license.';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions, my links are below:
  - Github: https://github.com/${data.github}
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;