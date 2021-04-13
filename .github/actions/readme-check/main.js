const core = require("@actions/core");
const github = require("@actions/github");
const octokit = new Ocktokit();

async function run() {
    try {
        const token = core.getInput('repo-token');
        await octokit.request('GET /search/code', {
            q: 'q'
          })

    } catch (err) {
        core.setFailed(`Action failed with error: ${err}`);
    }
}

run();