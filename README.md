
# challenge
calculating a person's age on different planets.

consider:
- Mercury: represents 0.2408467 Earth years
- Venus: represents 0.61519726 Earth years
- Earth: represents 1.0 Earth year, equivalent to 365.25 Earth days
- Mars: represents a period of 1.8808158 Earth years
- Jupiter: represents a period of 11.862615 Earth years
- Saturn: represents a period of 29.447498 Earth years
- Uranus: represents a period of 84.016846 Earth years
- Neptune: represents a period of 164.79132 Earth years

The user should provide the number of seconds and specify the planet for which they want to calculate the age:

Example I:
Inputs: 2500000000 (seconds) / "Earth" (type)
Output: 79.22 Earth-years-old

Example II:
Inputs: 2500000000 (seconds) / "Venus" (type)
Output: 48.73 Venus-years-old

## Stack

**Front-end:** React

**Back-end:** Node, Express


## Running

Download or clone this repository

inside `backend` folder create a `.env` file and paste this:
```bash
    NODE_ENV=development
    PORT=8080
    CIRCUITBREAKER_TIMEOUT=600000
    CIRCUITBREAKER_RESET_TIMEOUT=30000

    LOGGER=CONVERTER
    LOGLEVEL=DEBUG
    CORS_ORIGIN="*"
```

### Using Docker

in the project root folder run:
```bash
  docker-compose -f docker-compose.yml up --build -d
```

this command will run both backend and frontend, run the backend tests and generate the swagger documentation.  
the frontend will run on [localhost:3000](http://localhost:3000)  
the backend will run on [localhost:8080](http://localhost:8080)

to check the backend status go to [localhost:8080/health](http://localhost:8080/health)  
to see the API documentation go to [localhost:8080/api-docs](http://localhost:8080/api-docs)  
    
### Locally
install dependencies inside `backend` and `frontend` directories with:
```bash
  npm install
```
to run the backend execute:
```bash
  npm run dev
```
to run the frontend execute:
```bash
  npm start
```
to generate the backend swagger documentation run:
```bash
  npm run swagger-autogen
```
to run the backend tests execute:
```bash
  npm run test
```



## Environments variables

### backend

``NODE_ENV``=``development``  
``PORT``=``8080``  
``CIRCUITBREAKER_TIMEOUT``=``600000``  
``CIRCUITBREAKER_RESET_TIMEOUT``=``30000``  
``LOGGER``=``CONVERTER``  
``LOGLEVEL``=``DEBUG``  
``CORS_ORIGIN``="*"  

### frontend

``REACT_APP_BACKEND_URL``=``http://localhost:8080``
