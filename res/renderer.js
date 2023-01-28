function getOSName() {
    const version = navigator.userAgent;
    if (version.indexOf("Mac") !== -1) {
        return "mac";
    } else if (version.indexOf("Windows") !== -1) {
        if (version.indexOf("Windows NT 7") !== -1) {
            return "7";
        } else if (version.indexOf("Windows NT 8") !== -1) {
            return "8";
        } else if (version.indexOf("Windows NT 10") !== -1) {
            return "10";
        } else return "10";
    } else return "other";
}

function pageClose() {
    document.getElementById("download-page").style.display = "none";
}

function pageOpen() {
    document.getElementById("download-page").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
        let os = getOSName();
        switch (os) {
            case "mac":
                document.getElementById("win7-tip").style.display = "none";
                document.getElementById("win8-tip").style.display = "none";
                document.getElementById("win10-tip").style.display = "none";
                break;
            case "10":
                document.getElementById("win7-tip").style.display = "none";
                document.getElementById("win8-tip").style.display = "none";
                document.getElementById("mac-tip").style.display = "none";
                break;
            case "8":
                document.getElementById("win7-tip").style.display = "none";
                document.getElementById("win10-tip").style.display = "none";
                document.getElementById("mac-tip").style.display = "none";
                break;
            case "7":
                document.getElementById("win8-tip").style.display = "none";
                document.getElementById("win10-tip").style.display = "none";
                document.getElementById("mac-tip").style.display = "none";
                break;
            default:
                document.getElementById("win7-tip").style.display = "none";
                document.getElementById("win8-tip").style.display = "none";
                document.getElementById("win10-tip").style.display = "none";
                document.getElementById("mac-tip").style.display = "none";
                break;
        }
    }
);