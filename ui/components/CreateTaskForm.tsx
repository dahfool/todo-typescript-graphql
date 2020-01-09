import React, {useState} from 'react'
import {useCreateTaskMutation} from '../generated/graphql'

interface FormState {
  title: string
}

const defaultState: FormState = {
  title: ''
}

interface ExposedProps {
  onTaskCreated: () => void;
}

const CreateTaskForm: React.FC<ExposedProps> = ({onTaskCreated}) => {
  const [formState, setformState] = useState<FormState>(defaultState);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setformState({
      title: value
    })
  }

  const [createTask] = useCreateTaskMutation()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createTask({
      variables: {
        input: formState
      }
    })
    if (result && result.data && result.data.createTask) {
      setformState({
        title: ''
      })
      onTaskCreated()
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='what do you want to get done ?'
        name='title'
        autoComplete='off'
        value={formState.title}
        onChange={updateValue}
      />
      <style jsx>{`
                form {
                  margin: 0 0 -1px;
                }
                input {
                  border: 1px solid #dde5ff;
                  border-radius: 4px 4px 0 0;
                  color: #5d647b;
                  font-size: 18px;
                  padding: 20px 15px;
                  position: relative;
                  width: 100%;
                }
                input:focus {
                  border-color: #7694f5;
                  border-radius: 4px;
                  box-shadow: 0 0 0 4px #dde5ff;
                  outline: none;
                  z-index: 10;
                }
            `}</style>
    </form>
  )
}

export default CreateTaskForm
