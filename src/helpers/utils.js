export function getPrice(num) {
    const roundTwoDecimal = num.toFixed(2);
    return `$${roundTwoDecimal}`;
}