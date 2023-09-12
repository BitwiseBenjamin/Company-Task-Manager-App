import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";
  
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

import usePersist from '../../hooks/usePersist'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
/*
    useEffect(() => {
        userRef.current.focus()
    }, [])
*/
    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized ');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (
<>
        <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 700,
          })}
        >
          Employee Login
        </Title>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
          <TextInput label="Username" placeholder="your username..." 
                type="text"
                id="username"
                ref={userRef}
                value={username}
                onChange={handleUserInput}
                autoComplete="off"
                required
            />
          <PasswordInput
                label="Password"
                placeholder="your password..."
                type="password"
                id="password"
                onChange={handlePwdInput}
                value={password}
                required
          />
          <Group position="" mt="">
            <Checkbox label="Trust this device" sx={{ lineHeight: 1 }}
                id="persist"
                onChange={handleToggle}
                checked={persist} />
            <Button color="dark" fullWidth  onClick={handleSubmit}>
            Sign in
          </Button>
          <Link to="/">Back to Home</Link>
          </Group>
        </Paper>
      </Container>
      

{/*
        <section className="public">
            <header>
                <h1>Employee Login</h1>
            </header>
            <main className="login">
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="username"
                        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                    <button className="form__submit-button">Sign In</button>


                    <label htmlFor="persist" className="form__persist">
                        <input
                            type="checkbox"
                            className="form__checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                        />
                        Trust This Device
                    </label>

                </form>
            </main>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </section>

        */ }
    </>
    )

    return content
}
export default Login