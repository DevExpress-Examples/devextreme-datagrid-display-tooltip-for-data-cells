<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/213953876/19.1.6%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T827766)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid - Display tooltip for data cells

This example illustrates how to display a custom [dxTooltip](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTooltip/) when the cursor hovers over the cells of a certain column. We handle the [onCellPrepared](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/) event to subscribe to the cell's mouseover / mouseout event and populate the tooltip with the associated data row values.
