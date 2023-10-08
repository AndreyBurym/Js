// const assert = require("assert");
// const {expect} = require("mocha");
const expect = require("chai").expect;

const verifyEmail = require("./script").verifyEmail;

describe("verifyEmail function", () => {
    it("test empty string", () => {
        expect(verifyEmail('')).toBe({
            totalCharacters: 0,
            isValidEmail: false
        });
    })
});
