import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// localication provider from mui
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { DatePickerProps } from './dateTypes';

// Date picker component
export default function DatePicker(props: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Date&Time picker"
          value={props.value}
          onChange={props.handleChange}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
