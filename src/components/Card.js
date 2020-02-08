(() => ({
  name: 'Card',
  type: 'CARD',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Card } = window.Framework7ReactComponents;
    const { env } = B;

    const F7Card = (
      <Card content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."></Card>
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
