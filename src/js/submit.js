import {setError} from "./validation";
import {registration} from "./registartion";

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const telInput = document.querySelector('#tel')
const textInput = document.querySelector('#text')
const fieldInputs = document.querySelectorAll(".fieldInput")

export const submit = async () => {
    let hasError = false

    fieldInputs.forEach(fieldInput => {
        const error = setError(fieldInput)

        if (error.hasError) {
            hasError = true
        }
    })

    const formValues = {
        name: nameInput.value,
        email: emailInput.value,
        tel: telInput.value,
        text: textInput.value,
    }

    if (!hasError) {
        document.querySelector('.successMessage').innerHTML = ''
        const data = await registration(formValues)
        if (data.status === 'success') {
            document.querySelector('.successMessage').innerHTML = data.msg
            document.querySelector('.successMessage').classList.add('visible')

            setTimeout(() => {
                document.querySelector('.successMessage').innerHTML = ''
            document.querySelector('.successMessage').classList.remove('visible')
            }, 3000)
            fieldInputs.forEach(fieldInput => {
                fieldInput.querySelector(".input").value = ''
            })
        } else if (data.status === "error") {
            fieldInputs.forEach(fieldInput => {
                const input = fieldInput.querySelector('.input').id
                Object.keys(data.fields).forEach(key => {
                    if(key === input) {
                        fieldInput.classList.add('visible')
                        fieldInput.querySelector('p').innerHTML = data.fields[key]
                    }
                })
            })
        }
    }
}