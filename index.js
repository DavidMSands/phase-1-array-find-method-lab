const superbowlWin = (array) => {
    let win = array.find(element => element.result === "W")
    if (win) {
        return win.year;
    }
}