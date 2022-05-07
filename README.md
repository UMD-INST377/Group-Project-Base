# Group 20, Movies

## Description

The purpose of this project is to allow users a quick and easy way to interact with our database of movie information. Movies are a massive part of popular culture and a pass time enjoyed by many people.This website gives users the tools to search and filter movies by their title, rating, and genre. Once users have completed their search, they are presented with their results, including the movies' ID number, title, release year, runtime, and rating. Additionally, a number of charts features on our home page provide users with even more information about movies, along with their associated actors, directors, and genres.

## Live Demo

https://group20-project-08439.herokuapp.com

## Target Browsers

### Desktop

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

### Mobile

- Safari (iPhone 12/13 Pro Max)
- Chrome (Samsung Galaxy S20)

## Developer Manual

### Installation

1. Clone repository via Git client

2. Enter local repository directory via a terminal

3. Execute `npm install`

### Running the Software

1. Open a terminal in the repository directory

2. Execute `npm start`

3. Open `localhost:3000` in a web browser

### Tests

No tests have been written for this software. You can, however, write your own tests can run them with `npm test`.

### API Routes

#### Roles

#### Actors

#### Genres

| Method   | Route                    | Description                                                              |
| -------- | ------------------------ | ------------------------------------------------------------------------ |
| `GET`    | `/jude/genres`           | Get data on all genres.                                                  |
| `GET`    | `/jude/genres/:genre_id` | Get data for genre with matching `genre_id`.                             |
| `GET`    | `/jude/movie_genres`     | Get data linking movies to their genres.                                 |
| `PUT`    | `/jude/genres`           | Get data for all genres whose name contains string parameter `genre_id`. |
| `POST`   | `/jude/genres`           | Get data for genre whose ID matches `genre_id` parameter.                |
| `DELETE` | `/jude/genres`           | Delete record for genre whose ID matches `genre_id` parameter.           |

| Method   | Route                    | Description                                                              |
| -------- | ------------------------ | ------------------------------------------------------------------------ |
| `GET`    | `/isaac/actors`          | Get data on all actors.                                                  |
| `GET`    | `/isaac/actors/:actor_id`| Get data for genre with matching `actor_id`.                             |
| `PUT`    | `/isaac/actors`          | Get age of actors.                                                       |
| `POST`   | `/isaac/actors`          | Select name of actors                                                    |
| `DELETE` | `/isaac/actors`          | Delete record for genre whose ID matches actor_id parameter.             |

#### Directors

#### Movies

### Bugs and Future Development

#### Known Bugs

- Null values are not yet filtered out of charts and search results

- Applying multiple filters to a search on the "Movies" page results in incorrect results which violate at least one of the set filters

In the future, these known bugs, along with any other issues that are encountered, will be resolved.

#### TODO

- Add filtering for null values (or at least standardize how they are displayed)

- Fix issue with applying multiple filters

- Add 'genres' column to search results table

- Add modal dialogue which gives more detailed information about a movie when its row in the results table is clicked
