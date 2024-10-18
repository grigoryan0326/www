import PeoplePage from "@containers/PeoplePage/PeoplePage"
import HomePage from "@containers/HomePage/HomePage"
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage"
import PersonPage from "@containers/PersonPage/PersonPage"

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/people",
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    component: PersonPage,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
]

export default routesConfig
