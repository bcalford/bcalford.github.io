const onLoginButtonClick = () => {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("menu-section").style.display = "block";
}

const onSearchPalletButtonClick = () => {
    const routingNumber = document.getElementById("menu-routing-number").value;
}

const onAddPalletButtonClick = () => {
    
}

const onMenuBackButtonClick = () => {
    document.getElementById("menu-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}

window.onload = () => {
    document.getElementById("login-button").onclick = onLoginButtonClick;
    let palletArray = [
        ["12345", "001"]
        ["65421", "002"]
        ["20056", "003"]
        ["80085", "004"]
        ["82314", "005"]
    ];
    document.getElementById("search-pallet-button").onclick = onSearchPalletButtonClick;
    document.getElementById("add-pallet-button").onclick = onAddPalletButtonClick;
    document.getElementById("menu-back-button").onclick = onMenuBackButtonClick;
}