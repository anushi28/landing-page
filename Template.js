import { Header } from "./Header"

import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Main } from "./Main"

export function Template(){
    return(
        <>
        <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Main></Main>}></Route>

   
        



        </Routes>
        </BrowserRouter>

        </div>


        




        </>
    )
}