(() => ({
  name: 'Accordion',
  type: 'ACCORDION',
  allowedTypes: ['ACCORDION_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { List, ListItem, AccordionContent, Block } = window.Framework7ReactComponents;
    const {env} = B;

    const F7Accordion = (
      <List accordionList>
      {children.length ? <ul>{children}</ul> : (<ListItem accordionItem title="Example item">
        <AccordionContent>
          <Block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>)}
      </List>
    );

    return env === 'dev' ? <div className={classes.root}>{F7Accordion}</div> : F7Accordion;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
