export function Sticker({
  children,
  color = 'var(--paper)',
  shadow = 'var(--ink)',
  size = 6,
  padding = '16px 22px',
  style = {},
  as: Tag = 'div',
  ...rest
}) {
  return (
    <Tag
      {...rest}
      className="inline-flex items-center justify-center gap-2 border-2 border-ink mono font-bold transition-[transform,box-shadow] duration-[180ms] ease-in-out"
      style={{
        background: color,
        boxShadow: `${size}px ${size}px 0 0 ${shadow}`,
        padding,
        cursor: rest.onClick || rest.href ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `translate(-${size / 2}px, -${size / 2}px)`;
        e.currentTarget.style.boxShadow = `${size + 3}px ${size + 3}px 0 0 ${shadow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = `${size}px ${size}px 0 0 ${shadow}`;
      }}
    >
      {children}
    </Tag>
  );
}
