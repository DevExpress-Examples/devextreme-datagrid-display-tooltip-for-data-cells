import { Component, ViewChild } from "@angular/core";
import { Employee, Service } from "./app.service";
import { DxTooltipComponent } from 'devextreme-angular';
import { on } from "devextreme/events";

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DxTooltipComponent) tooltip: DxTooltipComponent;
  employees: Employee[];
  currentEmployee = null;

  constructor(private service: Service) {
    this.employees = service.getEmployees();
  }

  onCellPrepared(e) {
    if (e.rowType === "data" && e.column.dataField === "FirstName") {
      on(e.cellElement, "mouseover", arg => {
          this.currentEmployee = e.data;
          this.tooltip.instance.show(arg.target);
      });

      on(e.cellElement, "mouseout", arg => {
        this.tooltip.instance.hide();
      });
    }
  }
}