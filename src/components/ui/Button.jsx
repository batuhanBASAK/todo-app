import React from 'react'

function Button({ children, variant, className, ...props }) {
  const baseClasses = "px-4 py-2 rounded cursor-pointer transition duration-150"

  const variantClasses = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white",
    ghost: "hover:bg-black/10",
    danger: "bg-red-700 hover:bg-red-800 text-white",
    success: "bg-green-700 hover:bg-green-800 text-white",
    dark: "bg-black hover:bg-neutral-800 text-white",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...props}>{children}</button>
  )
}

export default Button