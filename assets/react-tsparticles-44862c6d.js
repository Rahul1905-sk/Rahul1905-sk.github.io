import{r as d,a as o}from"./react-c1a9316a.js";import{t as a}from"./tsparticles-engine-61ae319e.js";import{e as h}from"./deep-eql-d9b3a3b5.js";const n="tsparticles";class r extends d.Component{constructor(t){super(t),this.state={init:!1,library:void 0}}destroy(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}shouldComponentUpdate(t){return!h(t,this.props)}componentDidUpdate(){this.refresh()}forceUpdate(){this.refresh().then(()=>{super.forceUpdate()})}componentDidMount(){(async()=>(this.props.init&&await this.props.init(a),this.setState({init:!0},async()=>{await this.loadParticles()})))()}componentWillUnmount(){this.destroy()}render(){const{width:t,height:e,className:i,canvasClassName:s,id:p}=this.props;return o.createElement("div",{className:i,id:p},o.createElement("canvas",{className:s,style:{...this.props.style,width:t,height:e}}))}async refresh(){this.destroy(),await this.loadParticles()}async loadParticles(){if(!this.state.init)return;const t=async s=>{this.props.container&&(this.props.container.current=s),this.setState({library:s}),this.props.loaded&&await this.props.loaded(s)},e=this.props.id??r.defaultProps.id??n,i=this.props.url?await a.loadJSON(e,this.props.url):await a.load(e,this.props.params??this.props.options);await t(i)}}r.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:n};