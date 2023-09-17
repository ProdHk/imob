import {createBrowserRouter} from 'react-router-dom'
import Pages from './Pages'

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Pages.Home />
    },
    {
        path: '/clientes',
        element:<Pages.Clientes />
    },
    {
        path: '/tarefas',
        element:<Pages.Tarefas />
    },
    {
        path: '/financeiro',
        element:<Pages.FinanceiroPage />
    },
    {
        path: '/produtos',
        element:<Pages.Produtos />
    },
    {
        path: '/parceiros',
        element:<Pages.Parceiros />
    },
])