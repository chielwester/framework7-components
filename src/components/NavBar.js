(() => ({
  name: 'NavBar',
  type: 'NAVBAR',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      App,
      View,
      Page,
      Navbar,
      Toolbar,
      Link,
    } = window.Framework7ReactComponents;
    const { env, useText } = B;

    const NavBar = (
      <Navbar
        title={env === 'dev' ? options.title.join(' ') : useText(options.title)}
      ></Navbar>
    );

    return env === 'dev' ? (
      <div className={classes.root}>{NavBar}</div>
    ) : (
      NavBar
    );
  })(),
  styles: B => t => ({
    root: {},
  }),
}))();
