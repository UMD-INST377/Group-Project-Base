# Vinyl Records Database 
## Background
Despite the emergence of more "efficient" technologies, many people have still maintained interests in vinyl records. However, the passage of time and records being damaged or lost have added difficulties to keeping track of their existences. It is also impossible to manage a collection of records without being physically present. With the popularization of music streaming platforms and management systems, the team believes vinyl records could benefit from this technological shift. 

## Project Description
Our goal is to create a management interface that allows users to upload or gather information on these records without having to be in-person. The digitization of vinyl records information will allow more people to view them efficiently and bridge the gap between accessibility and management.

## Project Link
https://inst377-vinylweb.herokuapp.com/

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

# Developer Manual



## Implementation of API and Endpoints
**`/api/vinyl`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of general vinyl information, which includes the producer and singer information |
| POST | Creates a new database entry of a vinyl, with a numerical reference to the producer and singer |
| PUT | Updates an existing entry within the database, including new producer or singer information |
| DELETE | Removes an existing within the database, not including the producer or singer |

<br>

**`/api/singers`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all artists that have an entry within the database |
| POST | Creates a new database entry of an artist |

<br>

**`/api/producers`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all producer first and last names in the database  |
| POST | Creates a new database entry a producer by first and last name |

<br>

**`/api/songs`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all songs from the selected vinyl, including the musical info related to each song |

<br>

**`/api/placements`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all placements from the selected vinyl  |

<br>

**`/api/certifications`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of all certification that the selected album was awarded |

<br>

**`/api/prices`**
| Method | Purpose |
| :--- | :---: |
| GET | Returns a list of pricing information from discog relevant to the selected vinyl  |

<br>

In this case, the route changes based on the vinyl's name and artist name

**`/api/albumCover/:albumName(based on selected vinyl)/:artistName(based on selected vinyl)`**
| Method | Purpose |
| :--- | :---: |
| POST | Returns the address of an image to be used for the display of newly input vinyls to the database|
