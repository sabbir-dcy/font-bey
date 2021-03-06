import { Route, Routes } from 'react-router-dom'
import * as Com from './components'
import NotFound from './components/NotFound/NotFound'
import './app.css'

import { GlobalStyle } from './Theme/GlobalStyle'
import { UseFonts } from './components/hooks/UseFonts'

function App() {
  return (
    <>
      <GlobalStyle />

      <Com.Header></Com.Header>
      <UseFonts>
        <Routes>
          <Route path='/' element={<Com.Home></Com.Home>}></Route>
          <Route
            path='/sans-serif'
            element={<Com.SansSerif></Com.SansSerif>}
          ></Route>
          <Route path='/serif' element={<Com.Serif></Com.Serif>}></Route>
          <Route
            path='/monospace'
            element={<Com.MonoSpace></Com.MonoSpace>}
          ></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </UseFonts>
    </>
  )
}

export default App
