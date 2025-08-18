$(() => {
  const tooltipInstance = $('#tooltipContainer').dxTooltip({
    position: 'right',
  }).dxTooltip('instance');

  $('#gridContainer').dxDataGrid({
    dataSource: employees,
    keyExpr: 'ID',
    showBorders: true,
    width: 500,
    columns: ['FirstName', 'LastName', 'BirthDate'],
    onCellPrepared(e) {
      if (e.rowType === 'data' && e.column.dataField === 'FirstName') {
        // eslint-disable-next-line spellcheck/spell-checker
        e.cellElement.mouseover((arg) => {
          tooltipInstance.option('contentTemplate', (contentElement) => {
            contentElement.html(
              `<div class='tooltipContent'>
                 <div><b>Position:</b> ${e.data.Position}</div>
                 <div><b>State:</b> ${e.data.State}</div>
               </div>`,
            );
          });
          tooltipInstance.show(arg.target);
        });

        // eslint-disable-next-line spellcheck/spell-checker
        e.cellElement.mouseout(() => {
          tooltipInstance.hide();
        });
      }
    },
  });
});

let employees = [
  {
    'ID': 1,
    'Prefix': 'Mr.',
    'FirstName': 'John',
    'LastName': 'Heart',
    'Position': 'CEO',
    'State': 'California',
    'BirthDate': '1964/03/16',
  },
  {
    'ID': 2,
    'Prefix': 'Mrs.',
    'FirstName': 'Olivia',
    'LastName': 'Peyton',
    'Position': 'Sales Assistant',
    'State': 'California',
    'BirthDate': '1981/06/03',
  },
  {
    'ID': 3,
    'Prefix': 'Mr.',
    'FirstName': 'Robert',
    'LastName': 'Reagan',
    'Position': 'CMO',
    'State': 'Arkansas',
    'BirthDate': '1974/09/07',
  },
];
