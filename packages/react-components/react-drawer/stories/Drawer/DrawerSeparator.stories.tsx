import * as React from 'react';
import { DrawerBody, DrawerHeader, DrawerHeaderTitle, DrawerInline } from '@fluentui/react-drawer';
import { Button, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    ...shorthands.border('2px', 'solid', '#ccc'),
    ...shorthands.overflow('hidden'),
    display: 'flex',
    height: '480px',
    backgroundColor: '#fff',
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding('16px'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    columnGap: tokens.spacingHorizontalXS,
  },
});

export const Separator = () => {
  const styles = useStyles();

  const [leftOpen, setLeftOpen] = React.useState(true);
  const [rightOpen, setRightOpen] = React.useState(true);

  return (
    <div className={styles.root}>
      <DrawerInline position="left" open={leftOpen}>
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setLeftOpen(false)}
              />
            }
          >
            Drawer with no separator
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </DrawerInline>

      <div className={styles.content}>
        <Button appearance="primary" onClick={() => setLeftOpen(!leftOpen)}>
          Toggle left
        </Button>

        <Button appearance="primary" onClick={() => setRightOpen(!rightOpen)}>
          Toggle right
        </Button>
      </div>

      <DrawerInline separator position="right" open={rightOpen}>
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setRightOpen(false)}
              />
            }
          >
            Drawer with separator
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </DrawerInline>
    </div>
  );
};
