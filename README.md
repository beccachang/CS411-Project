# CS411-Project
Repository for some good CS411 collaboration.

## Django 
* Follow the tutorial here: 
* https://docs.djangoproject.com/en/3.2/intro/tutorial01/
* Currently, the code has everything in the tutorial.

## API Calls?
* https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=(MONTH)%20(YEAR)&limit=20&callback=

## CRUD
* curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8000/api/searchrequest/ -d "{\"month\":\"January\",\"year\":\"2020\"}"
* curl -X GET http://127.0.0.1:8000/api/searchrequest/
* curl -X GET http://127.0.0.1:8000/api/searchrequest/1