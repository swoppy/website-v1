import React from 'react';
import styles from './terminal.module.css';
import { Button, Roles } from '../button/button';

export const Terminal = () => {
  const handleClose = React.useCallback(() => {
    // TODO: button functions
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttonWrapper}>
          <Button role={Roles.CLOSE} onClick={handleClose} />
          <Button role={Roles.MINIMIZE} onClick={handleClose} />
          <Button role={Roles.MAXIMIZE} onClick={handleClose} />
        </div>
      </div>
      <div className={styles.workspace}>
        <div>
          location
        </div>
        <div>
          input
        </div>
      </div>
    </div>
  );
};