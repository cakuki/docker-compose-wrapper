# Docker Compose Wrapper

This project is an example for "[Docker Compose for Developing Microservices](https://slides.com/ckk/docker-compose-for-developing-microservices)" presentation.

See [`./wrapper`](wrapper) script for scalable [`docker-compose`](https://docs.docker.com/compose/) configuration management.

This is only intended for local development.

## Running

```bash
./wrapper up
```

Then open http://localhost:8080 on your browser.

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
