import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
  gridItem: {
    width: '50%',
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    transition: '0.3s',
    borderRadius: 10,
    cursor: 'pointer',
    backgroundColor: (theme) => theme.primaryColor || 'white',
  },
});
