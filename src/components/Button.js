import { FC, PropsWithChildren, ReactNode, useState } from "react";
import "../assets/Button.css";


type IconProps = PropsWithChildren<{}>
const Icon: FC<IconProps> = ({ children }) => {
    return <i className="material-symbols-outlined">{children}</i>;
};

export const Button = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`fab ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span>add</span>
            </button>
            <div className="menu">
                <span>person-add</span>
                <span>person-add</span>
            </div>
        </div>
    );
}
