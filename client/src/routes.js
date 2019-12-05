import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loader'

const KanbanBoardPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(
        /*  webpackChunkName: "kanbanBoardPage" */ './pages/KanbanBoardPage'
      )
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/:boardName" component={KanbanBoardPage} />
          <Route exact path="/" component={KanbanBoardPage} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default Routes
