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

const MainContainer = () => {
  return React.createElement(
    "div",
    { className: 'app-main-container' },
    React.createElement(
      UI.AppTypography,
      { variant: "h1" },
      "React mini todo"
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