const validator = require('./index');

describe('Phone numbers', () => {
    it('Should print valid phone numbers', () => {
        const phoneNumbers = ["+1555-555-5555", "123-123-4534", "232-123"]
        expect(validator(phoneNumbers)).toEqual(["+15555555555", "1231234534"])
    })

    it('Should skip invalid phone numbers', () => {
        const phoneNumbers = ["534", "", "232-123"]
        expect(validator(phoneNumbers).length).toEqual(0)
    })
})