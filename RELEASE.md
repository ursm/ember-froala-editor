# Release Process

1. `npm install froala-editor@x.y.z --save` - Updates the editor dependency and lock-file to the specific version
2. `npm version x.y.z` - Updates the version in `package.json` and tags in git
3. `git push origin master --follow-tags` - Pushes any changes and the new version tag up to Github
4. Update the new tag on the [Github Releases page](https://github.com/froala/ember-froala-editor/releases)
5. `npm run deploy` - Deploys the docs to `gh-pages` using [ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages#how-can-i-create-an-automated-deploy-script)
    * May need to `git push`, deploy will say if this is needed
6. `git checkout master` - Need to switch back to `master` after deploying the docs..
7. `npm publish` - Release the new version to the world!
