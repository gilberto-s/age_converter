import planets from "../../src/app/resources/planets"
import { timeConverterService } from "../../src/app/services"

describe("timeConverterService", () => {
    it("Should calculate time conversion", async () => {
        const result = timeConverterService.caculate(2500000000, planets.earth)
        console.log('***result', result)

        expect(result).toBe(79.22)
    })
})
