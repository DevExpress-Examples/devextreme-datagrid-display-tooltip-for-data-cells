<template>
  <div>
    <DxDataGrid
      :data-source="employees"
      key-expr="ID"
      :show-borders="true"
      :width="500"
      @cell-prepared="onCellPrepared"
    >
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn
        data-field="BirthDate"
        data-type="date"
      />
    </DxDataGrid>
    <DxTooltip
      ref="tooltipRef"
      position="right"
    >
      <div class="tooltipContent">
        <div><b>Position:</b> {{ currentEmployee?.Position }}</div>
        <div><b>State:</b> {{ currentEmployee?.State }}</div>
      </div>
    </DxTooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import type { CellPreparedEvent } from 'devextreme/ui/data_grid';

import DxTooltip from 'devextreme-vue/tooltip';
import { on } from 'devextreme/events';

import { employees, type Employee } from '@/data';

let currentEmployee = ref<Employee | null>(null);

const tooltipRef = ref<DxTooltip | null | undefined>(null);

const onCellPrepared = (e: CellPreparedEvent) => {
  if (e.rowType === 'data' && e.column.dataField === 'FirstName') {
    on(e.cellElement, 'mouseover', async(arg: MouseEvent) => {
      currentEmployee.value = e.data;
      await tooltipRef.value?.instance?.show(arg.target as Element);
    });

    on(e.cellElement, 'mouseout', async() => {
      await tooltipRef.value?.instance?.hide();
    });
  }
};
</script>

<style scoped>
.tooltipContent div {
  text-align: left;
}
</style>
