import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Toaster } from 'sonner';
import Home from '@/pages/home';
import About from '@/pages/about';
import Latest from '@/pages/latest';
import Store from '@/pages/store';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';
import Layout from '@/components/layout';

function App() {
  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/latest" component={Latest} />
            <Route path="/store" component={Store} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </WouterRouter>
      <Toaster theme="dark" position="bottom-right" toastOptions={{
        className: 'border-border bg-card text-foreground font-mono rounded-none',
      }} />
    </>
  );
}

export default App;
