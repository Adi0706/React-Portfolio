import React, { useState, useRef, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function NavBar() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, [setOpen]);

  const handleClose = useCallback((event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }, [setOpen]);

  const handleListKeyDown = useCallback((event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }, [setOpen]);

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <nav className="nav-bar">
      <span className='nav-text' style={{ color: 'white', fontSize: '50px', fontFamily: 'kanit', marginLeft: "30px" }}>
        <Link to='/'> AB.</Link>
      </span>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: 'white', fontSize: "30px", marginRight: "30px" }}
        >
          <GiHamburgerMenu />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    classes={{ root: 'custom-menu-list' }}
                  >
                    <Link to='/about'><MenuItem onClick={handleClose}>ABOUT</MenuItem></Link>
                    <Link to='/skills'><MenuItem onClick={handleClose}>SKILLS</MenuItem></Link>
                    <Link to='/projects'><MenuItem onClick={handleClose}>PROJECTS</MenuItem></Link>
                    <Link to='/contact'><MenuItem onClick={handleClose}>CONTACT</MenuItem></Link>
                    <Link to='/resume'><MenuItem onClick={handleClose}>RESUME</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </nav>
  );
}

export default NavBar;
