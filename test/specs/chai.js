
import { expect } from "chai";

describe("chai assertion", () => {
    it("assert it", () => {
        expect(10).to.be.equal(10);
        //string
        expect("hello world").to.equal("hello world");
        expect("hello world").to.include("world");
        expect("hello world").to.match(/^hello/);
        expect("hello world").to.have.lengthOf(11);

    });
});


// 1.assert: This style is more traditional and uses functions to make assertions. It's similar to the assertions found in many other testing frameworks.
// expect: This style is more expressive and reads more like natural language. It allows chaining of assertions for a more fluent interface.
// 2. Usage
// assert: Does not use chaining and typically requires passing both the actual and expected values as arguments to the assertion functions.
// expect: Uses chaining to make the assertions more readable and flexible. It allows you to build assertions in a more intuitive way.
// 4. Readability and Expressiveness
// assert: The assert style is straightforward but can be less readable when dealing with complex assertions.
// expect: The expect style is designed to be more human-readable, making it easier to write and understand complex assertions.
// 5. Flexibility
// assert: Less flexible in terms of chaining and expression, as each assertion is a separate function call.
// expect: Allows for chaining, making it possible to combine multiple assertions in a single, fluent expression.
// Summary
// Use assert if you prefer a more functional approach or are coming from a framework that uses similar assertions.
// Use expect if you prefer a more readable and fluent interface, especially when working with complex assertions.