# Docker Compose Wrapper

This project is an example for "[Docker Compose for Developing Microservices](https://slides.com/ckk/docker-compose-for-developing-microservices)" presentation.

See [`./wrapper`](wrapper) script for scalable [`docker-compose`](https://docs.docker.com/compose/) configuration management.

This is only intended for local development.

## Running

```bash
./wrapper up
```

Then open http://localhost:8080 on your browser.

## How does it work?

Instead of having single `docker-compose.yml` file this project offers a compose config for each service method. There is a different file for each service in `stack` directory. This method intended for increasing visibility and maintainability while developing microservices with Docker Compose.

## Generating service configurations

As all services in this project have generic form, they are genereted by `stack-generator` with a basic templating.

To `stack/*.yml` file for each service in `services` directory, run:

```bash
./stack-generator
```

There is a small customization enabled for overring port forwarding. For that please inspect templating script source.

## Explore

You can basically use any `docker-compose` command with `./wrapper` script. Try `./wrapper config` to see merged output that's being used by Docker Compose process.

You can run in detached mode:

```bash
./wrapper up -d
```

And monitor processes via:

```bash
./wrapper ps
```

And watch logs of a service:
```bash
./wrapper logs -f cart-service
```

Restart a specific service:

```bash
./wrapper restart checkout
```

And scale:

```bash
./wrapper up -d --scale payment=3
```

## License

Feel free to copy anything you like.

See [LICENSE](LICENSE).
