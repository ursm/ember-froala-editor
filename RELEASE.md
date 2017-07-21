# Release Process

1. If needed, bump the `froala-editor` version in `package.json` dependencies
2. Update the version in `tests/dummy/app/controllers/application.js` (hoping to remove this step later)
3. `npm version x.y.z` - Updates the version in `package.json` and tags in git
4. `git push origin master --follow-tags` - Pushes any changes and the new version tag up to Github
5. Update the new tag on the [Github Releases page](https://github.com/froala/ember-froala-editor/releases)
6. `npm run deploy` - Deploys the docs to `gh-pages` using [ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages#how-can-i-create-an-automated-deploy-script)
    * May need to `git push`, deploy will say if this is needed
7. `git checkout master` - Need to switch back to `master` after deploying the docs..
8. `npm publish` - Release the new version to the world!
