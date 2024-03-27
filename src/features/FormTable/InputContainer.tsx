import style from "./InputContainer.module.scss";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

function InputContainer({ children }: Props) {
  return <div className={style.container}>{children}</div>;
}

export default InputContainer;
