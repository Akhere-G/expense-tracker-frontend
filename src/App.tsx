import React from 'react'
import {AddTransactionForm,Balance,Footer,Header,Transactions} from "./components"
function App () {
  return <div>
    <Header/>
    <Balance/>
    <AddTransactionForm />
    <Transactions/>
    <Footer />
  </div>
}

export default App
