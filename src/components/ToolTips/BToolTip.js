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

const BTooltip = () => {
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
                      title="Eg: Doesn't spend enough time explaining the subject"
                    >
                      <InfoOutlinedIcon className={classes.redTooltip} onClick={handleTooltipOpen} fontSize="small" color="action" />
                    </Tooltip>
                    </div>
                </ClickAwayListener>
    )
}

export default BTooltip