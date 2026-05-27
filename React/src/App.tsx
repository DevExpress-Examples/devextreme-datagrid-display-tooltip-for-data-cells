import { useCallback, useRef, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { on } from 'devextreme/events';
import DataGrid, { Column, type DataGridTypes } from 'devextreme-react/data-grid';
import Tooltip, { type TooltipRef } from 'devextreme-react/tooltip';

import { employees, type Employee } from './data.tsx';

function App(): JSX.Element {
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);

  const tooltipRef = useRef<TooltipRef | null>(null);

  const onCellPrepared = useCallback((e: DataGridTypes.CellPreparedEvent) => {
    if (e.rowType === 'data' && e.column.dataField === 'FirstName') {
      // eslint-disable-next-line @stylistic/space-before-function-paren
      on(e.cellElement, 'mouseover', async(arg: MouseEvent) => {
        setCurrentEmployee(e.data);
        await tooltipRef.current?.instance().show(arg.target as Element);
      });

      // eslint-disable-next-line @stylistic/space-before-function-paren
      on(e.cellElement, 'mouseout', async() => {
        await tooltipRef.current?.instance().hide();
      });
    }
  }, []);

  return (
    <div>
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
        width={500}
        onCellPrepared={onCellPrepared}
      >
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="BirthDate" dataType="date" />
      </DataGrid>
      <Tooltip ref={tooltipRef} position="right">
        <div className="tool-tip-content">
          <div><b>Position:</b> {currentEmployee?.Position}</div>
          <div><b>State:</b> {currentEmployee?.State}</div>
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
