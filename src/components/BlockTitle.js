(() => ({
  name: 'BlockTitle',
  type: 'BLOCK_TITLE',
  allowedTypes: ['ACCORDION_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { BlockTitle } = window.Framework7ReactComponents;
    const { env } = B;

    const F7Accordion = <BlockTitle>Text</BlockTitle>;

    return env === 'dev' ? (
      <div className={classes.root}>{F7Accordion}</div>
    ) : (
      F7Accordion
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
