//SIDEBAR TOGGLE 
 var sidebarOpen = false;
 var sidebar = document.getElementById("sidebar");

 function openSidebar(){
    if(sidebarOpen){
        sidebar.classList.add("sidebar-resposive");
        sidebarOpen=true;
    }
 }

 function closeSidebar(){
    if(openSidebar){
        sidebar.classList.remove("sidebar-resposive");
        sidebarOpen=false;
    }
 }
 
 // BAR CHART
 var barChartOptions = {

    series: [{
    
    data: [10, 8, 6, 4, 21], 
    name: "Products",
    }],
    
    Chart: {
    
    type: "bar", 
    background: "transparent", 
    height: 350, 
    toolbar: {
         show: false,
    
    },
    },
    
    colors: [
        "#2962ff",
         "#d50000",
          "#2e7d32", 
          "#ff6d00",
           "#583cb3",
    
    ], 
    
    plotOptions: {
    bar: {
    
    distributed: true, 
    borderRadius: 4,
    horizontal: false,
    columnWidth: "40%",
    },
    },
    
    dataLabels: {
    enabled: false,
    },
    fill: {
    opacity: 1,
    },
    
    grid: {
    borderColor: "#55596e",
    yaxis: {
    lines: {
    show: true,
    },
    },
    xaxis: {
        lines: {
        show: true,
        },
        },
    },
        
    legend: {  
     labels: {  
     colors: "#f5f7ff",
      },    
    show: true,
    position: "top",
     },
        
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
        },
        
    tooltip: {
        shared: true,
        intersect: false,
        theme :"dark",
        },
    
    xaxis: {
        categories:["laptop","phone","monitor","headphones","camera"],
        title: {
          style: { 
            color: "#f5f7ff", 
        },
    },
        axisBorder: { 
            show: true,
             color: "#55596e",
        },
        axisTicks: {
             show: true, 
             color: "#55596e",
        },
        
        labels: { 
            style: {
            colors: "#f5f7ff",
        },
      },
    },
        
    yaxis: {
        title: {
            text: "Count",
             style: {
                 color: "#f5f7ff",
             },
        },
        
    axisBorder: { 
            color: "#55596e", 
            show: true,
        },
    axisTicks: {
             color: "#55596e",
              show: true, 
        },
        
    labels: {
         style: {
             colors: "#f5f7ff",
         },
        },
    }
};
 
var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOption);
 barChart.render();

