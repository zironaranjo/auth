'use client'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot } from "@radix-ui/themes"
import {EnvelopeClosedIcon, LockClosedIcon} from "@radix-ui/react-icons"





function SigninForm() {
  return (
    <Flex direction='column' gap='2'>
      <label htmlFor="email" >Email </label>
      <TextFieldRoot>

        <TextFieldSlot>
          <EnvelopeClosedIcon height='16px' width='16px' /> 
        </TextFieldSlot>

        <TextFieldInput 
         type="Email"
         placeholder="email@domain.com"
         autoFocus />

      </TextFieldRoot>



      <label htmlFor="password" >Password </label>
      <TextFieldRoot>

        <TextFieldSlot>
          <LockClosedIcon height='16px' width='16px' /> 
        </TextFieldSlot>

        <TextFieldInput 
         type="password"
         placeholder="*******"
          />

      </TextFieldRoot>
      <Button>
        Sign In
      </Button>
    </Flex>
  )
}

export default SigninForm