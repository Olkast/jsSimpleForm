const body = document.querySelector("body")
export const scrollManager = {
    disableScroll: () => {

        body.classList.add('nonScrollable');

        const paddingOffset = window.innerWidth - document.body.offsetWidth;
        document.body.style.paddingRight = `${paddingOffset}px`;
    },

    enableScroll: () => {
        setTimeout(() => {
            body.classList.remove('nonScrollable');
            document.body.style.paddingRight = '';
        }, 800);
    }
}