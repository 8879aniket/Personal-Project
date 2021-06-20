const chai = require("chai");
const request = require("request");
const chaiHttp = require("chai-http");
const server = require("../Routers/routers");

chai.should();
chai.use(chaiHttp);

describe("TestAPI", () => {
  describe("POST /Payment", () => {
    it("It should handle Post for Payment", (done) => {
      const userDetails = {
        userName: "XYZ",
        userId: "123456",
        userEmail: "Test@test.com",
        userCPF: "1201540456",
        userAmount: "70000",
        userCVV: "123",
        userCardNumber: "5105105105105100",
      };
      chai
        .request(server)
        .post("/Payment")
        .send(userDetails)
        .end((err, response) => {
          response.body.should.have.property("status").eq(true);
          response.body.should.have.property("reason").eq("");
          response.body.should.have
            .property("message")
            .eq(
              "Your Payment for Rs" + userDetails.userAmount + " is successful"
            );
          response.body.should.have.property("modeOfPayment").eq("Credit Card");
          done();
        });
    });
  });
});
