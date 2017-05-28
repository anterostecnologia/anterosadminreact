import React, { Component } from 'react';
import 'script-loader!moment/min/moment-with-locales.min.js'
import 'script-loader!bootstrap-daterangepicker/daterangepicker.js'
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'script-loader!jquery-mask-plugin/dist/jquery.mask.js'
import lodash from "lodash";

export default class AnterosDateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.open = false;
        this.idCalendar = lodash.uniqueId("drPickerCal");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            _this.setState({ value: moment(start).format(_this.props.format) + ' - ' + moment(end).format(_this.props.format) });
            _this.input.focus();
        }

        $(this.divInput).daterangepicker({
            startDate: start,
            endDate: end,
            "ranges": {
                'Hoje': [moment(), moment()],
                'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                'Este mês': [moment().startOf('month'), moment().endOf('month')],
                'Último mês': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            "locale": {
                "format": this.props.format,
                "separator": " - ",
                "applyLabel": "Aplicar",
                "cancelLabel": "Cancelar",
                "fromLabel": "De",
                "toLabel": "Até",
                "customRangeLabel": "Selecionar",
                "weekLabel": "S",
                "daysOfWeek": [
                    "Do",
                    "Se",
                    "Te",
                    "Qu",
                    "Qi",
                    "Se",
                    "Sa"
                ],
                "monthNames": [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                ],
                "firstDay": 1
            }
        }, cb);

        cb(start, end);

        $(this.divInput).on("hide.daterangepicker", function (e) {
            _this.open = false;
        });
        $(this.divInput).on("show.daterangepicker", function (e) {
            _this.open = true;
        });


        $(this.input).mask('00/00/0000 - 00/00/0000', { placeholder: this.props.placeholder });
    }

    onKeyDown(event) {
        if (event.keyCode == 116) {
            if (!this.open)
                $(this.divInput).data('daterangepicker').show();
            else
                $(this.divInput).data('daterangepicker').hide();
            this.input.focus();
        }

        if (event.keyCode == 8) {
            $(this.divInput).data('daterangepicker').hide();
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    onKeyPress(event) {
        $(this.divInput).data('daterangepicker').hide();
    }

    render() {
        let icon = "fa fa-calendar";
        if (this.icon) {
            icon = this.props.icon;
        }
        let className = "input-group date";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (
            <div className={className} id={this.props.id} style={{ ...this.props.style, width: this.props.width }} ref={ref => this.divInput = ref}>
                <input disabled={(this.props.disabled ? true : false)} id={lodash.uniqueId("dtPickerCalInput")} ref={ref => this.input = ref} type="text" value={this.state.value} className="form-control" onChange={this.handleChange}
                    onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown} />
                <span className="input-group-addon">
                    <span><i id={this.idCalendar} className={icon} /><img src={this.props.image} /></span></span>
            </div>
        );
    }
}


AnterosDateRangePicker.propTypes = {
    placeHolder: React.PropTypes.string,
    format: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool
};

AnterosDateRangePicker.defaultProps = {
    placeHolder: '',
    format: 'DD/MM/YYYY',
    value: ''
}