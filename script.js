const containder = React.createElement(
  "div",
  { className: "containder", id: "containder" },
  [
    React.createElement(
      "p",
      { key: 1 },
      React.createElement("span", {}, "Hello, ")
    ),
    React.createElement("img", {
      key: 2,
      style: { width: 200 },
      src: "React-icon.svg.png",
    }),
    React.createElement("p", { key: 3 }, "This is yet another paragraph"),
  ],
  [
    React.createElement(
      "p",
      { key: 1 },
      React.createElement("span", {}, "Hello, ")
    ),
    React.createElement("img", {
      key: 2,
      style: { width: 200, backgroundColor: "yellow" },
      src: "React-icon.svg.png",
    }),
    React.createElement(
      "p",
      { key: 3 },
      " This is yet another paragraph with a custom event listener. Click me!  ",
      addEventListener("click", () => console.log("Clicked!"))
    ),
  ],
  [
    React.createElement(
      "section",
      { key: 1 },
      React.createElement(
        "form",
        { key: 1 },
        React.createElement(
          "div",
          { key: 1 },
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username",
            React.createElement("input", {
              type: "text",
              id: "username",
              name: "username",
            })
          )
        )
      )
    ),
    React.createElement(
      "label",
      { key: 2, htmlFor: "password" },
      "Password",
      React.createElement("input", {
        type: "password",
        id: "password",
        name: "password",
      })
    ),
    React.createElement("button", { type: "submit", key: 3 }, "Submit"),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(containder);

// const roots = ReactDOM.createRoot(document.querySelector("h2"));
// roots.render("This is h2");
