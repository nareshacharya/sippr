import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  icon 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 rounded-full';
  
  const variantStyles = {
    primary: 'bg-[#C34479] hover:bg-[#A93665] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-100 text-[#C34479] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#C34479] text-[#C34479] hover:bg-[#C34479] hover:text-white',
    whatsapp: 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
