# Running RePolyglot with Docker

This guide explains how to run the RePolyglot development environment using Docker.

## Requirements

- Docker Desktop installed and running
- MongoDB running on your computer or in another Docker container
- A `.env` file in the project root containing MONGO_URI variable

## Environment Setup

The application reads the following environment variables:

- `MONGO_URI` - MongoDB connection string
- `CLOUD_NAME` - Cloudinary cloud name, optional for profile image uploads
- `API_KEY` - Cloudinary API key, required for profile image uploads
- `API_SECRET` - Cloudinary API secret, required for profile image uploads
- `PORT` - Application port; the default is `3500`

When MongoDB is running on the host computer, use `host.docker.internal` instead of `localhost` in the connection string:

```env
MONGO_URI=mongodb://host.docker.internal:27017/repolyglotOriginal
```

The `.env` file is passed to the running container. It is not copied into the Docker image.

## Build the Image

Open a terminal in the project directory and run:

```powershell
docker build -t repolyglot-dev .
```

## Run the Development Server

Run the following command in PowerShell:

```powershell
docker run --rm -it `
  --name repolyglot-dev `
  -p 3500:3500 `
  --env-file .env `
  -v "${PWD}:/app" `
  -v /app/node_modules `
  repolyglot-dev
```

The project is available at:

```text
http://localhost:3500
```

The source directory is mounted into the container, so changes to the project files are available to the development server. The separate `node_modules` volume prevents the host directory from replacing the container's installed dependencies.

## Seed the Database

After building the image, seed the database with:

```powershell
docker run --rm `
  --env-file .env `
  -v "${PWD}:/app" `
  -v /app/node_modules `
  repolyglot-dev `
  node seeds/index.js
```

## Stop the Application

Press `Ctrl+C` in the terminal running the container. The `--rm` option removes the stopped container automatically.

## Troubleshooting

If port `3500` is already in use, map another host port to the container port:

```powershell
docker run --rm -it -p 3501:3500 --env-file .env repolyglot-dev
```

Then paste `http://localhost:3501` in your browser.

If MongoDB is running in another Docker container, connect to it using the MongoDB container or Compose service name instead of `host.docker.internal`.
