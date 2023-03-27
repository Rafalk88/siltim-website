import { useForm, SubmitHandler } from "react-hook-form"

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const inputsStyles = "w-full h-[45px] px-4 border"
const errorsStyles = "text-red-600 border-red-600"

type Inputs = {
  name: string
  email: string
  textArea: string
};

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <section className="w-full bg-emerald">
      <div className="w-5/6 max-w-[1200px] mx-auto py-12 md:flex md:justify-around">
        <div className="md:flex md:flex-col md:justify-center">
          <h2 className="py-8 text-4xl">Skontaktuj się z nami</h2>
          <p className="text-af-white text-xl w-3/4">Witam! Z niecierpliwością czekamy na kontakt od Ciebie.</p>
        </div>

        <form 
          className="flex flex-col items-end gap-y-3 md:w-1/2 mt-12 md:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={`${inputsStyles} ${errors.name?.message ? errorsStyles : ''}`}
            type="text"
            placeholder="Wpisz imię i nazwisko."
            {...register("name", {required: "Proszę podaj swoje imię i nazwisko.", maxLength: 40})}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {
            errors.name?.message && (
              <p
                role="alert"
                className={errorsStyles}
              >
                {errors.name?.message}
              </p>
            )
          }
          <input
            type="text"
            className={`${inputsStyles} ${errors.name?.message ? errorsStyles : ''}`}
            placeholder="Podaj adres email."
            {...register("email", {required: "Proszę podaj adres email", maxLength: 40, pattern: emailPattern})}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {
            errors.email?.message && (
              <p
                role="alert"
                className={errorsStyles}
              >
                {errors.email?.message}
              </p>
            )
          }
          <textarea
            rows={6}
            className={`w-full p-4 border ${errors.name?.message ? errorsStyles : ''}`}
            placeholder="Wpisz wiadomość..."
            {...register("textArea", {required: "Wiadomość musi się składać z minimum 10 znaków", minLength: 10, maxLength: 200})}
            aria-invalid={errors.textArea ? "true" : "false"}
          />
          {
            errors.textArea?.message && (
              <p
                role="alert"
                className={errorsStyles}
              >
                {errors.textArea?.message}
              </p>
            )
          }
          <button
            type="submit"
            className="h-[45px] cursor-pointer"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact