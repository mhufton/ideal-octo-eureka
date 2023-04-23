import { FC, SetStateAction } from "react"
import { Button } from "../SharedStyles/SharedStyles"
import React from "react";

//#region Buttons

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** the text to be displayed on the button */
  text: string,
  /** the function to be called when the button is clicked */
  onClick?:
  (event: React.MouseEvent<HTMLButtonElement>) => void
  | React.Dispatch<SetStateAction<boolean>>
  | Promise<void>
}

/** the default button for the site */
export const DefaultButton: FC<IButtonProps> = ({ text, onClick, type = 'button', ...rest }) => {
  return (
    <Button
      onClick={onClick}
      {...rest}
    >{text}
    </Button >
  )
}


//#endregion

//#region Forms
//#endregion

