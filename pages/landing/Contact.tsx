import { useState } from "react"
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  useToast
} from "@chakra-ui/react"
import isEmail from 'validator/lib/isEmail'

import { sendContactForm } from "@/api/api"
import Typography from "@/components/Typography"

const initValues = { name: "", email: "", title: "", message: "" }
const initState = { values: initValues, isLoading: false, }
const initTouched = {name: false, email: false,title: false, message: false }
const initHasError = { name: false, email: false, title: false, message: false }

type Events = {
  target: EventTarget
}

const Contact = () => {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState(initTouched)
  const [hasError, setHasError] = useState(initHasError)

  const { values, isLoading } = state

  const handleChange = ({ target }: Events) => {
    const {name, value } = target as HTMLInputElement

    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }))

    if (touched.email && !value || !isEmail(value)) {
      setHasError((prevState) => ({
        ...prevState,
        [name]: true
      }))
    } else {
      setHasError((prevState) => ({
        ...prevState,
        [name]: false
      }))
    }
  }

  const onBlur = ({ target }: Events) => {
    const { name } = target as HTMLInputElement

    setTouched((prevState) => ({
      ...prevState,
      [name]: true
    }))
  }

  const onSubmit = async () => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }))

      await sendContactForm(values)

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
      }))
    } finally {
      setTouched(initTouched)
      setState(initState)
      setHasError(initHasError)
    }
  }

  return (
    <section className="w-full md:h-[calc(100vh/1.5)] xl:py-40 xl:min-h-fit">
      <div className="w-5/6 max-w-[1200px] h-full mx-auto py-12 md:py-0 md:flex md:items-center">
        <div className="md:flex md:justify-around w-full">
          <div className="pb-12 md:pb-0 md:w-1/4 flex flex-col items-center">
            <Typography
              className="pb-8 font-extrabold text-dark-grey"
              variant="h1"
              as="h2"
            >
              Skontaktuj się z nami
            </Typography>
            <Typography
              className="mb-2 text-dark-grey"
              variant="h4"
              as="p"
            >
              Aby wysłać wiadomość, wypełnij formularz
            </Typography>
          </div>

          <div className="md:w-1/2 flex flex-col items-end">
            <div className="w-full md:flex md:justify-between gap-x-5">
              <FormControl
                className="mb-4"
                isRequired
                isInvalid={touched.name && !values.name}
              >
                <FormLabel
                  className="mb-1.5 text-dark-grey"
                >
                  Imię i nazwisko
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  errorBorderColor="red.600"
                  focusBorderColor="#0133FF"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
              </FormControl>

              <FormControl
                className="mb-4"
                isRequired
                isInvalid={touched.email && !values.email || hasError.email}
              >
                <FormLabel
                  className="mb-1.5 text-dark-grey"
                >
                  Adres e-mail
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  errorBorderColor="red.600"
                  focusBorderColor="#0133FF"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                {
                  (touched.email && !values.email) ? (
                    <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
                  ) : (null)
                }
                {
                  (hasError.email) ? (
                    <FormErrorMessage>Nieprawidłowy adres email</FormErrorMessage>
                  ) : (null)
                }
              </FormControl>
            </div>

            <FormControl
                className="mb-4"
              >
                <FormLabel
                  className="text-dark-grey"
                >
                  Tytuł wiadomości
                </FormLabel>
                <Input
                  type="text"
                  name="title"
                  errorBorderColor="red.600"
                  onChange={handleChange}
                  value={values.title}
                  onBlur={onBlur}
                />
              </FormControl>

            <FormControl
              className="mb-8"
              isRequired
              isInvalid={touched.message && !values.message}
            >
              <FormLabel
                className="text-dark-grey"
              >
                Wiadomość
              </FormLabel>
              <Textarea
                name="message"
                minLength={10}
                maxLength={40}
                errorBorderColor="red.600"
                focusBorderColor="#0133FF"
                rows={6}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>To pole jest wymagane</FormErrorMessage>
            </FormControl>

            <Button
              className="w-full sm:w-[250px] h-[45px] transition duration-500
                active:cursor-pointer"
              variant="primary"
              isLoading={isLoading}
              loadingText={'Wysyłanie'}
              isDisabled={!values.name || !values.email || !values.message}
              onClick={onSubmit}
            >
              Wyślij
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact