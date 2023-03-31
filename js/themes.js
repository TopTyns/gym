var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });


curThemes = getCookie('themes');
if(curThemes == 'dark') {
    btn.innerHTML = "Світла тема";
    link.setAttribute("href", 'css/dark.css');
}else if(curThemes == 'light'){
    btn.innerHTML = "Темна тема";
    link.setAttribute("href", 'css/light.css');
}


function ChangeTheme()
{
    let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";
    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
        btn.innerHTML = "Світла тема";
                
        setCookie('themes', 'dark');
    } else {    
        currTheme = lightTheme;
        theme = "light";
        btn.innerHTML = "Темна тема";

        setCookie('themes', 'light');
    }

    link.setAttribute("href", currTheme);
    Save(theme);
}