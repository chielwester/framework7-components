(() => ({
  name: 'Card',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Card',
      options: [
        {
          key: 'content',
          label: 'Content',
          value: 'Content',
          type: 'TEXT',
        },
        {
          key: 'title',
          label: 'Title',
          value: 'Title',
          type: 'TEXT',
        },
        {
          key: 'footer',
          label: 'Footer',
          value: 'Footer',
          type: 'TEXT',
        },
        {
          key: 'outline',
          label: 'Outline',
          value: false,
          type: 'TOGGLE',
        },
        {
          key: 'expandable',
          label: 'Expandable',
          value: false,
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
