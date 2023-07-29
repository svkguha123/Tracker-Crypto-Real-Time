import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2)=> {
    if(prices2) {
        setChartData({
            labels: prices1.map((item) => convertDate(item[0])),
            datasets: [
                {
                    label: "Crypto 1",
                    data: prices1.map((price) => price[1]),
                    borderColor: '#3a80e9',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.25,
                    pointRadius: 1,
                    yAxisID: "crypto1",
                },
                {
                    label: "Crypto 2",
                    data: prices2.map((price) => price[1]),
                    borderColor: '#61c96f',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.25,
                    pointRadius: 1,
                    yAxisID: "crypto2",
                },
            ],
        });
    }
    else {
        setChartData({
            labels: prices1.map((item) => convertDate(item[0])),
            datasets: [
                {
                    label: "Trade",
                    data: prices1.map((price) => price[1]),
                    borderColor: '#3a80e9',
                    backgroundColor: "#e6ffff",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.25,
                    pointRadius: 2,
                    yAxisID: "crypto1",
                },
            ],
        });
    }
    
}