## How to: Routes

### HTML 

Your HTML form has to use ```method="GET"``` or ```method="POST"``` for the router to see it.

The data from your form becomes the **'request'**.

### Fetch Path

Your HTML form fills the fetch URL path with user ```${input}``` from your eventListener.

```
await fetch('PATH')
```

### Routes

Routes look like this

```
router.method('PATH', (request, response))
```

method = get | post | put | param .. etc

### Sequelize

In our case, the request is sent to Sequelize:

```
# Example

router.get('/felinae/:gbif', async (req, res) => { // async because we're waiting for a response
  try {
  
    // await Model.method()
    // .findAll() = SELECT ALL COLUMNS FROM db
    
    const felinae = await db.sequelizeDB.models.felinae.findAll({ / the parameters below fill in the statement string that the db recieves.
    
      where:
        gbif: req.params.gbif // matches the param we passed into the fetch('PATH') URL
      }
    });
    
    // final result "SELECT * FROM felinae WHERE gbif=${gbif};"
    
    res.json(felinae); // response data as a JSON
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

```

### Models

The *model action* has to match the *router method*. If the router is a ```router.get()``` the Model should be reading a SELECT statement. If the router is a ```router.post()``` then the Model should be reading an INSERT statement.

SELECT: ```Model.findOne( {params} )``` | ```Model.findAll( {params} )```

INSERT: ```Model.create({ params })```



## Basic Roundtrip

#### "Searching for a video game"

*"Filter by console"* + *"Filter by category"*

1. ```form``` input

``` 
// index.html
<form method="GET">
  <label>Search for Video Games</label>
    <input type="text" id="console" name="console" placeholder="By Console"/> 
    <input type="text" id="category" name="category" placeholder="By Category"/>
</form>

```

2. Input passed into ```fetch()```

```
// script.js
await fetch(`/${console}/games/${category}`) // => becomes await fetch('/ps5/games/FPS')
```


3. Fetch detected by ```router```

```
// apiRoutes.js
router.get('/:console/games/:category', ... )
```

4. Router passes parameters to Sequelize ```model```

```
router.get('/ps5/games/:category', async (req, res) => {
  try {
    const ps5games = await db.sequelizeDB.models.ps5.findAll({
      where: {
        category: req.params.category
      }
    });
    res.json(ps5games);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

```
