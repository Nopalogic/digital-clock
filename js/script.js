// COLOR PICKER FUNCTION
const pickr = Pickr.create({
    el: ".color-picker",
    theme: "classic", // or 'monolith', or 'nano'
    default: "#333",

    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            save: true,
        },
    },
});

pickr.on("change", (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    document.querySelector("body").style.background = rgbaColor;
});

// CLOCK FUNCTION
window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    const time = h + ":" + m + "<small>" + ": " + s + "</small>";

    document.getElementById("displayClock").innerHTML = time;
    setTimeout(showTime, 1);

    let bg;
    const userName = "Nopal";
    const user = document.getElementById("User");

    if (h < 6) {
        user.innerHTML = "Good Night, " + userName;
    } else if (h < 11) {
        user.innerHTML = "Good Morning, " + userName;
    } else if (h < 15) {
        user.innerHTML = "Good Day, " + userName;
    } else if (h < 19) {
        user.innerHTML = "Good Evening, " + userName;
    } else {
        user.innerHTML = "Good Night, " + userName;
    }
}
