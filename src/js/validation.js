const required = "required"
const email = "email"

const checkEmailValidity = (email) => {
    return /^.+@.+\..+$/i.test(email);
};

export const setError = (elem) => {
    const input = elem.querySelector(".input")
    const error = elem.querySelector(".error")

    elem.classList.remove('visible')
    error.querySelector('p').innerHTML = ''

    if (input.classList.contains(required) && !input.value) {
        elem.classList.add('visible')
        error.querySelector('p').innerHTML = 'Поле должно быть заполненно'

        return {hasError: true}
    }

    if (input.classList.contains(email) && !checkEmailValidity(input.value)) {
        elem.classList.add('visible')
        error.querySelector('p').innerHTML = 'Адрес почты введен не корректно'

        return {hasError: true}
    }

    return {hasError: false}
}
