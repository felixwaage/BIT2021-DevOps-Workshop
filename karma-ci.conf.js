/* global module require*/
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
	"use strict";

	require("./karma.conf.js")(config);

	config.set({

		preprocessors: {
			'{webapp,webapp/!(test)}/*.js': ['coverage']
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: 'html',
					dir: 'coverage'
				},
				{
					type: 'text'
				}
			],
			check: {
				global: {
					statements: 80,
					branches: 80,
					functions: 70,
					lines: 80
				}
			}
		},

		reporters: ['progress'], //'coverage'],

		browserNoActivityTimeout: 30000,

		browsers: ['ChromeHeadless'],

		singleRun: true
	});
};