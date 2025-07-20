import React from 'react';
import './App.css';

import DataGrid,
{
  Column,
} from 'devextreme-react/data-grid';
import Tooltip from "devextreme-react/tooltip"
import { on } from "devextreme/events";

import service from './data.js';

const employees = service.getEmployees();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmployee: {}
    };

    this.onCellPrepared = this.onCellPrepared.bind(this);
  }

  render() {
    return (
      <div>
        <DataGrid
          dataSource={employees}
          keyExpr={'ID'}
          showBorders={true}
          width={500}
          onCellPrepared={this.onCellPrepared}>
          <Column dataField={'FirstName'} />
          <Column dataField={'LastName'} />
          <Column dataField={'BirthDate'} dataType={'date'} />
        </DataGrid>
        <Tooltip ref={ref => this.tooltip = ref} position={'right'}>
          <div className={'tooltipContent'}>
            <div><b>Position:</b> {this.state.currentEmployee.Position}</div>
            <div><b>State:</b> {this.state.currentEmployee.State}</div>
          </div>
        </Tooltip>
      </div>
    );
  }

  onCellPrepared(e) {
    if (e.rowType === "data" && e.column.dataField === "FirstName") {
      on(e.cellElement, "mouseover", arg => {
          this.setState({
            currentEmployee: e.data
          });
          this.tooltip.instance.show(arg.target);
      });

      on(e.cellElement, "mouseout", arg => {
        this.tooltip.instance.hide();
      });
    }
  }
}

export default App;
