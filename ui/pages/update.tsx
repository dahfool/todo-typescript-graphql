import React from 'react'
import {NextPage} from 'next'
import {Layout} from '../components/Layout'
import {useTaskQuery} from "../generated/graphql";
import UpdateTaskForm from "../components/UpdateTaskForm";

interface InitialProps {
  id: number
}

interface AllProps extends InitialProps {

}

const UpdatePage: NextPage<AllProps, InitialProps> = ({id}) => {

  const {loading, error, data} = useTaskQuery({
    variables: {id}
  })

  const task = data && data.task ? data.task : null

  return (
    <Layout>
      {id ? (
        loading ? (
          <p>loading</p>
        ) : error ? (
          <p>error</p>
        ) : task ? (
          <UpdateTaskForm
            initialInput={{
              id: task.id,
              title: task.title
            }}
          />
        ) : (<>Could not find task</>)

      ) : <p>Id is invalid</p>}
    </Layout>

  )
}

UpdatePage.getInitialProps = async ctx => ({
  id: typeof ctx.query.id === 'string' ? Number(ctx.query.id) : NaN
})

export default UpdatePage
