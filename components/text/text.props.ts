import {ReactNode} from "react";

export interface TextProps {
  size?: 'small' | 'medium' | 'large';
  children:ReactNode;
}