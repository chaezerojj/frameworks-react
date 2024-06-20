import React, { useEffect, useState } from 'react';
import { Typography, Snackbar, Stack, IconButton } from '@mui/material';
import { SERVER_URL } from './constants';
import { DataGrid } from '@mui/x-data-grid';
// 데이터를 CSV로 내보내는 기능 구현(GridToolbarContainer, GridToolbarExport, gridClasses)
import AddCar from './AddCar';
import EditCar from './EditCar';
import CustomToolbar from './CustomToolbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

export default function CarList() {
  // REST API에서 가져온 자동차 정보를 담을 상태 객체 필요
  const [cars, setCars] = useState([]);
  // 비어있는 배열을 기본값으로 cars라는 상태를 선언

  // ? mui - Snackbar
  // Snackbar 컴포넌트의 open프롭값: boolean
  // true면 컴포넌트 표시
  // Snackbar 컴포넌트 표시 여부 처리하기 위해 open이라는 상태 선언
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCars()
    // useEffect훅에서 fetchCars()를 실행
  }, [])

  // ag-grid 컴포넌트 : 데이터 표의 열도 정의
  // - field는 자동차 객체의 속성
  // - 열의 제목은 headerName 속성으로 설정
  // - 열의 너비도 여기서 설정 가능

  const columns = [
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "model", headerName: "Model", width: 150 },
    { field: "color", headerName: "Color", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      // 수정 버튼
      field: "edit",
      headerName: '',
      sortable: false,
      filterable: false,
      renderCell: (row) =>
        <EditCar
          data={row}
          fetchCars={fetchCars} />,
      width: 100,
    },
    // 삭제 버튼
    {
      field: "delete",
      headerName: '',
      sortable: false,
      filterable: false,
      // 셀에 더 복잡한 내용을 넣어야 할 때는 셀의 내용이 렌더링되는 방법을 정의하는 
      // renderCell프롭 이용
      renderCell: (row) =>
        <IconButton
          variant='outlined'
          onClick={() => {
            onDelClick(row.id)
          }}>
          <DeleteIcon sx={{ color: red[500] }} />
        </IconButton >,
    },
  ]

  const onDelClick = (url) => {
    // delete 버튼 눌렀을 때 확인 대화상자를 표시하는 기능 추가 -> 실수로 삭제 예방 가능
    // => window 객체의 confirm메소드로 기능 구현 가능
    if (window.confirm("Are you sure to delete?")) {
      // console.log(url)
      fetch(url, { method: "delete" })
        //삭제후에 새로운 목록으로 렌더링
        .then((response) => {
          if (response.ok) {
            fetchCars()
            setOpen(true)
          } else {
            alert("Something went wrong.")
          }
        })
        .catch(err => console.error(err))
    }
  }

  // 서버 주소 상수에서 목록을 가져오는 함수
  const fetchCars = () => {
    fetch(SERVER_URL + "/api/cars")
      .then(res => res.json())
      .then(data =>
        // console.log(data._embedded.cars)
        setCars(data._embedded.cars))
      .catch(err => console.log(err))
  }
  // - fetch: web server에 요청을 보내는 함수 - AJAX
  // - 두 번째 인수로 비어있는 배열을 전달
  // -> fetch는 첫 번째 렌더링 후 한번만 실행됨
  // -> JSON 응답 데이터에 있는 자동차 데이터는 cars상태에 저장


  return (
    <div style={{ margin: "20px" }}>
      <Stack spacing={2}>
        <Typography variant='h4' style={{ padding: "20px" }}>Car List</Typography>
        {/* ? DataGrid
         -> 데이터 표의 데이터 원본은 fetch()로 읽어온 cars 상태
         -> rows 프롭으로 정의됨
         -> 데이터 표 컴포넌트 이용하기 위해 
            모든 행의 getRowId프롭으로 고유한 ID속성 정의해야 함 */}
        <AddCar />
        <div>
          <DataGrid
            style={{ width: "950px", margin: "20px" }}
            columns={columns}
            rows={cars}
            getRowId={row => row._links.self.href}
            // 표에서 아무 행이나 클릭하면 그 행이 선택됨
            // 다음과 같이 표의 disableRowSelectionOnClick프롭을
            // true로 설정하면 이 동작을 비활성화
            disableRowSelectionOnClick={true}
            components={{ Toolbar: CustomToolbar }}
          />
          <Snackbar
            open={open}
            autoHideDuration={2000}
            // onClose함수가 자동 호출됨
            // - 메시지가 사라지는 시간을 밀리초 단위로 정의함
            message={"Car deleted."}
            // 표시될 메시지 정의
            onClose={() => setOpen(false)}
          />
        </div>
      </Stack>
    </div>

  )
}
