import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input, Stack, TextField } from '@mui/material';
import { SERVER_URL } from './constants';
import { Add, DirectionsCar } from '@mui/icons-material';
import Transition from './DownSlide';

// ! Dialog 창을 통해 Car를 추가하는 페이지

function AddCar({ fetchCars = f => f }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    price: ""
  });

  // 대화상자 폼 닫고 여는 함수 2개 추가
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setCar({
      brand: "",
      model: "",
      color: "",
      year: "",
      price: ""
    })
  }

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value })
    // input창 입력칸 보이게
    console.log(event.target.value);
  }

  // 새로운 자동차 추가하는 함수
  const addCar = (car) => {
    fetch(SERVER_URL + "/api/cars",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car)
      }
    )
      .then(response => {
        if (response.ok) {
          fetchCars();
        }
      })
  }

  // 입력받은 자동차 정보를 저장하고 Dialog창을 닫는 함수
  const handleSave = () => {
    if (
      car.brand.trim() === "" ||
      car.model.trim() === "" ||
      car.color.trim() === "" ||
      car.year.trim() === "" ||
      car.price.trim() === ""
    ) {
      // 하나 이상의 필드가 비어있으면 저장 X
      alert("Please fill in all fields.");
      return;
    }
    addCar(car);
    handleClose();
  }


  return (
    <div>
      <Button variant='contained'
        onClick={handleClickOpen}
        style={{margin: "20px"}}>
        <Add /><DirectionsCar />
      </Button>
      <Dialog 
        open={open} 
        onClose={handleClose}
        TransitionComponent={Transition}
        >
        <DialogTitle>New Car</DialogTitle>
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
    </div>
  )
}

export default AddCar