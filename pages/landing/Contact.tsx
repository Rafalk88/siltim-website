import { useState } from "react"
import { Button, FormControl, FormErrorMessage, Input, Textarea, useToast } from "@chakra-ui/react"

import { sendContactForm } from "@/api/api"

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const initValues = {
  name: "",
  email: "",
  message: ""
}

const initState = { values: initValues, isLoading: false, error: null}
const initTouched = {name: false, email: false, message: false}

type Events = {
  target: HTMLInputElement
}

const Contact = () => {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState(initTouched)

  const { values, isLoading, error } = state

  const handleChange = ({ target }: Events) => 
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target?.name]: target?.value
      }
    }))

  const onBlur = ({ target }: Events) => setTouched((prevState) => ({
    ...prevState,
    [target.name]: true
  }))

  const onSubmit = async () => {
    try {
      await sendContactForm(values)
      setTouched(initTouched)
      setState(initState)
      toast({
        title: "Wysłano wiadomość.",
        status: "success",
        duration: 2000,
        position: "top",
      })
    } catch (error: any) {
      toast({
        title: "Wiadomość nie została wysłana.",
        status: "error",
        duration: 2000,
        position: "top",
      })

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: error.message
      }))
    }
  }

  return (
    <section className="w-full bg-emerald">
      <div className="w-5/6 max-w-[1200px] mx-auto py-12 md:flex md:justify-around">
        <div className="md:flex md:flex-col md:justify-center">
          <h2 className="py-8 text-4xl">Skontaktuj się z nami</h2>
          <p className="text-af-white text-xl w-3/4 mb-2">
            Witam! Z niecierpliwością czekamy na kontakt od Ciebie.
          </p>
        </div>

        <FormControl
          className="mb-2"
          isRequired
          isInvalid={touched.name && !values.name}
        >
          <Input
            type="text"
            placeholder="Wpisz imię i nazwisko."
            name="name"
            errorBorderColor="red.600"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
        </FormControl>

        <FormControl
          className="mb-2"
          isRequired
          isInvalid={touched.email && !values.email}
        >
          <Input
            type="email"
            placeholder="Podaj adres email."
            name="email"
            errorBorderColor="red.600"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
        </FormControl>
          
        <FormControl
          className="mb-2"
          isRequired
          isInvalid={touched.message && !values.message}
        >
          <Textarea
            type="text"
            placeholder="Wpisz wiadomość."
            name="message"
            errorBorderColor="red.600"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
        </FormControl>

        <Button
          className="w-[250px] h-[45px] bg-white hover:bg-slate-400 hover:text-white 
          transition duration-500 active:cursor-pointer"
          isLoading={isLoading}
          loadingText={'Wysyłanie'}
          isDisabled={!values.name || !values.email || !values.message}
          onClick={onSubmit}
        >
          Wyślij wiadomość
        </Button>
      </div>
    </section>
  )
}

export default Contact