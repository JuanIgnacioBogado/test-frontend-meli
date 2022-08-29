export const formatCurrency = number => new Intl.NumberFormat().format(number);

export const getDecimal = number => {
    if (number <= 9) {
        return `0${number}`;
    }
    return number;
};
