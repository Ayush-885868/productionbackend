require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "Ayush-885868",
    "id": 78699082,
    "node_id": "MDQ6VXNlcjc4Njk5MDgy",
    "avatar_url": "https://avatars.githubusercontent.com/u/78699082?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ayush-885868",
    "html_url": "https://github.com/Ayush-885868",
    "followers_url": "https://api.github.com/users/Ayush-885868/followers",
    "following_url": "https://api.github.com/users/Ayush-885868/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ayush-885868/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ayush-885868/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ayush-885868/subscriptions",
    "organizations_url": "https://api.github.com/users/Ayush-885868/orgs",
    "repos_url": "https://api.github.com/users/Ayush-885868/repos",
    "events_url": "https://api.github.com/users/Ayush-885868/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ayush-885868/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-02-07T18:00:26Z",
    "updated_at": "2024-07-14T13:43:43Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res)=>{
    res.send("ayushdotcom")
})
app.get("/youtube",(req,res)=>{
    res.send("gail india ltd.")
})
app.get("/github", (req,res)=>{
res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})