const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";

export const requiredValidator = () => ({
    value: requiredValue,
});

export const minValidator = () => ({
    value: minValue,
});

export const maxValidator = () => ({
    value: maxValue,
});

export const emailValidator = () => ({
    value: emailValue,
});