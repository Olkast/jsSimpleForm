import '../styles/main.scss';
import IMask from "imask";
import {submit} from "./submit";
import {scrollManager} from "./scrollManager";

const submitButton = document.querySelector(".submitButton")

const button = document.querySelector(".button");
const modal = document.querySelector(".modalContainer");
const close = document.querySelector(".close");

submitButton.onclick = submit

button.onclick = () => {
    modal.classList.add('active');
    scrollManager.disableScroll();
};

close.onclick = () => {
    modal.classList.remove('active');
    scrollManager.enableScroll()
}

const tel = document.getElementById('tel');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

IMask(tel, maskOptions);