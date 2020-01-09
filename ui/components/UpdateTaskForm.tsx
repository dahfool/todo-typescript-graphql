import React, { useState } from 'react'
import Router from 'next/router'
import { useUpdateTaskMutation } from '../generated/graphql'

interface formState {
    title: string,
    id: number
}

interface Props {
    initialInput: formState
}

const UpdateTaskForm: React.FC<Props> = ({ initialInput }) => {

    const [ formState, setFormState ] = useState<formState>(initialInput)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setFormState({
            ...formState,
            title: value,
        })
    }

    const [updateTask] = useUpdateTaskMutation()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formState)

        const result = await updateTask({
            variables: {
                input: formState
            }
        })

        if (result && result.data && result.data.updateTask) {
            Router.push('/')
        }
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='formField'>
                <label>Title</label>
                <div>
                    <input
                        value={formState.title}
                        onChange={onChange}
                        type='text'
                        name='title'
                        className='textInput'
                    />
                </div>
                <button type='submit'>Save</button>
            </div>
            <style jsx>{`
        .formField {
          margin: 0 0 20px;
        }
        .textInput {
          border: 1px solid #dde5ff;
          border-radius: 4px;
          color: #5d647b;
          outline: 0;
          font-size: 18px;
          padding: 14px;
          width: 100%;
        }
        label {
          display: block;
          margin: 0 0 5px;
        }
        button {
          border: 2px solid #7694f5;
          border-radius: 4px;
          color: #7694f5;
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          outline: 0;
          padding: 12px 24px;
        }
        button:hover {
          background: #7694f5;
          color: white;
        }
      `}</style>
        </form>
    )
}

export default UpdateTaskForm
