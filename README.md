<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Download resource as CSV/JSON file

Goal of this app is to provide a simple way to download resources as CSV/JSON file in NestJS REST server. It is done by creating an interceptor (specifically a controller post-interceptor) that will intercept the response and add a new header to it. This header will contain the data that will be used by the client to download the resource as a file.

This method is universal and can be easily used in any other project by just hooking up interceptor to desired controller.

## Method 

For JSON file download it is needed just to set headers:

- `Content-Type: application/json`
- `Content-Disposition: attachment; filename="filename.json"`

with those headers the browser will download the resource as a file.

For CSV file headers are:

- `Content-Type: text/csv`
- `Content-Disposition: attachment; filename="filename.csv"`

For CSV file it is also required to convert the resource to CSV format. This is done by using the `json2csv` library. The library will convert the JSON resource to CSV format and then it will be downloaded as a file. If JSON resource has complex structure, these will be unwinded like so:

{
  "name": "John Cena",
  "author": {
    "name": "John",
    "surname": "Doe"
  }
}

CSV file will have headers:
- name
- author_name
- author_surname

## Running the app

First of all you need to install npm packages, and then you can run the app. To run the app you need to run the following command:

```bash
# install packages
$ npm install

# start application
$ npm run start:dev
```

## Avalible resources

There are two resources: vehicles and users (not related in any way). Endpoints:

http://localhost:3000/stats/vehicles<br>
http://localhost:3000/stats/users

using GET method on these endpoints will return the resource in JSON format. If you want to download a file you need to add `/csv` or `/json` to the end of the endpoint. For example:

- /stats/vehicles/csv
- /stats/users/json