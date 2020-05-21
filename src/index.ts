import { GithubApiService } from './GithubApiService'
import { User } from './User';
import { Repo } from './Repo';
import * as Lodash from 'lodash'
import express from 'express';
import url from 'url';
const app = express();

let api:GithubApiService = new GithubApiService();

app.get('/github', (req, res) => {

  let userName:any = url.parse(req.url, true).query.username;
  api.getUserInfo(userName, (user: User) => {
    api.getRepos(user.login, (repos: Repo[]) => {
      let sortRepos = Lodash.sortBy(repos, [(repo:Repo) => repo.size * -1])
      user.repos = sortRepos;
      res.send(user)
    });
  });
})


app.listen(3000, () => {
  console.log(`serve runnding port http://127.0.0.1:3000`);
})