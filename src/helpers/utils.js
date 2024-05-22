export function getPrice(num) {
    const roundTwoDecimal = num.toFixed(2);
    return `$${roundTwoDecimal}`;
}

export const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
