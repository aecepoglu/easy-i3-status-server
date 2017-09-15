To run:

    npm start

I personally launch the database via docker

    docker run --name my-postgres -e POSTGRES_PASSWORD=pass123 -p 5432:5432 -d postgres
