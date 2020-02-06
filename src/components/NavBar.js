(() => ({
  name: 'NavBar',
  type: 'ROW',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { App, View, Page, Navbar, Toolbar, Link } = window.Framework7ReactComponents;
    const { env } = B;

    const NavBar = (
      <App className={classes.app} params={{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }}>
        <View className={classes.view} main>
          <Page>
            <Navbar title="Awesome App"></Navbar>
            <Toolbar bottom>
              <Link>Link 1</Link>
              <Link>Link 2</Link>
            </Toolbar>
            <p>Page content goes here</p>
            <Link href="/about/">About App</Link>
          </Page>
        </View>
      </App>
    )

    return (env === 'dev' ? <div className={classes.root}>{NavBar}</div> : NavBar);
  })(),
  styles: B => t => ({
    root: {
      height: '100%'
    },
    app: {
      position: B.env === 'dev' ? 'static!important' : 'relative'
    },
    view: {
      position: B.env === 'dev' ? 'static!important' : 'relative'
    }
  }),
}))();
