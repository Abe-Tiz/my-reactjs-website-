import React from 'react'
import { 
    Form,
    Container,
    FormButton,
    FormContent,
    FormH1,
    Icon,
    FormInput,
    FormLabel,
    FormWrap,
    Text
 } from './SigninElement'

function SignIn() {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">abebe</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for' >Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for' >Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password ?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        
    </>
  )
}

export default SignIn
