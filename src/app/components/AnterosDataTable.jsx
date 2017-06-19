import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";
import 'script-loader!jszip/dist/jszip.js';
import 'script-loader!pdfmake/build/pdfmake.js';
import 'script-loader!pdfmake/build/vfs_fonts.js';
import 'script-loader!datatables.net/js/jquery.dataTables.js';
import 'script-loader!datatables.net-bs4/js/dataTables.bootstrap4.js';
import 'script-loader!./AnterosDataTables.keyTable.js';
import 'script-loader!datatables.net-fixedcolumns/js/dataTables.fixedColumns.js';
import 'script-loader!./AnterosDataTables.select.js';
import 'script-loader!datatables.net-buttons/js/dataTables.buttons.js';
import 'script-loader!datatables.net-buttons/js/buttons.colVis.js';
import 'script-loader!datatables.net-buttons/js/buttons.print.js';
import 'script-loader!datatables.net-buttons/js/buttons.html5.js';
import 'script-loader!datatables.net-buttons-bs/js/buttons.bootstrap.js';
import { formatNumber, parseNumber } from "../utils/AnterosUtils.js";
import { formatDate, parseDateWithFormat, isDate } from "../utils/AnterosDateUtils.js";




export default class AnterosDataTable extends Component {
    constructor(props) {
        super(props);
        this.idTable = lodash.uniqueId("table");
        this.idCheckBoxSelect = lodash.uniqueId("checkBoxSelect");
        this.getColumns = this.getColumns.bind(this);
        this.buildColumns = this.buildColumns.bind(this);
        this.onClick = this.onClick.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.renderNumber = this.renderNumber.bind(this);
        this.renderDate = this.renderDate.bind(this);
        this.renderDateTime = this.renderDateTime.bind(this);
        this.renderTime = this.renderTime.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
        this.getColumnByIndex = this.getColumnByIndex.bind(this);
        this.renderCheckBoxSelect = this.renderCheckBoxSelect.bind(this);
        this.adjustHeaderCheckbox = this.adjustHeaderCheckbox.bind(this);
        this.currentRow = undefined;
        this.currentCol = undefined;
    }

    getColumnByIndex(index) {
        let columns = this.getColumns();
        let i;
        for (i = 0; i < columns.length; i++) {
            if (i == index)
                return columns[i];
        }
    }

    renderCheckBoxSelect(data, type, full, meta) {
        return '<input type="checkbox" name="id[]" id=ch_' + this.idTable + '_' + meta.row + '_' + meta.col + ' row=' + meta.row + ' col=' + meta.col + ' value="' + $('<div/>').text(data).html() + '">';
    }

    renderDetails(data, type, full, meta) {
        return '';
    }

    renderDate(data, type, full, meta) {
        let column = this.getColumnByIndex(meta.col);
        if (!column)
            return data;
        return formatDate(data, this.props.dateFormat);
    }

    renderDateTime(data, type, full, meta) {
        let column = this.getColumnByIndex(meta.col);
        if (!column)
            return data;
        return formatDate(data, this.props.dateFormat + " " + this.props.timeFormat);
    }

    renderTime(data, type, full, meta) {
        let column = this.getColumnByIndex(meta.col);
        if (!column)
            return data;
        return formatDate(data, this.props.timeFormat);
    }

    renderNumber(data, type, full, meta) {
        let column = this.getColumnByIndex(meta.col);
        if (!column || !column.props.maskFormatNumber)
            return data;
        return formatNumber(data, column.props.maskFormatNumber);
    }

    renderImage(data, type, full, meta) {
        let column = this.getColumnByIndex(meta.col);
        let width, height;
        let classNameImage;
        if (column) {
            if (column.props.imageCircle) {
                classNameImage = "img-circle";
            }
            width = column.props.imageWidth;
            height = column.props.imageHeight;
        }

        var temp = document.createElement('div');
        ReactDOM.render(<img className={classNameImage} src={data} height={height} width={width} />, temp);
        return temp.innerHTML;
    }

    onClick(event) {

    }


    componentDidMount() {
        let _this = this;
        jQuery.fn.dataTableExt.oSort['number-asc'] = function (a, b) {
            return parseNumber(a) - parseNumber(b);
        };

        jQuery.fn.dataTableExt.oSort['number-desc'] = function (a, b) {
            return parseNumber(b) - parseNumber(a);
        }

        jQuery.fn.dataTableExt.oSort['customdate-asc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.dateFormat);
            let dtB = parseDateWithFormat(b, _this.props.dateFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            if (dtA < dtB)
                return -1;
            else if (dtA == dtB)
                return 0;
            else if (dtA > dtB)
                return 1;
        };

        jQuery.fn.dataTableExt.oSort['customdate-desc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.dateFormat);
            let dtB = parseDateWithFormat(b, _this.props.dateFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            if (dtA < dtB)
                return 1;
            else if (dtA == dtB)
                return 0;
            else if (dtA > dtB)
                return -1;
        }

        jQuery.fn.dataTableExt.oSort['customdatetime-asc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.dateFormat + " " + this.props.timeFormat);
            let dtB = parseDateWithFormat(b, _this.props.dateFormat + " " + this.props.timeFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            return dtA.getMilliseconds() - dtB.getMilliseconds();
        };

        jQuery.fn.dataTableExt.oSort['customdatetime-desc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.dateFormat + " " + this.props.timeFormat);
            let dtB = parseDateWithFormat(b, _this.props.dateFormat + " " + this.props.timeFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            return dtB.getMilliseconds() - dtA.getMilliseconds();
        }

        jQuery.fn.dataTableExt.oSort['customtime-asc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.timeFormat);
            let dtB = parseDateWithFormat(b, _this.props.timeFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            return dtA.getMilliseconds() - dtB.getMilliseconds();
        };

        jQuery.fn.dataTableExt.oSort['customtime-desc'] = function (a, b) {
            let dtA = parseDateWithFormat(a, _this.props.timeFormat);
            let dtB = parseDateWithFormat(b, _this.props.timeFormat);
            if (!isDate(dtA) || !isDate(dtB))
                return 0;
            return dtB.getMilliseconds() - dtA.getMilliseconds();
        }

        let classNameExportButtons = "btn-info";
        if (this.props.exportButtonsPrimary) {
            classNameExportButtons = "btn-primary";
        } else if (this.props.exportButtonsInfo) {
            classNameExportButtons = "btn-info";
        } else if (this.props.exportButtonsSuccess) {
            classNameExportButtons = "btn-success";
        } else if (this.props.exportButtonsDanger) {
            classNameExportButtons = "btn-danger";
        } else if (this.props.exportButtonsWarning) {
            classNameExportButtons = "btn-warning";
        }

        var table = $(this.table).DataTable({
            dom: "<'row'<'col-md-4'B><'col-md-4'l><'col-md-4'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
            columns: this.buildColumns(),
            keys: true,
            scrollY: this.props.height,
            scrollX: true,
            paging: this.props.enablePaging,
            data: this.props.dataSource,
            autoFill: true,
            displayStart: this.props.pageStart,
            lengthMenu: this.props.pageLengthOptions,
            pageLength: this.props.pageLength,
            pageType: this.props.pageType,
            scrollCollapse: true,
            ordering: this.props.enableOrderByColumn,
            orderMulti: this.props.enableOrderByMultipleColumns,
            searching: this.props.enableSearching,
            searchDelay: 600,
            stateSave: this.props.stateSave,
            stateLoaded: this.props.onStateLoaded,
            stateLoadCallback: this.props.onStateLoad,
            stateSaveCallback: this.props.onStateSave,
            select: true,
            order: this.props.initialOrder,
            orderFixed: this.props.fixedOrder,
            fixedColumns: {
                leftColumns: this.props.fixedColumnsLeft,
                rightColumns: this.props.fixedColumnsRight
            },
            search: {
                search: this.props.initialSearchCondition,
                smart: true
            },
            scroller: {
                loadingIndicator: this.props.showLoadingIndicator
            },            
            buttons: [
                { extend: 'copy', className: classNameExportButtons, text: 'Copiar' },
                { extend: 'excel', className: classNameExportButtons, text: 'Excel' },
                { extend: 'pdf', className: classNameExportButtons, text: 'PDF' },
                { extend: 'print', className: classNameExportButtons, text: 'Imprimir' },
                { extend: 'csv', className: classNameExportButtons, text: 'CSV' }
            ],
            "language": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                },
                "decimal": this.props.decimalSeparator,
                "thousands": this.props.thousandsSeparator
            }
        });

       

        if (this.props.enableCheckboxSelect) {
            $('#' + this.idCheckBoxSelect).on('click', function () {
                var rows = table.rows({ 'search': 'applied' }).nodes();
                $('input[type="checkbox"]', rows).prop('checked', this.checked);
                if (this.checked) {
                    if (_this.props.onSelectAllRecords) {
                        _this.props.onSelectAllRecords();
                    }
                } else {
                    if (_this.props.onUnSelectAllRecords) {
                        _this.props.onUnSelectAllRecords();
                    }
                }
            });

            this.adjustHeaderCheckbox();

            $('#' + this.idTable + ' tbody').on('change', 'input[type="checkbox"]', function (event) {
                if (this.checked) {
                    if (_this.props.onSelectRecord) {
                        _this.props.onSelectRecord(table.rows(this.getAttribute('row')), table.rows(this.getAttribute('row')).data()[0]);
                    }
                } else {
                    if (_this.props.onUnSelectRecord) {
                        _this.props.onUnSelectRecord(table.rows(this.getAttribute('row')), table.rows(this.getAttribute('row')).data()[0]);

                    }
                }
                if (!this.checked) {
                    var el = $('#' + _this.idCheckBoxSelect).get(0);
                    if (el && el.checked && ('indeterminate' in el)) {
                        el.indeterminate = true;
                    }
                }
            });

            table.on('key-focus', function (e, datatable, cell, originalEvent) {
                _this.currentRow = cell.index().row;
                _this.currentCol = cell.index().column;
                _this.adjustHeaderCheckbox();
                if (_this.onFocusCell) {
                    _this.onFocusCell(_this.currentRow, _this.currentCol);
                }
            });

            table.on('page.dt', function () {
                _this.adjustHeaderCheckbox();
                var info = table.page.info();
                if (_this.onPageChange) {
                    _this.onPageChange(info);
                }
            });

            $(document).on('keydown.keyTable', function (e) {
                if ((e.keyCode == 40) || (e.keyCode == 38) || e.keyCode == 34 || e.keyCode == 33) {
                    table.rows().deselect();
                    table.row(_this.currentRow).select();
                    _this.adjustHeaderCheckbox();
                }
                if (e.keyCode == 32) {
                    _this.adjustHeaderCheckbox();
                    e.preventDefault();

                    let id = 'ch_' + _this.idTable + '_' + _this.currentRow + '_0';
                    let input = document.getElementById(id);
                    if (input) {
                        input.checked = !input.checked;
                    }
                }
            });

            $(document).on('keypress.keyTable', function (e) {
                console.log(e.keyCode);
            });
        }

        $('#' + this.idTable + ' tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                if (_this.props.renderDetails) {
                    row.child(_this.props.renderDetails(row.data())).show();
                }
                tr.addClass('shown');
            }
        });


        let element = this.divTable.querySelector(".dataTables_scrollBody");
        element.onscroll = function () {
            if (this.clientWidth < this.scrollWidth) {
                this.classList.remove('shadow-left');
                this.classList.remove('shadow-right');
                this.classList.remove('shadow-left-right');
                if (this.scrollLeft > 0 && (this.scrollLeft + this.clientWidth < this.scrollWidth)) {
                    this.classList.add('shadow-left-right');
                } else if (this.scrollLeft + this.clientWidth == this.scrollWidth) {
                    this.classList.add('shadow-left');
                } else if (this.scrollLeft == 0) {
                    this.classList.add('shadow-right');
                }
            }
        }

        let th1 = $(this.divTable).find('table').eq(0).find('thead').eq(0);
        if (this.props.success) {
            th1.addClass("datatable-success");
        } else if (this.props.primary) {
            th1.addClass("datatable-primary");
        } else if (this.props.warning) {
            th1.addClass("datatable-warning");
        } else if (this.props.info) {
            th1.addClass("datatable-info");
        } else if (this.props.danger) {
            th1.addClass("datatable-danger");
        }

    }

    adjustHeaderCheckbox() {
        let th1 = $(this.divTable).find('table').eq(0).find('th').eq(0);
        let th2 = $(this.divTable).find('table').eq(1).find('th').eq(0);
        th1.removeClass();
        th1.addClass('dataTable_title_align_center');
        th2.removeClass();
        th2.addClass('dataTable_title_align_center');

    }

    buildColumns() {
        let result = [];
        let columns = this.getColumns();
        let arrChildren = React.Children.toArray(columns);
        let _this = this;
        arrChildren.forEach(function (column) {
            let className = "";

            if (column.props.align == "right" || column.props.alignRight) {
                className += " dataTable_cell_align_right";
            } else if (column.props.align == "center" || column.props.alignCenter) {
                className += " dataTable_cell_align_center";
            }
            className += " " + (column.props.cellRowClassName ? column.props.cellRowClassName : "");

            if (column.props.titleAlign == "right" || column.props.titleAlignRight) {
                className += " dataTable_title_align_right";
            } else if (column.props.titleAlign == "center" || column.props.titleAlignCenter) {
                className += " dataTable_title_align_center";
            }
            className += " " + (column.props.cellHeaderClassName ? column.props.cellHeaderClassName : "");

            let customRender = null;
            let type = 'string';
            if (column.props.dataType == "image") {
                customRender = _this.renderImage;
            } else if (column.props.dataType == "number") {
                if (column.props.maskFormatNumber)
                    customRender = _this.renderNumber;
                type = 'number';
            } else if (column.props.dataType == "date") {
                customRender = _this.renderDate;
                type = 'customdate';
            } else if (column.props.dataType == "date_time") {
                customRender = _this.renderDateTime;
                type = 'customdate_time';
            } else if (column.props.dataType == "time") {
                customRender = _this.renderTime;
                type = 'customtime';
            }

            if (column.props.render) {
                customRender = column.props.render;
            }

            result.push({
                title: column.props.title,
                data: column.props.dataField,
                width: column.props.width,
                className: className,
                orderable: column.props.orderable,
                searchable: column.props.searchable,
                render: customRender,
                type: type
            })
        });
        return result;
    }

    getColumns() {
        let arrChildren = React.Children.toArray(this.props.children);
        let result = [];
        let _this = this;
        let checkBoxColumn;
        if (this.props.enableCheckboxSelect) {
            checkBoxColumn = React.createElement(AnterosDataTableColumn, {
                title: '<input type="checkbox" name="select_all" value="1" id="' + this.idCheckBoxSelect + '">',
                alignCenter: true,
                dataField: '',
                titleAlignCenter: true,
                render: _this.renderCheckBoxSelect,
                orderable: false,
                searchable: false,
                cellHeaderClassName: 'dt-body-center',
                width: "30px"
            })
        }

        let detailsColumn;

        if (this.props.showDetails) {
            detailsColumn = React.createElement(AnterosDataTableColumn, {
                title: '',
                alignCenter: true,
                dataField: '',
                titleAlignCenter: true,
                render: _this.renderDetails,
                cellHeaderClassName: 'details-control',
                orderable: false,
                searchable: false,
                width: "30px"
            })
        }
        arrChildren = [checkBoxColumn, detailsColumn, ...arrChildren];


        arrChildren.forEach(function (child) {
            if (child.type && child.type.name == "Columns") {
                let arrColumns = React.Children.toArray(child.props.children);
                arrColumns.forEach(function (childColumn) {
                    if (childColumn.type && childColumn.type.name == "AnterosDataTableColumn") {
                        result.push(childColumn);
                    }
                });
            } else if (child.type && child.type.name == "AnterosDataTableColumn") {
                result.push(child);
            }
        });
        return result;
    }

    render() {
        let idTable = this.idTable;
        if (this.props.id) {
            idTable = this.props.id;
        }
        let className = "display nowrap";
        if (this.props.className) {
            className = this.props.className;
        } else {
            if (this.props.showBorder) {
                className += " table-bordered";
            }
            if (this.props.showStripedRows) {
                className += " table-striped";
            }
            if (this.props.showHover) {
                className += " table-hover";
            }
        }

        return (
            <div tabIndex={this.props.tabIndex} ref={ref => this.divTable = ref} style={{ borderColor: "silver", border: "1px", width: "100%", height: "100%" }}>
                <div id={idTable+"_header"} className="row">
                </div>
                <table ref={ref => this.table = ref} id={idTable} className={className} cellSpacing="0">
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

AnterosDataTable.propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.array.isRequired,
    decimalSeparator: React.PropTypes.string.isRequired,
    thousandsSeparator: React.PropTypes.string.isRequired,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    pageStart: React.PropTypes.number,
    pageLength: React.PropTypes.number,
    pageLengthOptions: React.PropTypes.arrayOf(React.PropTypes.number),
    pageType: React.PropTypes.oneOf(['numbers', 'simple', 'simple_numbers', 'full', 'full_numbers', 'first_last_numbers']).isRequired,
    dateFormat: React.PropTypes.oneOf(['DD/MM/YYYY', 'DD-MM-YYYY', 'MM/DD/YYYY', 'MM-DD-YYYY', 'YYYY/MM/DD', 'YYYY-MM-DD']).isRequired,
    timeFormat: React.PropTypes.oneOf(['HH:mm:ss', 'HH:mm', 'hh:mm:ss', 'hh:mm']).isRequired,
    initialOrder: React.PropTypes.array,
    fixedOrder: React.PropTypes.array,
    initialSearchCondition: React.PropTypes.string,
    fixedColumnsLeft: React.PropTypes.number.isRequired,
    fixedColumnsRight: React.PropTypes.number.isRequired,
    enableOrderByColumn: React.PropTypes.bool.isRequired,
    enableOrderByMultipleColumns: React.PropTypes.bool.isRequired,
    enablePaging: React.PropTypes.bool.isRequired,
    enableSearching: React.PropTypes.bool.isRequired,
    enableCheckboxSelect: React.PropTypes.bool.isRequired,
    showLoadingIndicator: React.PropTypes.bool.isRequired,
    showBorder: React.PropTypes.bool.isRequired,
    showStripedRows: React.PropTypes.bool.isRequired,
    showHover: React.PropTypes.bool.isRequired,
    showDetails: React.PropTypes.bool.isRequired,
    stateSave: React.PropTypes.bool.isRequired,
    tabIndex: React.PropTypes.number.isRequired,
    onStateLoaded: React.PropTypes.func,
    onStateSave: React.PropTypes.func,
    onStateLoad: React.PropTypes.func,
    onSelectRecord: React.PropTypes.func,
    onUnSelectRecord: React.PropTypes.func,
    onSelectAllRecords: React.PropTypes.func,
    onUnSelectAllRecords: React.PropTypes.func,
    onPageChange: React.PropTypes.func,
    renderDetails: React.PropTypes.func,
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    exportButtonsPrimary: React.PropTypes.bool,
    exportButtonsSuccess: React.PropTypes.bool,
    exportButtonsInfo: React.PropTypes.bool,
    exportButtonsWarning: React.PropTypes.bool,
    exportButtonsDanger: React.PropTypes.bool
};


AnterosDataTable.defaultProps = {
    height: "100%",
    width: "100%",
    pageLengthChange: true,
    enableOrderByColumn: true,
    enableOrderByMultipleColumns: false,
    enablePaging: true,
    enableSearching: true,
    enableCheckboxSelect: true,
    pageType: 'simple_numbers',
    showLoadingIndicator: true,
    fixedColumnsLeft: 0,
    fixedColumnsRight: 0,
    stateSave: false,
    showBorder: true,
    showHover: true,
    showStripedRows: true,
    showDetails: false,
    tabIndex: -1,
    decimalSeparator: ".",
    thousandsSeparator: ",",
    pageLengthOptions: [10, 20, 30, 50, 100],
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm:ss'

};


export class Columns extends Component {
    constructor(props) {
        super(props);
        this.validateChildrens = this.validateChildrens.bind(this);
        this.validateChildrens();
    }

    validateChildrens() {
        let arrChildren = React.Children.toArray(this.props.children);
        arrChildren.forEach(function (child) {
            if (child.type && child.type.name != "AnterosDataTableColumn") {
                throw new AnterosError("Columns de AnterosTable aceita apenas filhos do tipo AnterosTableColumn.");
            }
        });
    }

    render() {
        return (<div></div>);
    }
}

export class AnterosDataTableColumn extends Component {
    constructor(props) {
        super(props);
        this.idTableColumn = lodash.uniqueId("tableColumn");
    }

    render() {
        return (null);
    }
}

AnterosDataTableColumn.propTypes = {
    align: React.PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    alignCenter: React.PropTypes.bool.isRequired,
    alignLeft: React.PropTypes.bool.isRequired,
    alignRight: React.PropTypes.bool.isRequired,
    titleAlign: React.PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    titleAlignCenter: React.PropTypes.bool.isRequired,
    titleAlignLeft: React.PropTypes.bool.isRequired,
    titleAlignRight: React.PropTypes.bool.isRequired,
    dataField: React.PropTypes.string.isRequired,
    dataType: React.PropTypes.oneOf(['number', 'date', 'date_time', 'time', 'string', 'image']).isRequired,
    maskFormatNumber: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    cellTitleClassName: React.PropTypes.string,
    cellRowClassName: React.PropTypes.string,
    defaultContent: React.PropTypes.string,
    render: React.PropTypes.func,
    orderable: React.PropTypes.bool.isRequired,
    searchable: React.PropTypes.bool.isRequired,
    visible: React.PropTypes.bool.isRequired,
    orderByColumns: React.PropTypes.arrayOf(React.PropTypes.string),
    onCreatedCell: React.PropTypes.func,
    imageWidth: React.PropTypes.string,
    imageHeight: React.PropTypes.string,
    imageCircle: React.PropTypes.bool
};


AnterosDataTableColumn.defaultProps = {
    align: "left",
    alignLeft: true,
    alignCenter: false,
    alignRight: false,
    titleAlign: "left",
    titleAlignLeft: true,
    titleAlignCenter: false,
    titleAlignRight: false,
    width: "50px",
    orderable: true,
    searchable: true,
    visible: true,
    dataType: 'string'
};
