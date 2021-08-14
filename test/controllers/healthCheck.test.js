import { expect } from "chai";
import request from "supertest";
import { server } from "../../src/server";

describe("CALL HEALTHZ CHECK", async () => {
  it("IS OK", async () => {
    const healthz = await request(server).get("/healthz");
    expect(healthz.status).to.equal(200);
    expect(healthz.text).to.equal("OK !!!");
  });
});
