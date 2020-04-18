import Vue from "vue";
// import "element-ui/lib/theme-chalk/index.css";

import ELEMENT from "element-ui";
import {
    Autocomplete,
    Alert,
    Aside,
    Button,
    ButtonGroup,
    Breadcrumb,
    BreadcrumbItem,
    Badge,
    Card,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Col,
    Container,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DatePicker,
    Form,
    Footer,
    FormItem,
    Header,
    Input,
    Icon,
    InputNumber,
    Loading,
    Menu,
    MenuItem,
    MenuItemGroup,
    Main,
    MessageBox,
    Message,
    Notification,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Popover,
    Radio,
    RadioGroup,
    RadioButton,
    Row,
    Rate,
    Submenu,
    Switch,
    Slider,
    Steps,
    Step,
    Select,
    TimeSelect,
    TimePicker,
    Tooltip,
    Tabs,
    Table,
    TableColumn,
    TabPane,
    Tag,
    Tree,
    Transfer,
    Upload
} from "element-ui";

if (process.env.NODE_ENV === "development") {
    require("element-ui/lib/theme-chalk/index.css");
    Vue.use(ELEMENT);

    Vue.use(Pagination);
    Vue.use(Dialog);
    Vue.use(Autocomplete);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(RadioButton);
    Vue.use(Checkbox);
    Vue.use(CheckboxButton);
    Vue.use(CheckboxGroup);
    Vue.use(Switch);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    Vue.use(Button);
    Vue.use(ButtonGroup);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(DatePicker);
    Vue.use(TimeSelect);
    Vue.use(TimePicker);
    Vue.use(Popover);
    Vue.use(Tooltip);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Tabs);
    Vue.use(TabPane);
    Vue.use(Tag);
    Vue.use(Tree);
    Vue.use(Alert);
    Vue.use(Slider);
    Vue.use(Icon);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Upload);
    Vue.use(Progress);
    Vue.use(Badge);
    Vue.use(Card);
    Vue.use(Rate);
    Vue.use(Steps);
    Vue.use(Step);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Collapse);
    Vue.use(CollapseItem);
    Vue.use(Cascader);
    Vue.use(ColorPicker);
    Vue.use(Transfer);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Footer);

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
}