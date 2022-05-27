let isNavOpen = false;
function navHamburgerClick() {
    isNavOpen = !isNavOpen;
    document.getElementById("nav-mobile-inner").style.display = isNavOpen ? "block" : "none";
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    document.body.style.position = isNavOpen ? "fixed" : "";
    document.body.style.maxWidth = isNavOpen ? "100vw" : "";
}
function navBackgClick(e) {
    if (e.target.id != "nav-mobile-inner") return;
    isNavOpen = !isNavOpen;
    document.getElementById("nav-mobile-inner").style.display = isNavOpen ? "block" : "none";
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    document.body.style.position = isNavOpen ? "fixed" : "";
    document.body.style.maxWidth = isNavOpen ? "100vw" : "";
}
let isProjectsOpen = false;
function navProjectsClick() {
    isProjectsOpen = !isProjectsOpen;
    document.getElementById("nav-bar-mobile-dropdown").style.display = isProjectsOpen ? "block" : "none";
}