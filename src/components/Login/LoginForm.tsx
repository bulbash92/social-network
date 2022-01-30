import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ErrorMessage, FormikErrors, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const LoginForm = () => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string>(state => state.auth.error)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more'
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm()
        }
    })
    if(isAuth) return  <Redirect to={'/profile'}/>
    return <div style={{marginLeft: '20px'}}>
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit} action="">
                    <FormControl>
                        <FormLabel>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                   target={'_blank'}> here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        {error && <div style={{border: "1px solid red", color: 'red'}}>{error}</div>}
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                            <div style={{color: 'red'}}>{formik.errors.password}</div>}
                            <FormControlLabel label={'Remember me'}
                                              control={<Checkbox{...formik.getFieldProps('rememberMe')}
                                              />}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>

                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>

    </div>
};

export default LoginForm;