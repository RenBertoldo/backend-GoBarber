<h1 align="center">Backend GoBarber</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RenBertoldo/backend-GoBarber">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RenBertoldo/backend-GoBarber">

  <a href="https://github.com/RenBertoldo/backend-GoBarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RenBertoldo/backend-GoBarber">
  </a>

  <a href="https://github.com/RenBertoldo/backend-GoBarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/RenBertoldo/backend-GoBarber">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://postgresql.org/)
- [Express](https://github.com/expressjs/express)
- [Docker](https://docs.docker.com/)

## 💻 Project

This is a API to barber application using REST with express.

## 🔥 Getting started

At this time, you can start the project with the following steps:

1. Clone the repository: `https://github.com/RenBertoldo/backend-GoBarber.git`
2. Rename the file `.env.example` to `.env` add **all** variables within the file.
3. Create a `ormconfig.json` with config to mongodb and postgreSQL
4. Install the dependencies: `yarn`.
5. Run the migrations: `yarn typeorm migrate:run`.
6. Start the whole application: `yarn dev:start`.
7. Send requests to `http://localhost:3333`.

## 📝 License

This project is under the MIT license. See the archive [LICENSE](LICENSE.md) for more details.
