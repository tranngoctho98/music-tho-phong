import { useCallback } from "react";
import styled from "styled-components";

// ICON
import { Dialog, DialogProps } from "@mui/material";

export type ConfirmDialogProps = Omit<DialogProps, "fullWidth" | "buttons"> & {
  cancelText?: string;
  confirmText?: string;
  cancelClass?: string;
  confirmClass?: string;
  message?: string | JSX.Element;
  confirmLoading?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
};

const ConfirmDialog = ({
  open,
  title = "確認",
  draggable = false,
  cancelText = "キャンセル",
  confirmText = "OK",
  confirmClass = "button-ok",
  message,
  confirmLoading,
  onConfirm,
  onClose,
  onCancel,
  children,
  ...restProps
}: ConfirmDialogProps) => {
  const handleOnClose = useCallback(() => {
    /** more handle when close */
    onCancel?.();
  }, [onCancel]);

  return (
    <Dialog
      open={open}
      draggable={draggable}
      title={title}
      fullWidth
      onClose={handleOnClose}
      {...restProps}
    >
      {message || children}
    </Dialog>
  );
};

const StyledDialog = styled(ConfirmDialog)`
  .dialog-body {
    min-height: 90px;
    color: rgba(0, 0, 0, 0.6);
    white-space: pre-wrap;
    display: flex;
    justify-content: center;
  }

  .MuiDialogTitle-root {
    border-bottom: none;
    justify-content: center;
    cursor: default !important;
    background: none;

    & > button {
      display: none;
    }
  }

  .MuiDialogContent-root {
    padding-top: 16px !important;
  }

  .MuiDialog-paper {
    width: 400px;
  }

  .dialog-footer {
    border-top: 0px;
    padding: 0 1rem;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end !important;
    .MuiDialogActions-root {
      padding: 0;
    }

    .MuiButton-root {
      width: 50%;
      background-color: transparent;
      &:hover {
        box-shadow: none;
      }

      &.button-cancel {
        color: #000;
        &:hover {
          background-color: #d1d9dc;
        }
      }
      &.button-ok {
        color: #029df4;
        &:hover {
          background-color: #96d9fe;
        }
      }
      &.button-delete {
        color: #ff0000;
        &:hover {
          background-color: #fbbac0;
        }
      }
    }
  }

  [data-testid^="Help"] {
    color: #029df4;
  }
  [data-testid^="Error"] {
    color: #f55361;
  }
`;

export default StyledDialog;
