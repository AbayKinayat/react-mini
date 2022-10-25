const UI = (() => {
  const APP_TYPOGRAHY_VARIANTS = {
    h1: {
      tag: "h1",
      className: "app-typography-h1",
    },
    h2: {
      tag: "h2",
      className: "app-typography-h2",
    },
    h3: {
      tag: "h3",
      className: "app-typography-h3",
    },
    h4: {
      tag: "h4",
      className: "app-typography-h4",
    },
    h5: {
      tag: "h5",
      className: "app-typography-h5",
    },
    h6: {
      tag: "h6",
      className: "app-typography-h6",
    },
    body1: {
      tag: "p",
      className: "app-typography-body1",
    },
    body2: {
      tag: "p",
      className: "app-typography-body2",
    },
    small: {
      tag: "small",
      className: "app-typography-small",
    },
  }

  const AppLinkItem = ({ children, href }) => {
    return React.createElement(
      "li",
      { className: "app-link-item" },
      React.createElement("a", { href, target: "_blank" }, children)
    )
  }

  const AppLinkList = ({ list }) => {
    return React.createElement(
      "ul",
      {
        className: 'header-nav'
      },
      list.map(item => (
        React.createElement(
          AppLinkItem,
          { key: item.id, href: item.href },
          item.text
        )
      ))
    )
  }

  const Logo = ({ text }) => {
    return React.createElement(
      "div",
      { className: "logo" },
      text,
    )
  }

  const AppTypography = (props) => {
    const { children, variant = "h1", className, ...otherProps } = props;

    return React.createElement(
      APP_TYPOGRAHY_VARIANTS[variant].tag,
      { className: `${APP_TYPOGRAHY_VARIANTS[variant].className} ${className}`, ...otherProps },
      children
    )
  }

  const AppTask = ({ task, order, onChange = () => { } }) => {

    const handleTaskClick = () => {
      onChange({
        ...task,
        completed: !task.completed
      })
    }

    return React.createElement(
      "li",
      { className: `app-task ${task.completed && "completed"}`, onClick: handleTaskClick },
      React.createElement(
        "div",
        { className: "app-task__content" },
        React.createElement(
          "span",
          { className: "app-task__order" },
          order + "."
        ),
        React.createElement(
          AppTypography,
          { variant: 'body1', className: "app-task__text" },
          task.text
        ),
      )
    )
  }

  const AppTaskList = ({ tasks, onChange = () => { } }) => {
    return React.createElement(
      "ul",
      { className: 'app-task-list' },
      tasks.map((task, index) => (
        React.createElement(
          AppTask,
          {
            key: task.id,
            task,
            order: index + 1,
            onChange: onChange
          }
        )
      ))
    )
  }

  const AppInput = (props) => {
    const { value, onChange = () => { }, className = "", ...otherProps } = props;

    return React.createElement(
      "input",
      {
        className: `app-input ${className}`,
        type: "text",
        value,
        onChange,
        ...otherProps,
      }
    )
  }

  const AppButton = (props) => {
    const { className, ...otherProps } = props;
    return React.createElement(
      "button",
      { className: `app-btn ${className}`, ...otherProps },
      props.children
    )
  }

  return {
    AppLinkItem,
    AppLinkList,
    Logo,
    AppTypography,
    AppTask,
    AppTaskList,
    AppButton,
    AppInput
  }
})()