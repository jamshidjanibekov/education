import React from 'react';
import {TextProps} from "@/components/text/text.props";
import styles from "./text.module.css";
import cn from 'classnames'


const Text = ({size='medium', children}:TextProps) => {
  return <p className={cn(styles.p, {
    [styles.small]: size === 'small',
    [styles.medium]:size === 'medium',
    [styles.large]: size === 'large'
  })}>{children}</p>
};

export default Text;