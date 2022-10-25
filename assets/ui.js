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
    const { children, variant = "h1", ...otherProps } = props;

    return React.createElement(
      APP_TYPOGRAHY_VARIANTS[variant],
      { ...otherProps },
      children
    )
  }

  return {
    AppLinkItem,
    AppLinkList,
    Logo,
    AppTypography
  }
})()