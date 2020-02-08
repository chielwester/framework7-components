(() => ({
  name: 'AccordionItem',
  type: 'ACCORDION_ITEM',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      ListItem,
      AccordionContent,
      Block,
    } = window.Framework7ReactComponents;
    const { env, useText } = B;

    const F7AccordionItem = (
      <ListItem
        accordionItem
        title={env === 'dev' ? options.title.join(' ') : useText(options.title)}
      >
        <AccordionContent>
          <Block>
            {children}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum id neque nec commodo. Sed vel justo at turpis laoreet
              pellentesque quis sed lorem. Integer semper arcu nibh, non mollis
              arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue
              dui sollicitudin. Donec eu arcu dignissim felis viverra blandit
              suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    );
    return env === 'dev' ? (
      <div className={classes.root}>{F7AccordionItem}</div>
    ) : (
      F7AccordionItem
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
