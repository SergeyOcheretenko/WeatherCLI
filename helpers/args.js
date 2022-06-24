'use strict';

function getArgs(args) {
    const result = {};
    const [executer, file, ...rest] = args;
    
    for (let i = 0; i < rest.length; i++) {
        const elem = rest[i];
        if (elem[0] !== '-') continue;
        const key = elem.slice(1)
        result[key] = true;

        if (i !== rest.length - 1) {
            const nextElem = rest[i + 1];
            if (nextElem[0] !== '-') {
                result[key] = nextElem;
            }
        }
    }
    return result;
};

export { getArgs };