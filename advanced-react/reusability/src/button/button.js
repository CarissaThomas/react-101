function Button({ variant, size, className, children, ...rest }) {
  
  let sizeClass = size ? `button-${size}` : ""
  let variantClass = variant ? `button-${variant}` : ""
  

  return (
    <main>
      {/* <button onClick={props.onClick}>{props.children}</button> */}

      <button className={sizeClass + " " + className + " " + variantClass} {...rest}>{children}</button>
    </main>
  );
}

export default Button;
