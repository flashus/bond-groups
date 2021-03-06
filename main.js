let plot = document.getElementById("graphDiv");
// let bondPlot = document.getElementById("bondPlot");
let indices = [ "RUGBITR1Y", "RUGBITR3Y", "RUGBITR5Y", "RUGBITR10Y", "RUGBITR5+", "RGBITR"];
let startDate = "2010-12-30";
            //   2010-12-30
// let indices = ["MCFTRR", "RGBITR", "RUGBITR10Y", "RUGBITR5Y", "RUGBITR3Y", "RUGBITR1Y"];
//               2003-02-26  2002-12-30 2
// let indices = ["RTSSTDTRR", "RUGBITR5+"];
// let startDate = "2010-12-30";
// let indices = ["MCFTRR", "RGBITR"];
// let startDate = "2003-02-26";
// let indices = ["MCFTRR", "RUGBITR5+", "RGBITR"];
// let startDate = "2010-12-30";

addBlankPlot(plot);
(async function(){
    await addTracesToPlot(plot, indices, startDate);
    // endDate = plot.data[0].x.slice(-1)[0];
    // document.getElementById('start-date').max = endDate;
    // document.getElementById('rebalance-period').max = moment.duration(moment(endDate).diff(moment(startDate))).as("days");
})()

plot.layout = {
    showlegend: true, 
    legend: {"orientation": "h", x: 0.5, y: -0.1},
    hovermode:'x',
    margin: {
        t: 10, //top margin
        l: 20, //left margin
        r: 20, //right margin
        b: 10 //bottom margin
        }
 };


window.onresize = function() {
    Plotly.Plots.resize(plot);
    // Plotly.Plots.resize(bondPlot);
};
