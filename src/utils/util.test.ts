import {calculateAge, toOrdinal} from './util';

describe('calculateAge', () => {
    it('should return the correct age for a given date of birth', () => {
        const dob = new Date('1990-05-15');
        const age = calculateAge(dob);
        const currentYear = new Date().getFullYear();
        expect(age).toBe(currentYear - 1990);
    });

    it('should return 0 for a birth date today', () => {
        const today = new Date();
        const dob = new Date(today);
        const age = calculateAge(dob);
        expect(age).toBe(0);
    });

    it('should return the correct age accounting for the current date', () => {
        const dob = new Date('2000-12-31');
        const age = calculateAge(dob);
        const today = new Date();
        const expectedAge = today.getFullYear() - 2000 - (today.getMonth() < 11 || (today.getMonth() === 11 && today.getDate() < 31) ? 1 : 0);
        expect(age).toBe(expectedAge);
    });

    it('should return 1 for a birth date that is today in the past', () => {
        const dob = new Date(new Date().setFullYear(new Date().getFullYear() - 1)); // One year ago today
        const age = calculateAge(dob);
        expect(age).toBe(1);
    });

    it('should return the correct age for a future date', () => {
        const dob = new Date('2050-01-01');
        const age = calculateAge(dob);
        expect(age).toBeLessThan(0); // Future DOB should return negative age
    });
});

describe('toOrdinal', () => {
    it('should return 1st', () => {
        const ordinalNum = toOrdinal(1);
        expect(ordinalNum).toBe("1st");
    });

    it('should return 2nd', () => {
        const ordinalNum = toOrdinal(2);
        expect(ordinalNum).toBe("2nd");
    });

    it('should return 3rd', () => {
        const ordinalNum = toOrdinal(3);
        expect(ordinalNum).toBe("3rd");
    });

    it('should return 4th', () => {
        const ordinalNum = toOrdinal(4);
        expect(ordinalNum).toBe("4th");
    });

    it('should return 10th', () => {
        const ordinalNum = toOrdinal(10);
        expect(ordinalNum).toBe("10th");
    });

    it('should return 11th', () => {
        const ordinalNum = toOrdinal(11);
        expect(ordinalNum).toBe("11th");
    });

    it('should return 31st', () => {
        const ordinalNum = toOrdinal(31);
        expect(ordinalNum).toBe("31st");
    });
});