require("dotenv").config()

const express = require("express")
const app = express()
// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/playstore', (req, res) => {
    res.redirect('https://play.google.com/store/apps/developer?id=Sushant+Pagam')
})

app.get('/linkedin', (req, res) => {
    res.redirect('https://www.linkedin.com/in/sushantpagam/')
    // res.send('<a href="https://www.linkedin.com/in/sushantpagam/">https://www.linkedin.com/in/sushantpagam/</a>')
})

const sushantGithubUserData = {
    "login": "SushantP199",
    "id": 54701889,
    "node_id": "MDQ6VXNlcjU0NzAxODg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/54701889?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SushantP199",
    "html_url": "https://github.com/SushantP199",
    "followers_url": "https://api.github.com/users/SushantP199/followers",
    "following_url": "https://api.github.com/users/SushantP199/following{/other_user}",
    "gists_url": "https://api.github.com/users/SushantP199/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SushantP199/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SushantP199/subscriptions",
    "organizations_url": "https://api.github.com/users/SushantP199/orgs",
    "repos_url": "https://api.github.com/users/SushantP199/repos",
    "events_url": "https://api.github.com/users/SushantP199/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SushantP199/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sushant Pagam",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "learning tech & building things out of it",
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2019-08-30T06:57:28Z",
    "updated_at": "2025-12-21T17:22:49Z"
}

app.get('/github', (req, res) => {
    res.json(sushantGithubUserData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}...`)
})