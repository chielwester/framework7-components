(() => ({
  name: 'CardContent',
  type: 'CARD_CONTENT',
  allowedTypes: ['CONTENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { CardContent } = window.Framework7ReactComponents;
    const { env } = B;

    const F7Card = (
      <CardContent>
        <p>hier</p>
        {children}
      </CardContent>
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
