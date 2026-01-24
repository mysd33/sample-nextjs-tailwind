import BaseModalDialog, { BaseModalDialogProps } from "./BaseModalDialog";

interface InformationModalDialogProps {
  /** OKボタンがクリックされたときのコールバック関数 */
  onOkButtonClicked?: () => void;
}

type Props = InformationModalDialogProps &
  Omit<BaseModalDialogProps, "children">;

/**
 * 情報用モーダルダイアログ
 */
export default function InformationModalDialog(props: Props) {
  const handleOkButtonClicked = () => {
    props.setIsOpen(false);
    if (props.onOkButtonClicked) {
      props.onOkButtonClicked();
    }
  };

  return (
    <BaseModalDialog
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      title={props.title}
      message={props.message}>
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleOkButtonClicked}>
          OK
        </button>
      </div>
    </BaseModalDialog>
  );
}
