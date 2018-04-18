// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by weui.js.
import { name as packageName } from "meteor/wk:weui";

// Write your tests here!
// Here is an example.
Tinytest.add('weui - example', function (test) {
  test.equal(packageName, "weui");
});
