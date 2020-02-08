(() => ({
  name: 'Card',
  type: 'CARD',
  allowedTypes: ['CARD_HEADER', 'CARD_CONTENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Card } = window.Framework7ReactComponents;
    const { env } = B;

    const F7Card = (
      <Card
        expandable={options.expandable ? options.expandable : undefined}
        outline={options.outline ? options.outline : undefined}
        title={options.title ? options.title : undefined}
        content={options.content}
        footer={options.footer ? options.footer : undefined}
      >
        {children}
      </Card>
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
