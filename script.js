let dom = document.querySelector('#root');
let element = React.createElement(
'p', {}, 'Hello React App'
);
ReactDOM.render(element, dom);