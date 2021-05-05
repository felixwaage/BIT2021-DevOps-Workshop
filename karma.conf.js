module.exports = function(config) {
	config.set({
	  frameworks: ["ui5", "qunit"],
	  ui5: {
		url: "https://openui5.hana.ondemand.com",
		mode: "script",
		config: {
		  async: true,
		  resourceRoots: {
			"sapui5demoapptrainer": "./base/webapp"
		  }
		},
		tests: [
		  "sapui5demoapptrainer/test/unit/AllTests"
		]
	  },
	  browsers: ["Chrome"]
	});
  };