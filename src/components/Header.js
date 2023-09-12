import { createStyles, Header, Autocomplete, Group, Burger, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import {Link} from 'react-router-dom'
import logo from '../img/looking-apartment_69882.png'
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));



export function HeaderSearch({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link className={classes.link} to={link.link} key={link.label}>{link.label}</Link>
  ))

  return (
    <Header height={56} className={classes.header} mb={10}>
      <div className={classes.inner}>
      <Group>
        <img style={{ width: '40px', height: '40px' }} src={logo}/>
        <h3>Company.co</h3>
        </Group>
        <Group><Text color="gray">Click employee login to see full application</Text></Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
        </Group>
      </div>
    </Header>
  );
}