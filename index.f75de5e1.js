"use strict";
const logo = document.querySelector(".logo");
const promise1 = new Promise((resolve)=>{
    logo.addEventListener("click", ()=>{
        resolve("Promise was resolved!");
    });
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Promise was rejected!"));
    }, 3000);
});
const successHandler = (message)=>{
    const div = document.createElement("div");
    div.classList.add("message");
    document.body.append(div);
    div.innerHTML = message;
};
const errorHandler = (error)=>{
    const div = document.createElement("div");
    div.classList.add("message", "error-message");
    document.body.append(div);
    div.innerHTML = error;
};
promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);

//# sourceMappingURL=index.f75de5e1.js.map
