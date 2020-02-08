(() => ({
  name: 'CardHeader',
  type: 'CARD_HEADER',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { CardHeader } = window.Framework7ReactComponents;
    const { env } = B;

    const F7Card = (
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{
          backgroundImage:
            'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
        }}
      >
        Journey To Mountains
      </CardHeader>
    );
    return env === 'dev' ? (
      <div className={classes.root}>{F7Card}</div>
    ) : (
      F7Card
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
