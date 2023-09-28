import './FButton.css'

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

// type Border = "squared" | "rounded";

export enum Border {
  Squared = "squared",
  Rounded = "rounded",
}

interface Props {
  text: string,
  size: Size,
  border: Border,
  disabled: boolean,
  loading: boolean,
  state: string,
  outlined: boolean,
  icon: string,
  iconPosition: string,
  onClick: () => void,
}

function getClassName(props: Partial<Props>) {
  let classNames = ["button"];

  if (props.size) {
    classNames.push(props.size);
  }

  if (props.border) {
    classNames.push(props.border);
  }

  if (props.loading) {
    classNames.push("loading");
  }

  if (props.outlined) {
    classNames.push("outlined");
  }
  
  if (props.iconPosition === "right") {
    classNames.push("reverse");
  }

  return classNames.join(" ");
}

function FButton(props: Partial<Props>) {
  const {
    text,
    disabled,
    loading,
    state,
    icon,
    onClick,
  } = props;

  if (loading) {
    return (
      <button className="button loading"></button>
    )
  }

  return (
    <button
      className={getClassName(props)}
      data-state={state}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && text && <i className={icon}></i>}
      {text && <span>{text}</span>}
      {!text && icon && <i className={icon}></i>}
    </button>
  )
}

export default FButton;