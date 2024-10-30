import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/invoices').then(response => setInvoices(response.data));
  }, []);

  const handleRowClick = (id) => {
    history.push(`/invoice/${id}`);
  };

  return (
    <div>
      <Button onClick={() => history.push('/invoice/0')}>Add</Button>
      <DataGrid
        rows={invoices}
        columns={[
          { field: 'id', headerName: 'ID' },
          { field: 'date', headerName: 'Date' },
          { field: 'invoiceNumber', headerName: 'Invoice Number' },
          { field: 'customerName', headerName: 'Customer Name' },
          { field: 'totalAmount', headerName: 'Total Amount' }
        ]}
        pageSize={5}
        onRowClick={(params) => handleRowClick(params.id)}
      />
    </div>
  );
}

export default InvoiceList;
