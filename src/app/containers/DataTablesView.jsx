
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AnterosCard, { AnterosCardDeck, HeaderActions } from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTable, { AnterosTableColumn } from "../components/AnterosTable";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';
import AnterosBadge from "../components/AnterosBadge";
import AnterosProgressBar from "../components/AnterosProgressBar";
import AnterosDataTable, { Columns, AnterosDataTableColumn } from "../components/AnterosDataTable";
import clients from '../../app/assets/data/clients.json';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class DataTablesView extends Component {
    constructor(props) {
        super(props);
        this.renderPhoto = this.renderPhoto.bind(this);
        this.onSelectRecord = this.onSelectRecord.bind(this);
        this.onUnSelectRecord = this.onUnSelectRecord.bind(this);
        this.onSelectAllRecords = this.onSelectAllRecords.bind(this);
        this.onUnSelectAllRecords = this.onUnSelectAllRecords.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }

    renderPhoto(data, type, full, meta) {
        var temp = document.createElement('div');
        let src = "https://randomuser.me/api/portraits/men/" + randomIntFromInterval(60, 85) + ".jpg";
        ReactDOM.render(<img src={src} width={"32px"} height={"32px"} className="img-circle" />, temp);
        return temp.innerHTML;
    }

    onSelectRecord(row, data) {
        console.log("Selecionou");
        console.log(data);
    }

    onUnSelectRecord(row, data) {
        console.log("Deselecionou");
        console.log(data);
    }

    onSelectAllRecords() {
        console.log("Selecionou todos os registros");
    }

    onUnSelectAllRecords() {
        console.log("Deselecionou todos os registros");
    }

    renderDetails(data) {
        var temp = document.createElement('div');
        let detail = (
            <div style={{ display: 'block' }}>
                <img src={require('../assets/img/user.png')} width={"32px"} height={"32px"} className="img-circle" />
                <h1>Testando detalhes</h1>
            </div>
        );
        ReactDOM.render(detail, temp);
        return temp.innerHTML;
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Data tables with pagination">
                    <AnterosDataTable dataSource={clients} height="500px" enablePaging={true}
                        onSelectRecord={this.onSelectRecord} onUnSelectRecord={this.onUnSelectRecord}
                        onSelectAllRecords={this.onSelectAllRecords} onUnSelectAllRecords={this.onUnSelectAllRecords} showDetails renderDetails={this.renderDetails}>
                        <Columns>
                            <AnterosDataTableColumn dataField="id" title="Id" width="80px" titleAlign="center" align="right" dataType="number" />
                            <AnterosDataTableColumn dataField="first_name" title="Nome" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="last_name" title="Sobrenome" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="email" title="e-mail" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="gender" title="Sexo" width="100px" align="center" titleAlign="center" />
                            <AnterosDataTableColumn dataField="ip_address" title="IP" width="60px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="photo" title="Foto" titleAlign="center" dataType="image" render={this.renderPhoto} titleAlign="center" align="center" />
                            <AnterosDataTableColumn dataField="birthday" title="Data aniversário" width="80px" titleAlign="center" dataType="date" align="center" />
                            <AnterosDataTableColumn dataField="address" title="Endereço" width="400px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="address_number" title="Número" width="50px" align="right" titleAlign="center" dataType="number" />
                            <AnterosDataTableColumn dataField="phone" title="Telefone" width="120px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="postal_code" title="Cep" width="120px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="city" title="Cidade" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="state" title="Estado" width="100px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="salary" title="Salário" width="100px" titleAlign="center" align="right" dataType="number" maskFormatNumber="###.###.##0,00" />
                        </Columns>
                    </AnterosDataTable>
                </AnterosCard>

                <AnterosCard caption="Data tables without pagination">
                    <AnterosDataTable success exportButtonsWarning dataSource={clients} height="500px" enablePaging={false}
                        onSelectRecord={this.onSelectRecord} onUnSelectRecord={this.onUnSelectRecord}
                        onSelectAllRecords={this.onSelectAllRecords} onUnSelectAllRecords={this.onUnSelectAllRecords} showDetails renderDetails={this.renderDetails}>
                        <Columns>
                            <AnterosDataTableColumn dataField="id" title="Id" width="80px" titleAlign="center" align="right" dataType="number" />
                            <AnterosDataTableColumn dataField="first_name" title="Nome" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="last_name" title="Sobrenome" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="email" title="e-mail" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="gender" title="Sexo" width="100px" align="center" titleAlign="center" />
                            <AnterosDataTableColumn dataField="ip_address" title="IP" width="60px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="photo" title="Foto" titleAlign="center" dataType="image" render={this.renderPhoto} titleAlign="center" align="center" />
                            <AnterosDataTableColumn dataField="birthday" title="Data aniversário" width="80px" titleAlign="center" dataType="date" align="center" />
                            <AnterosDataTableColumn dataField="address" title="Endereço" width="400px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="address_number" title="Número" width="50px" align="right" titleAlign="center" dataType="number" />
                            <AnterosDataTableColumn dataField="phone" title="Telefone" width="120px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="postal_code" title="Cep" width="120px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="city" title="Cidade" width="200px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="state" title="Estado" width="100px" titleAlign="center" />
                            <AnterosDataTableColumn dataField="salary" title="Salário" width="100px" titleAlign="center" align="right" dataType="number" maskFormatNumber="###.###.##0,00" />
                        </Columns>
                    </AnterosDataTable>
                </AnterosCard>
            </div>
        );
    }
}