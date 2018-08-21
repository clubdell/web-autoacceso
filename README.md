# Autoacceso Website

Simple site built using [Jekyll](https://jekyllrb.com).

### Deploy
Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu) and run these commands:

```bash
$ jekyll build
$ docker build -t web-autoacceso .
$ docker run --name webautoacceso -p 80:80 -d web-autoacceso
```
