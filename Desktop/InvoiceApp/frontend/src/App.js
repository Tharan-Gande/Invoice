import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, List, ListItem, Typography } from '@mui/material';
import InvoiceList from './Components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';

function App() {
  return (
    <Router>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Invoice Management</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button component={Link} to="/invoices">Invoices</ListItem>
        </List>
      </Drawer>
      <Switch>
        <Route path="/invoices" exact component={InvoiceList} />
        <Route path="/invoice/:id" component={InvoiceDetail} />
      </Switch>
    </Router>
  );
}

export default App;
