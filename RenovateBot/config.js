console.log("RENOVATE ")

module.exports = {
  platform: 'github',
  token: process.env.RENOVATE_TOKEN,
  logLevel: 'debug',
  repositories: ['mihaicozma/RenovateTest'],
  onboarding: false,
  printConfig: true,
  requireConfig: "optional",
};
