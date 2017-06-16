import React, { Component } from 'react';
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";

export default class AnterosTable extends Component {
    constructor(props) {
        super(props);
        this.validateColumns = this.validateColumns.bind(this);
        this.validateColumns();
    }

    validateColumns() {
        let arrChildren = React.Children.toArray(this.props.children);
        if (arrChildren.length == 0) {
            throw new AnterosError("Informe ao menos uma coluna para tabela " + this.props.id + ".");
        }

        arrChildren.forEach(function (child) {
            if (child.type && child.type.name != "AnterosTableColumn") {
                throw new AnterosError("Somente AnterosTableColumn podem ser informados como filhos de AnterosTable.");
            }
        });
    }

    render() {
        let idTable = this.idTable;
        if (this.props.id) {
            idTable = this.props.id;
        }
        let className = "table display nowrap";
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

        let _this = this;

        return (
            <div className="table-responsive" tabIndex={this.props.tabIndex} ref={ref => this.divTable = ref} style={{ borderColor: "silver", border: "1px", width: "100%", height: "100%" }}>
                <table ref={ref => this.table = ref} id={idTable} className={className} cellSpacing="0">
                    <thead>
                        <tr>
                            {this.props.children.map((column, i) => {
                                let align = column.props.headerAlign;
                                if (column.props.headerAlignCenter) {
                                    align = "center";
                                } else if (column.props.headerAlignRight) {
                                    align = "right";
                                }
                                return (<th key={i} style={{ textAlign: align }}>{column.props.title}</th>);
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {_this.props.dataSource.map((record, i) => {
                            return (<tr key={i}>{
                                _this.props.children.map((column, j) => {
                                    let align = column.props.textAlign;
                                    if (column.props.textAlignCenter) {
                                        align = "center";
                                    } else if (column.props.textAlignRight) {
                                        align = "right";
                                    }
                                    return (<td key={j} style={{ textAlign: align }} >{record[column.props.name]}</td>);
                                })}
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>

        )
    }
}
AnterosTable.propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.array.isRequired,
    showBorder: React.PropTypes.bool.isRequired,
    showStripedRows: React.PropTypes.bool.isRequired,
    showHover: React.PropTypes.bool.isRequired,
}

AnterosTable.defaultProps = {
    showBorder: false,
    showHover: false,
    showStripedRows: false
}



export class AnterosTableColumn extends Component {
    constructor(props) {
        super(props);
        this.idTableColumn = lodash.uniqueId("column");
    }

    render() {
        return (null);
    }
}

AnterosTableColumn.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    headerAlign: React.PropTypes.oneOf(['left', 'center', 'right']),
    headerAlignRight: React.PropTypes.string,
    headerAlignCenter: React.PropTypes.string,
    textAlign: React.PropTypes.oneOf(['left', 'center', 'right']),
    textAlignRight: React.PropTypes.string,
    textAlignCenter: React.PropTypes.string
}


AnterosTableColumn.defaultProps = {
    
}