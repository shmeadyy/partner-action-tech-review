const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const repoToken = core.getInput('repoToken');
        const octokit = github.getOctokit(repoToken);
        console.log(`This is octokit variable: ${octokit}`);
        console.log(`This is your repoToken: ${repoToken}`);
    } catch (err) {
        core.setFailed(`Action failed with error: ${err}`);
    }
}

run();