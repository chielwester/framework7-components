(() => ({
  name: 'Framework7Stylesheet',
  type: 'ROW',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: <div className={classes.root}></div>,
  styles: B => t => {
    return {
      '@global': {
        '@import':
          "url('//assets.bettyblocks.com/cc46b0cc66524e469f86ae1e908d66df_assets/15719bd6297c4d5a91ac641afbe4ab2c.css?_=9f030875de92c15e9574575ede842e2f')",
      },
      root: {
        position: 'absolute',
        height: B.env === 'dev' ? 20 : 0,
        width: B.env === 'dev' ? '100%' : 0,
        border: B.env === 'dev' ? '1px solid black' : 0,
        bottom: B.env === 'dev' ? 0 : 0,
      },
    };
  },
}))();
