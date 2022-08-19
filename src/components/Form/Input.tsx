import { FormControl, FormLabel, Input as ChaKraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";


interface InputProps extends ChakraInputProps{
    name: string;
    label: string;
}


export function Input ({name, label, ...rest }: InputProps){
  return (
    <FormControl>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
     
        <ChaKraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
            bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        />
    </FormControl>
  );
}
