/*global QUnit*/

sap.ui.define([
	"sapui5demoapptrainer/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});


	QUnit.test("Test UnitTestExampleCorrect Function", function(assert) {
        var oAppController = new Controller();
        var compareValue = oAppController.UnitTestExampleCorrect(3,3);
        assert.strictEqual(compareValue,6,"3 + 3 should give 6 and gives: "+compareValue);
    });

    // This Test will fail if the expected value is 6 please change to 5 or remove this test
    QUnit.test("Test UnitTestExampleFailure Function", function(assert) {
        var oAppController = new Controller();
        var compareValue = oAppController.UnitTestExampleFailure(3,3);
        assert.strictEqual(compareValue,6,"3 + 3 should give 6 and gives: "+compareValue);
    });
});
