const app = require("./server.js");
let chai = require("chai");
let chaiHttp = require("chai-http");
before(function (done) {
    server = app.listen(3000, done);
  });
  
  after(function (done) {
    done();
    process.exit()
  });

chai.should();
chai.use(chaiHttp);

describe("---------------------- Testing APIs -------------------------", () => {
    describe("/GET server All Recette", () => {
        it("it SHOULD return the test message", (done) => {
            chai.request(app)
                .get('/AllRecette')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe("/GET Recente Recette", () => {
        it("it SHOULD return the test message", (done) => {
            chai.request(app)
                .get('/RecenteRecette')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("recettes");
                    done();
                });
        });
    });
});
