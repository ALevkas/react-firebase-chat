import { Box, Button, Container, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { Context } from '../../index';
import firebase from 'firebase';

export const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user);
    };

    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 64 }}
                alignItems={'center'}
                justify={'center'}
            >
                <Grid
                    style={{ width: 400, background: 'lightblue' }}
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
