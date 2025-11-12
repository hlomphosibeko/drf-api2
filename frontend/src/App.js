import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import "./api/axiosDefaults";
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import HomePage from './components/HomePage';
import Info from "./pages/quotes/Info";
import LearnMore from './pages/quotes/LearnMore';
import NotFound from './components/NotFound';
import Quote from './pages/quotes/Quote';
import QuotePage from './pages/quotes/QuotePage';
import QuoteCreateForm from './pages/quotes/QuoteCreateForm';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/quotes" render={() => <Quote />} />
          {/* <Route exact path="/quotes/:id" render={() => <QuotePage />} /> */}
          <Route exact path="/quotes/create" render={() => <QuoteCreateForm />} />
          <Route exact path="/posts" render={() => (
            <PostsPage message="No results found. Adjust the search keyword." />
          )} />
          <Route exact path="/testimonial" render={() => (
            <PostsPage message="No results found. Adjust the search keyword."
              filter={`owner__followed__owner__profile=${profile_id}&`} />
          )} />
          <Route exact path="/liked" render={() => (
            <PostsPage
             message="No results found. Adjust the search keyword or like a post."
             filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />
          )} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />}  />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route path="/info" render={() => <Info />} />
          <Route path="/more" render={() => <LearnMore />} />
          <Route render={() => <NotFound />} /> 
        </Switch>
      </Container>
    </div>
  );  
}

export default App;