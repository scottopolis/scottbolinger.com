import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Box, Input, Button, Heading } from '@chakra-ui/core'

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <Box className="optin-box"
            mb={8}
            mt={8}
            bg='#f7fafc'
            borderRadius='5px'
            p={10}>
                <Box
                maxW='2xl'
                m='auto'
                textAlign='center'>

                    <Heading as="h3" mb={1}>Get More Great Stuff Like This</Heading>

                    <p style={{color:'#777'}}>Enter your email below. You know the drill.</p>

                    <Box as="form" display={["block","flex"]} onSubmit={this._handleSubmit}>

                        <Box p={2} w={["100%", "75%"]}>
                            <label htmlFor="email" style={{display:'none'}}>Email</label>
                            <Input
                                type="email"
                                onChange={this._handleChange}
                                name="email"
                                placeholder="Enter your email"
                            />

                        </Box>

                        <Box w={["100%", "25%"]} p={2}>
                            
                            <Button display='block' width='100%' variantColor="primary" type="submit" value="Subscribe">Submit</Button>

                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        );
    }
}