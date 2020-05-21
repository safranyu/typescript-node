export class Repo {
  name: string;
  size: number;
  language: string;
  description: string;

  constructor(repos: any) {
    this.name = repos.name;
    this.size = repos.size;
    this.language = repos.language;
    this.description = repos.description;
  }
}