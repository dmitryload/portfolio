import React from 'react';
import privateClass from "./UniversalBtn.module.scss"

type UniversalBtnType = {
    text: string
}
const UniversalBtn = (props: UniversalBtnType) => {
    return (
        <a href={"#"} className={privateClass.btn}>{props.text}</a>
    );
};

export default UniversalBtn;
