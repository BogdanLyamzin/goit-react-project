import Button from './shared/components/Button'
import CheckboxToggle from './shared/components/CheckboxToggle'
import FormCheckbox from './shared/components/FormCheckbox'
import FormInput from './shared/components/FormInput'
import Logo from './shared/components/Logo'

function App() {
  return ( <>
      <Button children='click'/>
      <CheckboxToggle/>
      <FormCheckbox/>
      <FormInput label='name'/>
      <Logo/>
      </>)
}

export default App
