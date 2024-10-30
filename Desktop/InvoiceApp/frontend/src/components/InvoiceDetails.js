import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
const schema = yup.object().shape({
    date: yup
      .date()
      .min(new Date(), "Date cannot be in the past")
      .required("Date is required"),
    customerName: yup.string().required("Customer Name is required"),
    billingAddress: yup.string().required("Billing Address is required"),
    shippingAddress: yup.string().required("Shipping Address is required"),
    gstin: yup.string().required("GSTIN is required"),
    items: yup.array().of(
      yup.object().shape({
        itemName: yup.string().required("Item Name is required"),
        quantity: yup
          .number()
          .positive("Quantity must be greater than zero")
          .required("Quantity is required"),
        price: yup
          .number()
          .positive("Price must be greater than zero")
          .required("Price is required"),
        amount: yup.number().required("Amount is required"),
      })
    ),
    billSundrys: yup.array().of(
      yup.object().shape({
        billSundryName: yup.string().required("Bill Sundry Name is required"),
        amount: yup.number().required("Amount is required"),
      })
    ),
    totalAmount: yup.number().required("Total Amount is required"),
  });
  