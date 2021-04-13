const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("@octokit/rest");

async function run() {
    try {
        const token = core.getInput('repo-token');
        const octokit = new Ocktokit();
        await octokit.request('GET /search/code', {
            q: 'q'
          })

    } catch (err) {
        core.setFailed(`Action failed with error: ${err}`);
    }
}

run();