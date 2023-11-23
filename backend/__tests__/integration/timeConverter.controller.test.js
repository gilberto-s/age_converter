import request from "supertest"
import app from "../../src/app"

describe("TimeConverterController", () => {
    it("Should validate if conversion is right", async () => {
        const response = await request(app)
          .post(`/convert`)
          .send({
            seconds: 2500000000,
            type: 'earth'
          })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('input')
    })

    it("Should return error if type does not exists", async () => {
      const response = await request(app)
        .post(`/convert`)
        .send({
          seconds: 2500000000,
          type: 'pandora'
        })

      expect(response.status).toBe(404)
      expect(response.body.message).toBe("Planet of type 'pandora' not found")
    })

    it("Should return error if seconds is not greater than 0", async () => {
      const response = await request(app)
        .post(`/convert`)
        .send({
          seconds: -5,
          type: 'pandora'
        })

      expect(response.status).toBe(422)
      expect(response.body.error).toBe("\"body.seconds\" must be greater than 0")
    })
})
