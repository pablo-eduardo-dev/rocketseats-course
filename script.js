export default {
    switch: document.querySelector("#switch"),
    lightMode: document.querySelector("html"),
    img: document.querySelector('img'),
    toggleMode() {
        this.switch.onclick = () => {
            this.lightMode.classList.toggle('light')
            this.toggleImage()
        }
    },
    toggleImage() {
        if (this.lightMode.classList.contains('light')) {
            this.img.setAttribute('src', './assets/avatar-light.png')
        } else {
            this.img.setAttribute('src', './assets/avatar.jpg')
        }
    }
}