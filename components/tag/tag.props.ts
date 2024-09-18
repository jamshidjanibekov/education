import {ReactNode} from "react";

export interface TagProps {
  size?: 'small' | 'medium'
  color?: 'red' | 'green' | 'primary';
  children: ReactNode;
}