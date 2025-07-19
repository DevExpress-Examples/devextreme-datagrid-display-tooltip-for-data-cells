<template>
  <div>
    <dx-data-grid 
      :data-source="employees"
      key-expr="ID"
      :show-borders="true"
      :width="500"
      @cell-prepared="onCellPrepared">
        <dx-column data-field="FirstName">
        </dx-column>
        <dx-column data-field="LastName">
        </dx-column>
        <dx-column data-field="BirthDate" dataType="date">
        </dx-column>
    </dx-data-grid>
    <dx-tooltip :ref="tooltipRefName" position="right">
      <div class="tooltipContent">
        <div><b>Position:</b> {{currentEmployee.Position}}</div>
        <div><b>State:</b> {{currentEmployee.State}}</div>
      </div>
    </dx-tooltip>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
} from 'devextreme-vue/data-grid';
import DxTooltip from "devextreme-vue/tooltip"
import { on } from "devextreme/events";
    
import service from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxTooltip
  },
  data() {
    return {
      employees: service.getEmployees(),
      currentEmployee: {},
      tooltipRefName: 'tooltip'
    };
  },
  methods: {
    onCellPrepared(e) {
      if (e.rowType === "data" && e.column.dataField === "FirstName") {
        var self = this;
        on(e.cellElement, "mouseover", arg => {
            this.currentEmployee = e.data;
            self.$refs[this.tooltipRefName].instance.show(arg.target);
        });

        on(e.cellElement, "mouseout", arg => {
          self.$refs[this.tooltipRefName].instance.hide();
        });
      }
    }
  }
};
</script>

<style scoped>
  .tooltipContent div {
    text-align: left;
  }
</style>