import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export interface BaseModalDialogProps {
  /** タイトル */
  title: string;
  /** メッセージ */
  message: string;
  /** モーダルの表示・非表示の状態 */
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  /**
   * 要素内のコンテンツ
   */
  children?: React.ReactNode;
}

/**
 * モーダルダイアログの基底部品
 */
export default function BaseModalDialog(props: BaseModalDialogProps) {
  return (
    <>
      <Dialog
        open={props.isOpen}
        onClose={() => props.setIsOpen(false)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <DialogTitle
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900">
              {props.title}
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{props.message}</p>
            </div>
            <div className="mt-4">{props.children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
