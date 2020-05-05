import Handsontable from 'handsontable';

function backgroundColorRenderer(instance, td, row, col, prop, value, cellProperties, color) {
    return function customRenderer1(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.background = color;
    }
}

export const columns = [
    {
        data: 'Exp',
        type: 'text',
        readOnly: true,
        collapsible: true,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Site',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 54,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Hole',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 44,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Core',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 40,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Type',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 37,
        colspan: 40,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Section',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 52,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'A/W',
        type: 'text',
        readOnly: true,
        collapsible: true,
        colWidths: 35,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fff2cc')
    },
    {
        data: 'Sample ID',
        type: 'text',
        readOnly: true,
        colWidths: 140,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#fce4d6')
    },
    {
        data: 'Offset top (cm)',
        type: 'numeric',
        readOnly: true,
        colWidths: 55,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#ddebf7')
    },
    {
        data: 'Offset bottom (cm)',
        type: 'numeric',
        readOnly: true,
        colWidths: 70,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#ddebf7')
    },
    {
        data: 'Top depth CSF-A (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Middle depth CSF-A (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Bottom depth CSF-A (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Top depth CCSF (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Middle depth CCSF (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Bottom depth CCSF (m)',
        type: 'numeric',
        readOnly: true,
        colWidths: 76,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#CEC')
    },
    {
        data: 'Domain no.',
        type: 'numeric',
        numericFormat: {
            pattern: '0.0000'
        },
        readOnly: true,
        colWidths: 64,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#ddebf7')
    },
    {
        data: 'Piece no.',
        type: 'numeric',
        numericFormat: {
            pattern: '0.00000'
        },
        readOnly: true,
        colWidths: 60,
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, '#ddebf7')    
    },

    {
        data: 'a',
        type: 'dropdown',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'],
        colWidths: 70,
    },
    {
        data: 'b',
        type: 'text',
        renderer: backgroundColorRenderer(null, null, null, null, null, null, null, 'pink')
    },
    {
        data: 'c',
        type: 'numeric',
        numericFormat: {
            pattern: '0.00000'
        },
    },
    {
        data: 'd',
        type: 'text',
    },
    {
        data: 'e',
        type: 'text',
    },
    {
        data: 'f',
        type: 'text',
    },
    {
        data: 'g',
        type: 'text',
    },
    {
        data: 'h',
        type: 'text',
    },
    {
        data: 'i',
        type: 'text',
    },
    {
        data: 'j',
        type: 'text',
    },
    {
        data: 'k',
        type: 'text',
    },
    {
        data: 'l',
        type: 'text',
    },
    {
        data: 'm',
        type: 'text',
    },
    {
        data: 'n',
        type: 'text',
    },
    {
        data: 'o',
        type: 'text',
    },
    {
        data: 'p',
        type: 'text',
    },
    {
        data: 'q',
        type: 'text',
    },
    {
        data: 'r',
        type: 'text',
    },
    {
        data: 's',
        type: 'text',
    },
    {
        data: 't',
        type: 'text',
    },
    {
        data: 'u',
        type: 'text',
    },
    {
        data: 'v',
        type: 'text',
    },
    {
        data: 'w',
        type: 'text',
    },
    {
        data: 'x',
        type: 'text',
    },
    {
        data: 'y',
        type: 'text',
    },
    {
        data: 'z',
        type: 'text',
    },

    {
        data: 'aa',
        type: 'text',
    },
    {
        data: 'ba',
        type: 'text',
    },
    {
        data: 'ca',
        type: 'text',
    },
    {
        data: 'da',
        type: 'text',
    },
    {
        data: 'ea',
        type: 'text',
    },
    {
        data: 'fa',
        type: 'text',
    },
    {
        data: 'ga',
        type: 'text',
    },
    {
        data: 'ha',
        type: 'text',
    },
    {
        data: 'ia',
        type: 'text',
    },
    {
        data: 'ja',
        type: 'text',
    },
    {
        data: 'ka',
        type: 'text',
    },
    {
        data: 'la',
        type: 'text',
    },
    {
        data: 'ma',
        type: 'text',
    },
    {
        data: 'na',
        type: 'text',
    },
    {
        data: 'oa',
        type: 'text',
    },
    {
        data: 'pa',
        type: 'text',
    },
    {
        data: 'qa',
        type: 'text',
    },
    {
        data: 'ra',
        type: 'text',
    },
    {
        data: 'sa',
        type: 'text',
    },
    {
        data: 'ta',
        type: 'text',
    },
    {
        data: 'ua',
        type: 'text',
    },
    {
        data: 'va',
        type: 'text',
    },
    {
        data: 'wa',
        type: 'text',
    },
    {
        data: 'xa',
        type: 'text',
    },
    {
        data: 'ya',
        type: 'text',
    },
    {
        data: 'za',
        type: 'text',
    },

    {
        data: 'ab',
        type: 'text',
    },
    {
        data: 'bb',
        type: 'text',
    },
    {
        data: 'cb',
        type: 'text',
    },
    {
        data: 'db',
        type: 'text',
    },
    {
        data: 'eb',
        type: 'text',
    },
    {
        data: 'fb',
        type: 'text',
    },
    {
        data: 'gb',
        type: 'text',
    },
    {
        data: 'hb',
        type: 'text',
    },
    {
        data: 'ib',
        type: 'text',
    },
    {
        data: 'jb',
        type: 'text',
    },
    {
        data: 'kb',
        type: 'text',
    },
    {
        data: 'lb',
        type: 'text',
    },
    {
        data: 'mb',
        type: 'text',
    },
    {
        data: 'nb',
        type: 'text',
    },
    {
        data: 'ob',
        type: 'text',
    },
    {
        data: 'pb',
        type: 'text',
    },
    {
        data: 'qb',
        type: 'text',
    },
    {
        data: 'rb',
        type: 'text',
    },
    {
        data: 'sb',
        type: 'text',
    },
    {
        data: 'tb',
        type: 'text',
    },
    {
        data: 'ub',
        type: 'text',
    },
    {
        data: 'vb',
        type: 'text',
    },
    {
        data: 'wb',
        type: 'text',
    },
    {
        data: 'xb',
        type: 'text',
    },
    {
        data: 'yb',
        type: 'text',
    },
    {
        data: 'zb',
        type: 'text',
    },

    {
        data: 'ac',
        type: 'text',
    },
    {
        data: 'bc',
        type: 'text',
    },
    {
        data: 'cc',
        type: 'text',
    },
    {
        data: 'dc',
        type: 'text',
    },
    {
        data: 'ec',
        type: 'text',
    },
    {
        data: 'fc',
        type: 'text',
    },
    {
        data: 'gc',
        type: 'text',
    },
    {
        data: 'hc',
        type: 'text',
    },
    {
        data: 'ic',
        type: 'text',
    },
    {
        data: 'jc',
        type: 'text',
    },
    {
        data: 'kc',
        type: 'text',
    },
    {
        data: 'lc',
        type: 'text',
    },
    {
        data: 'mc',
        type: 'text',
    },
    {
        data: 'nc',
        type: 'text',
    },
    {
        data: 'oc',
        type: 'text',
    },
    {
        data: 'pc',
        type: 'text',
    },
    {
        data: 'qc',
        type: 'text',
    },
    {
        data: 'rc',
        type: 'text',
    },
    {
        data: 'sc',
        type: 'text',
    },
    {
        data: 'tc',
        type: 'text',
    },
    {
        data: 'uc',
        type: 'text',
    },
    {
        data: 'vc',
        type: 'text',
    },
    {
        data: 'wc',
        type: 'text',
    },
    {
        data: 'xc',
        type: 'text',
    },
    {
        data: 'yc',
        type: 'text',
    },
    {
        data: 'zc',
        type: 'text',
    },

    {
        data: 'ad',
        type: 'text',
    },
    {
        data: 'bd',
        type: 'text',
    },
    {
        data: 'cd',
        type: 'text',
    },
    {
        data: 'dd',
        type: 'text',
    },
    {
        data: 'ed',
        type: 'text',
    },
    {
        data: 'fd',
        type: 'text',
    },
    {
        data: 'gd',
        type: 'text',
    },
    {
        data: 'hd',
        type: 'text',
    },
    {
        data: 'id',
        type: 'text',
    },
    {
        data: 'jd',
        type: 'text',
    },
    {
        data: 'kd',
        type: 'text',
    },
    {
        data: 'ld',
        type: 'text',
    },
    {
        data: 'md',
        type: 'text',
    },
    {
        data: 'nd',
        type: 'text',
    },
    {
        data: 'od',
        type: 'text',
    },
    {
        data: 'pd',
        type: 'text',
    },
    {
        data: 'qd',
        type: 'text',
    },
    {
        data: 'rd',
        type: 'text',
    },
    {
        data: 'sd',
        type: 'text',
    },
    {
        data: 'td',
        type: 'text',
    },
    {
        data: 'ud',
        type: 'text',
    },
    {
        data: 'vd',
        type: 'text',
    },
    {
        data: 'wd',
        type: 'text',
    },
    {
        data: 'xd',
        type: 'text',
    },
    {
        data: 'yd',
        type: 'text',
    },
    {
        data: 'zd',
        type: 'text',
    },

    {
        data: 'ae',
        type: 'text',
    },
    {
        data: 'be',
        type: 'text',
    },
    {
        data: 'ce',
        type: 'text',
    },
    {
        data: 'de',
        type: 'text',
    },
    {
        data: 'ee',
        type: 'text',
    },
    {
        data: 'fe',
        type: 'text',
    },
    {
        data: 'ge',
        type: 'text',
    },
    {
        data: 'he',
        type: 'text',
    },
    {
        data: 'ie',
        type: 'text',
    },
    {
        data: 'je',
        type: 'text',
    },
    {
        data: 'ke',
        type: 'text',
    },
    {
        data: 'le',
        type: 'text',
    },
    {
        data: 'me',
        type: 'text',
    },
    {
        data: 'ne',
        type: 'text',
    },
    {
        data: 'oe',
        type: 'text',
    },
    {
        data: 'pe',
        type: 'text',
    },
    {
        data: 'qe',
        type: 'text',
    },
    {
        data: 're',
        type: 'text',
    },
    {
        data: 'se',
        type: 'text',
    },
    {
        data: 'te',
        type: 'text',
    },
    {
        data: 'ue',
        type: 'text',
    },
    {
        data: 've',
        type: 'text',
    },
    {
        data: 'we',
        type: 'text',
    },
    {
        data: 'xe',
        type: 'text',
    },
    {
        data: 'ye',
        type: 'text',
    },
    {
        data: 'ze',
        type: 'text',
    }
]