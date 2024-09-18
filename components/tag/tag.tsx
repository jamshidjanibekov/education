import {TagProps} from "@/components/tag/tag.props";
import styles from "./tag.module.css";
import cn from "classnames";

const Tag = ({size = 'medium', color = 'primary', children}:TagProps) => {
  return (
    <div className={cn(styles.tag, {
      [styles.small]:size === 'small',
      [styles.medium]:size === 'medium',
      [styles.red]:color === 'red',
      [styles.primary]:color === 'primary',
      [styles.green]:color === 'green',
    })}>
      {children}
    </div>
  );
};

export default Tag;