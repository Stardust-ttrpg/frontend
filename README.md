# frontend
Frontend application 

## Starting the application locally
The application local infrastructure is made up from 2 components, being docker and docker-compose. Docker creates our runtime environment, and docker-compose is a way of creating local infrastructure service meshes that react to change. 



### Build and Start
While in the root of the folder. docker-compose will look at your locally images, if one doesn't not exist for the specified dockerfile within the `docker-compose.yaml` file, then it will build it based on the root/dockerfile.

**Build**
`docker build -t stardust-poc:latest .` 

**Start the service**
`docker-compose up`

The port will be printed after the application is brought up.