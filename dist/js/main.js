function ScrollMenu (id_icon, id_dropBar) {
    this.icon = document.getElementById(id_icon);
    this.dropBar = document.getElementById(id_dropBar);

    this.baseClass = this.dropBar.classList[0];

    this.icon.addEventListener("click", ()=>{
        this.icon.classList.toggle("header__sterring-wheel--clicked");
        if (this.icon.classList.contains("header__sterring-wheel--clicked")) {
            this.open();
        }
        else {
            this.close();
        }
    });
}

ScrollMenu.prototype.open = function () {
    this.dropBar.classList.add(this.baseClass + "--visible");
    // this.dropBar.style.height = this.dropBar.scrollHeight + 175 + "px"
}

ScrollMenu.prototype.close = function () {
    this.dropBar.classList.remove(this.baseClass + "--visible");
    // this.dropBar.style.height = "0px";
}

const menu = new ScrollMenu("sterring-wheel", "sticky-nav");

