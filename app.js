const { Component, mount, xml } = owl;

// Owl Components
class Root extends Component {
  static template = xml`<div>Hello world</div>`;
}

mount(Root, document.body);
