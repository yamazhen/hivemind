# Introduction
This project is a forum platform heavily inspired by the popular website Reddit, created as a backend practice for my third-year final project at university. The main objective is to replicate core functionalities of Reddit, focusing on the backend development process. This project allows users to create posts, comment on posts, upvote or downvote posts and comments, and join different communities (subreddits).

## Features

### Implemented:
✔️ User authentication (signup, login, logout)

✔️ CRUD operations for posts (without medias currently)

✔️ Forum creation

✔️ User profiles

### Planned:
❌ CRUD operations for comments

❌ Liking and disliking posts and comments

❌ Forum subscription

❌ Allow users to make posts with images/gifs and videos

❌ Allow users to change profile pictures

❌ Real account creation (email service)

## Technologies Used
**Backend:** Node.js, Express.js, Cookie-Parser

**Database:** MongoDB

**Authentication:** JWT and BcryptJS

## Installation
To run this project locally, follow these steps:

Clone the repository:

```
git clone https://github.com/yamazhen/hivemind
cd hivemind
```

Create a .env file in the root directory and add the following variables:
```
DB_CONNECT = (PASTE YOUR CONNECTION STRING HERE)
JWT_SECRET = (ANY NUMBERS U WANT)
```

Start the server:
```
npm start
```
