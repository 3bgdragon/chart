var pageObj = {
    //init
    setCalendar: function () {
    },
    itemClick: function (data) {
       console.log("data",pageObj.);
        /*caller.gridView01.getData("selected");*/
    }
}

pageObj.pageStart = function () {
    pageObj.chartView();
    pageObj.gridView();
}

pageObj.chartView = function () {
    var data =
        {
            //labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
            labels: [],
            datasets:
                [{
                    label: "My First dataset",
                    fillColor: "rgba(150,200,250,0.5)",
                    strokeColor: "rgba(150,200,250,0.8)",
                    highlightFill: "rgba(150,200,250,0.75)",
                    highlightStroke: "rgba(150,200,250,1)",
                    //data: [65, 59, 80, 81, 56, 55]
                    data: []
                }]
        };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

pageObj.gridView = function () {
    //grid
    var firstGrid = new ax5.ui.grid();

    firstGrid.setConfig({
        showRowSelector: true,
        multipleSelect: true,
        target: $('[data-ax5grid="first-grid"]'),
        columns: [
            {key: "devYear", label: "년도", width: 50},
            {key: "company.cmpNm", label: "업체명", width: 100},
            {key: "car", label: "차종", width: 100},
            {key: "dstn", label: "양산처", width: 100}
        ],
        body: {
            align: "center",
            onClick: function () {
                this.self.select(this.dindex, {selectedClear: true});
                pageObj.itemClick(this.item);
            }
        },
    });

    // {a: "A", b: "A01", c:"C", d:"D", e:"E", f:"F", g:"G"}
    // 값이 없는 h 는 표현안됨
    firstGrid.setData(gridData);
    // 그리드 데이터 가져오기
}
