import React, { useState, Dispatch, SetStateAction } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

type SearchbarProps = {
  className?: string
  product: any
  setProduct: Dispatch<SetStateAction<any>>
}

const Searchbar = ({ className, product, setProduct }: SearchbarProps) => {
  const [state, setState] = useState({ search: '' })
  const [_, setTouched] = useState({ search: false})
  let originalList: any = null
  if (originalList === null) return originalList = product

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setState({ search: value })
  }

  const onBlur = () => {
    setTouched((prevState) => ({
      ...prevState,
      search: true
    }))
  }

  const onSubmit = (value: string) => {
    if (value.trim() === '') {
      setProduct(originalList)
    } else {
      const filteredProducts = product.filter((item: any) => {
        const { name, smiles, cas } = item

        return (
          name.toLowerCase().includes(value.toLowerCase()) ||
          smiles.toLowerCase().includes(value.toLowerCase()) ||
          cas.toLowerCase().includes(value.toLowerCase())
        )
      })

      if (filteredProducts.length > 0) {
        setProduct(filteredProducts)
      }
    }
  }

  return (
    <FormControl
      className={className}
    >
      <FormLabel
        className="mb-1.5 text-dark-grey"
      >
        Wyszukaj po numerze CAS lub smiles:
      </FormLabel>
      <div className="flex">
        <Input
          type="text"
          name="search"
          errorBorderColor="red.600"
          focusBorderColor="#0133FF"
          autoComplete="search"
          value={state.search}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder='Wprowadź szukaną frazę...'
        />
        <Button
          variant="primary"
          onClick={() => onSubmit(state.search)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </Button>
      </div>
    </FormControl>
  )
}

export default Searchbar