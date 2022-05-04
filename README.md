# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

* [Project](https://inst377-group3.github.io/Final-Project-Base/client/main)


# API Documentaion

** NOTE: Species are primary indexed by taxon ID(GBIF).

| Endpoint | Description |
| ----------- | ----------- |
|/api/felinae| Returns all species in Felinae Table |
|/api/canidae| Returns all species in Canidae Table|
|/api/hominidae| Returns all species in Hominidae Table |
|/api/felinae/:GBIF| Returns taxon IDs of a species in Felinae Table |
|/api/canidae/:GBIF| Returns taxon IDs of a species in Canidae Table|
|/api/hominidae/:GBIF|Returns taxon IDs of a species in Hominidae Table|
|/api/users| Returns all users|
|/api/users/:username| Returns username of user|
