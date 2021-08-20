// import fetch from "node-fetch";

async function getRepo(user) {
  const result = await fetch(`https://api.github.com/users/${user}/repos`);
  let repos = await result.json();

  repos = filterRepos(repos);
  return repos;
}

function filterRepos(repos) {
  const foundRepos = [];

  for (const repo of repos) {
    if (repo.fork) continue;

    repo.created_at = new Date(repo.created_at);
    foundRepos.push(repo);
  }

  const sortRepo = foundRepos.sort((a, b) => b.created_at - a.created_at && b.stargazers_count - a.stargazers_count);

  return sortRepo.slice(0, 12);
}

export default async (req, res) => {
  let arr = [];
  for (const repo of await getRepo("mertcelik2196")) {
    arr.push({ description: repo.description || "Nothing!", url: repo.html_url || "https://mertcelik2196.vercel.app/", star: repo.stargazers_count || 0, name: repo.name })
  };
  res.json(arr);
};
