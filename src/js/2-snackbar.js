import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector("button");
const inputMs = document.querySelector('input[name="delay"]');
const radioFulfilled = document.querySelector('input[name="state"][value="fulfilled"]');
const radioRejected = document.querySelector('input[name="state"][value="rejected"]');

button.addEventListener("submit", () => {
    setTimeout(makeNewPromise, inputMs.value);
    const makeNewPromise = () => {
        switch (radioFulfilled, radioRejected) {
            case radioFulfilled = true:
                Promise.resolve(iziToast.show({
                    message: 'Fulfilled promise in ${inputMs.value}ms',
                    position: 'topCenter'
                }));
                break;
            case radioRejected = true:
                Promise.reject(iziToast.show({
                    message: 'Rejected promise in ${inputMs.value}ms',
                    position: 'topCenter'
                }));
                break;
            default:
                iziToast.show({
                    message: 'Something went wrong...',
                    position: 'topCenter'
                });
       }
    };
});
