import Handsontable from "handsontable";

export const columns = [
    {
      data: 'Exp',
      type: 'text',
      readOnly: true,
      collapsible: true,
      renderer: function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.color = 'green';
        td.style.background = '#CEC';
      }
    },
    {
      data: 'Site',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 54,
    },
    {
      data: 'Hole',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 44,
    },
    {
      data: 'Core',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 40,
    },
    {
      data: 'Type',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 37,
      colspan: 40
    },
    {
      data: 'Section',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 52,
    },
    {
      data: 'A/W',
      type: 'text',
      readOnly: true,
      collapsible: true,
      colWidths: 35,
    },
    {
      data: 'Sample ID',
      type: 'text',
      readOnly: true,
      colWidths: 140,
    },
    {
      data: 'Offset top (cm)',
      type: 'text',
      readOnly: true,
      colWidths: 55,
    },
    {
      data: 'Offset bottom (cm)',
      type: 'text',
      readOnly: true,
      colWidths: 70
    },
    {
      data: 'Top depth CSF-A (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Middle depth CSF-A (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Bottom depth CSF-A (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Top depth CCSF (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Middle depth CCSF (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Bottom depth CCSF (m)',
      type: 'text',
      readOnly: true,
      colWidths: 76
    },
    {
      data: 'Domain no.',
      type: 'text',
      readOnly: true,
      colWidths: 54
    },
    {
      data: 'Piece no.',
      type: 'text',
      readOnly: true,
      colWidths: 40
    },
    {
      data: 'Domain name',
      type: 'numeric',
      numericFormat: {
        pattern: '0.00'
      }
    },
    {
      data: 'Domain (%)',
      type: 'numeric',
      numericFormat: {
        pattern: '0.0000'
      }
    },
    {
      data: 'Interval no.',
      type: 'dropdown',
      source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
    },
    {
      data: 'Lithology prefix',
      type: 'text',
    },
    {
      data: 'Principal lithology',
      type: 'text',
    },
    {
      data: 'Lithology suffix',
      type: 'text',
    },
  ]