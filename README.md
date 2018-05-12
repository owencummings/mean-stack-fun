# An album ranking and review site, with the MEAN stack.

MongoDB, Express, Angular, and Node.js are used in this project to create all parts of a modern web-app. 

I did this mostly so I could fully understand how modern servers and RESTful API looks on the backend. This is sort of a pain to get running, but it is a fully functional CRUD (Create, Read, Update, Delete) app. 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
Honestly, this is a little overboard because you need to be running a copy of MongoDB on your machine as well, but whatever.

Simply fork the reposity and run 

```
npm install 
```

and then 

``` 
npm start 
```

will start the server. It will have errors and refuse to connect if MongoDB is not installed and running (with mongod.exe) on your machine.

In another command line, you can start the client webpage with 

```
ng serve 
```

and find the page at localhost:4200. 



## What I learned

A whole lote about writing a server. What a machine really does is not as simple as it appears to be, and actually going through the motions was very valuable. 


## What could be improved

Client side user auth (was working on this, probably almost ready), styling.
