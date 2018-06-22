This is the webserver for [easyi3status](https://github.com/aecepoglu/easyi3status) and is running at [http://easyi3status.herokuapp.com](http://easyi3status.herokuapp.com).

To run locally:

    npm start

I personally launch the database via docker

    docker pull library/postgres
    docker run --name my-postgres -e POSTGRES_PASSWORD=pass123 -p 5432:5432 -d postgres
