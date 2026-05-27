import { Component, ViewChild } from '@angular/core';
import { DxTooltipComponent } from 'devextreme-angular';
import { CellPreparedEvent } from 'devextreme/ui/data_grid';
import { on } from 'devextreme/events';
import { Employee, Service } from './app.service';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';

@Component({
  selector: 'app-root',
  imports: [DxDataGridModule, DxTooltipModule],
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DxTooltipComponent) tooltip?: DxTooltipComponent;

  employees: Employee[];

  currentEmployee: Employee | null = null;

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }

  onCellPrepared(e: CellPreparedEvent): void {
    if (e.rowType === 'data' && e.column.dataField === 'FirstName') {
      on(e.cellElement, 'mouseover', async (arg: MouseEvent) => {
        this.currentEmployee = e.data;
        await this.tooltip?.instance.show(arg.target as Element);
      });

      on(e.cellElement, 'mouseout', async (arg: MouseEvent) => {
        await this.tooltip?.instance.hide();
      });
    }
  }
}
