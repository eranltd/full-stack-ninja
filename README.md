## Overview

simple node.js app using Express.js to mockup a message queue



## Running the sample

```
node server.js

```

## Call using Postman:

__GET NEXT MSG FROM QUEUE__ (using GET)
```
http://localhost:8000/api/<queue_name>?timeout=100
```


__SAVE NEXT MSG TO QUEUE__ (using POST)
```
http://localhost:8000/api/<queue_name>
```

with body of:

```
{
    "message": <message_content>
}

```


## Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
