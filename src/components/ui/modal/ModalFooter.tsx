type Props = {
  children: React.ReactNode;
};

export default function ModalFooter({ children }: Props) {
  return <div className="ui-modal__footer">{children}</div>;
}
