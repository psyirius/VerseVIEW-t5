"use strict";

window.global = new Function("return this;").apply(null);

// provide a namespace
if (typeof window.vvw === "undefined") {
    window.vvw = {};
}

vvw.provide = function (namespace) {
    // docs: create a namespace
    const nsl = namespace.split(".");

    let parent = global;
    for (let i = 0; i < nsl.length; ++i) {
        const nsk = nsl[i];
        if (typeof parent[nsk] !== "object") {
            parent[nsk] = {};
        }
        parent = parent[nsk];
    }

    return parent;
};
