import { DynamicForm, createFormElement } from 'ui/components'

const Home = () => {
  return (
    <DynamicForm
      components={[
        createFormElement('input', {
          label: 'Name',
          placeholder: 'Enter your name'
        })
      ]}
    />
  )
}

export default Home
