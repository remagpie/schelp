import * as Ajv from "ajv";
import { expect } from "chai";

import * as schelp from "../src/index";

describe("Null", () => {
    let ajv: Ajv.Ajv;

    beforeEach(() => {
        ajv = Ajv();
    });

    it("Should generate a valid schema", () => {
        const basic = schelp.nul();
        expect(ajv.validateSchema(basic.toSchema("schema"))).to.be.true;
    });

    it("Should accept only null values", () => {
        const schema = schelp.nul();
        ajv.addSchema(schema.toSchema("schema"));
        expect(ajv.validate("schema", null)).to.be.true;
        expect(ajv.validate("schema", true)).to.be.false;
        expect(ajv.validate("schema", {})).to.be.false;
        expect(ajv.validate("schema", [])).to.be.false;
        expect(ajv.validate("schema", 42)).to.be.false;
        expect(ajv.validate("schema", 0.42)).to.be.false;
        expect(ajv.validate("schema", "string")).to.be.false;
    });
});
