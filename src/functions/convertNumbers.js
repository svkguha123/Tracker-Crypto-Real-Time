
export const convertNumber = (number) => {

    const numberWithCommas = number.toLocaleString();
    let arr = numberWithCommas.split(",");
    if(arr.length == 6) {
        //quadrillions
        return arr[0] + "." + arr[1].slice(0, 2) + "Q";
    }
    else if (arr.length == 5) {
        //trillions
        return arr[0] + "." + arr[1].slice(0, 2) + "T";
    }
    else if (arr.length == 4) {
        //billions
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    }
    else if (arr.length == 3) {
        //millions
        return arr[0] + "." + arr[1].slice(0, 2) + "M";
    }
    else if (arr.length == 2) {
        //thousand
        return arr[0] + "." + arr[1].slice(0, 2) + "K";
    }
    else {
        //hundred
        return number.toLocaleString();
    }

};