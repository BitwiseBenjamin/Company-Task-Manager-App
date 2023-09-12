import {Link} from 'react-router-dom'
import { createStyles, Container, Group, Anchor, rem, Text, Title, useMantineTheme, Grid, Image, Button } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { FooterSimple } from './Footer';
import { HeaderSearch } from './Header';
import { Carousel } from '@mantine/carousel';

import React from 'react'

const Public = () => {


    const theme = useMantineTheme();

    const carouselContent = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.colors.gray[1],
        borderRadius: 25,
        gap: 15
    };

    const links = [{link: "" ,label: "Contact" }, {link: "" ,label: "Privacy" }, {link: "" ,label: "Careers" },]
    const headerLinks = [{link: "" ,label: "About Us" }, {link: "" ,label: "Products" }, {link: "/login" ,label: "Employee Login" },]

    const content = (
        <section className="public">
            
            <HeaderSearch links={headerLinks}></HeaderSearch>
            
            <section id="section-one" style={{marginBottom: "5rem", marginTop: 0}}>
            <Container>
            <Image maw={150} mx="auto" radius="md" src={require('../img/looking-apartment_69882.png')} 
            alt={'sample2'} style={{display: "block", marginLeft: "auto", marginRight: "auto" }}/>
            

                <Text color="black" align="center" mb="15px">
                    <Title order={1}>We are Company.co</Title>
                </Text>

                <Text color="black" align="center" mb="25px">
                   Bringing you fast, reliable, undeniably perfect service quickly
                </Text>

               
                <Carousel
                    withIndicators
                    height={300}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
                    ]}
                    loop
                    align="start"
                    pr="10px"
                    pl="10px"
                >
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Image maw={240} mx="auto" radius="md" src={require("../img/iotnew.jpeg")}caption="Internet of Things"></Image>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Image  maw={240} mx="auto" radius="md" src={require("../img/business-and-ai.avif")} caption="Company Software"></Image>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Image  maw={240} mx="auto" radius="md" src={require("../img/customerservice.avif")} caption="24/7 Customer Service"></Image>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Image maw={240} mx="auto" radius="md" src={require("../img/computerscreen.jpeg")} caption="Gaming Tech"></Image>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Image  maw={240} mx="auto" radius="md" src={require("../img/colorful-software-engineers.jpeg")} caption="Software Solutions"></Image>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
        <section id="section-two" style={{marginBottom: "5rem"}}>
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Building and shipping tech products since the 90's</Title>
                                Dennis Farina, our Founder and CEO created Company.co in the 1998's, with the dream of 
                                bringing great service and products to those who need them. Here we are now!
                            </Text>
                        </div>
                        <Button color="blue">Learn more</Button>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../img/oldtech.avif')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
        <section id="section-three">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require("../img/animatedOffice.jpeg")} alt={'sample2'} style={{ width: '100%' }} />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Products for your Company</Title>
                               Everything we do here at Company.co is for the increase in value to our customers.
                                That mean you get a great deal every time you shop.We have reletlassly pursued perfection 
                                for 50+ years and will, hopefully never stop!
                            </Text>
                        </div>
                        <Button color="blue">Tell me more</Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
                <FooterSimple links={links}></FooterSimple>
        </section>

    )
    return content
}

export default Public