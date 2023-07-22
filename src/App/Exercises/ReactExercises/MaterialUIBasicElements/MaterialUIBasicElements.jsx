import { ShoppingCart } from '@mui/icons-material';
import './styles.css';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';

export const MaterialUIBasicElements = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <br /> <br />
      <Button variant="contained" color="error">
        Contained
      </Button>
      <br /> <br />
      <Button variant="outlined">Outlined</Button>
      <br /> <br />
      <Button variant="contained" endIcon={<ShoppingCart />}>
        Shop Now!
      </Button>
      <div>
        <br /> <br />
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div></div>
    </div>
  );
};
