<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://cdn.discordapp.com/attachments/706989572965400586/1177304601003835434/logo_1.png" width="200" alt="BODYWORKS LOGO" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Bodyworks APP</p>

## Descrição / Description
<h3><b>pt/br: </b></h3><br>
O framework [Nest](https://github.com/nestjs/nest) TypeScript é utilizado para build no repositório. <br>
<h3><b>en/us: </b></h3><br>
The Nest TypeScript framework is used for building in the repository.

## Tecnologias necessárias / Required Technologies
<b>1.</b> Docker<br>
<b>2.</b> NestJS Framework

## Instalação / Installation

```bash
$ npm install
```

## Iniciar o app / Running the app

```bash
# start docker image
$ docker-compose up -d

# Start Prisma
$ npx prisma generate

# Update Prisma DB
$ npx prisma db push

# Open Prisma Interface
$ npx prisma studio

# development
$ npm run dev

# development with debug mode
$ npm run dev:debug

# production mode
$ npm run start
```


## Sobre o deploy / About Deploy

<h3><b>pt/br: </b></h3><br>
Para dar o Deploy, será necessário gerar a imagem docker do projeto back finalizado e realizar o upload para o Docker Hub. Na sequência, na DigitalOcean, atualiza a imagem principal do projeto em deploy para a nova versão da imagem. <br>
<h3><b>en/us: </b></h3><br>
To deploy, it will be necessary to generate the Docker image of the completed back-end project and upload it to Docker Hub. Subsequently, on DigitalOcean, update the main image of the project in deployment to the new version of the image.<br><br>


```bash
# Login on Docker
$ docker login -u viniciusleprevost

# Build new image
$ docker build . -t viniciusleprevost/bodyworks:[version number] (ex: viniciusleprevost/bodyworks:3.0)

# Upload to Docker HUB
$ docker push viniciusleprevost/bodyworks:3.0
```