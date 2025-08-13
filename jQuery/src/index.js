$(() => {
  $("#gridContainer").dxDataGrid({
    dataSource: employees,
    keyExpr: "ID",
    showBorders: true,
    width: 500,
    columns: ["FirstName", "LastName", "BirthDate"],
    onCellPrepared: function (e) {
      if (e.rowType === "data" && e.column.dataField === "FirstName") {
        e.cellElement.mouseover(function (arg) {
          tooltipInstance.option("contentTemplate", function (contentElement) {
            contentElement.html(
              `<div class='tooltipContent'>
                 <div><b>Position:</b> ${e.data.Position}</div>
                 <div><b>State:</b> ${e.data.State}</div>
               </div>`
            );
          });
          tooltipInstance.show(arg.target);
        });

        e.cellElement.mouseout(function () {
          tooltipInstance.hide();
        });
      }
    }
  });

  var tooltipInstance = $("#tooltipContainer").dxTooltip({
    position: "right"
  }).dxTooltip("instance");
});

var employees = [
  {
    "ID": 1,
    "Prefix": "Mr.",
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "State": "California",
    "BirthDate": "1964/03/16"
  },
  {
    "ID": 2,
    "Prefix": "Mrs.",
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Position": "Sales Assistant",
    "State": "California",
    "BirthDate": "1981/06/03"
  },
  {
    "ID": 3,
    "Prefix": "Mr.",
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Position": "CMO",
    "State": "Arkansas",
    "BirthDate": "1974/09/07"
  }
];
