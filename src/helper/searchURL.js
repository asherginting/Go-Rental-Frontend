const searchURL = (ev) => {
    const key = ev.target.elements.brand.value;
    const fil = ev.target.elements.location.value;
    const min = ev.target.elements.minimum.value;
    const max = ev.target.elements.maximum.value;
    const dataSearch = [
        { param: 'keyword', input: key },
        { param: 'location', input: fil },
        { param: 'min', input: min },
        { param: 'max', input: max },
    ];
    let resUrl = '/search?';
    dataSearch.forEach((data) => {
        if (data.input) {
            if (resUrl[8]) {
                resUrl += `&${data.param}=${data.input}`;
            } else {
                resUrl += `${data.param}=${data.input}`;
            }
        }
    });

    return resUrl;
};

export default searchURL;
