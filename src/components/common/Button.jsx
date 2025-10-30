// src/components/common/Button.jsx
function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-orange-600 text-white hover:bg-transparent hover:text-orange-600 hover:ring-2 hover:ring-orange-500 focus:ring-orange-500',
        secondary: 'bg-white text-primary-blue border border-primary-blue hover:bg-blue-50 focus:ring-blue-500',
        outline: 'border-2 border-white text-white backdrop-blur-sm',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;