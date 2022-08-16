const { Component, mount, xml } = owl;

class Root extends Component {
  tasks = [
    {
      id: 1,
      text: "Buy milk",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Clean house",
      isCompleted: false,
    },
  ];

  static template = xml/* xml */ `
    <div class="task-list">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <div class="task" t-att-class="task.isCompleted ? 'done' : ''">
                <input type="checkbox" t-att-checked="task.isCompleted"/>
                <span><t t-esc="task.text"/></span>
            </div>
        </t>
    </div>`;
}

mount(Root, document.body);
