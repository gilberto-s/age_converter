import request from "supertest"
import app from "../../src/app"

describe("HealthCheckController", () => {
    it("Should validate if application is up to receive requests", async () => {
        const response = await request(app).get(
            `/health`
        )

        expect(response.status).toBe(200)
    })
})
