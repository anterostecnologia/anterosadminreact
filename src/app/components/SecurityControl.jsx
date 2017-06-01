import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AnterosTreeView from './AnterosTreeView';
import AnterosCard, { HeaderActions, FooterActions } from './AnterosCard';
import AnterosButton from './AnterosButton';
import ObjectInspector from 'react-object-inspector';
import AnterosDropdownMenu from './AnterosDropdownMenu';
import AnterosDropdownMenuItem from './AnterosDropdownMenuItem';
import AnterosDropdownButton from './AnterosDropdownButton';
import AnterosNavigator from "./AnterosNavigator";
import AnterosNavigatorLink from "./AnterosNavigatorLink";
import AnterosPageControl from "./AnterosPageControl";
import AnterosTab from "./AnterosTab";
import AnterosBadge from "./AnterosBadge";
import AnterosPagination, { AnterosPaginationPage } from "./AnterosPagination";
import AnterosList, { AnterosListItem } from "./AnterosList";
import AnterosAccordion, { AnterosAccordionItem } from "./AnterosAccordion";
import AnterosStepWizard from "./AnterosStepWizard";
import AnterosDashboard from "./AnterosDashboard";
import AnterosProgressBar from "./AnterosProgressBar";
import AnterosAlert from "./AnterosAlert";
import AnterosSweetAlert from "./AnterosSweetAlert";
import AnterosCheckboxToggle from "./AnterosCheckboxToggle";
import AnterosCheckboxSlide from "./AnterosCheckboxSlide";
import AnterosCheckbox from "./AnterosCheckbox";
import AnterosRadioGroup, { AnterosRadio } from "./AnterosRadioGroup";
import AnterosLabel from "./AnterosLabel";
import Exemplo from "./Exemplo";
import AnterosStarRating from "./AnterosStarRating";
import AnterosSelect, { AnterosSelectOption } from "./AnterosSelect";
import AnterosTagsInput from "./AnterosTagsInput";
import AnterosDatePicker from "./AnterosDatePicker";
import AnterosDatetimePicker from "./AnterosDatetimePicker";
import AnterosClockPicker from "./AnterosClockPicker";
import AnterosTimePicker from "./AnterosTimePicker";
import AnterosDateRangePicker from "./AnterosDateRangePicker";
import AnterosNumber from "./AnterosNumber";
import AnterosColorPicker from "./AnterosColorPicker";
import AnterosEdit from "./AnterosEdit";
import AnterosTextArea from "./AnterosTextArea";
import AnterosEmojiArea from "./AnterosEmojiArea";
import AnterosPassword from "./AnterosPassword";
import AnterosSpinner from "./AnterosSpinner";
import AnterosSlider from "./AnterosSlider";
import AnterosImageCropper from "./AnterosImageCropper";
import AnterosDataTable, { Columns, AnterosDataTableColumn } from "./AnterosDataTable";
import clients from '../../app/assets/data/clients.json';

var buttonStyle = {
	margin: '10px 10px 10px 0'
};

var data = [
	{
		id: 1,
		text: 'Pasta 1',
		icon: 'fa fa-camera-retro',
		nodes: [
			{
				id: 2,
				text: 'Child 1',
				image: require('../assets/img/user1.png'),
				nodes: [
					{
						id: 3,
						text: 'Grandchild 1',
						image: require('../assets/img/system.png'),
					},
					{
						id: 4,
						text: 'Grandchild 2',
						image: require('../assets/img/group.png')
					}
				]
			},
			{
				id: 5,
				text: 'Child 2',
				image: require('../assets/img/action.png')
			}
		]
	},
	{
		id: 6,
		text: 'Parent 2',
		image: require('../assets/img/action.png')
	},
	{
		id: 7,
		text: 'Parent 3',
		image: require('../assets/img/action.png'),
	},
	{
		id: 8,
		text: 'Parent 4',
		image: require('../assets/img/action.png'),
		isleaf: true
	},
	{
		id: 9,
		text: 'Parent 5',
		image: require('../assets/img/action.png'),
		isleaf: true
	}
];


var dataList = [
	{
		id: 1,
		text: 'Item 1',
		icon: 'fa fa-camera-retro',
	},
	{
		id: 2,
		text: 'Item 2',
		foto: require('../assets/img/user.png')
	},
	{
		id: 3,
		text: 'Item 3',
		image: require('../assets/img/action.png'),
	},
	{
		id: 4,
		text: 'Item 4',
		foto: require('../assets/img/action.png'),
		disabled: true
	},
	{
		id: 5,
		text: 'Item 5',
		danger: true,
		image: require('../assets/img/action.png'),
	}
];

const steps =
	[
		{ name: 'Step1', component: <AnterosDashboard /> },
		{ name: 'Step2', component: <AnterosDashboard /> },
		{ name: 'Step3', component: <AnterosDashboard /> },
		{ name: 'Step4', component: <AnterosDashboard /> },
		{ name: 'Step5', component: <AnterosDashboard /> },
	]

const select =
	[
		{ id: 1, text: "Opção 1", disabled: false, icon: "fa fa-fast-backward", keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 2", disabled: false, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 3", disabled: true, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 4", disabled: false, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 5", disabled: false, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 6", disabled: false, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 7", disabled: false, keyWordsToSearch: "frosting" },
		{ id: 1, text: "Opção 8", disabled: false, keyWordsToSearch: "frosting" },
	]

const src = 'http://i.imgur.com/Baf0DlW.png';

export default class SecurityControl extends Component {



	constructor(props) {
		super(props);
		this.onSelectedNode = this.onSelectedNode.bind(this);
		this.onUnSelectedNode = this.onUnSelectedNode.bind(this);
		this.onExpandedNode = this.onExpandedNode.bind(this);
		this.onCollapsedNode = this.onCollapsedNode.bind(this);
		this.onChangedDataSource = this.onChangedDataSource.bind(this);
		this.onFocusedNode = this.onFocusedNode.bind(this);
		this.onLoosedFocusNode = this.onLoosedFocusNode.bind(this);
		this.onLoadDataSource = this.onLoadDataSource.bind(this);
		this.handlePageChanged = this.handlePageChanged.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		this.cropImage = this.cropImage.bind(this);
		this.renderIpAddress = this.renderIpAddress.bind(this);
		this.onSelectRecord = this.onSelectRecord.bind(this);
		this.onUnSelectRecord = this.onUnSelectRecord.bind(this);
		this.onSelectAllRecords = this.onSelectAllRecords.bind(this);
		this.onUnSelectAllRecords = this.onUnSelectAllRecords.bind(this);
		this.renderDetails = this.renderDetails.bind(this);
		this.state = {
			dropdownOpen: false,
			dataSource: data,
			total: 30,
			current: 2,
			visiblePages: 3,
			src: src,
			cropResult: null,
			tags: [
				{ id: 184, name: 'Thailand' },
				{ id: 86, name: 'India' }
			]
		};
		this.lastId = 9;
		this.toggle = this.toggle.bind(this);
		this.onSelectAccordionItem = this.onSelectAccordionItem.bind(this);
		let tagsInput;
	}

	componentDidMount() {
		var $div = $('#table-body');
		var sync = function (e) {
			$("#table-header").scrollTop($("#table-body").scrollTop());
			$("#table-header").scrollLeft($("#table-body").scrollLeft());
		}
		$div.on('scroll', sync);
	}

	onSelectedNode(dataSource, selectedNodes) {
		console.log('Selecionado ' + selectedNodes);
		this.setState({ selectedNodes: selectedNodes });
	}

	onUnSelectedNode(dataSource, selectedNodes) {
		console.log('Deselecionado ' + selectedNodes);
	}

	onExpandedNode(dataSource, selectedNodes) {
		console.log('Selecionado ' + selectedNodes);
	}

	onCollapsedNode(dataSource, nodes) {
		console.log('Contraido ' + nodes);
	}

	onLoosedFocusNode(node) {
		console.log('Sai foco ' + node);
	}

	onFocusedNode(node) {
		console.log('Em foco ' + node);
	}

	onChangedDataSource(dataSource) {
		this.setState({ ...this.state, dataSource: dataSource });
	}

	onSelectAccordionItem(event, item) {
		console.log(item);
	}

	toggle() {
		this.setState({
			...this.state,
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	handlePageChanged(newPage) {
		this.setState({ ...this.state, current: newPage });
	}


	handleDelete(i) {
		const tags = this.state.tags.slice(0)
		tags.splice(i, 1)
		this.setState({ ...this.state, tags })
	}

	handleAddition(tag) {
		const tags = [].concat(this.state.tags, tag)
		this.setState({ ...this.state, tags })
	}

	cropImage() {
		if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
			return;
		}
		this.setState({
			...this.state,
			cropResult: this.cropper.getCroppedCanvas().toDataURL(),
		});
	}


	findNodeById(nodes, id) {
		let _this = this;
		let result;
		if (nodes)
			nodes.forEach(function (node) {
				if (node.nodeId == id) result = node;
				else {
					if (node.nodes) {
						result = _this.findNodeById(node.nodes, id) || result;
					}
				}
			});
		return result;
	}

	onLoadDataSource(node) {
		return new Promise((resolve) => {
			setTimeout(() => {
				var now = new Date().getTime();
				while (new Date().getTime() < now + 1000) { /* do nothing */ }
				let newNodes = [
					{
						id: this.lastId + 1,
						text: 'Child 5',
						image: require('../assets/img/user1.png'),
						nodes: [
							{
								id: this.lastId + 2,
								text: 'Grandchild 5',
								image: require('../assets/img/system.png'),
							},
							{
								id: this.lastId + 3,
								text: 'Grandchild 7',
								image: require('../assets/img/group.png')
							}
						]
					},
					{
						id: this.lastId + 4,
						text: 'Child 4',
						image: require('../assets/img/action.png')
					}
				];
				this.lastId = this.lastId + 4;
				resolve(newNodes);
			}, 1000);
		});
	}

	renderIpAddress(data, type, full, meta) {
		var temp = document.createElement('div');
		ReactDOM.render(<img src={require('../assets/img/user.png')} width={"32px"} height={"32px"} className="img-circle" />, temp);
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
			<AnterosCard title="Segurança" id="mainCard">
				<HeaderActions>
					<AnterosButton small success oval image={require('../assets/img/action.png')} caption="Adicionar" hint="Teste hint 23232 32 3 23 23 2" hintSize="fit" hintPosition="up" />
					<AnterosButton small primary oval icon="fa fa-pencil" caption="Editar" />
					<AnterosButton small danger oval icon="fa fa-plus" caption="Remover" />
				</HeaderActions>

				<AnterosButton icon="fa fa-plus" caption="Remover" />
				<AnterosCard title="Tables">

					<AnterosDataTable dataSource={clients} height="500px" enablePaging={true}
						onSelectRecord={this.onSelectRecord} onUnSelectRecord={this.onUnSelectRecord}
						onSelectAllRecords={this.onSelectAllRecords} onUnSelectAllRecords={this.onUnSelectAllRecords} showDetails renderDetails={this.renderDetails}>
						<Columns>
							<AnterosDataTableColumn dataField="id" title="Id" width="80px" titleAlign="center" align="right" dataType="number" />
							<AnterosDataTableColumn dataField="first_name" title="Nome" width="200px" titleAlign="center" />
							<AnterosDataTableColumn dataField="last_name" title="Sobrenome" width="200px" titleAlign="center" />
							<AnterosDataTableColumn dataField="email" title="e-mail" width="200px" titleAlign="center" />
							<AnterosDataTableColumn dataField="gender" title="Sexo" width="100px" align="center" titleAlign="center" />
							<AnterosDataTableColumn dataField="ip_address" title="IP" width="60px" titleAlign="center" render={this.renderIpAddress} />
							{/*<AnterosDataTableColumn dataField="photo" title="Foto" titleAlign="center" dataType="image" imageWidth="32px" imageHeight="32px" imageCircle align="center"/>*/}
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

				<AnterosTreeView
					id="treeview"
					ref="treeview"
					height="200px"
					dataSource={this.state.dataSource}
					onChangedDataSource={this.onChangedDataSource}
					onSelectedNode={this.onSelectedNode}
					onUnSelectedNode={this.onUnSelectedNode}
					onExpandedNode={this.onUnSelectedNode}
					onCollapsedNode={this.onUnSelectedNode}
					onLoadDataSource={this.onLoadDataSource}
					color={"#428bca"}
					showBorder={true}
					showTags={false}
					selectable={true} />

				<AnterosPageControl height="200px">
					<AnterosTab id="tab1" caption="Clientes" active>
						{<div >
							<ObjectInspector data={this.state.dataSource} />
						</div>}
					</AnterosTab>
					<AnterosTab id="tab2" caption="Fornecedores">
						<AnterosButton small success oval image={require('../assets/img/action.png')} caption="Adicionar" />
						<AnterosButton small primary oval icon="fa fa-pencil" caption="Editar" />
					</AnterosTab>
					<AnterosTab id="tab3" caption="Fornecedores">
						<AnterosButton small warning oval image={require('../assets/img/action.png')} caption="Adicionar" />
						<AnterosButton small danger oval icon="fa fa-pencil" caption="Editar" />
					</AnterosTab>
				</AnterosPageControl>

				<AnterosPagination small
					icons={{ first: "fa fa-fast-backward" }}
					images={{ last: require('../assets/img/action.png') }}
					titles={{ first: "" }}
					total={this.state.total}
					visiblePages={this.state.visiblePages}
					current={this.state.current}
					onPageChanged={this.handlePageChanged}>
				</AnterosPagination>

				<div className="row">
					<div className="col-6">
						<AnterosCard title="List">
							<AnterosList width="400px" height="300px" dataSource={dataList} component={CustomComponent} />
						</AnterosCard>
					</div>
					<div className="col-6">
						<AnterosCard title="List">
							<AnterosList width="400px" height="300px" alignCenter>
								<AnterosListItem id={1} caption="Item1" danger disabled />
								<AnterosListItem id={2}>
									<div className="d-flex w-100 justify-content-between">
										<h5 className="mb-1">List group item heading</h5>
										<small>3 days ago</small>
									</div>
									<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
									<small>Donec id elit non mi porta.</small>
								</AnterosListItem>
								<AnterosListItem id={3} caption="Item3" active />
								<AnterosListItem id={4} caption="Item4" image="https://s3.amazonaws.com/uifaces/faces/twitter/why_this/128.jpg" />
								<AnterosListItem id={5} caption="Item5" justify ><AnterosBadge pillFormat danger justify caption="123" /> </AnterosListItem>
								<AnterosListItem id={6} caption="Item6" alignCenter ><AnterosBadge pillFormat warning justify caption="12" /> </AnterosListItem>
								<AnterosListItem id={7} caption="Item7" icon="fa fa-fast-backward" />
								<AnterosListItem id={8} caption="Item8" />
								<AnterosListItem id={9} caption="Item9" />
								<AnterosListItem id={10} caption="Item10" />
								<AnterosListItem id={11} caption="Item11" />
								<AnterosListItem id={12} caption="Item12" />
								<AnterosListItem id={13} caption="Item13" />
								<AnterosListItem id={14} caption="Item14" />
								<AnterosListItem id={15} caption="Item15" />
								<AnterosListItem id={16} caption="Item16" />
								<AnterosListItem id={17} caption="Item17" />
								<AnterosListItem id={18} caption="Item18" />
								<AnterosListItem id={19} caption="Item19" />
								<AnterosListItem id={20} caption="Item20" />
							</AnterosList>
						</AnterosCard>
					</div>
				</div>





				<AnterosAccordion id="acc1" success onSelectAccordionItem={this.onSelectAccordionItem}>
					<AnterosAccordionItem id={1} caption="Item 1" icon="fa fa-fast-backward">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </AnterosAccordionItem>
					<AnterosAccordionItem id={2} caption="Item 2">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </AnterosAccordionItem>
					<AnterosAccordionItem id={3} caption="Item 3">
						<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group mr-2" role="group" aria-label="First group">
								<button type="button" className="btn btn-secondary">1</button>
								<button type="button" className="btn btn-secondary">2</button>
								<button type="button" className="btn btn-secondary">3</button>
								<button type="button" className="btn btn-secondary">4</button>
							</div>
							<div className="btn-group mr-2" role="group" aria-label="Second group">
								<button type="button" className="btn btn-secondary">5</button>
								<button type="button" className="btn btn-secondary">6</button>
								<button type="button" className="btn btn-secondary">7</button>
							</div>
							<div className="btn-group" role="group" aria-label="Third group">
								<button type="button" className="btn btn-secondary">8</button>
							</div>
						</div>
					</AnterosAccordionItem>
				</AnterosAccordion>


				<AnterosCard title="Step wizard">
					<AnterosStepWizard steps={steps} />
				</AnterosCard>


				<AnterosProgressBar value="10" max={100} min={0} />
				<AnterosProgressBar success value="25" max="100" />
				<AnterosProgressBar info value="50" max="100" />
				<AnterosProgressBar warning value="75" max="100" />
				<AnterosProgressBar danger value="100" max="100" />
				<AnterosProgressBar striped value="10" max="100" />
				<AnterosProgressBar striped success value="25" max="100" />
				<AnterosProgressBar striped info value="50" max="100" />
				<AnterosProgressBar striped warning value="75" max="100" />
				<AnterosProgressBar animated striped danger value="100" max="100" />
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
				</div>


				<div className="row">
					<div className="col-lg-4 col-md-6">
						<AnterosAlert success>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert info>
							NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
						<AnterosAlert warning>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert danger>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert aquamarine>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert purple>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert greyDarker>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert blueDirty>
							NEWS: You have done 5 actions
						</AnterosAlert>
					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert success fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert info fill>
							NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
						<AnterosAlert warning fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert danger fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert aquamarine fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert purple fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert greyDarker fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert blueDirty fill>
							NEWS: You have done 5 actions
						</AnterosAlert>
					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert success showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert info showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
						<AnterosAlert warning showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert danger showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert aquamarine showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert purple showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert greyDarker showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
						<AnterosAlert blueDirty showBorder icon="fa fa-exclamation-triangle">
							NEWS: You have done 5 actions
						</AnterosAlert>
					</div>
				</div>


				<div className="row">
					<div className="col-lg-4 col-md-6">
						<AnterosAlert aquamarine fill>
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
						<AnterosAlert purple fill>
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
						<AnterosAlert blueDirty fill>
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert danger icon="fa fa-exclamation-triangle">
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
								<button type="button" className="btn btn-rounded">Do this</button>
								<button type="button" className="btn btn-rounded">Or this</button>
							</div>
						</AnterosAlert>

						<AnterosAlert aquamarine fill>
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
								<button type="button" className="btn btn-rounded">Do this</button>
								<button type="button" className="btn btn-rounded">Or this</button>
							</div>
						</AnterosAlert>

						<AnterosAlert info fill>
							<strong>Some message</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
								<button type="button" className="btn btn-rounded">Do this</button>
								<button type="button" className="btn btn-rounded">Or this</button>
							</div>
						</AnterosAlert>
					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert purple avatar image={require('../assets/img/user.png')}>
							You have done 5 actions
						</AnterosAlert>

						<AnterosAlert info avatar image={require('../assets/img/user.png')}>
							<strong>You have done 5 actions</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

						<AnterosAlert danger avatar image={require('../assets/img/user.png')}>
							<strong>You have done 5 actions</strong>
							Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
								<button type="button" className="btn btn-rounded">Do this</button>
								<button type="button" className="btn btn-rounded">Or this</button>
							</div>
						</AnterosAlert>
					</div>
				</div>


				<div className="row">
					<div className="col-lg-4 col-md-6">
						<AnterosAlert blueDirty >
							<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

						<AnterosAlert purple >
							<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert warning textColored >
							<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

						<AnterosAlert warning textColored >
							<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

						<AnterosAlert danger textColored >
							<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
					</div>

					<div className="col-lg-4 col-md-6">
						<AnterosAlert aquamarine textColored >
							<strong>Heads Up!</strong>
							<ul>
								<li>1 Lorem Ipsum is simply dummy</li>
								<li>Lorem Ipsum is simply dummy text</li>
							</ul>
						</AnterosAlert>

						<AnterosAlert blueDirty textColored fill >
							<strong>Heads Up!</strong>
							<ul>
								<li>1 Lorem Ipsum is simply dummy</li>
								<li>Lorem Ipsum is simply dummy text</li>
							</ul>
						</AnterosAlert>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<AnterosAlert purple>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert info showBorderLeft>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert aquamarine showBorderLeft>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert danger showBorderLeft>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert warning showBorderLeft>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
						</div>

						<div className="col-lg-4 col-md-6">
							<AnterosAlert purple showBorderLeft fill>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert info showBorderLeft fill>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert aquamarine showBorderLeft fill>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert danger showBorderLeft fill>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

							<AnterosAlert warning showBorderLeft fill>
								<strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
						</div>

						<div className="col-lg-4 col-md-6">
							<AnterosAlert facebook >
								<strong>Some message</strong>
								Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
							<AnterosAlert twitter >
								<strong>Some message</strong>
								Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
							<AnterosAlert googlePlus >
								<strong>Some message</strong>
								Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
							<AnterosAlert linkedin >
								<strong>Some message</strong>
								Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
						</div>
					</div>
				</div>


				<div>
					<div className="row">
						<div className="col-md-4">
							<AnterosCard title="Basic message">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => AnterosSweetAlert('Any fool can use a computer').catch(AnterosSweetAlert.noop)} />
							</AnterosCard>
						</div>
						<div className="col-md-4">
							<AnterosCard title="Title with a text under">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => AnterosSweetAlert('The Internet?', 'That thing is still around?', 'question').catch(AnterosSweetAlert.noop)} />
							</AnterosCard>
						</div>
						<div className="col-md-4">
							<AnterosCard title="Success message!">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => AnterosSweetAlert('Good job!', 'You clicked the button!', 'success').catch(AnterosSweetAlert.noop)} />
							</AnterosCard>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<AnterosCard title="Warning message!">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => {
									AnterosSweetAlert({
										title: 'Are you sure?',
										text: 'You won\'t be able to revert this!',
										type: 'warning',
										showCancelButton: true,
										confirmButtonColor: '#3085d6',
										cancelButtonColor: '#d33',
										confirmButtonText: 'Yes, delete it!'
									}).then(function () {
										AnterosSweetAlert('Deleted!', 'Your file has been deleted!', 'success')
									}).catch(AnterosSweetAlert.noop)
								}} />
							</AnterosCard>
						</div>
						<div className="col-md-4">
							<AnterosCard title="Cancel message!">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => {
									AnterosSweetAlert({
										title: 'Are you sure?',
										text: 'Buttons below are styled with Bootstrap classes',
										type: 'warning',
										showCancelButton: true,
										confirmButtonColor: '#3085d6',
										cancelButtonColor: '#d33',
										confirmButtonText: 'Yes, delete it!',
										cancelButtonText: 'No, cancel!',
										confirmButtonClass: 'btn btn-success',
										cancelButtonClass: 'btn btn-danger',
										buttonsStyling: false
									}).then(function () {
										AnterosSweetAlert('Deleted!', 'Your file has been deleted!', 'success')
									}, function (dismiss) {
										if (dismiss === 'cancel') {
											AnterosSweetAlert('Cancelled', 'Your imaginary file is safe :)', 'error')
										}
									})
								}} />
							</AnterosCard>
						</div>
						<div className="col-md-4">
							<AnterosCard title="Info message!">
								<AnterosButton primary caption="Try Alert!" />
							</AnterosCard>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<AnterosCard title="Custom image message!">
								<AnterosButton primary caption="Try Alert!" onButtonClick={(e) => {
									AnterosSweetAlert({
										title: 'Sweet!',
										text: 'Modal with a custom image.',
										imageUrl: 'https://unsplash.it/400/200/?random',
										imageWidth: 400,
										imageHeight: 200,
										animation: false
									}).catch(AnterosSweetAlert.noop)
								}} />
							</AnterosCard>
						</div>
						<div className="col-md-4">
							<AnterosCard title="Input message!">
								<AnterosButton primary caption="Try Alert!" />
							</AnterosCard>
						</div>
					</div>
				</div>

				<div className="row">

					<div className="col-md-4">
						<AnterosCheckbox value="Meeting new girls" checked rounded onCheckboxChange={(value, checked) => console.log(value + " " + checked)} />
						<AnterosCheckbox value="Meeting new girls" onCheckboxChange={(value, checked) => console.log(value + " " + checked)} />
						<AnterosCheckbox value="Meeting new girls" onCheckboxChange={(value, checked) => console.log(value + " " + checked)} />

						<AnterosRadioGroup name="radios" onRadioChange={(value, i) => console.log(value + " - " + i)}>
							<AnterosRadio value="Option one" />
							<AnterosRadio value="Option two checked" checked />
							<AnterosRadio value="Option three checked and disabled" checked />
							<AnterosRadio value="Option four" />
							<AnterosRadio value="Option one" />
						</AnterosRadioGroup>
						<p>
							<AnterosLabel caption="Default" />
							<AnterosLabel caption="Success" success />
							<AnterosLabel caption="Info" info />
							<AnterosLabel caption="Warning" warning />
							<AnterosLabel caption="Danger" danger />
						</p>

						<p>
							<AnterosLabel caption="Default" pillFormat />
							<AnterosLabel caption="Success" success pillFormat />
							<AnterosLabel caption="Info" info pillFormat />
							<AnterosLabel caption="Warning" warning pillFormat />
							<AnterosLabel caption="Danger" danger pillFormat />
						</p>
					</div>
				</div>





				<AnterosCard height="800px" style={{ overflow: "none" }} title="Components">
					<AnterosStarRating size={30} value={2.5} edit={false} />
					<AnterosStarRating size={50} count={10} color1={'#ff9900'} color2={'#6599ff'} onChange={(value) => console.log(value)} />
					<AnterosStarRating size={40} count={7} half={false} value={4} onChange={(value) => console.log(value)} />

					<AnterosSelect style={{ width: "100%" }}>
						<AnterosSelectOption group label="Grupo 1">
							<AnterosSelectOption disabled keyWordsToSearch="ketchup mustard">Hot Dog, Fries and a Soda</AnterosSelectOption>
							<AnterosSelectOption keyWordsToSearch="mustard">Burger, Shake and a Smile</AnterosSelectOption>
							<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
						</AnterosSelectOption>
						<AnterosSelectOption group label="Grupo 2">
							<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
							<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
						</AnterosSelectOption>
					</AnterosSelect>

					<AnterosSelect multiple={true} style={{ width: "100%" }} dropup>
						<AnterosSelectOption icon="glyphicon glyphicon-time" keyWordsToSearch="ketchup mustard">Hot Dog, Fries and a Soda</AnterosSelectOption>
						<AnterosSelectOption keyWordsToSearch="mustard">Burger, Shake and a Smile</AnterosSelectOption>
						<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
						<AnterosSelectOption divider></AnterosSelectOption>
						<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
						<AnterosSelectOption keyWordsToSearch="frosting">Sugar, Spice and all things nice</AnterosSelectOption>
					</AnterosSelect>

					<AnterosSelect style={{ width: "100%" }} dataSource={select} />

					<AnterosTagsInput
						tags={this.state.tags}
						handleDelete={this.handleDelete}
						handleAddition={this.handleAddition} />

					<AnterosDatePicker id="data1" type="text" name="request" placeholder="dd/mm/aaaa"
						dateFormat="dd/mm/yyyy" />

					<AnterosDatePicker id="data2" width="220px" value="15/01/2017" />
					<AnterosDatetimePicker id="dataHora" width="220px" value="" />

					<AnterosTimePicker id="hora1" width="150px" value="" />
					<AnterosTimePicker id="hora2" width="150px" value="" format="hh:mm" inputMask="00:00" />

					<AnterosClockPicker id="hora3" width="150px" value="" />

					<AnterosDateRangePicker value="" />

					<AnterosNumber precision={2} thousandsSeparator="" />

					<AnterosColorPicker width="150px" />

					<AnterosEdit width="350px" maxLenght={40} />

					<AnterosTextArea width="650px" maxLenght={200} />

					<AnterosEmojiArea width="650px" maxLenght={200} value="teste" />

					<AnterosPassword width="250px" maxLenght={20} value="" />

					<AnterosSpinner width="250px" min={-10} max={10} step={1} value="0" />

					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[10, 100]} tooltips primary />
					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[80, 100]} tooltips secondary />
					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[60, 100]} tooltips success />
					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[40, 100]} tooltips danger />
					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[20, 100]} tooltips warning />
					<AnterosSlider pips={{ mode: 'range', density: 3 }} range={{ min: 0, max: 200 }} start={[30, 100]} tooltips info />
				</AnterosCard>

				<AnterosCard title="Ribbons">
					<div className="row">
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon ribbon-primary">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon ribbon-danger">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon ribbon-vertical ribbon-warning">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon ribbon-vertical ribbon-success">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example">
								<div className="ribbon ribbon-vertical ribbon-info">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-reverse">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-reverse ribbon-primary">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-reverse ribbon-danger">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-vertical ribbon-reverse ribbon-warning">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-vertical ribbon-reverse ribbon-success">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-lg-2 col-sm-4">
							<div className="example example-reverse">
								<div className="ribbon ribbon-vertical ribbon-reverse ribbon-info">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-3">
							<div className="example">
								<div className="ribbon ribbon-bookmark">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example example-reverse">
								<div className="ribbon ribbon-bookmark ribbon-reverse ribbon-primary">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example">
								<div className="ribbon ribbon-vertical ribbon-bookmark ribbon-danger">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example example-reverse">
								<div className="ribbon ribbon-vertical ribbon-bookmark ribbon-reverse ribbon-warning">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-3">
							<div className="example">
								<div className="ribbon ribbon-clip">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example example-reverse">
								<div className="ribbon ribbon-clip ribbon-reverse ribbon-primary">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example example-bottom">
								<div className="ribbon ribbon-clip ribbon-bottom ribbon-danger">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="example example-bottom-reverse">
								<div className="ribbon ribbon-clip ribbon-reverse ribbon-bottom ribbon-warning">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>


					<div className="row">
						<div className="col-sm-6">
							<div className="example">
								<div className="ribbon ribbon-badge ribbon-primary">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-reverse">
								<div className="ribbon ribbon-badge ribbon-primary ribbon-reverse">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-bottom">
								<div className="ribbon ribbon-badge ribbon-primary ribbon-bottom">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-bottom-reverse">
								<div className="ribbon ribbon-badge ribbon-primary ribbon-reverse ribbon-bottom">
									<span className="ribbon-inner">Ribbon</span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-6">
							<div className="example">
								<div className="ribbon ribbon-corner ribbon-primary">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-reverse">
								<div className="ribbon ribbon-corner ribbon-primary ribbon-reverse">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-bottom">
								<div className="ribbon ribbon-corner ribbon-primary ribbon-bottom">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="example example-bottom-reverse">
								<div className="ribbon ribbon-corner ribbon-primary ribbon-reverse ribbon-bottom">
									<span className="ribbon-inner"><i className="fa fa-heart" aria-hidden="true"></i></span>
								</div>
								<p>Integer nec odio. Praesent libero. Sed cursus ante dapibus
                        diam.</p>
							</div>
						</div>
					</div>
				</AnterosCard>
				<AnterosCard title="Crop Image">
					<div className="row">
						<div className="col-md-9">
							<div className="img-container">
								<AnterosImageCropper
									style={{ height: 400, width: '100%' }}

									preview=".img-preview"
									guides={false}
									src={this.state.src}
									ref={cropper => { this.cropper = cropper; }}
								/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="docs-preview clearfix">
								<div className="img-preview preview-lg" style={{ width: "256px", height: "144px" }}></div>
								<div className="img-preview preview-md" style={{ width: "128px", height: "72px" }}></div>
								<div className="img-preview preview-sm" style={{ width: "64px", height: "36px" }}></div>
								<div className="img-preview preview-xs" style={{ width: "32px", height: "18px" }}></div>
							</div>
						</div>
					</div>
					<div className="row" style={{ margin: "20px" }}>
						<div className="col-md-3">
							<AnterosButton success onClick={this.cropImage} caption="Crop image" />
						</div>
						<div className="col-md-9">
							<img style={{ width: '30%' }} src={this.state.cropResult} />
						</div>
					</div>
				</AnterosCard>


			</AnterosCard >

		);
	}
};


class CustomComponent extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);

	}

	onClick() {
		event.preventDefault();
		if (!this.props.disabled) {
			if (this.props.handleSelectItem) {
				this.props.handleSelectItem(this.props.index);
			}
			if (this.props.onSelectListItem) {
				this.props.onSelectListItem(this);
			}
		}
	}

	render() {
		let className = "list-group-item list-group-item-action";

		if (this.props.active) {
			className += " active"
		}

		if (this.props.recordData.disabled) {
			className += " disabled";
		}

		return (<div style={{ color: "blue" }} className={className} onClick={this.onClick}>
			<img src={this.props.recordData.foto} />
			{this.props.recordData.id + " " + this.props.recordData.text}
		</div>);
	}
}





