workflow "Unit test" {
  on = "push"
  resolves = ["Run unit test"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "Run unit test" {
  uses = "actions/npm@master"
  needs = ["Install dependencies"]
  args = "test"
}