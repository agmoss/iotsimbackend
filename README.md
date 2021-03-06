# iotsimbackend

> REST api 

A simple express backend built on top of a MongoDB database. This repo serves as the backend for a react dashboard application.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.
Open [http://localhost:3005](http://localhost:3005) to view data in the browser.

### `npm devstart`
Runs the app with hot module reloading

### `npm docker` 
Script called by Docker file for build

### Endpoint

| Endpoint | Request Type | Description  |
| ------------- |:-------------:| :-----|
| {host}/api/devices/| GET | Retuns all device datapoints |

### URL Paramaters

These paramaters can be used in combination with each other

| Paramater | Request Type | Description  |
| ------------- |:-------------:| :-----|
| /facility/`<facility ID>` | GET | Retuns all device datapoints in a facility |
| /dsn/`<serial number>` | GET | Retuns all device datapoints for a device serial number |
| /type/`<device type>` | GET | Retuns all device datapoints for an IoT device type |
| /gte/`<epoch date>` | GET | Retuns all device datapoints after specified date |


### Deployment

This codebase can be deployed as a container via docker compose

```
$ docker-compose build
$ docker-compose up
```

Open [http://localhost:3005](http://localhost:3005) to view data in the browser.

## Built With

* [Express](https://expressjs.com/) - Micro Service framework 
* [mongoose](https://mongoosejs.com/) - Object relational mapping for MongoDB
* [CosmosDB](https://azure.microsoft.com/en-ca/services/cosmos-db/) - NoSQL database
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Docker](https://www.docker.com/) - Container platform
* [Web App for Containers](https://azure.microsoft.com/en-ca/services/app-service/containers/) - Cloud Deployment


## Author

* **Andrew Moss** - *Creator* - [agmoss](https://github.com/agmoss)