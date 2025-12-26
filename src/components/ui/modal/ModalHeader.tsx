type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function ModalHeader({ title, children }: Props) {
  return (
    <div className="ui-modal__header">
      {title && <h2 className="ui-modal__title">{title}</h2>}
      {children}
    </div>
  );
}
