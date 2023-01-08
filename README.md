### Hexlet tests and linter status:
[![Actions Status](https://github.com/DmitryNikolaev98/frontend-bootcamp-project-46/workflows/hexlet-check/badge.svg)](https://github.com/DmitryNikolaev98/frontend-bootcamp-project-46/actions)
[![Node CI](https://github.com/DmitryNikolaev98/frontend-bootcamp-project-46/actions/workflows/node_ci.yml/badge.svg)](https://github.com/DmitryNikolaev98/frontend-bootcamp-project-46/actions/workflows/node_ci.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/3e8208030aff22fd74c1/maintainability)](https://codeclimate.com/github/DmitryNikolaev98/frontend-bootcamp-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3e8208030aff22fd74c1/test_coverage)](https://codeclimate.com/github/DmitryNikolaev98/frontend-bootcamp-project-46/test_coverage)

## Description
This is utility that determines the difference between two data structures. A similiar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:
 - Support for different input formats: ```yaml```, ```json```, ```ini```
 - Generation a report in the form of ```plain text```, ```stylish```, ```json```

### Usage example:
```bash
# plain format
gendiff --format plain path/to/file.yml another/path/file.json
Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
# stylish format
gendiff filepath1.json filepath2.json
{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
## Install:

```bash
#clone this repository on your machine
$git@github.com:DmitryNikolaev98/frontend-bootcamp-project-46.git
#go to directory where you downloaded it
$make install

$npm link

```