const elements = {
    form: document.querySelector("form"),
    themeBtn: document.querySelector(".theme-btn"),
    main: document.querySelector('main'),
};

const parseDate = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getDay();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return day + '-' + month + '-' + year;
};
export { elements, parseDate };