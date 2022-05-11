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

| Method   | Route                  | Description                                                              |
| -------- | ---------------------- | ------------------------------------------------------------------------ |
| `GET`    | `/agya/roles`          | Get data on all roles.                                                   |
| `GET`    | `/agya/roles/:role_id` | Get data for role with matching `role_id`.                               |
| `PUT`    | `/agya/roles`          | Get data for role whose ID matches `role_id` parameter.                  |
| `POST`   | `/agya/roles`          | Get data for all roles whose name contains string parameter `role_name`. |
| `DELETE` | `/agya/roles`          | Delete record for role whose ID matches `role_id` parameter.             |

#### Actors

| Method   | Route                     | Description                                                                   |
| -------- | ------------------------- | ----------------------------------------------------------------------------- |
| `GET`    | `/isaac/actors`           | Get data on all actors.                                                       |
| `GET`    | `/isaac/actors/:actor_id` | Get data for genre with matching `actor_id`.                                  |
| `PUT`    | `/isaac/actors`           | Get data for actor whose age is less than or equal to `age` parameter.        |
| `POST`   | `/isaac/actors`           | Get data for all actors whose last name contains string parameter `lastname`. |
| `DELETE` | `/isaac/actors`           | Delete record for actor whose ID matches `actor_id` parameter.                |

#### Genres

| Method   | Route                    | Description                                                                |
| -------- | ------------------------ | -------------------------------------------------------------------------- |
| `GET`    | `/jude/genres`           | Get data on all genres.                                                    |
| `GET`    | `/jude/genres/:genre_id` | Get data for genre with matching `genre_id`.                               |
| `GET`    | `/jude/movie_genres`     | Get data linking movies to their genres.                                   |
| `PUT`    | `/jude/genres`           | Get data for genre whose ID matches `genre_id` parameter.                  |
| `POST`   | `/jude/genres`           | Get data for all genres whose name contains string parameter `genre_name`. |
| `DELETE` | `/jude/genres`           | Delete record for genre whose ID matches `genre_id` parameter.             |

#### Directors

| Method   | Route                          | Description                                                                      |
| -------- | ------------------------------ | -------------------------------------------------------------------------------- |
| `GET`    | `/owen/directors`              | Get data on all directors.                                                       |
| `GET`    | `/owen/directors/:director_id` | Get data for genre with matching `director_id`.                                  |
| `PUT`    | `/owen/directors`              | Get data for genre whose ID matches `director_id` parameter.                     |
| `POST`   | `/owen/directors`              | Get data for all directors whose last name contains string parameter `lastname`. |
| `DELETE` | `/owen/directors`              | Delete record for genre whose ID matches `director_id` parameter.                |

#### Movies

| Method   | Route                    | Description                                                                |
| -------- | ------------------------ | -------------------------------------------------------------------------- |
| `GET`    | `/stef/movies`           | Get data on all movies.                                                    |
| `GET`    | `/stef/movies/:movie_id` | Get data for movie with matching `movie_id`.                               |
| `PUT`    | `/stef/movies`           | Get data for movie whose ID matches `movie_id` parameter.                  |
| `POST`   | `/stef/movies`           | Get data for all movies whose name contains string parameter `movie_name`. |
| `DELETE` | `/stef/movies`           | Delete record for movie whose ID matches `movie_id` parameter.             |

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
