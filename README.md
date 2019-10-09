# DataGrid - Display tooltip for data cells

This example illustrates how to display a custom [dxTooltip](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTooltip/) when the end-user hovers over cells of a certain column with the mouse. We handle the [onCellPrepared](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared) event to subscribe to the cell's mouseover / mouseout events and populate the tooltip with the associated data row values.
