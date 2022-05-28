import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({ 
  redTooltip:{
    display:'table',
    position: 'sticky',
  },
}))

const YTooltip = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      // leaveDelay={10}
                      title="Eg: Doesn't clear doubts, doesn't show interest in students performance"
                    >
                      <InfoOutlinedIcon className={classes.redTooltip} onClick={handleTooltipOpen} fontSize="small" color="action" />
                    </Tooltip>
                    </div>
                </ClickAwayListener>
    )
}

export default YTooltip
