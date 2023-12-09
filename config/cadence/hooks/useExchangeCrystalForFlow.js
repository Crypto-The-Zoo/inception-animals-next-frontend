import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { exchangeCrystalForFlowTx } from "../tx/tx-exchange_crystal_for_flow.js";
import {
  ERROR,
  initialState,
  requestReducer,
  START,
  SUCCESS,
  IDLE,
} from "../reducers/requestReducer";

export default function useExchangeCrystalForFlow(props) {
  const { updateToast, initToast, onSuccess: navigateAway } = props;
  const [state, dispatch] = useReducer(requestReducer, initialState);
  const [txStatus, setTxStatus] = useState(null);

  const exchangeFlow = ({ amount }) => {
    if (!amount) throw "Missing amount";

    exchangeCrystalForFlowTx(
      { amount },
      {
        onStart() {
          initToast();
          setTxStatus(0);
        },
        onUpdate(t) {
          setTxStatus(t.status);
        },
        async onSuccess(txData) {
          dispatch({ type: SUCCESS });
          navigateAway();
          updateToast({
            type: toast.TYPE.SUCCESS,
            render: "Transaction Complete 🎉!",
            autoClose: 3000,
            isLoading: false,
          });
        },
        async onError(e) {
          if (
            e === "Declined: Externally Halted" ||
            e === "Declined: Declined"
          ) {
            updateToast({
              type: toast.TYPE.ERROR,
              render: "Transaction cancelled 🙃",
              autoClose: 3000,
              isLoading: false,
            });
          } else {
            updateToast({
              type: toast.TYPE.ERROR,
              render: "Something went wrong 🙃",
              autoClose: 3000,
              isLoading: false,
            });
          }
        },
        onComplete() {
          setTxStatus(null);
        },
      },
      updateToast
    );
  };

  return [state, exchangeFlow, txStatus];
}
