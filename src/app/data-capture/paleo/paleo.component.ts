import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

import { columns } from '../../core/models/micropaleo-columns'
import { dataset } from '../services/mock-micropaleo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paleo',
  templateUrl: './paleo.component.html',
  styleUrls: ['./paleo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaleoComponent implements OnInit {
  data = dataset;
  dataset;
  tableId = 'myTableInstance';
  private myRegisterer = new HotTableRegisterer();

  constructor(private router: Router) {}

  contextMenu = {
    callback: function (key, selection, clickEvent) {
      // Common callback for all options
      console.log(key, selection, clickEvent);
    },
    items: {
      "hide_column": {
        name: 'Hide column',
        callback: function(key, selection, clickEvent) {
          const hiddenColumnsPlugin = this.getPlugin('hiddenColumns');
          hiddenColumnsPlugin.hideColumn(selection[0].end.col);
          this.getData();
          this.render();
        }
      },
      "show_column": {
        name: 'Show all columns',
        callback: function(key, selection, clickEvent) {
          const hiddenColumnsPlugin = this.getPlugin('hiddenColumns');
          hiddenColumnsPlugin.showColumns([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
          this.render();
        }
      },
      "row_above": {
        disabled: function () { // `disabled` can be a boolean or a function
          // Disable option when first row was clicked
          return this.getSelectedLast()[0] === 0; // `this` === hot3
        }
      },
      "row_below": {
        name: 'Click to add row below' // Set custom text for predefined option
      },
      "about": { // Own custom option
        name: function () { // `name` can be a string or a function
          return '<b>Custom option</b>'; // Name can contain HTML
        },
        hidden: function () { // `hidden` can be a boolean or a function
          // Hide the option when the first column was clicked
          return this.getSelectedLast()[1] == 0; // `this` === hot3
        },
        callback: function(key, selection, clickEvent) { // Callback for specific option
          setTimeout(function() {
            alert('Hello world!'); // Fire alert after menu close (with timeout)
          }, 0);
        }
      },
      "colors": { // Own custom option
        name: 'Colors...',
        submenu: {
          // Custom option with submenu of items
          items: [
            {
              // Key must be in the form "parent_key:child_key"
              key: 'colors:red',
              name: 'Red',
              callback: function(key, selection, clickEvent) {
                setTimeout(function() {
                  alert('You clicked red!');
                }, 0);
              }
            },
            { key: 'colors:green', name: 'Green' },
            { key: 'colors:blue', name: 'Blue' }
          ]
        }
      },
      "credits": { // Own custom property
        // Custom rendered element in the context menu
        renderer: function(hot, wrapper, row, col, prop, itemValue) {
          var elem = document.createElement('marquee');
          elem.style.cssText = 'background: lightgray;';
          elem.textContent = 'Brought to you by...';
          return elem;
        },
        disableSelection: true, // Prevent mouseoever from highlighting the item for selection
        isCommand: false // Prevent clicks from executing command and closing the menu
      }
    }
  }

  tableSettings: Handsontable.GridSettings = {
    // data: Handsontable.helper.createSpreadsheetData(151, 175),
    rowHeaders: true,
    colHeaders: true,
    hiddenColumns: true, // needed for collapsible columns to work
    collapsibleColumns: true,
    nestedHeaders: [
      [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'
      ],
      ["Exp", "Site", "Hole", "Core", "Type", "Section", "A/W", "Sample ID", "Offset top (cm)", "Offset bottom (cm)", 
      "Top depth CSF-A (m)", "Middle depth CSF-A (m)", "Bottom depth CSF-A (m)", "Top depth CCSF (m)", "Middle depth CCSF (m)", "Bottom depth CCSF (m)", 
      "Domain no.", "Piece no.", "Domain name", "Domain (%)", "Interval no.", "Lithology prefix", "Principal lithology", "Lithology suffix"],
      [{label: 'Scope', colspan: 18}, {label: 'General', colspan: 6}]
    ],
    fixedRowsTop: 1,
    columnHeaderHeight: 35,
    height: 620,
    width: 1870,
    autoWrapRow: true,
    maxRows: 2200,
    manualRowResize: true,
    manualColumnResize: true,
    startRows: 5,
    startCols: 5,
    minSpareCols: 1,
    minSpareRows: 1,
    columns: columns,
    // manualColumnMove: true,
    contextMenu: this.contextMenu,
    filters: true,
    dropdownMenu: ['alignment', 'filter_by_condition', 'filter_by_value', 'filter_operators', 'filter_action_bar'],
    formulas: true,
    afterValidate: function(isValid, value, row, prop){
      if(value == false){
        console.log( value, row, prop)    
        alert("Invalid")
      }
    }
  };

  ngOnInit() {
    // this.dataset = this.data.filter(row => (row.Core >= 2 && row.Core < 10) || row.Core == "Core");
    this.dataset = this.getData();
  }

  page = 1;

  getData() {
    let page = this.page,
        limit = 20,
        row   = (page - 1) * limit,
        count = page * limit,
        part  = [];
  
      for (;row < count;row++) {
        part.push(this.data[row]);
      }
    // const data = this.addFormulas(part)
    return part;
  }

  addFormulas(columns) {
    let index = 1;
    const data = columns.map(column => {
      if (index != 1) {
        column["Domain no."] = `=ROUND((p${index}-n${index}), 4)`;
        column["Piece no."] = `=ROUND(SQRT(p${index}), 4)`;
        index += 1;
      } else {
        index += 1;
      }
    });
    return data;
  }

  nextPage() {
    this.page++;
    this.myRegisterer.getInstance(this.tableId).loadData(this.getData())
  }

  previousPage() {
    this.page--;
    this.myRegisterer.getInstance(this.tableId).loadData(this.getData())
  }

  detectChanges = (hotInstance, changes, source) => {
    console.log(changes);
  };

  // validate() {
  //   this.hotRegisterer.getInstance(this.tableId).validateRows([3, 4, 5], (valid) => {
  //     if (valid) {
  //       // ... code for validated rows
  //     }
  //   })
  //   this.hotRegisterer.getInstance(this.tableId).validateColumns([3, 4, 5], (valid) => {
  //     if (valid) {
  //       // ... code for validated columns
  //     }
  //   })
  // }

  columnVisibility() {
  }

  goToGeneral() {
    this.router.navigateByUrl('/data-capture');
  }

}