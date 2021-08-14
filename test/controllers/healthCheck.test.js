import { expect } from "chai";
import request from "supertest";
import { server } from "../../src/server";

describe("CALL HEALTHZ CHECK", async () => {
  it("IS OK", async () => {
    const { body, status } = await request(server).get("/healthz");
    const { data } = body;
    expect(status).to.equal(200);
  });
});
