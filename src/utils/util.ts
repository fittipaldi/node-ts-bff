export function calculateAge(dob: Date): number {
    const today = new Date();
    dob = new Date(dob);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Statement to check if the date is in advance from today, if is true it will return a negative age
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }
    return age;
}

export function toOrdinal(n: number): string {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = n % 100;

    return n + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}
