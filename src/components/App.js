(() => ({
  name: 'App',
  type: 'ROW',
  allowedTypes: [
    'NAVBAR',
    'ACCORDION'
  ],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { App, View, Page } = window.Framework7ReactComponents;
    const {env} = B;

    const F7App = (
      <App className={classes.app} params={{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }}>
        <View className={classes.view} main>
          <Page>
            {children.length ? children : <p>Drag your components here</p>}
          </Page>
        </View>
      </App>
    );

    return env === 'dev' ? <div className={classes.root}>{F7App}</div> : F7App;
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
