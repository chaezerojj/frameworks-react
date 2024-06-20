import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions,
  DialogContent, DialogTitle, IconButton, TextField, Stack
} from '@mui/material';
import { Edit } from '@mui/icons-material';

function EditCar({ fetchCars, data, row }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "", model: "", color: "", year: "", price: ""
  })

  const handleClickOpen = () => {
    setCar({
      brand: data.row.brand,
      model: data.row.model,
      color: data.row.color,
      year: data.row.year,
      price: data.row.price
    })
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value })
  }

  // 자동차 업데이트 후 모달 폼 닫음
  const handleSave = () => {
    console.log(car);
    updateCar(data.id);
    handleClose();
  }

  // 자동차 업데이트
  const updateCar = (link) => {
    fetch(link,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car)
      }
    )
      .then(response => {
        if (response.ok) {
          fetchCars();
        } else {
          alert("Something went wrong!")
        }
      })
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Edit color='info' />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <TextField
              label="Brand"
              name='brand'
              variant='standard'
              value={car.brand}
              onChange={handleChange}
            />
            <TextField
              label='Model'
              name='model'
              variant='standard'
              value={car.model}
              onChange={handleChange}
            />
            <TextField
              label='Color'
              name='color'
              variant='standard'
              value={car.color}
              onChange={handleChange}
            />
            <TextField
              label='Year'
              name='year'
              variant='standard'
              value={car.year}
              onChange={handleChange}
            />
            <TextField
              label='Price'
              name='price'
              variant='standard'
              value={car.price}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditCar;