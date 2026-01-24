import BaseModalDialog, { BaseModalDialogProps } from "./BaseModalDialog";

interface ConfirmModalDialogProps {
  /** OKボタンがクリックされたときのコールバック関数 */
  onOkButtonClicked?: () => void;
  /** キャンセルボタンがクリックされたときのコールバック関数 */
  onCancelButtonClicked?: () => void;
}

type Props = ConfirmModalDialogProps & Omit<BaseModalDialogProps, "children">;

/**
 * 確認用モーダルダイアログ
 */
export default function ConfirmModalDialog(props: Props) {
  const handleOkButtonClicked = () => {
    props.setIsOpen(false);
    if (props.onOkButtonClicked) {
      props.onOkButtonClicked();
    }
  };

  const handleCancelButtonClicked = () => {
    props.setIsOpen(false);
    if (props.onCancelButtonClicked) {
      props.onCancelButtonClicked();
    }
  };

  return (
    <BaseModalDialog
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      title={props.title}
      message={props.message}>
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handleOkButtonClicked}>
        OK
      </button>
      <button
        type="button"
        className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handleCancelButtonClicked}>
        キャンセル
      </button>
    </BaseModalDialog>
  );
}
