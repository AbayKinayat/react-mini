const Header = () => {
  return React.createElement(
    "header",
    { className: "app-header" },
    React.createElement(
      "div",
      { className: "app-header__inner" },
      React.createElement(UI.Logo, { text: "DeepTodo" }),
      React.createElement(UI.AppLinkList, { list: headerNavList })
    )
  );
}

const CreateTaskInput = (props) => {
  ``
  const [task, setTask] = React.useState("");
  const { onCreate } = props;

  const handleCreateClick = () => {
    if (task)
      onCreate({ text: task, completed: false });
    resetTask();
  }

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const resetTask = () => {
    setTask("");
  }


  return React.createElement(
    "div",
    { className: "app-task-create-container" },
    React.createElement(
      UI.AppInput,
      {
        className: "app-task-create-input",
        value: task,
        onChange: handleChange,
        title: "Input task name",
        placeholder: "Input task name"
      },
    ),
    React.createElement(
      UI.AppButton,
      { onClick: handleCreateClick, title: "create" },
      "Create"
    )
  )
}

const MainContainer = () => {

  const [tasks, setTasks] = React.useState(globalTasks);

  const createTask = ({ text, completed }) => {
    setTasks([...tasks, { id: Date.now(), text, completed }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const editTask = ({ id, text, completed }) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.text = text;
        task.completed = completed;
      }
      return task;
    }))
  }

  return React.createElement(
    "div",
    { className: 'app-main-container' },
    React.createElement(
      UI.AppTypography,
      { variant: "h3", style: { textAlign: "center" } },
      "React mini todo"
    ),
    React.createElement(
      CreateTaskInput,
      { onCreate: createTask }
    ),
    React.createElement(
      UI.AppTaskList,
      { tasks, onChange: editTask }
    )
  )
}

const App = () => {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(Header),
    React.createElement(MainContainer)
  );
}

const rootContainer = document.getElementById("root");

const root = ReactDOM.createRoot(rootContainer);

root.render(
  React.createElement(App)
)