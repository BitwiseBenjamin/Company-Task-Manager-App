import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';

const Welcome = () => {
    const theme = useMantineTheme(
        {
            components: {
              Card: {
                // Subscribe to theme and component params
                styles: (theme, params) => ({
                  root: {
                    backgroundColor:
                      params.variant === 'filled'
                        ? theme.color.gray || theme.color.dark
                        : undefined,
                    '&:hover': { backgroundColor:'#ddd'
                      }
                  },
                }),
              },
            },
          }
    );

    const {username, isManager, isAdmin} = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)


    return (
            <Container>
                <Text mb="10px" color="black" align="center">
                    <Title order={1} mb="10px">Hey, {username}</Title>
                    What would you like to do today?
                    <p>{today}</p>
                </Text>

                <Grid>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/notes">
                        <Card  shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/notesPic.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>New Note</Text>
                            </Group>
                        </Card>
                        </Link>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/notes">
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/updatenotes.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Update Note</Text>
                            </Group>
                        </Card>
                    </Link>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/notes">
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/view notes.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>View Notes</Text>
                            </Group>
                        </Card>
                    </Link>
                    </Grid.Col>

                    {(isManager || isAdmin) &&
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/users/new">
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/newemployee.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>New Employee</Text>
                            </Group>
                        </Card>
                    </Link>
                    </Grid.Col>}

                    {(isManager || isAdmin) &&
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/users">
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/viewemployees.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>View Employees</Text>
                            </Group>
                        </Card>
                    </Link>
                    </Grid.Col>}
                    {(isManager || isAdmin) &&
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                    <Link to="/dash/users">
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image maw={240} mx="auto" radius="md" src={require('../../img/updateemployee.avif')} alt={'sample1'} />
                            </Card.Section>
                            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Update Employee</Text>
                            </Group>
                        </Card>
                    </Link>
                    </Grid.Col>}
                </Grid>

            </Container>
    );
};

export default Welcome;