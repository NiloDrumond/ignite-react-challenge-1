import styles from './CreateInput.module.css'

import { FiPlusCircle } from 'react-icons/fi';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

interface CreateInputProps {
  onCreate: (text: string) => void;
}

export function CreateInput({ onCreate }: CreateInputProps) {
  const { reset, register, handleSubmit } = useForm()

  const onSubmit = useCallback((vals: { value?: string }) => {
    if (vals.value) {
      onCreate(vals.value)
    }
    reset()
  }, [onCreate, reset])

  return (
    <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className={styles.container}>
      <input {...register('value')} className={styles.input} placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles.button}  >Criar <FiPlusCircle /></button>
    </form>
  )
}
