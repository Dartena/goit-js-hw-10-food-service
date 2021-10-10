const themeSwitcherRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

const saveThmToLS = (event) => {
    localStorage.setItem(event.target.name, event.target.checked)
};

const getThmFromLS = () => {
    const darkTheme = localStorage.getItem('theme');
     themeSwitcherRef.checked = JSON.parse(darkTheme);
    if (darkTheme) {
        if (themeSwitcherRef.checked)
            bodyRef.classList.add('dark-theme'); 
        else
            bodyRef.classList.add('light-theme');
    }
}

const themeSwitchHnd = () => {
    if (bodyRef.classList.contains('dark-theme')) {
        bodyRef.classList.remove('dark-theme');
        bodyRef.classList.add('light-theme');
        themeSwitcherRef.checked = false
    } else {
        bodyRef.classList.remove('light-theme');
        bodyRef.classList.add('dark-theme');
        themeSwitcherRef.checked = true;
    }
};

const switchTheme = () => {
    themeSwitcherRef.addEventListener('click', themeSwitchHnd);
    themeSwitcherRef.addEventListener('change', saveThmToLS);
    
}

switchTheme();
getThmFromLS();