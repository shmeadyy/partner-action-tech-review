const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const token = core.getInput('repo-token');
        const octokit = github.getOctokit(token);
        console.log("We're successfully running this action!")

    } catch (err) {
        core.setFailed(`Action failed with error: ${err}`);
    }
}

run();