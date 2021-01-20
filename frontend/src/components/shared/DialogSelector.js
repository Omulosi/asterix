import React, { useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import TermsOfServiceDialog from "../TermsOfServiceDialog";
import ModalBackdrop from "./ModalBackdrop";

function DialogSelector(props) {
  const {
    dialogOpen,
    openTermsDialog,
    openRegisterDialog,
    onClose,
  } = props;

  const _onClose = useCallback(() => {;
    onClose();
  }, [onClose]);

  const printDialog = useCallback(() => {
    switch (dialogOpen) {
      case "termsOfService":
        return <TermsOfServiceDialog onClose={openRegisterDialog} />;
      default:
    }
  }, [
    dialogOpen,
    openTermsDialog,
    _onClose,
    openRegisterDialog,
  ]);

  return (
    <Fragment>
      {dialogOpen && <ModalBackdrop open />}
      {printDialog()}
    </Fragment>
  );
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  openLoginDialog: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
};

export default DialogSelector;