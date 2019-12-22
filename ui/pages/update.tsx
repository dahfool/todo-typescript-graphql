import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import {TaskComponent} from "../generated/graphql";
import UpdateTaskForm from "../components/UpdateTaskForm";

interface InitialProps {
    id: number
}

interface AllProps extends InitialProps{

}

const UpdatePage: NextPage<AllProps, InitialProps> = ({id}) => {
    return (
        <Layout>
            {id ? (
                <TaskComponent variables={{id}}>
                    {({loading, error, data}) => {
                        if (loading) {
                            return <p>loading</p>
                        } else if(error) {
                            return <p>error</p>
                        }

                        const task = data && data.task ? data.task : null

                        return task ? <UpdateTaskForm initialInput={{ id: task.id, title: task.title}} /> : ''
                    }}
                </TaskComponent>
            ): <p>Id is invalid</p>}
        </Layout>

    )
}

UpdatePage.getInitialProps = async ctx => ({
    id: typeof ctx.query.id === 'string' ? Number(ctx.query.id) : NaN
})

export default UpdatePage
