const getOneProperty = (items, key) => {
    let check = new Set();
    const withoutRepeated = items.filter(obj => 
        !check.has(obj[key]) && check.add(obj[key])
    );
    return withoutRepeated.map(item => item[key])
};

export default getOneProperty;